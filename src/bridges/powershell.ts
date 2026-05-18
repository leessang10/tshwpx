import { spawn as defaultSpawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createInterface } from "node:readline";
import { HwpAutomationError } from "../com/errors";
import { isParameterSetPayload } from "../spec";
import type { OpenOptions, SaveFormat } from "../app";
import type { HwpBridge } from "./types";
import type { CursorPosition, CursorTextRange } from "./types";

type PowerShellBridgeOptions = {
  executable?: string;
  spawn?: typeof defaultSpawn;
};

type PendingRequest = {
  resolve(value: unknown): void;
  reject(error: Error): void;
};

type BridgeResponse = {
  id: number;
  ok: boolean;
  result?: unknown;
  error?: string;
};

export class PowerShellBridge implements HwpBridge {
  readonly kind = "powershell";
  readonly raw = this;

  private readonly executable: string;
  private readonly spawn: typeof defaultSpawn;
  private process?: ChildProcessWithoutNullStreams;
  private readonly pending = new Map<number, PendingRequest>();
  private nextId = 1;
  private stderr = "";
  private initialized = false;
  private initPromise?: Promise<void>;

  constructor(options: PowerShellBridgeOptions = {}) {
    this.executable = options.executable ?? "powershell.exe";
    this.spawn = options.spawn ?? defaultSpawn;
  }

  async init(): Promise<void> {
    if (this.initialized) {
      return;
    }

    this.initPromise ??= this.request("init")
      .then(() => {
        this.initialized = true;
      })
      .catch((error) => {
        this.initPromise = undefined;
        throw error;
      });

    await this.initPromise;
  }

  async setVisible(visible: boolean): Promise<void> {
    await this.init();
    await this.request("setVisible", { visible });
  }

  async registerSecurityModule(): Promise<void> {
    await this.init();
    await this.request("registerSecurityModule");
  }

  async open(path: string, options: OpenOptions = {}): Promise<void> {
    await this.init();
    await this.request("open", { path, format: options.format ?? "", arg: options.arg ?? "" });
  }

  async save(): Promise<void> {
    await this.init();
    await this.request("save");
  }

  async saveAs(path: string, format: SaveFormat = "HWP", arg = ""): Promise<void> {
    await this.init();
    await this.request("saveAs", { path, format, arg });
  }

  async close(): Promise<void> {
    await this.init();
    await this.request("close");
  }

  async quit(): Promise<void> {
    if (!this.process) {
      return;
    }

    const child = this.process;
    await this.request("quit");
    child.kill();
    if (this.process === child) {
      this.process = undefined;
    }
    this.initialized = false;
    this.initPromise = undefined;
  }

  async insertText(text: string): Promise<void> {
    await this.init();
    await this.request("insertText", { text });
  }

  async run(actionName: string): Promise<void> {
    await this.init();
    await this.request("run", { actionName });
  }

  async execute(actionName: string, parameterSet?: unknown): Promise<boolean> {
    if (parameterSet !== undefined && !isParameterSetPayload(parameterSet)) {
      throw new HwpAutomationError(
        "ACTION_FAILED",
        "PowerShell bridge only accepts structured ParameterSetPayload objects. Use app.params.create(...) or run(actionName).",
      );
    }

    await this.init();
    return (await this.request("execute", { actionName, parameterSet })) as boolean;
  }

  async movePos(moveId: number, para?: number, pos?: number): Promise<boolean> {
    await this.init();
    return (await this.request("movePos", { moveId, para, pos })) as boolean;
  }

  async getPosBySet(): Promise<CursorPosition> {
    await this.init();
    return (await this.request("getPosBySet")) as CursorPosition;
  }

  async setPos(position: CursorPosition): Promise<void> {
    await this.init();
    await this.request("setPos", { position });
  }

  async setPosBySet(position: CursorPosition): Promise<boolean> {
    await this.init();
    return (await this.request("setPosBySet", { position })) as boolean;
  }

  async selectText(range: CursorTextRange): Promise<boolean> {
    await this.init();
    return (await this.request("selectText", { range })) as boolean;
  }

  private ensureProcess(): void {
    if (this.process) {
      return;
    }

    const scriptPath = writeBridgeScript();
    const child = this.spawn(this.executable, ["-NoProfile", "-ExecutionPolicy", "Bypass", "-File", scriptPath], {
      windowsHide: true,
    });

    this.process = child;

    createInterface({ input: child.stdout }).on("line", (line) => {
      this.handleResponse(line);
    });

    child.stderr.on("data", (chunk) => {
      this.stderr += chunk.toString();
    });

    child.on("exit", (code) => {
      const error = new HwpAutomationError(
        "COM_BRIDGE_NOT_FOUND",
        `PowerShell bridge process exited with code ${code}. ${this.stderr}`.trim(),
      );
      for (const pending of this.pending.values()) {
        pending.reject(error);
      }
      this.pending.clear();
      this.process = undefined;
      this.initialized = false;
      this.initPromise = undefined;
    });
  }

  private request(method: string, params?: unknown): Promise<unknown> {
    this.ensureProcess();

    const id = this.nextId++;
    const payload = JSON.stringify({ id, method, params }) + "\n";

    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.process?.stdin.write(payload);
    });
  }

  private handleResponse(line: string): void {
    let response: BridgeResponse;
    try {
      response = JSON.parse(line) as BridgeResponse;
    } catch {
      return;
    }

    const pending = this.pending.get(response.id);
    if (!pending) {
      return;
    }

    this.pending.delete(response.id);

    if (response.ok) {
      pending.resolve(response.result);
      return;
    }

    pending.reject(new HwpAutomationError("ACTION_FAILED", response.error ?? "PowerShell bridge request failed."));
  }
}

function writeBridgeScript(): string {
  const dir = mkdtempSync(join(tmpdir(), "tshwpx-"));
  const scriptPath = join(dir, "bridge.ps1");
  writeFileSync(scriptPath, POWERSHELL_BRIDGE_SCRIPT, "utf8");
  return scriptPath;
}

const POWERSHELL_BRIDGE_SCRIPT = String.raw`
$ErrorActionPreference = "Stop"
[Console]::InputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$hwp = $null

function Send-Response($id, $ok, $result, $errorMessage) {
  $response = [ordered]@{ id = $id; ok = $ok }
  if ($ok) { $response.result = $result } else { $response.error = $errorMessage }
  [Console]::Out.WriteLine(($response | ConvertTo-Json -Compress -Depth 20))
  [Console]::Out.Flush()
}

while (($line = [Console]::In.ReadLine()) -ne $null) {
  $request = $null
  try {
    $request = $line | ConvertFrom-Json
    $id = [int]$request.id
    $method = [string]$request.method
    $params = $request.params

    switch ($method) {
      "init" {
        $hwp = New-Object -ComObject HWPFrame.HwpObject
        Send-Response $id $true $true $null
      }
      "setVisible" {
        $hwp.XHwpWindows.Item(0).Visible = [bool]$params.visible
        Send-Response $id $true $true $null
      }
      "registerSecurityModule" {
        $result = $hwp.RegisterModule("FilePathCheckDLL", "FilePathCheckerModule")
        Send-Response $id $true ([bool]$result) $null
      }
      "open" {
        $result = $hwp.Open([string]$params.path, [string]$params.format, [string]$params.arg)
        Send-Response $id ([bool]$result) ([bool]$result) "HWP Open returned false."
      }
      "save" {
        $result = $hwp.Save()
        Send-Response $id ([bool]$result) ([bool]$result) "HWP Save returned false."
      }
      "saveAs" {
        $result = $hwp.SaveAs([string]$params.path, [string]$params.format, [string]$params.arg)
        Send-Response $id ([bool]$result) ([bool]$result) "HWP SaveAs returned false."
      }
      "close" {
        $result = $hwp.HAction.Run("FileClose")
        Send-Response $id ([bool]$result) ([bool]$result) "HWP FileClose returned false."
      }
      "quit" {
        $hwp.Quit()
        Send-Response $id $true $true $null
        exit 0
      }
      "insertText" {
        $pset = $hwp.HParameterSet.HInsertText
        $pset.Text = [string]$params.text
        $result = $hwp.HAction.Execute("InsertText", $pset.HSet)
        Send-Response $id ([bool]$result) ([bool]$result) "HWP InsertText returned false."
      }
      "run" {
        $result = $hwp.HAction.Run([string]$params.actionName)
        Send-Response $id ([bool]$result) ([bool]$result) "HWP action returned false."
      }
      "execute" {
        if ($null -ne $params.parameterSet) {
          $parameterSetId = [string]$params.parameterSet.parameterSetId
          $pset = $hwp.HParameterSet.$parameterSetId
          foreach ($property in $params.parameterSet.values.PSObject.Properties) {
            $name = [string]$property.Name
            if ($null -ne $property.Value -and $property.Value -is [System.Management.Automation.PSCustomObject]) {
              $nestedSet = $pset.CreateItemSet($name, $name)
              foreach ($nestedProperty in $property.Value.PSObject.Properties) {
                $nestedName = [string]$nestedProperty.Name
                $nestedSet.$nestedName = $nestedProperty.Value
              }
            } else {
              $pset.$name = $property.Value
            }
          }
          $result = $hwp.HAction.Execute([string]$params.actionName, $pset.HSet)
        } else {
          $result = $hwp.HAction.Execute([string]$params.actionName)
        }
        Send-Response $id ([bool]$result) ([bool]$result) "HWP action returned false."
      }
      "movePos" {
        if ($null -ne $params.para -and $null -ne $params.pos) {
          $result = $hwp.MovePos([uint32]$params.moveId, [uint32]$params.para, [uint32]$params.pos)
        } else {
          $result = $hwp.MovePos([uint32]$params.moveId)
        }
        Send-Response $id ([bool]$result) ([bool]$result) "HWP MovePos returned false."
      }
      "getPosBySet" {
        $pset = $hwp.GetPosBySet()
        $result = [ordered]@{
          list = [int]$pset.Item("List")
          para = [int]$pset.Item("Para")
          pos = [int]$pset.Item("Pos")
        }
        Send-Response $id $true $result $null
      }
      "setPos" {
        $position = $params.position
        $hwp.SetPos([int]$position.list, [int]$position.para, [int]$position.pos)
        Send-Response $id $true $true $null
      }
      "setPosBySet" {
        $position = $params.position
        $pset = $hwp.HParameterSet.ListParaPos
        $pset.List = [int]$position.list
        $pset.Para = [int]$position.para
        $pset.Pos = [int]$position.pos
        $result = $hwp.SetPosBySet($pset.HSet)
        Send-Response $id ([bool]$result) ([bool]$result) "HWP SetPosBySet returned false."
      }
      "selectText" {
        $range = $params.range
        $result = $hwp.SelectText([int]$range.start.para, [int]$range.start.pos, [int]$range.end.para, [int]$range.end.pos)
        Send-Response $id ([bool]$result) ([bool]$result) "HWP SelectText returned false."
      }
      default {
        throw "Unknown bridge method: $method"
      }
    }
  } catch {
    $id = 0
    if ($request -ne $null -and $request.id -ne $null) { $id = [int]$request.id }
    Send-Response $id $false $null $_.Exception.Message
  }
}
`;

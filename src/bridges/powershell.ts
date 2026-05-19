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
import { POWERSHELL_BRIDGE_SCRIPT } from "./powershell-script";

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

  async getPID(): Promise<number> {
    await this.init();
    return (await this.request("getPID")) as number;
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
        "PowerShell bridge only accepts internal structured ParameterSetPayload objects.",
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

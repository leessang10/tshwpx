import { describe, expect, it, vi } from "vitest";
import { PassThrough } from "node:stream";
import { readFileSync } from "node:fs";
import { PowerShellBridge } from "../../src/bridges/powershell";

describe("PowerShellBridge", () => {
  function createBridge() {
    const stdout = new PassThrough();
    const stderr = new PassThrough();
    const write = vi.fn((payload: string) => {
      const request = JSON.parse(payload);
      stdout.write(`${JSON.stringify({ id: request.id, ok: true, result: true })}\n`);
      return true;
    });
    const spawn = vi.fn(() => ({
      stdin: { write },
      stdout,
      stderr,
      on: vi.fn(),
      kill: vi.fn(),
    }));

    const bridge = new PowerShellBridge({ spawn: spawn as never });

    return { bridge, spawn, write };
  }

  it("starts powershell.exe and initializes HWP through JSON-RPC", async () => {
    const { bridge, spawn, write } = createBridge();

    await bridge.init();

    expect(spawn).toHaveBeenCalledWith(
      "powershell.exe",
      expect.arrayContaining(["-NoProfile", "-ExecutionPolicy", "Bypass", "-File"]),
      expect.any(Object),
    );
    expect(write).toHaveBeenCalledWith(expect.stringContaining('"method":"init"'));
  });

  it("initializes HWP only once per bridge process", async () => {
    const { bridge, write } = createBridge();

    await bridge.init();
    await bridge.init();

    expect(write).toHaveBeenCalledTimes(1);
  });

  it("initializes before document operations", async () => {
    const { bridge, write } = createBridge();

    await bridge.insertText("안녕하세요");

    expect(write).toHaveBeenCalledTimes(2);
    expect(write.mock.calls[0]?.[0]).toContain('"method":"init"');
    expect(write.mock.calls[1]?.[0]).toContain('"method":"insertText"');
  });

  it("requests the current HWP process id through JSON-RPC", async () => {
    const { bridge, write } = createBridge();

    await bridge.getPID();

    expect(write).toHaveBeenCalledTimes(2);
    expect(write.mock.calls[0]?.[0]).toContain('"method":"init"');
    expect(write.mock.calls[1]?.[0]).toContain('"method":"getPID"');
  });

  it("sends structured parameter set payloads for execute calls", async () => {
    const { bridge, write } = createBridge();

    await bridge.execute("CharShape", {
      parameterSetId: "CharShape",
      values: { Height: 1200 },
    });

    const executePayload = JSON.parse(write.mock.calls[1]?.[0] ?? "{}");
    expect(executePayload).toMatchObject({
      method: "execute",
      params: {
        actionName: "CharShape",
        parameterSet: {
          parameterSetId: "CharShape",
          values: { Height: 1200 },
        },
      },
    });
  });

  it("sends nested structured parameter set payloads for execute calls", async () => {
    const { bridge, write } = createBridge();

    await bridge.execute("PageSetup", {
      parameterSetId: "SecDef",
      values: {
        PageDef: {
          PaperWidth: 59528,
          Landscape: 1,
        },
      },
    });

    const executePayload = JSON.parse(write.mock.calls[1]?.[0] ?? "{}");
    expect(executePayload).toMatchObject({
      method: "execute",
      params: {
        actionName: "PageSetup",
        parameterSet: {
          parameterSetId: "SecDef",
          values: {
            PageDef: {
              PaperWidth: 59528,
              Landscape: 1,
            },
          },
        },
      },
    });
  });

  it("generates powershell script support for nested parameter set payloads", async () => {
    const { bridge, spawn } = createBridge();

    await bridge.init();

    const spawnArgs = (spawn.mock.calls[0] as unknown[] | undefined)?.[1] as string[] | undefined;
    const scriptPath = spawnArgs?.[spawnArgs.length - 1];
    expect(typeof scriptPath).toBe("string");
    const script = readFileSync(scriptPath as string, "utf8");
    expect(script).toContain("$nestedSet = $pset.CreateItemSet($name, $name)");
    expect(script).toContain("$nestedSet.$nestedName = $nestedProperty.Value");
  });

  it("generates powershell script support for resolving HWP process ids", async () => {
    const { bridge, spawn } = createBridge();

    await bridge.init();

    const spawnArgs = (spawn.mock.calls[0] as unknown[] | undefined)?.[1] as string[] | undefined;
    const scriptPath = spawnArgs?.[spawnArgs.length - 1];
    const script = readFileSync(scriptPath as string, "utf8");
    expect(script).toContain('"getPID"');
    expect(script).toContain("GetWindowThreadProcessId");
    expect(script).toContain('ProcessName -match "^Hwp"');
  });

  it("sends cursor automation method requests through JSON-RPC", async () => {
    const { bridge, write } = createBridge();

    await bridge.movePos(3);
    await bridge.setPosBySet({ list: 1, para: 2, pos: 3 });
    await bridge.selectText({ start: { para: 1, pos: 2 }, end: { para: 3, pos: 4 } });

    expect(JSON.parse(write.mock.calls[1]?.[0] ?? "{}")).toMatchObject({
      method: "movePos",
      params: { moveId: 3 },
    });
    expect(JSON.parse(write.mock.calls[2]?.[0] ?? "{}")).toMatchObject({
      method: "setPosBySet",
      params: { position: { list: 1, para: 2, pos: 3 } },
    });
    expect(JSON.parse(write.mock.calls[3]?.[0] ?? "{}")).toMatchObject({
      method: "selectText",
      params: { range: { start: { para: 1, pos: 2 }, end: { para: 3, pos: 4 } } },
    });
  });

  it("sends picture insertion requests through JSON-RPC", async () => {
    const { bridge, write } = createBridge();

    await bridge.insertPicture("C:/tmp/photo.png", {
      embed: true,
      sizeOption: 1,
      reverse: false,
      watermark: false,
      effect: 1,
      width: 50,
      height: 30,
    });

    expect(JSON.parse(write.mock.calls[1]?.[0] ?? "{}")).toMatchObject({
      method: "insertPicture",
      params: {
        path: "C:/tmp/photo.png",
        embed: true,
        sizeOption: 1,
        reverse: false,
        watermark: false,
        effect: 1,
        width: 50,
        height: 30,
      },
    });
  });

  it("generates powershell script support for cursor automation methods", async () => {
    const { bridge, spawn } = createBridge();

    await bridge.init();

    const spawnArgs = (spawn.mock.calls[0] as unknown[] | undefined)?.[1] as string[] | undefined;
    const scriptPath = spawnArgs?.[spawnArgs.length - 1];
    const script = readFileSync(scriptPath as string, "utf8");
    expect(script).toContain('"movePos"');
    expect(script).toContain("$hwp.MovePos");
    expect(script).toContain('"getPosBySet"');
    expect(script).toContain("$hwp.GetPosBySet()");
    expect(script).toContain('"setPosBySet"');
    expect(script).toContain("$hwp.SetPosBySet($pset.HSet)");
    expect(script).toContain('"selectText"');
    expect(script).toContain("$hwp.SelectText");
  });

  it("generates powershell script support for picture insertion", async () => {
    const { bridge, spawn } = createBridge();

    await bridge.init();

    const spawnArgs = (spawn.mock.calls[0] as unknown[] | undefined)?.[1] as string[] | undefined;
    const scriptPath = spawnArgs?.[spawnArgs.length - 1];
    const script = readFileSync(scriptPath as string, "utf8");
    expect(script).toContain('"insertPicture"');
    expect(script).toContain("$hwp.InsertPicture");
    expect(script).toContain("[string]$params.path");
    expect(script).toContain("[bool]$params.embed");
    expect(script).toContain("[int16]$params.sizeOption");
    expect(script).toContain("[bool]$params.reverse");
    expect(script).toContain("[bool]$params.watermark");
    expect(script).toContain("[int16]$params.effect");
    expect(script).toContain("[int32]$params.width");
    expect(script).toContain("[int32]$params.height");
    expect(script).toContain("HWP InsertPicture returned false.");
  });

  it("rejects raw JavaScript parameter set objects", async () => {
    const { bridge, write } = createBridge();

    await expect(bridge.execute("CharShape", { Height: 1200 })).rejects.toThrow(
      "PowerShell bridge only accepts internal structured ParameterSetPayload objects.",
    );
    expect(write).not.toHaveBeenCalled();
  });
});

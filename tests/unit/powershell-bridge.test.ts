import { describe, expect, it, vi } from "vitest";
import { PassThrough } from "node:stream";
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

  it("rejects raw JavaScript parameter set objects", async () => {
    const { bridge, write } = createBridge();

    await expect(bridge.execute("CharShape", { Height: 1200 })).rejects.toThrow(
      "PowerShell bridge only accepts structured ParameterSetPayload objects",
    );
    expect(write).not.toHaveBeenCalled();
  });
});

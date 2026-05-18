import { describe, expect, it, vi } from "vitest";
import { LowLevelApi } from "../../src/low/low-level-api";
import { HwpAutomationError } from "../../src/com/errors";

describe("LowLevelApi", () => {
  it("runs an action by name", async () => {
    const bridge = {
      run: vi.fn(async () => undefined),
      execute: vi.fn(async () => true),
    };

    await new LowLevelApi(bridge).run("MoveDocBegin");

    expect(bridge.run).toHaveBeenCalledWith("MoveDocBegin");
  });

  it("executes an action by name", async () => {
    const bridge = {
      run: vi.fn(async () => undefined),
      execute: vi.fn(async () => true),
    };

    await expect(new LowLevelApi(bridge).execute("InsertText")).resolves.toBe(true);

    expect(bridge.execute).toHaveBeenCalledWith("InsertText", undefined);
  });

  it("wraps failed execute calls", async () => {
    const bridge = {
      run: vi.fn(async () => undefined),
      execute: vi.fn(async () => {
        throw new Error("execute failed");
      }),
    };

    await expect(new LowLevelApi(bridge).execute("InsertText", {})).rejects.toThrow(HwpAutomationError);
  });
});

import { describe, expect, it, vi } from "vitest";
import { LowLevelApi } from "../../src/low/low-level-api";
import { HwpAutomationError } from "../../src/com/errors";

describe("LowLevelApi", () => {
  it("exposes HAction and HParameterSet", () => {
    const raw = {
      HAction: { Run: vi.fn(() => true), Execute: vi.fn(() => true) },
      HParameterSet: { HInsertText: {} },
    };

    const low = new LowLevelApi(raw);

    expect(low.HAction).toBe(raw.HAction);
    expect(low.HParameterSet).toBe(raw.HParameterSet);
  });

  it("runs an action by name", () => {
    const raw = {
      HAction: { Run: vi.fn(() => true), Execute: vi.fn(() => true) },
      HParameterSet: {},
    };

    new LowLevelApi(raw).run("MoveDocBegin");

    expect(raw.HAction.Run).toHaveBeenCalledWith("MoveDocBegin");
  });

  it("wraps failed execute calls", () => {
    const raw = {
      HAction: { Run: vi.fn(() => true), Execute: vi.fn(() => false) },
      HParameterSet: {},
    };

    expect(() => new LowLevelApi(raw).execute("InsertText", {})).toThrow(HwpAutomationError);
  });
});

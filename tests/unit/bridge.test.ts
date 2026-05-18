import { describe, expect, it, vi } from "vitest";
import { createHwpObject } from "../../src/com/bridge";
import { HwpAutomationError } from "../../src/com/errors";

describe("createHwpObject", () => {
  it("rejects non-Windows platforms", () => {
    expect(() =>
      createHwpObject({
        platform: "linux",
        loadWinax: () => ({ Object: vi.fn() as never }),
      }),
    ).toThrow(HwpAutomationError);
  });

  it("creates HWPFrame.HwpObject through winax", () => {
    const raw = {};
    const ObjectCtor = vi.fn(() => raw);

    const result = createHwpObject({
      platform: "win32",
      loadWinax: () => ({ Object: ObjectCtor as never }),
    });

    expect(ObjectCtor).toHaveBeenCalledWith("HWPFrame.HwpObject");
    expect(result).toBe(raw);
  });
});

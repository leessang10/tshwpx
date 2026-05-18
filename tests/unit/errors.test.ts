import { describe, expect, it } from "vitest";
import { HwpAutomationError } from "../../src/com/errors";

describe("HwpAutomationError", () => {
  it("stores code, message, and cause", () => {
    const cause = new Error("native failure");
    const error = new HwpAutomationError("HWP_NOT_INSTALLED", "Cannot create HWP.", cause);

    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe("HwpAutomationError");
    expect(error.code).toBe("HWP_NOT_INSTALLED");
    expect(error.cause).toBe(cause);
  });
});

import { describe, expect, it, vi } from "vitest";
import { ComObjectBridge } from "../../src/bridges/com-object";

describe("ComObjectBridge", () => {
  it("applies structured parameter set payloads before executing actions", async () => {
    const hSet = { id: "hset" };
    const charShape = { HSet: hSet, Height: 0 };
    const raw = {
      HAction: {
        Run: vi.fn(() => true),
        Execute: vi.fn(() => true),
      },
      HParameterSet: {
        CharShape: charShape,
      },
    };

    const bridge = new ComObjectBridge(raw);

    await expect(
      bridge.execute("CharShape", {
        parameterSetId: "CharShape",
        values: { Height: 1200 },
      }),
    ).resolves.toBe(true);

    expect(charShape.Height).toBe(1200);
    expect(raw.HAction.Execute).toHaveBeenCalledWith("CharShape", hSet);
  });
});

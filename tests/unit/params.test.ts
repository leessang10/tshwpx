import { describe, expect, it } from "vitest";
import { HwpAutomationError } from "../../src/com/errors";
import { ParameterSetsApi } from "../../src/params";

describe("ParameterSetsApi", () => {
  it("lists parameter set metadata extracted from the official parameter set table", () => {
    const params = new ParameterSetsApi();

    expect(params.list().length).toBeGreaterThan(100);
    expect(params.has("CharShape")).toBe(true);
    expect(params.get("CharShape")).toMatchObject({
      id: "CharShape",
    });
    expect(params.get("CharShape")?.items.some((item) => item.id === "Height")).toBe(true);
  });

  it("creates a structured parameter set payload", () => {
    const params = new ParameterSetsApi();

    expect(params.create("CharShape", { Height: 1200, Bold: 1 })).toEqual({
      parameterSetId: "CharShape",
      values: {
        Height: 1200,
        Bold: 1,
      },
    });
  });

  it("rejects unknown parameter sets and unknown item ids", () => {
    const params = new ParameterSetsApi();

    expect(() => params.create("NotARealSet", {})).toThrow(HwpAutomationError);
    expect(() => params.create("CharShape", { NotARealItem: true })).toThrow(HwpAutomationError);
  });
});

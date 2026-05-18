import { describe, expect, it } from "vitest";
import { HwpAutomationError } from "../../src/com/errors";
import { createParameterSetPayload, getParameterSetDefinition, listParameterSetDefinitions } from "../../src/internal/parameter-sets";

describe("internal parameter set helpers", () => {
  it("lists parameter set metadata extracted from the official parameter set table", () => {
    expect(listParameterSetDefinitions().length).toBeGreaterThan(100);
    expect(getParameterSetDefinition("CharShape")).toMatchObject({
      id: "CharShape",
    });
    expect(getParameterSetDefinition("CharShape")?.items.some((item) => item.id === "Height")).toBe(true);
  });

  it("creates a structured parameter set payload", () => {
    expect(createParameterSetPayload("CharShape", { Height: 1200, Bold: 1 })).toEqual({
      parameterSetId: "CharShape",
      values: {
        Height: 1200,
        Bold: 1,
      },
    });
  });

  it("rejects unknown parameter sets and unknown item ids", () => {
    expect(() => createParameterSetPayload("NotARealSet", {})).toThrow(HwpAutomationError);
    expect(() => createParameterSetPayload("CharShape", { NotARealItem: true })).toThrow(HwpAutomationError);
  });
});

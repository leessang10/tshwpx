import { describe, expect, it, vi } from "vitest";
import { DocumentApi } from "../../src/doc";
import { LowLevelApi } from "../../src/low/low-level-api";

describe("DocumentApi", () => {
  it("inserts text through HInsertText", () => {
    const parameterSet = { Text: "", HSet: { id: "set" } };
    const raw = {
      HAction: { Run: vi.fn(() => true), Execute: vi.fn(() => true) },
      HParameterSet: { HInsertText: parameterSet },
    };

    const doc = new DocumentApi(new LowLevelApi(raw));
    doc.insertText("Hello");

    expect(parameterSet.Text).toBe("Hello");
    expect(raw.HAction.Execute).toHaveBeenCalledWith("InsertText", parameterSet.HSet);
  });
});

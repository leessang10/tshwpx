import { describe, expect, it, vi } from "vitest";
import { DocumentApi } from "../../src/doc";

describe("DocumentApi", () => {
  it("inserts text through the bridge", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
    };

    const doc = new DocumentApi(bridge);
    await doc.insertText("Hello");

    expect(bridge.insertText).toHaveBeenCalledWith("Hello");
  });
});

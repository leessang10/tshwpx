import { describe, expect, it, vi } from "vitest";
import { ActionsApi } from "../../src/actions";
import { DocumentApi } from "../../src/doc";
import { ParameterSetsApi } from "../../src/params";

describe("style API", () => {
  it("exposes documented style actions and parameter sets through the low-level catalogs", () => {
    const bridge = createBridge();
    const actions = new ActionsApi(bridge);
    const params = new ParameterSetsApi();

    expect(actions.get("Style")).toMatchObject({ id: "Style", parameterSetId: "Style" });
    expect(actions.get("StyleAdd")).toMatchObject({ id: "StyleAdd", parameterSetId: "Style" });
    expect(actions.get("StyleEdit")).toMatchObject({ id: "StyleEdit", parameterSetId: "Style" });
    expect(actions.get("StyleEx")).toMatchObject({ id: "StyleEx", parameterSetId: "Style" });
    expect(actions.get("StyleDelete")).toMatchObject({ id: "StyleDelete", parameterSetId: "StyleDelete" });
    expect(actions.get("StyleTemplate")).toMatchObject({ id: "StyleTemplate", parameterSetId: "StyleTemplate" });
    expect(actions.get("StyleChangeToCurrentShape")).toMatchObject({
      id: "StyleChangeToCurrentShape",
      parameterSetId: "StyleItem",
    });
    expect(actions.get("StyleParaNumberBullet")).toMatchObject({
      id: "StyleParaNumberBullet",
      parameterSetId: "ParaShape",
    });
    expect(actions.get("StyleClearCharStyle")).toMatchObject({ id: "StyleClearCharStyle" });

    for (let index = 1; index <= 10; index += 1) {
      expect(actions.get(`StyleShortcut${index}`)).toMatchObject({ id: `StyleShortcut${index}` });
    }

    expect(params.get("Style")?.items.map((item) => item.id)).toEqual(["Apply"]);
    expect(params.get("StyleDelete")?.items.map((item) => item.id)).toEqual(["Target", "Alternation"]);
    expect(params.get("StyleTemplate")?.items.map((item) => item.id)).toEqual(["FileName"]);
    expect(params.get("StyleItem")?.items.map((item) => item.id)).toEqual([
      "Type",
      "NameLocal",
      "NameEng",
      "Next",
      "LockForm",
      "CharShape",
      "ParaShape",
    ]);
  });

  it("applies, adds, and edits styles through documented Style parameter payloads", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.styles.apply(3);
    await doc.styles.apply({ index: 4, version: "legacy" });
    await doc.styles.add(5);
    await doc.styles.edit(6);

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "StyleEx", {
      parameterSetId: "Style",
      values: { Apply: 3 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "Style", {
      parameterSetId: "Style",
      values: { Apply: 4 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(3, "StyleAdd", {
      parameterSetId: "Style",
      values: { Apply: 5 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(4, "StyleEdit", {
      parameterSetId: "Style",
      values: { Apply: 6 },
    });
  });

  it("deletes styles, opens style templates, and clears character styles", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.styles.delete({ target: 7, alternation: 1 });
    await doc.styles.template.open("C:\\styles\\base.sty");
    await doc.styles.clearCharStyle();

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "StyleDelete", {
      parameterSetId: "StyleDelete",
      values: { Target: 7, Alternation: 1 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "StyleTemplate", {
      parameterSetId: "StyleTemplate",
      values: { FileName: "C:\\styles\\base.sty" },
    });
    expect(bridge.run).toHaveBeenCalledWith("StyleClearCharStyle");
  });

  it("changes a style to the current shape through the documented StyleItem payload", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.styles.changeToCurrentShape({
      type: 1,
      localName: "본문",
      englishName: "Body",
      next: 2,
      lockForm: false,
      charShape: { Height: 1000, Bold: 1 },
      paraShape: { AlignType: 3, LineSpacing: 160 },
    });

    expect(bridge.execute).toHaveBeenCalledWith("StyleChangeToCurrentShape", {
      parameterSetId: "StyleItem",
      values: {
        Type: 1,
        NameLocal: "본문",
        NameEng: "Body",
        Next: 2,
        LockForm: 0,
        CharShape: { Height: 1000, Bold: 1 },
        ParaShape: { AlignType: 3, LineSpacing: 160 },
      },
    });
  });

  it("runs documented style shortcut actions", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.styles.shortcut(1);
    await doc.styles.shortcut(10);

    expect(bridge.run).toHaveBeenNthCalledWith(1, "StyleShortcut1");
    expect(bridge.run).toHaveBeenNthCalledWith(2, "StyleShortcut10");
  });

  it("sets style paragraph numbering and bullets through StyleParaNumberBullet", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.styles.numbering.set({
      type: "paragraph",
      level: 1,
      leftMargin: 120,
      indentation: -40,
    });

    expect(bridge.execute).toHaveBeenCalledWith("StyleParaNumberBullet", {
      parameterSetId: "ParaShape",
      values: {
        HeadingType: 2,
        Level: 1,
        LeftMargin: 120,
        Indentation: -40,
      },
    });
  });
});

function createBridge() {
  return {
    insertText: vi.fn(async (_text: string) => undefined),
    run: vi.fn(async (_actionId: string) => undefined),
    execute: vi.fn(async () => true),
  };
}

import { describe, expect, it, vi } from "vitest";
import { DocumentApi } from "../../src/doc";

describe("DocumentApi", () => {
  it("inserts text through the bridge", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.insertText("Hello");

    expect(bridge.insertText).toHaveBeenCalledWith("Hello");
  });

  it("sets character shape through doc.charShape.set", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.charShape.set({
      height: 1200,
      bold: true,
      italic: false,
      faceName: "맑은 고딕",
      textColor: 0x0000ff,
    });

    expect(bridge.execute).toHaveBeenCalledWith("CharShape", {
      parameterSetId: "CharShape",
      values: {
        Height: 1200,
        Bold: 1,
        Italic: 0,
        FaceNameHangul: "맑은 고딕",
        FaceNameLatin: "맑은 고딕",
        FaceNameHanja: "맑은 고딕",
        FaceNameJapanese: "맑은 고딕",
        FaceNameOther: "맑은 고딕",
        FaceNameSymbol: "맑은 고딕",
        FaceNameUser: "맑은 고딕",
        TextColor: 0x0000ff,
      },
    });
  });

  it("sets preset text colors through documented CharShapeTextColor actions", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.charShape.textColor.set("red");
    await doc.charShape.textColor.set("bluish");

    expect(bridge.run).toHaveBeenNthCalledWith(1, "CharShapeTextColorRed");
    expect(bridge.run).toHaveBeenNthCalledWith(2, "CharShapeTextColorBluish");
  });

  it("runs character shape toggle and width shortcut actions", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.charShape.underline.toggle();
    await doc.charShape.width.increase();
    await doc.charShape.width.decrease();
    await doc.charShape.script.cycleSuperSubscript();

    expect(bridge.run).toHaveBeenNthCalledWith(1, "CharShapeUnderline");
    expect(bridge.run).toHaveBeenNthCalledWith(2, "CharShapeWidthIncrease");
    expect(bridge.run).toHaveBeenNthCalledWith(3, "CharShapeWidthDecrease");
    expect(bridge.run).toHaveBeenNthCalledWith(4, "CharShapeSuperSubscript");
  });

  it("covers every documented no-parameter CharShape action with high-level helpers", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);

    await doc.charShape.bold.toggle();
    await doc.charShape.centerline.toggle();
    await doc.charShape.emboss.toggle();
    await doc.charShape.engrave.toggle();
    await doc.charShape.height.focus();
    await doc.charShape.height.decrease();
    await doc.charShape.height.increase();
    await doc.charShape.italic.toggle();
    await doc.charShape.language.focus();
    await doc.charShape.faceName.next();
    await doc.charShape.normal.apply();
    await doc.charShape.outline.toggle();
    await doc.charShape.faceName.previous();
    await doc.charShape.shadow.toggle();
    await doc.charShape.spacing.focus();
    await doc.charShape.spacing.decrease();
    await doc.charShape.spacing.increase();
    await doc.charShape.script.subscript();
    await doc.charShape.script.superscript();
    await doc.charShape.typeFace.focus();
    await doc.charShape.width.focus();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "CharShapeBold",
      "CharShapeCenterline",
      "CharShapeEmboss",
      "CharShapeEngrave",
      "CharShapeHeight",
      "CharShapeHeightDecrease",
      "CharShapeHeightIncrease",
      "CharShapeItalic",
      "CharShapeLang",
      "CharShapeNextFaceName",
      "CharShapeNormal",
      "CharShapeOutline",
      "CharShapePrevFaceName",
      "CharShapeShadow",
      "CharShapeSpacing",
      "CharShapeSpacingDecrease",
      "CharShapeSpacingIncrease",
      "CharShapeSubscript",
      "CharShapeSuperscript",
      "CharShapeTypeFace",
      "CharShapeWidth",
    ]);
  });

  it("opens documented CharShape dialogs with CharShape parameter payloads", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);

    await doc.charShape.dialog.open({ bold: true });
    await doc.charShape.dialog.openWithoutBorder({ italic: true });

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "CharShapeDialog", {
      parameterSetId: "CharShape",
      values: { Bold: 1 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "CharShapeDialogWithoutBord", {
      parameterSetId: "CharShape",
      values: { Italic: 1 },
    });
  });

  it("supports every documented preset CharShape text color action", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);

    await doc.charShape.textColor.set("black");
    await doc.charShape.textColor.set("blue");
    await doc.charShape.textColor.set("bluish");
    await doc.charShape.textColor.set("green");
    await doc.charShape.textColor.set("red");
    await doc.charShape.textColor.set("violet");
    await doc.charShape.textColor.set("white");
    await doc.charShape.textColor.set("yellow");

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "CharShapeTextColorBlack",
      "CharShapeTextColorBlue",
      "CharShapeTextColorBluish",
      "CharShapeTextColorGreen",
      "CharShapeTextColorRed",
      "CharShapeTextColorViolet",
      "CharShapeTextColorWhite",
      "CharShapeTextColorYellow",
    ]);
  });
});

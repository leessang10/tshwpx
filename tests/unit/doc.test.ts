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

  it("inserts tables through the documented TableCreate action and TableCreation parameter set", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.tables.insert({
      rows: 3,
      cols: 4,
      rowHeight: [1200, 1200, 1200],
      colWidth: [3000, 3000, 3000, 3000],
      widthType: 2,
      heightType: 1,
      widthValue: 12000,
      heightValue: 3600,
      textSelect: true,
    });

    expect(bridge.execute).toHaveBeenCalledWith("TableCreate", {
      parameterSetId: "TableCreation",
      values: {
        Rows: 3,
        Cols: 4,
        RowHeight: [1200, 1200, 1200],
        ColWidth: [3000, 3000, 3000, 3000],
        WidthType: 2,
        HeightType: 1,
        WidthValue: 12000,
        HeightValue: 3600,
        TextSelect: 1,
      },
    });
  });

  it("inserts and deletes table rows through documented table line actions", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.tables.rows.insertAbove(2);
    await doc.tables.rows.insertBelow(3);
    await doc.tables.rows.append();
    await doc.tables.rows.delete();

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "TableInsertUpperRow", {
      parameterSetId: "TableInsertLine",
      values: { Count: 2 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "TableInsertLowerRow", {
      parameterSetId: "TableInsertLine",
      values: { Count: 3 },
    });
    expect(bridge.run).toHaveBeenCalledWith("TableAppendRow");
    expect(bridge.execute).toHaveBeenNthCalledWith(3, "TableDeleteRow", {
      parameterSetId: "TableDeleteLine",
      values: { Type: 0 },
    });
  });

  it("inserts and deletes table columns through documented table line actions", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.tables.columns.insertLeft(2);
    await doc.tables.columns.insertRight(3);
    await doc.tables.columns.delete();

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "TableInsertLeftColumn", {
      parameterSetId: "TableInsertLine",
      values: { Count: 2 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "TableInsertRightColumn", {
      parameterSetId: "TableInsertLine",
      values: { Count: 3 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(3, "TableDeleteColumn", {
      parameterSetId: "TableDeleteLine",
      values: { Type: 1 },
    });
  });

  it("merges, splits, deletes, and distributes table cells", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.tables.cells.merge();
    await doc.tables.cells.split({ rows: 2, cols: 3, distributeHeight: true, mergeBeforeSplit: false, keepAdjust: true });
    await doc.tables.cells.delete();
    await doc.tables.cells.distributeHeight();
    await doc.tables.cells.distributeWidth();

    expect(bridge.run).toHaveBeenNthCalledWith(1, "TableMergeCell");
    expect(bridge.execute).toHaveBeenCalledWith("TableSplitCell", {
      parameterSetId: "TableSplitCell",
      values: {
        Rows: 2,
        Cols: 3,
        DistributeHeight: 1,
        Merge: 0,
        Mode2: 1,
      },
    });
    expect(bridge.run).toHaveBeenNthCalledWith(2, "TableDeleteCell");
    expect(bridge.run).toHaveBeenNthCalledWith(3, "TableDistributeCellHeight");
    expect(bridge.run).toHaveBeenNthCalledWith(4, "TableDistributeCellWidth");
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

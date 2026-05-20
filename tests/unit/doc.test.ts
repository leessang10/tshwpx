import { describe, expect, it, vi } from "vitest";
import { DocumentApi } from "../../src/doc";

describe("DocumentApi", () => {
  it("saves, saves as, and closes the current document through the bridge", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
      save: vi.fn(async () => undefined),
      saveAs: vi.fn(async () => undefined),
      close: vi.fn(async () => undefined),
    };

    const doc = new DocumentApi(bridge);
    await doc.save();
    await doc.saveAs("C:/tmp/output.hwpx", "HWPX", "lock:false");
    await doc.close();

    expect(bridge.save).toHaveBeenCalled();
    expect(bridge.saveAs).toHaveBeenCalledWith("C:/tmp/output.hwpx", "HWPX", "lock:false");
    expect(bridge.close).toHaveBeenCalled();
  });

  it("preserves the bridge receiver for document file operations", async () => {
    const calls: string[] = [];
    const bridge = {
      marker: "bridge",
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
      async save(this: { marker: string }) {
        calls.push(`save:${this.marker}`);
      },
      async saveAs(this: { marker: string }, _path: string) {
        calls.push(`saveAs:${this.marker}`);
      },
      async close(this: { marker: string }) {
        calls.push(`close:${this.marker}`);
      },
    };

    const doc = new DocumentApi(bridge);
    await doc.save();
    await doc.saveAs("C:/tmp/output.hwp");
    await doc.close();

    expect(calls).toEqual(["save:bridge", "saveAs:bridge", "close:bridge"]);
  });

  it("inserts text through doc.text.insert", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.text.insert("Hello");

    expect(bridge.insertText).toHaveBeenCalledWith("Hello");
  });

  it("runs text editing shortcut actions through doc.text helpers", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.text.lineBreak();
    await doc.text.paragraphBreak();
    await doc.text.tab();
    await doc.text.deletePreviousChar();
    await doc.text.deleteNextChar();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "BreakLine",
      "BreakPara",
      "InsertTab",
      "DeleteBack",
      "Delete",
    ]);
  });

  it("runs search dialogs through doc.search.dialog", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.search.dialog.open();
    await doc.search.dialog.replace();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual(["FindDlg", "ReplaceDlg"]);
  });

  it("executes find and replace actions with FindReplace payloads", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.search.find("old", { direction: "backward", matchCase: true, wholeWord: true, useRegex: false });
    await doc.search.replace({ find: "old", replace: "new" });
    await doc.search.replaceAll({ find: "old", replace: "new", direction: "all" });

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "RepeatFind", {
      parameterSetId: "FindReplace",
      values: {
        FindString: "old",
        Direction: 1,
        MatchCase: 1,
        WholeWordOnly: 1,
        FindRegExp: 0,
        ReplaceMode: 0,
        IgnoreMessage: 1,
      },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "RepeatFind", {
      parameterSetId: "FindReplace",
      values: {
        FindString: "old",
        ReplaceString: "new",
        ReplaceMode: 1,
        IgnoreMessage: 1,
      },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(3, "AllReplace", {
      parameterSetId: "FindReplace",
      values: {
        FindString: "old",
        ReplaceString: "new",
        Direction: 2,
        ReplaceMode: 1,
        IgnoreMessage: 1,
      },
    });
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

  it("supports table defaults without leaking undefined values into parameter payloads", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.tables.insert();
    await doc.tables.rows.insertAbove();
    await doc.tables.columns.insertRight();
    await doc.tables.cells.split();

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "TableCreate", {
      parameterSetId: "TableCreation",
      values: {},
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "TableInsertUpperRow", {
      parameterSetId: "TableInsertLine",
      values: { Count: 1 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(3, "TableInsertRightColumn", {
      parameterSetId: "TableInsertLine",
      values: { Count: 1 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(4, "TableSplitCell", {
      parameterSetId: "TableSplitCell",
      values: {},
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

  it("does not expose document-level editing aliases", () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    expect("insertText" in doc).toBe(false);
    expect("setCharShape" in doc).toBe(false);
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

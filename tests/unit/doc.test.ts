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

  it("exposes object helpers through doc.objects", () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);

    expect(doc.objects).toBeDefined();
  });

  it("changes pictures through the PictureChange action", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.objects.picture.change({ path: "C:/tmp/new.png", embed: true });

    expect(bridge.execute).toHaveBeenCalledWith("PictureChange", {
      parameterSetId: "PictureChange",
      values: {
        PicturePath: "C:/tmp/new.png",
        PictureEmbed: 1,
      },
    });
  });

  it("runs picture dialog and effect actions through object helpers", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.objects.picture.dialog.open();
    await doc.objects.picture.effects.grayscale();
    await doc.objects.picture.effects.blackWhite();
    await doc.objects.picture.effects.watermark();
    await doc.objects.picture.effects.none();
    await doc.objects.picture.effects.brightness.increase();
    await doc.objects.picture.effects.brightness.decrease();
    await doc.objects.picture.effects.contrast.increase();
    await doc.objects.picture.effects.contrast.decrease();
    await doc.objects.picture.effects.restoreOriginal();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "PictureInsertDialog",
      "PictureEffect1",
      "PictureEffect2",
      "PictureEffect3",
      "PictureEffect4",
      "PictureEffect5",
      "PictureEffect6",
      "PictureEffect7",
      "PictureEffect8",
      "PictureToOriginal",
    ]);
  });

  it("runs object alignment and ordering actions through object helpers", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.objects.align.left();
    await doc.objects.align.center();
    await doc.objects.align.right();
    await doc.objects.align.top();
    await doc.objects.align.middle();
    await doc.objects.align.bottom();
    await doc.objects.align.width();
    await doc.objects.align.height();
    await doc.objects.align.size();
    await doc.objects.align.horizontalSpacing();
    await doc.objects.align.verticalSpacing();

    await doc.objects.order.bringForward();
    await doc.objects.order.bringToFront();
    await doc.objects.order.sendBack();
    await doc.objects.order.sendToBack();
    await doc.objects.order.bringInFrontOfText();
    await doc.objects.order.sendBehindText();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "ShapeObjAlignLeft",
      "ShapeObjAlignCenter",
      "ShapeObjAlignRight",
      "ShapeObjAlignTop",
      "ShapeObjAlignMiddle",
      "ShapeObjAlignBottom",
      "ShapeObjAlignWidth",
      "ShapeObjAlignHeight",
      "ShapeObjAlignSize",
      "ShapeObjAlignHorzSpacing",
      "ShapeObjAlignVertSpacing",
      "ShapeObjBringForward",
      "ShapeObjBringToFront",
      "ShapeObjSendBack",
      "ShapeObjSendToBack",
      "ShapeObjBringInFrontOfText",
      "ShapeObjCtrlSendBehindText",
    ]);
  });

  it("runs object movement, resize, and clipboard actions through object helpers", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.objects.move.up();
    await doc.objects.move.down();
    await doc.objects.move.left();
    await doc.objects.move.right();
    await doc.objects.resize.up();
    await doc.objects.resize.down();
    await doc.objects.resize.left();
    await doc.objects.resize.right();
    await doc.objects.copy();
    await doc.objects.paste();
    await doc.objects.cut();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "ShapeObjMoveUp",
      "ShapeObjMoveDown",
      "ShapeObjMoveLeft",
      "ShapeObjMoveRight",
      "ShapeObjResizeUp",
      "ShapeObjResizeDown",
      "ShapeObjResizeLeft",
      "ShapeObjResizeRight",
      "Copy",
      "Paste",
      "Cut",
    ]);
  });

  it("copies and pastes object style through ShapeObjectCopyPaste payloads", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.objects.style.copy({ line: true, fill: true, size: true, shadow: true, pictureEffect: true });
    await doc.objects.style.paste({ line: true, fill: false, size: true });

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "ShapeObjectCopy", {
      parameterSetId: "ShapeObjectCopyPaste",
      values: {
        ShapeObjectLine: 1,
        ShapeObjectFill: 1,
        ShapeObjectSize: 1,
        ShapeObjectShadow: 1,
        ShapeObjectPicEffect: 1,
      },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "ShapeObjectPaste", {
      parameterSetId: "ShapeObjectCopyPaste",
      values: {
        ShapeObjectLine: 1,
        ShapeObjectFill: 0,
        ShapeObjectSize: 1,
      },
    });
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

  it("executes bookmark reference actions with BookMark payloads", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.references.bookmarks.add("intro");
    await doc.references.bookmarks.moveTo("intro");
    await doc.references.bookmarks.modify("intro", "intro-renamed");
    await doc.references.bookmarks.dialog.open();

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "Bookmark", {
      parameterSetId: "BookMark",
      values: { Name: "intro", Type: 0, Command: 0 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "Bookmark", {
      parameterSetId: "BookMark",
      values: { Name: "intro", Type: 0, Command: 1 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(3, "Bookmark", {
      parameterSetId: "BookMark",
      values: { Name: "intro", Type: 0, Command: 1 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(4, "ModifyBookmark", {
      parameterSetId: "BookMark",
      values: { Name: "intro-renamed", Type: 0, Command: 2 },
    });
    expect(bridge.execute).toHaveBeenCalledTimes(4);
    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual(["BookmarkEditDialog"]);
  });

  it("executes hyperlink reference actions with HyperLink payloads", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.references.hyperlinks.insert({ target: "https://example.com", text: "Example" });
    await doc.references.hyperlinks.jump({ target: "https://example.com", source: "current" });
    await doc.references.hyperlinks.next();
    await doc.references.hyperlinks.previous();

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "Hyperlink", {
      parameterSetId: "HyperLink",
      values: {
        Text: "Example",
        Command: "https://example.com;1;0;0",
        DirectInsert: 1,
      },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "HyperlinkJump", {
      parameterSetId: "HyperlinkJump",
      values: {
        Source: "current",
        Target: "https://example.com",
      },
    });
    expect(bridge.execute).toHaveBeenCalledTimes(2);
    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual(["HyperlinkForward", "HyperlinkBackward"]);
  });

  it("packs non-default hyperlink insert options", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.references.hyperlinks.insert({
      target: "section-1",
      linkType: 2,
      objectType: 9,
      option: 7,
      directInsert: false,
    });

    expect(bridge.execute).toHaveBeenCalledWith("Hyperlink", {
      parameterSetId: "HyperLink",
      values: {
        Command: "section-1;2;9;7",
        DirectInsert: 0,
      },
    });
  });

  it("runs comment and memo reference actions", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.references.comments.insert();
    await doc.references.comments.modify();
    await doc.references.comments.delete();
    await doc.references.memos.next();
    await doc.references.memos.previous();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "Comment",
      "CommentModify",
      "CommentDelete",
      "MemoToNext",
      "MemoToPrev",
    ]);
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

  it("runs table cell alignment, border, and shading actions", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.tables.cells.align.leftTop();
    await doc.tables.cells.align.leftMiddle();
    await doc.tables.cells.align.leftBottom();
    await doc.tables.cells.align.centerTop();
    await doc.tables.cells.align.centerMiddle();
    await doc.tables.cells.align.centerBottom();
    await doc.tables.cells.align.rightTop();
    await doc.tables.cells.align.rightMiddle();
    await doc.tables.cells.align.rightBottom();
    await doc.tables.cells.border.all();
    await doc.tables.cells.border.none();
    await doc.tables.cells.border.outside();
    await doc.tables.cells.border.inside();
    await doc.tables.cells.border.top();
    await doc.tables.cells.border.bottom();
    await doc.tables.cells.border.left();
    await doc.tables.cells.border.right();
    await doc.tables.cells.border.insideHorizontal();
    await doc.tables.cells.border.insideVertical();
    await doc.tables.cells.border.diagonalDown();
    await doc.tables.cells.border.diagonalUp();
    await doc.tables.cells.shading.increase();
    await doc.tables.cells.shading.decrease();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "TableCellAlignLeftTop",
      "TableCellAlignLeftCenter",
      "TableCellAlignLeftBottom",
      "TableCellAlignCenterTop",
      "TableCellAlignCenterCenter",
      "TableCellAlignCenterBottom",
      "TableCellAlignRightTop",
      "TableCellAlignRightCenter",
      "TableCellAlignRightBottom",
      "TableCellBorderAll",
      "TableCellBorderNo",
      "TableCellBorderOutside",
      "TableCellBorderInside",
      "TableCellBorderTop",
      "TableCellBorderBottom",
      "TableCellBorderLeft",
      "TableCellBorderRight",
      "TableCellBorderInsideHorz",
      "TableCellBorderInsideVert",
      "TableCellBorderDiagonalDow",
      "TableCellBorderDiagonalUp",
      "TableCellShadeInc",
      "TableCellShadeDec",
    ]);
  });

  it("runs table formula actions for sum, average, and product directions", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.tables.formulas.sum.auto();
    await doc.tables.formulas.sum.horizontal();
    await doc.tables.formulas.sum.vertical();
    await doc.tables.formulas.average.auto();
    await doc.tables.formulas.average.horizontal();
    await doc.tables.formulas.average.vertical();
    await doc.tables.formulas.product.auto();
    await doc.tables.formulas.product.horizontal();
    await doc.tables.formulas.product.vertical();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "TableFormulaSumAuto",
      "TableFormulaSumHor",
      "TableFormulaSumVer",
      "TableFormulaAvgAuto",
      "TableFormulaAvgHor",
      "TableFormulaAvgVer",
      "TableFormulaProAuto",
      "TableFormulaProHor",
      "TableFormulaProVer",
    ]);
  });

  it("runs table resize actions for cells, tables, lines, and extended resize", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.tables.resize.cell.up();
    await doc.tables.resize.cell.down();
    await doc.tables.resize.cell.left();
    await doc.tables.resize.cell.right();
    await doc.tables.resize.table.up();
    await doc.tables.resize.table.down();
    await doc.tables.resize.table.left();
    await doc.tables.resize.table.right();
    await doc.tables.resize.line.up();
    await doc.tables.resize.line.down();
    await doc.tables.resize.line.left();
    await doc.tables.resize.line.right();
    await doc.tables.resize.extended.up();
    await doc.tables.resize.extended.down();
    await doc.tables.resize.extended.left();
    await doc.tables.resize.extended.right();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "TableResizeCellUp",
      "TableResizeCellDown",
      "TableResizeCellLeft",
      "TableResizeCellRight",
      "TableResizeUp",
      "TableResizeDown",
      "TableResizeLeft",
      "TableResizeRight",
      "TableResizeLineUp",
      "TableResizeLineDown",
      "TableResizeLineLeft",
      "TableResizeLineRight",
      "TableResizeExUp",
      "TableResizeExDown",
      "TableResizeExLeft",
      "TableResizeExRight",
    ]);
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

import { describe, expect, it, vi } from "vitest";
import { DocumentApi } from "../../src/doc";
import { getParameterSetDefinition } from "../../src/internal/parameter-sets";
import { actionDefinitions } from "../../src/spec";

const ACTION_MAP = new Map(actionDefinitions.map((action) => [action.id, action]));

describe("cursor API", () => {
  it("uses documented cursor actions and position parameter set internally", () => {
    expect(ACTION_MAP.get("MoveDocBegin")).toMatchObject({ id: "MoveDocBegin" });
    expect(ACTION_MAP.get("MoveDocEnd")).toMatchObject({ id: "MoveDocEnd" });
    expect(ACTION_MAP.get("MoveNextWord")).toMatchObject({ id: "MoveNextWord" });
    expect(ACTION_MAP.get("MovePrevWord")).toMatchObject({ id: "MovePrevWord" });
    expect(ACTION_MAP.get("MoveSelNextWord")).toMatchObject({ id: "MoveSelNextWord" });
    expect(ACTION_MAP.get("MoveSelDocEnd")).toMatchObject({ id: "MoveSelDocEnd" });
    expect(ACTION_MAP.get("Select")).toMatchObject({ id: "Select" });
    expect(ACTION_MAP.get("SelectAll")).toMatchObject({ id: "SelectAll" });
    expect(ACTION_MAP.get("SelectColumn")).toMatchObject({ id: "SelectColumn" });
    expect(ACTION_MAP.get("SelectCtrlFront")).toMatchObject({ id: "SelectCtrlFront" });
    expect(ACTION_MAP.get("SelectCtrlReverse")).toMatchObject({ id: "SelectCtrlReverse" });
    expect(ACTION_MAP.get("Cancel")).toMatchObject({ id: "Cancel" });

    expect(getParameterSetDefinition("ListParaPos")?.items.map((item) => item.id)).toEqual(["List", "Para", "Pos"]);
  });

  it("runs common cursor movement actions from high-level helpers", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.cursor.move.document.begin();
    await doc.cursor.move.document.end();
    await doc.cursor.move.line.begin();
    await doc.cursor.move.line.end();
    await doc.cursor.move.word.next();
    await doc.cursor.move.word.previous();
    await doc.cursor.move.paragraph.nextBegin();
    await doc.cursor.move.paragraph.previousEnd();
    await doc.cursor.move.direction.left();
    await doc.cursor.move.direction.down();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "MoveDocBegin",
      "MoveDocEnd",
      "MoveLineBegin",
      "MoveLineEnd",
      "MoveNextWord",
      "MovePrevWord",
      "MoveNextParaBegin",
      "MovePrevParaEnd",
      "MoveLeft",
      "MoveDown",
    ]);
  });

  it("runs extended cursor movement helpers for lists, positions, pages, views, sections, and columns", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.cursor.move.list.begin();
    await doc.cursor.move.list.end();
    await doc.cursor.move.line.up();
    await doc.cursor.move.line.down();
    await doc.cursor.move.paragraph.begin();
    await doc.cursor.move.paragraph.end();
    await doc.cursor.move.paragraph.previousBegin();
    await doc.cursor.move.position.next();
    await doc.cursor.move.position.previous();
    await doc.cursor.move.position.nextIncludingSubList();
    await doc.cursor.move.position.previousIncludingSubList();
    await doc.cursor.move.char.next();
    await doc.cursor.move.char.previous();
    await doc.cursor.move.direction.right();
    await doc.cursor.move.direction.up();
    await doc.cursor.move.page.begin();
    await doc.cursor.move.page.end();
    await doc.cursor.move.page.up();
    await doc.cursor.move.page.down();
    await doc.cursor.move.view.begin();
    await doc.cursor.move.view.end();
    await doc.cursor.move.view.up();
    await doc.cursor.move.view.down();
    await doc.cursor.move.scroll.up();
    await doc.cursor.move.scroll.down();
    await doc.cursor.move.scroll.next();
    await doc.cursor.move.scroll.previous();
    await doc.cursor.move.section.next();
    await doc.cursor.move.section.previous();
    await doc.cursor.move.column.begin();
    await doc.cursor.move.column.end();
    await doc.cursor.move.column.next();
    await doc.cursor.move.column.previous();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "MoveListBegin",
      "MoveListEnd",
      "MoveLineUp",
      "MoveLineDown",
      "MoveParaBegin",
      "MoveParaEnd",
      "MovePrevParaBegin",
      "MoveNextPos",
      "MovePrevPos",
      "MoveNextPosEx",
      "MovePrevPosEx",
      "MoveNextChar",
      "MovePrevChar",
      "MoveRight",
      "MoveUp",
      "MovePageBegin",
      "MovePageEnd",
      "MovePageUp",
      "MovePageDown",
      "MoveViewBegin",
      "MoveViewEnd",
      "MoveViewUp",
      "MoveViewDown",
      "MoveScrollUp",
      "MoveScrollDown",
      "MoveScrollNext",
      "MoveScrollPrev",
      "MoveSectionDown",
      "MoveSectionUp",
      "MoveColumnBegin",
      "MoveColumnEnd",
      "MoveNextColumn",
      "MovePrevColumn",
    ]);
  });

  it("moves between table cells through MovePos target ids", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.cursor.move.cell.left();
    await doc.cursor.move.cell.right();
    await doc.cursor.move.cell.up();
    await doc.cursor.move.cell.down();
    await doc.cursor.move.cell.rowStart();
    await doc.cursor.move.cell.rowEnd();
    await doc.cursor.move.cell.columnStart();
    await doc.cursor.move.cell.columnEnd();

    expect(bridge.movePos.mock.calls.map((call) => call[0])).toEqual([100, 101, 102, 103, 104, 105, 106, 107]);
  });

  it("runs selection and selection-extension actions from high-level helpers", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.cursor.selection.start();
    await doc.cursor.selection.extend.nextWord();
    await doc.cursor.selection.extend.documentEnd();
    await doc.cursor.selection.all();
    await doc.cursor.selection.column();
    await doc.cursor.selection.objectNext();
    await doc.cursor.selection.objectPrevious();
    await doc.cursor.selection.cancel();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "Select",
      "MoveSelNextWord",
      "MoveSelDocEnd",
      "SelectAll",
      "SelectColumn",
      "SelectCtrlFront",
      "SelectCtrlReverse",
      "Cancel",
    ]);
  });

  it("runs nested selection-extension helpers for list, line, paragraph, position, direction, page, and view ranges", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.cursor.selection.extend.document.begin();
    await doc.cursor.selection.extend.list.begin();
    await doc.cursor.selection.extend.list.end();
    await doc.cursor.selection.extend.line.begin();
    await doc.cursor.selection.extend.line.end();
    await doc.cursor.selection.extend.line.up();
    await doc.cursor.selection.extend.line.down();
    await doc.cursor.selection.extend.paragraph.begin();
    await doc.cursor.selection.extend.paragraph.end();
    await doc.cursor.selection.extend.paragraph.nextBegin();
    await doc.cursor.selection.extend.paragraph.previousBegin();
    await doc.cursor.selection.extend.paragraph.previousEnd();
    await doc.cursor.selection.extend.word.begin();
    await doc.cursor.selection.extend.word.end();
    await doc.cursor.selection.extend.previousWord();
    await doc.cursor.selection.extend.lineBegin();
    await doc.cursor.selection.extend.position.next();
    await doc.cursor.selection.extend.position.previous();
    await doc.cursor.selection.extend.position.nextChar();
    await doc.cursor.selection.extend.position.previousChar();
    await doc.cursor.selection.extend.direction.left();
    await doc.cursor.selection.extend.direction.right();
    await doc.cursor.selection.extend.direction.up();
    await doc.cursor.selection.extend.direction.down();
    await doc.cursor.selection.extend.page.up();
    await doc.cursor.selection.extend.page.down();
    await doc.cursor.selection.extend.view.up();
    await doc.cursor.selection.extend.view.down();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "MoveSelDocBegin",
      "MoveSelListBegin",
      "MoveSelListEnd",
      "MoveSelLineBegin",
      "MoveSelLineEnd",
      "MoveSelLineUp",
      "MoveSelLineDown",
      "MoveSelParaBegin",
      "MoveSelParaEnd",
      "MoveSelNextParaBegin",
      "MoveSelPrevParaBegin",
      "MoveSelPrevParaEnd",
      "MoveSelWordBegin",
      "MoveSelWordEnd",
      "MoveSelPrevWord",
      "MoveSelLineBegin",
      "MoveSelNextPos",
      "MoveSelPrevPos",
      "MoveSelNextChar",
      "MoveSelPrevChar",
      "MoveSelLeft",
      "MoveSelRight",
      "MoveSelUp",
      "MoveSelDown",
      "MoveSelPageUp",
      "MoveSelPageDown",
      "MoveSelViewUp",
      "MoveSelViewDown",
    ]);
  });

  it("wraps MovePos and ListParaPos-based position methods in high-level cursor helpers", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.cursor.move.to("documentEnd");
    await doc.cursor.move.to("currentList", { para: 10, pos: 20 });
    await doc.cursor.move.byId(20);
    await expect(doc.cursor.position.get()).resolves.toEqual({ list: 1, para: 2, pos: 3 });
    await doc.cursor.position.set({ list: 4, para: 5, pos: 6 });
    await doc.cursor.selection.range({ start: { para: 1, pos: 2 }, end: { para: 3, pos: 4 } });

    expect(bridge.movePos).toHaveBeenNthCalledWith(1, 3, undefined, undefined);
    expect(bridge.movePos).toHaveBeenNthCalledWith(2, 1, 10, 20);
    expect(bridge.movePos).toHaveBeenNthCalledWith(3, 20, undefined, undefined);
    expect(bridge.getPosBySet).toHaveBeenCalled();
    expect(bridge.setPosBySet).toHaveBeenCalledWith({ list: 4, para: 5, pos: 6 });
    expect(bridge.selectText).toHaveBeenCalledWith({ start: { para: 1, pos: 2 }, end: { para: 3, pos: 4 } });
  });
});

function createBridge() {
  return {
    insertText: vi.fn(async (_text: string) => undefined),
    run: vi.fn(async (_actionId: string) => undefined),
    execute: vi.fn(async () => true),
    movePos: vi.fn(async (_moveId: number, _para?: number, _pos?: number) => true),
    getPosBySet: vi.fn(async () => ({ list: 1, para: 2, pos: 3 })),
    setPosBySet: vi.fn(async () => true),
    setPos: vi.fn(async () => undefined),
    selectText: vi.fn(async () => true),
  };
}

import { describe, expect, it, vi } from "vitest";
import { ActionsApi } from "../../src/actions";
import { DocumentApi } from "../../src/doc";
import { LowLevelApi } from "../../src/low/low-level-api";
import { ParameterSetsApi } from "../../src/params";

describe("cursor API", () => {
  it("exposes documented cursor actions and position parameter set through the low-level catalogs", () => {
    const bridge = createBridge();
    const actions = new ActionsApi(bridge);
    const params = new ParameterSetsApi();

    expect(actions.get("MoveDocBegin")).toMatchObject({ id: "MoveDocBegin" });
    expect(actions.get("MoveDocEnd")).toMatchObject({ id: "MoveDocEnd" });
    expect(actions.get("MoveNextWord")).toMatchObject({ id: "MoveNextWord" });
    expect(actions.get("MovePrevWord")).toMatchObject({ id: "MovePrevWord" });
    expect(actions.get("MoveSelNextWord")).toMatchObject({ id: "MoveSelNextWord" });
    expect(actions.get("MoveSelDocEnd")).toMatchObject({ id: "MoveSelDocEnd" });
    expect(actions.get("Select")).toMatchObject({ id: "Select" });
    expect(actions.get("SelectAll")).toMatchObject({ id: "SelectAll" });
    expect(actions.get("SelectColumn")).toMatchObject({ id: "SelectColumn" });
    expect(actions.get("SelectCtrlFront")).toMatchObject({ id: "SelectCtrlFront" });
    expect(actions.get("SelectCtrlReverse")).toMatchObject({ id: "SelectCtrlReverse" });
    expect(actions.get("Cancel")).toMatchObject({ id: "Cancel" });

    expect(params.get("ListParaPos")?.items.map((item) => item.id)).toEqual(["List", "Para", "Pos"]);
  });

  it("exposes automation cursor methods through the low-level API", async () => {
    const bridge = createBridge();
    const low = new LowLevelApi(bridge);

    await expect(low.movePos(3)).resolves.toBe(true);
    await expect(low.getPosBySet()).resolves.toEqual({ list: 1, para: 2, pos: 3 });
    await expect(low.setPosBySet({ list: 4, para: 5, pos: 6 })).resolves.toBe(true);
    await expect(low.setPos({ list: 7, para: 8, pos: 9 })).resolves.toBeUndefined();
    await expect(low.selectText({ start: { para: 1, pos: 2 }, end: { para: 3, pos: 4 } })).resolves.toBe(true);

    expect(bridge.movePos).toHaveBeenCalledWith(3, undefined, undefined);
    expect(bridge.getPosBySet).toHaveBeenCalled();
    expect(bridge.setPosBySet).toHaveBeenCalledWith({ list: 4, para: 5, pos: 6 });
    expect(bridge.setPos).toHaveBeenCalledWith({ list: 7, para: 8, pos: 9 });
    expect(bridge.selectText).toHaveBeenCalledWith({ start: { para: 1, pos: 2 }, end: { para: 3, pos: 4 } });
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
    movePos: vi.fn(async () => true),
    getPosBySet: vi.fn(async () => ({ list: 1, para: 2, pos: 3 })),
    setPosBySet: vi.fn(async () => true),
    setPos: vi.fn(async () => undefined),
    selectText: vi.fn(async () => true),
  };
}

import { describe, expect, it, vi } from "vitest";
import { ActionsApi } from "../../src/actions";
import { DocumentApi } from "../../src/doc";
import { ParameterSetsApi } from "../../src/params";

describe("page API", () => {
  it("exposes documented page actions and parameter sets through the low-level catalogs", () => {
    const bridge = {
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };
    const actions = new ActionsApi(bridge);
    const params = new ParameterSetsApi();

    expect(actions.get("BreakPage")).toMatchObject({ id: "BreakPage" });
    expect(actions.get("DeletePage")).toMatchObject({ id: "DeletePage", parameterSetId: "DeletePage" });
    expect(actions.get("PageSetup")).toMatchObject({ id: "PageSetup", parameterSetId: "SecDef" });
    expect(actions.get("PageNumPos")).toMatchObject({ id: "PageNumPos", parameterSetId: "PageNumPos" });
    expect(params.get("DeletePage")?.items.map((item) => item.id)).toEqual(["Range", "RangeCustom", "UsingPagenum"]);
    expect(params.get("PageNumPos")?.items.some((item) => item.id === "DrawPos")).toBe(true);
    expect(params.get("SecDef")?.items.some((item) => item.id === "PageDef")).toBe(true);
  });

  it("runs page break, section break, copy, paste, and page movement actions", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.pages.break();
    await doc.pages.sections.break();
    await doc.pages.copy();
    await doc.pages.paste();
    await doc.pages.move.begin();
    await doc.pages.move.end();
    await doc.pages.move.previous();
    await doc.pages.move.next();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "BreakPage",
      "BreakSection",
      "CopyPage",
      "PastePage",
      "MovePageBegin",
      "MovePageEnd",
      "MovePageUp",
      "MovePageDown",
    ]);
  });

  it("deletes pages through the documented DeletePage action and parameter set", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.pages.delete({
      range: 2,
      rangeCustom: "1-3",
      usingPageNumber: true,
    });

    expect(bridge.execute).toHaveBeenCalledWith("DeletePage", {
      parameterSetId: "DeletePage",
      values: {
        Range: 2,
        RangeCustom: "1-3",
        UsingPagenum: 1,
      },
    });
  });

  it("supports page numbering helpers", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.pages.numbering.insert();
    await doc.pages.numbering.recalculate();
    await doc.pages.numbering.position.set({
      drawPos: 5,
      numberFormat: 4,
      newNumber: 3,
    });

    expect(bridge.run).toHaveBeenNthCalledWith(1, "InsertPageNum");
    expect(bridge.run).toHaveBeenNthCalledWith(2, "RecalcPageCount");
    expect(bridge.execute).toHaveBeenCalledWith("PageNumPos", {
      parameterSetId: "PageNumPos",
      values: {
        DrawPos: 5,
        NumberFormat: 4,
        NewNumber: 3,
      },
    });
  });

  it("supports page orientation and setup helpers through SecDef", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.pages.orientation.landscape();
    await doc.pages.orientation.portrait();
    await doc.pages.setup({
      paperWidth: 59528,
      paperHeight: 84188,
      landscape: true,
      margins: {
        left: 2834,
        right: 2834,
        top: 5668,
        bottom: 5668,
      },
      applyTo: 3,
    });

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "PageLandscape", {
      parameterSetId: "SecDef",
      values: {},
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "PagePortrait", {
      parameterSetId: "SecDef",
      values: {},
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(3, "PageSetup", {
      parameterSetId: "SecDef",
      values: {
        PageDef: {
          PaperWidth: 59528,
          PaperHeight: 84188,
          Landscape: 1,
          LeftMargin: 2834,
          RightMargin: 2834,
          TopMargin: 5668,
          BottomMargin: 5668,
        },
        ApplyTo: 3,
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

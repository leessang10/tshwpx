import { describe, expect, it, vi } from "vitest";
import { ComObjectBridge } from "../../src/bridges/com-object";

describe("ComObjectBridge", () => {
  it("returns the HWP process id from the COM object", async () => {
    const bridge = new ComObjectBridge({ ProcessID: 4321 });

    await expect(bridge.getPID()).resolves.toBe(4321);
  });

  it("applies structured parameter set payloads before executing actions", async () => {
    const hSet = { id: "hset" };
    const charShape = { HSet: hSet, Height: 0 };
    const raw = {
      HAction: {
        Run: vi.fn(() => true),
        Execute: vi.fn(() => true),
      },
      HParameterSet: {
        CharShape: charShape,
      },
    };

    const bridge = new ComObjectBridge(raw);

    await expect(
      bridge.execute("CharShape", {
        parameterSetId: "CharShape",
        values: { Height: 1200 },
      }),
    ).resolves.toBe(true);

    expect(charShape.Height).toBe(1200);
    expect(raw.HAction.Execute).toHaveBeenCalledWith("CharShape", hSet);
  });

  it("applies nested structured parameter set payloads before executing actions", async () => {
    const hSet = { id: "secdef-hset" };
    const pageDef = { PaperWidth: 0, Landscape: 0 };
    const secDef = {
      HSet: hSet,
      CreateItemSet: vi.fn(() => pageDef),
    };
    const raw = {
      HAction: {
        Run: vi.fn(() => true),
        Execute: vi.fn(() => true),
      },
      HParameterSet: {
        SecDef: secDef,
      },
    };

    const bridge = new ComObjectBridge(raw);

    await expect(
      bridge.execute("PageSetup", {
        parameterSetId: "SecDef",
        values: {
          PageDef: {
            PaperWidth: 59528,
            Landscape: 1,
          },
        },
      }),
    ).resolves.toBe(true);

    expect(secDef.CreateItemSet).toHaveBeenCalledWith("PageDef", "PageDef");
    expect(pageDef.PaperWidth).toBe(59528);
    expect(pageDef.Landscape).toBe(1);
    expect(raw.HAction.Execute).toHaveBeenCalledWith("PageSetup", hSet);
  });

  it("delegates cursor automation methods to the COM object", async () => {
    const hSet = { id: "list-para-pos-hset" };
    const listParaPos = { HSet: hSet, List: 0, Para: 0, Pos: 0 };
    const raw = {
      HAction: {
        Run: vi.fn(() => true),
        Execute: vi.fn(() => true),
      },
      HParameterSet: {
        ListParaPos: listParaPos,
      },
      MovePos: vi.fn(() => true),
      GetPosBySet: vi.fn(() => ({
        Item: vi.fn((name: string) => ({ List: 1, Para: 2, Pos: 3 })[name]),
      })),
      SetPos: vi.fn(),
      SetPosBySet: vi.fn(() => true),
      SelectText: vi.fn(() => true),
    };

    const bridge = new ComObjectBridge(raw);

    await expect(bridge.movePos(3)).resolves.toBe(true);
    await expect(bridge.getPosBySet()).resolves.toEqual({ list: 1, para: 2, pos: 3 });
    await bridge.setPos({ list: 4, para: 5, pos: 6 });
    await expect(bridge.setPosBySet({ list: 7, para: 8, pos: 9 })).resolves.toBe(true);
    await expect(bridge.selectText({ start: { para: 1, pos: 2 }, end: { para: 3, pos: 4 } })).resolves.toBe(true);

    expect(raw.MovePos).toHaveBeenCalledWith(3);
    expect(raw.SetPos).toHaveBeenCalledWith(4, 5, 6);
    expect(listParaPos).toMatchObject({ List: 7, Para: 8, Pos: 9 });
    expect(raw.SetPosBySet).toHaveBeenCalledWith(hSet);
    expect(raw.SelectText).toHaveBeenCalledWith(1, 2, 3, 4);
  });

  it("inserts pictures through raw InsertPicture", async () => {
    const raw = {
      InsertPicture: vi.fn(() => true),
    };
    const bridge = new ComObjectBridge(raw);

    await bridge.insertPicture("C:/tmp/photo.png", {
      embed: true,
      sizeOption: 1,
      reverse: false,
      watermark: false,
      effect: 1,
      width: 50,
      height: 30,
    });

    expect(raw.InsertPicture).toHaveBeenCalledWith(
      "C:/tmp/photo.png",
      true,
      1,
      false,
      false,
      1,
      50,
      30,
    );
  });

  it("throws when raw InsertPicture returns false", async () => {
    const raw = {
      InsertPicture: vi.fn(() => false),
    };
    const bridge = new ComObjectBridge(raw);

    await expect(bridge.insertPicture("C:/tmp/photo.png")).rejects.toThrow(
      "HWP InsertPicture returned false.",
    );
  });
});

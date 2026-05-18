import { describe, expect, it, vi } from "vitest";
import { DocumentApi } from "../../src/doc";
import { getParameterSetDefinition } from "../../src/internal/parameter-sets";
import { actionDefinitions } from "../../src/spec";

const ACTION_MAP = new Map(actionDefinitions.map((action) => [action.id, action]));

describe("paragraph API", () => {
  it("uses documented paragraph actions and parameter sets internally", () => {
    expect(ACTION_MAP.get("ParagraphShape")).toMatchObject({ id: "ParagraphShape", parameterSetId: "ParaShape" });
    expect(ACTION_MAP.get("ParagraphShapeAlignLeft")).toMatchObject({ id: "ParagraphShapeAlignLeft" });
    expect(ACTION_MAP.get("ParagraphShapeIncreaseLine")).toMatchObject({ id: "ParagraphShapeIncreaseLine" });
    expect(ACTION_MAP.get("PutBullet")).toMatchObject({ id: "PutBullet", parameterSetId: "ParaShape" });
    expect(ACTION_MAP.get("PutNewParaNumber")).toMatchObject({ id: "PutNewParaNumber", parameterSetId: "ParaShape" });
    expect(ACTION_MAP.get("PutParaNumber")).toMatchObject({ id: "PutParaNumber", parameterSetId: "ParaShape" });
    expect(ACTION_MAP.get("PutOutlineNumber")).toMatchObject({ id: "PutOutlineNumber", parameterSetId: "ParaShape" });
    expect(ACTION_MAP.get("GetDefaultBullet")).toMatchObject({ id: "GetDefaultBullet", parameterSetId: "ParaShape" });
    expect(ACTION_MAP.get("GetDefaultParaNumber")).toMatchObject({ id: "GetDefaultParaNumber", parameterSetId: "ParaShape" });
    expect(ACTION_MAP.get("BulletDlg")).toMatchObject({ id: "BulletDlg", parameterSetId: "ParaShape" });
    expect(ACTION_MAP.get("ParaNumberDlg")).toMatchObject({ id: "ParaNumberDlg", parameterSetId: "ParaShape" });
    expect(ACTION_MAP.get("PictureBulletDlg")).toMatchObject({ id: "PictureBulletDlg", parameterSetId: "ParaShape" });
    expect(ACTION_MAP.get("OutlineNumber")).toMatchObject({ id: "OutlineNumber", parameterSetId: "SecDef" });
    expect(ACTION_MAP.get("ParaNumberBulletLevelUp")).toMatchObject({
      id: "ParaNumberBulletLevelUp",
      parameterSetId: "ParaShape",
    });
    expect(getParameterSetDefinition("ParaShape")?.items.some((item) => item.id === "AlignType")).toBe(true);
    expect(getParameterSetDefinition("ParaShape")?.items.some((item) => item.id === "LineSpacing")).toBe(true);
    expect(getParameterSetDefinition("ParaShape")?.items.some((item) => item.id === "HeadingType")).toBe(true);
  });

  it("sets paragraph shape through the documented ParagraphShape action and ParaShape parameter set", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.paragraph.shape.set({
      leftMargin: 100,
      rightMargin: 200,
      indentation: 300,
      prevSpacing: 400,
      nextSpacing: 500,
      lineSpacingType: 0,
      lineSpacing: 160,
      alignType: 3,
      keepWithNext: true,
      keepLinesTogether: false,
      pageBreakBefore: true,
      headingType: 2,
      level: 1,
    });

    expect(bridge.execute).toHaveBeenCalledWith("ParagraphShape", {
      parameterSetId: "ParaShape",
      values: {
        LeftMargin: 100,
        RightMargin: 200,
        Indentation: 300,
        PrevSpacing: 400,
        NextSpacing: 500,
        LineSpacingType: 0,
        LineSpacing: 160,
        AlignType: 3,
        KeepWithNext: 1,
        KeepLinesTogether: 0,
        PagebreakBefore: 1,
        HeadingType: 2,
        Level: 1,
      },
    });
  });

  it("sets paragraph numbering mode through ParagraphShape and ParaShape heading fields", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.paragraph.numbering.set({
      type: "bullet",
      level: 2,
      alignType: 0,
      leftMargin: 120,
      indentation: -40,
      lineSpacing: 160,
    });
    await doc.paragraph.numbering.clear();

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "ParagraphShape", {
      parameterSetId: "ParaShape",
      values: {
        HeadingType: 3,
        Level: 2,
        AlignType: 0,
        LeftMargin: 120,
        Indentation: -40,
        LineSpacing: 160,
      },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "ParagraphShape", {
      parameterSetId: "ParaShape",
      values: { HeadingType: 0 },
    });
  });

  it("runs documented paragraph alignment actions", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.paragraph.align.left();
    await doc.paragraph.align.center();
    await doc.paragraph.align.right();
    await doc.paragraph.align.justify();
    await doc.paragraph.align.distribute();
    await doc.paragraph.align.division();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "ParagraphShapeAlignLeft",
      "ParagraphShapeAlignCenter",
      "ParagraphShapeAlignRight",
      "ParagraphShapeAlignJustify",
      "ParagraphShapeAlignDistrib",
      "ParagraphShapeAlignDivisio",
    ]);
  });

  it("runs paragraph margin, indentation, spacing, and protection helper actions", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.paragraph.margin.left.increase();
    await doc.paragraph.margin.left.decrease();
    await doc.paragraph.margin.right.increase();
    await doc.paragraph.margin.right.decrease();
    await doc.paragraph.margin.both.increase();
    await doc.paragraph.margin.both.decrease();
    await doc.paragraph.lineSpacing.increase();
    await doc.paragraph.lineSpacing.decrease();
    await doc.paragraph.indentation.positive();
    await doc.paragraph.indentation.negative();
    await doc.paragraph.indentation.atCaret();
    await doc.paragraph.protect.toggle();
    await doc.paragraph.singleRow.toggle();
    await doc.paragraph.withNext.toggle();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "ParagraphShapeIncreaseLeft",
      "ParagraphShapeDecreaseLeft",
      "ParagraphShapeDecreaseRigh",
      "ParagraphShapeIncreaseRigh",
      "ParagraphShapeIncreaseMarg",
      "ParagraphShapeDecreaseMarg",
      "ParagraphShapeIncreaseLine",
      "ParagraphShapeDecreaseLine",
      "ParagraphShapeIndentPositi",
      "ParagraphShapeIndentNegati",
      "ParagraphShapeIndentAtCare",
      "ParagraphShapeProtect",
      "ParagraphShapeSingleRow",
      "ParagraphShapeWithNext",
    ]);
  });

  it("executes paragraph numbering and bullet actions with ParaShape payloads", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.paragraph.numbering.bullet({ level: 2 });
    await doc.paragraph.numbering.paragraph({ level: 1 });
    await doc.paragraph.numbering.outline({ level: 3 });
    await doc.paragraph.numbering.startNew({ level: 4 });
    await doc.paragraph.numbering.levelUp();
    await doc.paragraph.numbering.levelDown();
    await doc.paragraph.numbering.promote();
    await doc.paragraph.numbering.demote();

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "PutBullet", {
      parameterSetId: "ParaShape",
      values: { Level: 2 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "PutParaNumber", {
      parameterSetId: "ParaShape",
      values: { Level: 1 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(3, "PutOutlineNumber", {
      parameterSetId: "ParaShape",
      values: { Level: 3 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(4, "PutNewParaNumber", {
      parameterSetId: "ParaShape",
      values: { Level: 4 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(5, "ParaNumberBulletLevelUp", {
      parameterSetId: "ParaShape",
      values: {},
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(6, "ParaNumberBulletLevelDown", {
      parameterSetId: "ParaShape",
      values: {},
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(7, "ParaNumberBulletLevelUp", {
      parameterSetId: "ParaShape",
      values: {},
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(8, "ParaNumberBulletLevelDown", {
      parameterSetId: "ParaShape",
      values: {},
    });
  });

  it("executes numbering defaults and dialogs with documented ParaShape payloads", async () => {
    const bridge = createBridge();
    const doc = new DocumentApi(bridge);

    await doc.paragraph.numbering.defaults.bullet();
    await doc.paragraph.numbering.defaults.paragraph();
    await doc.paragraph.numbering.dialog.bullet({ level: 1 });
    await doc.paragraph.numbering.dialog.paragraph({ level: 2 });
    await doc.paragraph.numbering.dialog.pictureBullet({ level: 3 });

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "GetDefaultBullet", {
      parameterSetId: "ParaShape",
      values: {},
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "GetDefaultParaNumber", {
      parameterSetId: "ParaShape",
      values: {},
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(3, "BulletDlg", {
      parameterSetId: "ParaShape",
      values: { Level: 1 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(4, "ParaNumberDlg", {
      parameterSetId: "ParaShape",
      values: { Level: 2 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(5, "PictureBulletDlg", {
      parameterSetId: "ParaShape",
      values: { Level: 3 },
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

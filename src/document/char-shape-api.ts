import type { HwpBridge } from "../bridges/types";
import { createParameterSetPayload } from "../internal/parameter-sets";
import {
  CharacterShapeAdjustApi,
  CharacterShapeApplyApi,
  CharacterShapeFaceNameApi,
  CharacterShapeFocusApi,
  CharacterShapeScriptApi,
  CharacterShapeTextColorApi,
  CharacterShapeToggleApi,
  CharacterShapeUnderlineApi,
  CharacterShapeWidthApi,
} from "./char-shape-actions";
import { CharacterShapeDialogApi } from "./char-shape-dialog";
import { createCharShapeValues } from "./char-shape-values";
import type { CharShapeOptions } from "./types";

export class CharacterShapeApi {
  readonly bold: CharacterShapeToggleApi;
  readonly centerline: CharacterShapeToggleApi;
  readonly dialog: CharacterShapeDialogApi;
  readonly emboss: CharacterShapeToggleApi;
  readonly engrave: CharacterShapeToggleApi;
  readonly height: CharacterShapeAdjustApi;
  readonly italic: CharacterShapeToggleApi;
  readonly language: CharacterShapeFocusApi;
  readonly faceName: CharacterShapeFaceNameApi;
  readonly normal: CharacterShapeApplyApi;
  readonly outline: CharacterShapeToggleApi;
  readonly shadow: CharacterShapeToggleApi;
  readonly spacing: CharacterShapeAdjustApi;
  readonly typeFace: CharacterShapeFocusApi;
  readonly textColor: CharacterShapeTextColorApi;
  readonly underline: CharacterShapeUnderlineApi;
  readonly width: CharacterShapeWidthApi;
  readonly script: CharacterShapeScriptApi;

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {
    this.bold = new CharacterShapeToggleApi(bridge, "CharShapeBold");
    this.centerline = new CharacterShapeToggleApi(bridge, "CharShapeCenterline");
    this.dialog = new CharacterShapeDialogApi(bridge);
    this.emboss = new CharacterShapeToggleApi(bridge, "CharShapeEmboss");
    this.engrave = new CharacterShapeToggleApi(bridge, "CharShapeEngrave");
    this.height = new CharacterShapeAdjustApi(bridge, "CharShapeHeight", "CharShapeHeightIncrease", "CharShapeHeightDecrease");
    this.italic = new CharacterShapeToggleApi(bridge, "CharShapeItalic");
    this.language = new CharacterShapeFocusApi(bridge, "CharShapeLang");
    this.faceName = new CharacterShapeFaceNameApi(bridge);
    this.normal = new CharacterShapeApplyApi(bridge, "CharShapeNormal");
    this.outline = new CharacterShapeToggleApi(bridge, "CharShapeOutline");
    this.shadow = new CharacterShapeToggleApi(bridge, "CharShapeShadow");
    this.spacing = new CharacterShapeAdjustApi(
      bridge,
      "CharShapeSpacing",
      "CharShapeSpacingIncrease",
      "CharShapeSpacingDecrease",
    );
    this.typeFace = new CharacterShapeFocusApi(bridge, "CharShapeTypeFace");
    this.textColor = new CharacterShapeTextColorApi(bridge);
    this.underline = new CharacterShapeUnderlineApi(bridge);
    this.width = new CharacterShapeWidthApi(bridge);
    this.script = new CharacterShapeScriptApi(bridge);
  }

  async set(options: CharShapeOptions): Promise<void> {
    await this.bridge.execute("CharShape", createParameterSetPayload("CharShape", createCharShapeValues(options)));
  }
}

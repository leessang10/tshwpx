import type { HwpBridge } from "../bridges/types";
import { setBooleanValue, setValue, type ParameterValues } from "../internal/parameter-values";
import { ParameterSetsApi } from "../params";
import type { CharShapeOptions, CharShapePresetColor } from "./types";

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

  private readonly params = new ParameterSetsApi();

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
    await this.bridge.execute("CharShape", this.params.create("CharShape", createCharShapeValues(options)));
  }
}

export class CharacterShapeToggleApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly actionId: string,
  ) {}

  async toggle(): Promise<void> {
    await this.bridge.run(this.actionId);
  }
}

export class CharacterShapeApplyApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly actionId: string,
  ) {}

  async apply(): Promise<void> {
    await this.bridge.run(this.actionId);
  }
}

export class CharacterShapeFocusApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly actionId: string,
  ) {}

  async focus(): Promise<void> {
    await this.bridge.run(this.actionId);
  }
}

export class CharacterShapeAdjustApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly focusActionId: string,
    private readonly increaseActionId: string,
    private readonly decreaseActionId: string,
  ) {}

  async focus(): Promise<void> {
    await this.bridge.run(this.focusActionId);
  }

  async increase(): Promise<void> {
    await this.bridge.run(this.increaseActionId);
  }

  async decrease(): Promise<void> {
    await this.bridge.run(this.decreaseActionId);
  }
}

export class CharacterShapeDialogApi {
  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async open(options: CharShapeOptions = {}): Promise<void> {
    await this.bridge.execute("CharShapeDialog", this.params.create("CharShape", createCharShapeValues(options)));
  }

  async openWithoutBorder(options: CharShapeOptions = {}): Promise<void> {
    await this.bridge.execute(
      "CharShapeDialogWithoutBord",
      this.params.create("CharShape", createCharShapeValues(options)),
    );
  }
}

export class CharacterShapeFaceNameApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async next(): Promise<void> {
    await this.bridge.run("CharShapeNextFaceName");
  }

  async previous(): Promise<void> {
    await this.bridge.run("CharShapePrevFaceName");
  }
}

export class CharacterShapeTextColorApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async set(color: CharShapePresetColor): Promise<void> {
    await this.bridge.run(TEXT_COLOR_ACTIONS[color]);
  }
}

export class CharacterShapeUnderlineApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async toggle(): Promise<void> {
    await this.bridge.run("CharShapeUnderline");
  }
}

export class CharacterShapeWidthApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async focus(): Promise<void> {
    await this.bridge.run("CharShapeWidth");
  }

  async increase(): Promise<void> {
    await this.bridge.run("CharShapeWidthIncrease");
  }

  async decrease(): Promise<void> {
    await this.bridge.run("CharShapeWidthDecrease");
  }
}

export class CharacterShapeScriptApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async subscript(): Promise<void> {
    await this.bridge.run("CharShapeSubscript");
  }

  async superscript(): Promise<void> {
    await this.bridge.run("CharShapeSuperscript");
  }

  async cycleSuperSubscript(): Promise<void> {
    await this.bridge.run("CharShapeSuperSubscript");
  }
}

const FACE_NAME_ITEM_IDS = [
  "FaceNameHangul",
  "FaceNameLatin",
  "FaceNameHanja",
  "FaceNameJapanese",
  "FaceNameOther",
  "FaceNameSymbol",
  "FaceNameUser",
] as const;

const TEXT_COLOR_ACTIONS: Record<CharShapePresetColor, string> = {
  black: "CharShapeTextColorBlack",
  blue: "CharShapeTextColorBlue",
  bluish: "CharShapeTextColorBluish",
  green: "CharShapeTextColorGreen",
  red: "CharShapeTextColorRed",
  violet: "CharShapeTextColorViolet",
  white: "CharShapeTextColorWhite",
  yellow: "CharShapeTextColorYellow",
};

function createCharShapeValues(options: CharShapeOptions): ParameterValues {
  const values: ParameterValues = {};

  setValue(values, "Height", options.height);
  setBooleanValue(values, "Bold", options.bold);
  setBooleanValue(values, "Italic", options.italic);

  if (options.faceName !== undefined) {
    for (const itemId of FACE_NAME_ITEM_IDS) {
      values[itemId] = options.faceName;
    }
  }

  setValue(values, "TextColor", options.textColor);

  return values;
}

import type { HwpBridge } from "../bridges/types";
import type { CharShapePresetColor } from "./types";
import { TEXT_COLOR_ACTIONS } from "./char-shape-values";

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

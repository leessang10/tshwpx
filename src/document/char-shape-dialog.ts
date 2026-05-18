import type { HwpBridge } from "../bridges/types";
import { createParameterSetPayload } from "../internal/parameter-sets";
import { createCharShapeValues } from "./char-shape-values";
import type { CharShapeOptions } from "./types";

export class CharacterShapeDialogApi {
  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async open(options: CharShapeOptions = {}): Promise<void> {
    await this.bridge.execute("CharShapeDialog", createParameterSetPayload("CharShape", createCharShapeValues(options)));
  }

  async openWithoutBorder(options: CharShapeOptions = {}): Promise<void> {
    await this.bridge.execute(
      "CharShapeDialogWithoutBord",
      createParameterSetPayload("CharShape", createCharShapeValues(options)),
    );
  }
}

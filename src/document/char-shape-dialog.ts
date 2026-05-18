import type { HwpBridge } from "../bridges/types";
import { ParameterSetsApi } from "../params";
import { createCharShapeValues } from "./char-shape-values";
import type { CharShapeOptions } from "./types";

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


import type { HwpBridge } from "./bridges/types";

export class DocumentApi {
  constructor(private readonly bridge: Pick<HwpBridge, "insertText">) {}

  async insertText(text: string): Promise<void> {
    await this.bridge.insertText(text);
  }
}

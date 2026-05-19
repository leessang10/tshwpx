import type { HwpBridge } from "../bridges/types";

export class DocumentTextApi {
  constructor(private readonly bridge: Pick<HwpBridge, "insertText">) {}

  async insert(text: string): Promise<void> {
    await this.bridge.insertText(text);
  }
}

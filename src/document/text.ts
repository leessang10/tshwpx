import type { HwpBridge } from "../bridges/types";

export class DocumentTextApi {
  constructor(private readonly bridge: Pick<HwpBridge, "insertText" | "run">) {}

  async insert(text: string): Promise<void> {
    await this.bridge.insertText(text);
  }

  async lineBreak(): Promise<void> {
    await this.bridge.run("BreakLine");
  }

  async paragraphBreak(): Promise<void> {
    await this.bridge.run("BreakPara");
  }

  async tab(): Promise<void> {
    await this.bridge.run("InsertTab");
  }

  async deletePreviousChar(): Promise<void> {
    await this.bridge.run("DeleteBack");
  }

  async deleteNextChar(): Promise<void> {
    await this.bridge.run("Delete");
  }
}

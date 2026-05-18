import type { HwpBridge } from "../bridges/types";
import { createParameterSetPayload } from "../internal/parameter-sets";
import { createParagraphNumberingValues, createParagraphShapeValues } from "./values";
import type { ParagraphNumberingOptions, ParagraphNumberingSetOptions } from "./types";

export class DocumentParagraphNumberingApi {
  readonly defaults: DocumentParagraphNumberingDefaultsApi;
  readonly dialog: DocumentParagraphNumberingDialogApi;

  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {
    this.defaults = new DocumentParagraphNumberingDefaultsApi(bridge);
    this.dialog = new DocumentParagraphNumberingDialogApi(bridge);
  }

  async set(options: ParagraphNumberingSetOptions): Promise<void> {
    await this.bridge.execute(
      "ParagraphShape",
      createParameterSetPayload("ParaShape", createParagraphNumberingValues(options)),
    );
  }

  async clear(): Promise<void> {
    await this.set({ type: "none" });
  }

  async bullet(options: ParagraphNumberingOptions = {}): Promise<void> {
    await this.execute("PutBullet", options);
  }

  async paragraph(options: ParagraphNumberingOptions = {}): Promise<void> {
    await this.execute("PutParaNumber", options);
  }

  async outline(options: ParagraphNumberingOptions = {}): Promise<void> {
    await this.execute("PutOutlineNumber", options);
  }

  async startNew(options: ParagraphNumberingOptions = {}): Promise<void> {
    await this.execute("PutNewParaNumber", options);
  }

  async levelUp(): Promise<void> {
    await this.execute("ParaNumberBulletLevelUp", {});
  }

  async levelDown(): Promise<void> {
    await this.execute("ParaNumberBulletLevelDown", {});
  }

  async promote(): Promise<void> {
    await this.levelUp();
  }

  async demote(): Promise<void> {
    await this.levelDown();
  }

  private async execute(actionId: string, options: ParagraphNumberingOptions): Promise<void> {
    await this.bridge.execute(actionId, createParameterSetPayload("ParaShape", createParagraphShapeValues(options)));
  }
}

export class DocumentParagraphNumberingDefaultsApi {
  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async bullet(): Promise<void> {
    await this.bridge.execute("GetDefaultBullet", createParameterSetPayload("ParaShape"));
  }

  async paragraph(): Promise<void> {
    await this.bridge.execute("GetDefaultParaNumber", createParameterSetPayload("ParaShape"));
  }
}

export class DocumentParagraphNumberingDialogApi {
  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async bullet(options: ParagraphNumberingOptions = {}): Promise<void> {
    await this.execute("BulletDlg", options);
  }

  async paragraph(options: ParagraphNumberingOptions = {}): Promise<void> {
    await this.execute("ParaNumberDlg", options);
  }

  async pictureBullet(options: ParagraphNumberingOptions = {}): Promise<void> {
    await this.execute("PictureBulletDlg", options);
  }

  private async execute(actionId: string, options: ParagraphNumberingOptions): Promise<void> {
    await this.bridge.execute(actionId, createParameterSetPayload("ParaShape", createParagraphShapeValues(options)));
  }
}

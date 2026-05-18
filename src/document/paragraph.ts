import type { HwpBridge } from "../bridges/types";
import { ParameterSetsApi } from "../params";
import { createParagraphNumberingValues, createParagraphShapeValues } from "./values";
import type { ParagraphNumberingOptions, ParagraphNumberingSetOptions, ParagraphShapeOptions } from "./types";

export class DocumentParagraphApi {
  readonly align: DocumentParagraphAlignApi;
  readonly indentation: DocumentParagraphIndentationApi;
  readonly lineSpacing: DocumentParagraphLineSpacingApi;
  readonly margin: DocumentParagraphMarginApi;
  readonly numbering: DocumentParagraphNumberingApi;
  readonly protect: DocumentParagraphToggleApi;
  readonly shape: DocumentParagraphShapeApi;
  readonly singleRow: DocumentParagraphToggleApi;
  readonly withNext: DocumentParagraphToggleApi;

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {
    this.align = new DocumentParagraphAlignApi(bridge);
    this.indentation = new DocumentParagraphIndentationApi(bridge);
    this.lineSpacing = new DocumentParagraphLineSpacingApi(bridge);
    this.margin = new DocumentParagraphMarginApi(bridge);
    this.numbering = new DocumentParagraphNumberingApi(bridge);
    this.protect = new DocumentParagraphToggleApi(bridge, "ParagraphShapeProtect");
    this.shape = new DocumentParagraphShapeApi(bridge);
    this.singleRow = new DocumentParagraphToggleApi(bridge, "ParagraphShapeSingleRow");
    this.withNext = new DocumentParagraphToggleApi(bridge, "ParagraphShapeWithNext");
  }
}

export class DocumentParagraphShapeApi {
  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async set(options: ParagraphShapeOptions): Promise<void> {
    await this.bridge.execute("ParagraphShape", this.params.create("ParaShape", createParagraphShapeValues(options)));
  }
}

export class DocumentParagraphAlignApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async left(): Promise<void> {
    await this.bridge.run("ParagraphShapeAlignLeft");
  }

  async center(): Promise<void> {
    await this.bridge.run("ParagraphShapeAlignCenter");
  }

  async right(): Promise<void> {
    await this.bridge.run("ParagraphShapeAlignRight");
  }

  async justify(): Promise<void> {
    await this.bridge.run("ParagraphShapeAlignJustify");
  }

  async distribute(): Promise<void> {
    await this.bridge.run("ParagraphShapeAlignDistrib");
  }

  async division(): Promise<void> {
    await this.bridge.run("ParagraphShapeAlignDivisio");
  }
}

export class DocumentParagraphMarginApi {
  readonly both: DocumentParagraphAdjustApi;
  readonly left: DocumentParagraphAdjustApi;
  readonly right: DocumentParagraphAdjustApi;

  constructor(bridge: Pick<HwpBridge, "run">) {
    this.both = new DocumentParagraphAdjustApi(bridge, "ParagraphShapeIncreaseMarg", "ParagraphShapeDecreaseMarg");
    this.left = new DocumentParagraphAdjustApi(bridge, "ParagraphShapeIncreaseLeft", "ParagraphShapeDecreaseLeft");
    this.right = new DocumentParagraphAdjustApi(bridge, "ParagraphShapeDecreaseRigh", "ParagraphShapeIncreaseRigh");
  }
}

export class DocumentParagraphLineSpacingApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async increase(): Promise<void> {
    await this.bridge.run("ParagraphShapeIncreaseLine");
  }

  async decrease(): Promise<void> {
    await this.bridge.run("ParagraphShapeDecreaseLine");
  }
}

export class DocumentParagraphIndentationApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async positive(): Promise<void> {
    await this.bridge.run("ParagraphShapeIndentPositi");
  }

  async negative(): Promise<void> {
    await this.bridge.run("ParagraphShapeIndentNegati");
  }

  async atCaret(): Promise<void> {
    await this.bridge.run("ParagraphShapeIndentAtCare");
  }
}

export class DocumentParagraphNumberingApi {
  readonly defaults: DocumentParagraphNumberingDefaultsApi;
  readonly dialog: DocumentParagraphNumberingDialogApi;

  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {
    this.defaults = new DocumentParagraphNumberingDefaultsApi(bridge);
    this.dialog = new DocumentParagraphNumberingDialogApi(bridge);
  }

  async set(options: ParagraphNumberingSetOptions): Promise<void> {
    await this.bridge.execute(
      "ParagraphShape",
      this.params.create("ParaShape", createParagraphNumberingValues(options)),
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
    await this.bridge.execute(actionId, this.params.create("ParaShape", createParagraphShapeValues(options)));
  }
}

export class DocumentParagraphNumberingDefaultsApi {
  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async bullet(): Promise<void> {
    await this.bridge.execute("GetDefaultBullet", this.params.create("ParaShape"));
  }

  async paragraph(): Promise<void> {
    await this.bridge.execute("GetDefaultParaNumber", this.params.create("ParaShape"));
  }
}

export class DocumentParagraphNumberingDialogApi {
  private readonly params = new ParameterSetsApi();

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
    await this.bridge.execute(actionId, this.params.create("ParaShape", createParagraphShapeValues(options)));
  }
}

export class DocumentParagraphAdjustApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly increaseActionId: string,
    private readonly decreaseActionId: string,
  ) {}

  async increase(): Promise<void> {
    await this.bridge.run(this.increaseActionId);
  }

  async decrease(): Promise<void> {
    await this.bridge.run(this.decreaseActionId);
  }
}

export class DocumentParagraphToggleApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly actionId: string,
  ) {}

  async toggle(): Promise<void> {
    await this.bridge.run(this.actionId);
  }
}

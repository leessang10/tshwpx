import type { HwpBridge } from "../bridges/types";
import { ParameterSetsApi } from "../params";
import { createParagraphShapeValues } from "./values";
import type { ParagraphShapeOptions } from "./types";

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

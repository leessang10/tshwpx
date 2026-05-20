import type { HwpBridge } from "../bridges/types";
import { setBooleanValue, setValue, type ParameterValues } from "../internal/parameter-values";
import { createParameterSetPayload } from "../internal/parameter-sets";
import type { ObjectStyleCopyOptions, PictureChangeOptions } from "./types";

type DocumentObjectBridge = Pick<HwpBridge, "run" | "execute">;

export class DocumentObjectsApi {
  readonly picture: DocumentObjectPictureApi;
  readonly align: DocumentObjectAlignApi;
  readonly order: DocumentObjectOrderApi;
  readonly move: DocumentObjectMoveApi;
  readonly resize: DocumentObjectResizeApi;
  readonly style: DocumentObjectStyleApi;

  constructor(private readonly bridge: DocumentObjectBridge) {
    this.picture = new DocumentObjectPictureApi(bridge);
    this.align = new DocumentObjectAlignApi(bridge);
    this.order = new DocumentObjectOrderApi(bridge);
    this.move = new DocumentObjectMoveApi(bridge);
    this.resize = new DocumentObjectResizeApi(bridge);
    this.style = new DocumentObjectStyleApi(bridge);
  }

  async copy(): Promise<void> {
    await this.bridge.run("Copy");
  }

  async paste(): Promise<void> {
    await this.bridge.run("Paste");
  }

  async cut(): Promise<void> {
    await this.bridge.run("Cut");
  }
}

export class DocumentObjectPictureApi {
  readonly dialog: DocumentObjectPictureDialogApi;
  readonly effects: DocumentObjectPictureEffectsApi;

  constructor(private readonly bridge: DocumentObjectBridge) {
    this.dialog = new DocumentObjectPictureDialogApi(bridge);
    this.effects = new DocumentObjectPictureEffectsApi(bridge);
  }

  async change(options: PictureChangeOptions): Promise<void> {
    const values: ParameterValues = {};

    setValue(values, "PicturePath", options.path);
    setBooleanValue(values, "PictureEmbed", options.embed);

    await this.bridge.execute("PictureChange", createParameterSetPayload("PictureChange", values));
  }
}

export class DocumentObjectPictureDialogApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async open(): Promise<void> {
    await this.bridge.run("PictureInsertDialog");
  }
}

export class DocumentObjectPictureEffectsApi {
  readonly brightness: DocumentObjectPictureBrightnessApi;
  readonly contrast: DocumentObjectPictureContrastApi;

  constructor(private readonly bridge: Pick<HwpBridge, "run">) {
    this.brightness = new DocumentObjectPictureBrightnessApi(bridge);
    this.contrast = new DocumentObjectPictureContrastApi(bridge);
  }

  async grayscale(): Promise<void> {
    await this.bridge.run("PictureEffect1");
  }

  async blackWhite(): Promise<void> {
    await this.bridge.run("PictureEffect2");
  }

  async watermark(): Promise<void> {
    await this.bridge.run("PictureEffect3");
  }

  async none(): Promise<void> {
    await this.bridge.run("PictureEffect4");
  }

  async restoreOriginal(): Promise<void> {
    await this.bridge.run("PictureToOriginal");
  }
}

export class DocumentObjectPictureBrightnessApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async increase(): Promise<void> {
    await this.bridge.run("PictureEffect5");
  }

  async decrease(): Promise<void> {
    await this.bridge.run("PictureEffect6");
  }
}

export class DocumentObjectPictureContrastApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async increase(): Promise<void> {
    await this.bridge.run("PictureEffect7");
  }

  async decrease(): Promise<void> {
    await this.bridge.run("PictureEffect8");
  }
}

export class DocumentObjectAlignApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async left(): Promise<void> {
    await this.bridge.run("ShapeObjAlignLeft");
  }

  async center(): Promise<void> {
    await this.bridge.run("ShapeObjAlignCenter");
  }

  async right(): Promise<void> {
    await this.bridge.run("ShapeObjAlignRight");
  }

  async top(): Promise<void> {
    await this.bridge.run("ShapeObjAlignTop");
  }

  async middle(): Promise<void> {
    await this.bridge.run("ShapeObjAlignMiddle");
  }

  async bottom(): Promise<void> {
    await this.bridge.run("ShapeObjAlignBottom");
  }

  async width(): Promise<void> {
    await this.bridge.run("ShapeObjAlignWidth");
  }

  async height(): Promise<void> {
    await this.bridge.run("ShapeObjAlignHeight");
  }

  async size(): Promise<void> {
    await this.bridge.run("ShapeObjAlignSize");
  }

  async horizontalSpacing(): Promise<void> {
    await this.bridge.run("ShapeObjAlignHorzSpacing");
  }

  async verticalSpacing(): Promise<void> {
    await this.bridge.run("ShapeObjAlignVertSpacing");
  }
}

export class DocumentObjectOrderApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async bringForward(): Promise<void> {
    await this.bridge.run("ShapeObjBringForward");
  }

  async bringToFront(): Promise<void> {
    await this.bridge.run("ShapeObjBringToFront");
  }

  async sendBack(): Promise<void> {
    await this.bridge.run("ShapeObjSendBack");
  }

  async sendToBack(): Promise<void> {
    await this.bridge.run("ShapeObjSendToBack");
  }

  async bringInFrontOfText(): Promise<void> {
    await this.bridge.run("ShapeObjBringInFrontOfText");
  }

  async sendBehindText(): Promise<void> {
    await this.bridge.run("ShapeObjCtrlSendBehindText");
  }
}

export class DocumentObjectMoveApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async up(): Promise<void> {
    await this.bridge.run("ShapeObjMoveUp");
  }

  async down(): Promise<void> {
    await this.bridge.run("ShapeObjMoveDown");
  }

  async left(): Promise<void> {
    await this.bridge.run("ShapeObjMoveLeft");
  }

  async right(): Promise<void> {
    await this.bridge.run("ShapeObjMoveRight");
  }
}

export class DocumentObjectResizeApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async up(): Promise<void> {
    await this.bridge.run("ShapeObjResizeUp");
  }

  async down(): Promise<void> {
    await this.bridge.run("ShapeObjResizeDown");
  }

  async left(): Promise<void> {
    await this.bridge.run("ShapeObjResizeLeft");
  }

  async right(): Promise<void> {
    await this.bridge.run("ShapeObjResizeRight");
  }
}

export class DocumentObjectStyleApi {
  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async copy(options: ObjectStyleCopyOptions = {}): Promise<void> {
    await this.bridge.execute("ShapeObjectCopy", createParameterSetPayload("ShapeObjectCopyPaste", createObjectStyleValues(options)));
  }

  async paste(options: ObjectStyleCopyOptions = {}): Promise<void> {
    await this.bridge.execute("ShapeObjectPaste", createParameterSetPayload("ShapeObjectCopyPaste", createObjectStyleValues(options)));
  }
}

function createObjectStyleValues(options: ObjectStyleCopyOptions): ParameterValues {
  const values: ParameterValues = {};

  setBooleanValue(values, "ShapeObjectLine", options.line);
  setBooleanValue(values, "ShapeObjectFill", options.fill);
  setBooleanValue(values, "ShapeObjectSize", options.size);
  setBooleanValue(values, "ShapeObjectShadow", options.shadow);
  setBooleanValue(values, "ShapeObjectPicEffect", options.pictureEffect);

  return values;
}

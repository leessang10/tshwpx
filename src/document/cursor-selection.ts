import type { CursorTextRange, HwpBridge } from "../bridges/types";
import { requireBridgeMethod } from "./bridge-methods";
import { DocumentCursorBoundaryApi } from "./cursor-common";

export class DocumentCursorSelectionApi {
  readonly extend: DocumentCursorSelectionExtendApi;

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "selectText">) {
    this.extend = new DocumentCursorSelectionExtendApi(bridge);
  }

  async start(): Promise<void> {
    await this.bridge.run("Select");
  }

  async all(): Promise<void> {
    await this.bridge.run("SelectAll");
  }

  async column(): Promise<void> {
    await this.bridge.run("SelectColumn");
  }

  async objectNext(): Promise<void> {
    await this.bridge.run("SelectCtrlFront");
  }

  async objectPrevious(): Promise<void> {
    await this.bridge.run("SelectCtrlReverse");
  }

  async cancel(): Promise<void> {
    await this.bridge.run("Cancel");
  }

  async range(range: CursorTextRange): Promise<boolean> {
    return await requireBridgeMethod(this.bridge.selectText, "SelectText")(range);
  }
}

export class DocumentCursorSelectionExtendApi {
  readonly document: DocumentCursorBoundaryApi;
  readonly list: DocumentCursorBoundaryApi;
  readonly line: DocumentCursorLineSelectionApi;
  readonly paragraph: DocumentCursorParagraphSelectionApi;
  readonly word: DocumentCursorWordSelectionApi;
  readonly position: DocumentCursorPositionSelectionApi;
  readonly direction: DocumentCursorDirectionSelectionApi;
  readonly page: DocumentCursorPageSelectionApi;
  readonly view: DocumentCursorViewSelectionApi;

  constructor(bridge: Pick<HwpBridge, "run">) {
    this.document = new DocumentCursorBoundaryApi(bridge, "MoveSelDocBegin", "MoveSelDocEnd");
    this.list = new DocumentCursorBoundaryApi(bridge, "MoveSelListBegin", "MoveSelListEnd");
    this.line = new DocumentCursorLineSelectionApi(bridge);
    this.paragraph = new DocumentCursorParagraphSelectionApi(bridge);
    this.word = new DocumentCursorWordSelectionApi(bridge);
    this.position = new DocumentCursorPositionSelectionApi(bridge);
    this.direction = new DocumentCursorDirectionSelectionApi(bridge);
    this.page = new DocumentCursorPageSelectionApi(bridge);
    this.view = new DocumentCursorViewSelectionApi(bridge);
  }

  async nextWord(): Promise<void> {
    await this.word.next();
  }

  async previousWord(): Promise<void> {
    await this.word.previous();
  }

  async documentEnd(): Promise<void> {
    await this.document.end();
  }

  async lineBegin(): Promise<void> {
    await this.line.begin();
  }
}

export class DocumentCursorLineSelectionApi extends DocumentCursorBoundaryApi {
  constructor(private readonly lineBridge: Pick<HwpBridge, "run">) {
    super(lineBridge, "MoveSelLineBegin", "MoveSelLineEnd");
  }

  async up(): Promise<void> {
    await this.lineBridge.run("MoveSelLineUp");
  }

  async down(): Promise<void> {
    await this.lineBridge.run("MoveSelLineDown");
  }
}

export class DocumentCursorParagraphSelectionApi extends DocumentCursorBoundaryApi {
  constructor(private readonly paragraphBridge: Pick<HwpBridge, "run">) {
    super(paragraphBridge, "MoveSelParaBegin", "MoveSelParaEnd");
  }

  async nextBegin(): Promise<void> {
    await this.paragraphBridge.run("MoveSelNextParaBegin");
  }

  async previousBegin(): Promise<void> {
    await this.paragraphBridge.run("MoveSelPrevParaBegin");
  }

  async previousEnd(): Promise<void> {
    await this.paragraphBridge.run("MoveSelPrevParaEnd");
  }
}

export class DocumentCursorWordSelectionApi extends DocumentCursorBoundaryApi {
  constructor(private readonly wordBridge: Pick<HwpBridge, "run">) {
    super(wordBridge, "MoveSelWordBegin", "MoveSelWordEnd");
  }

  async next(): Promise<void> {
    await this.wordBridge.run("MoveSelNextWord");
  }

  async previous(): Promise<void> {
    await this.wordBridge.run("MoveSelPrevWord");
  }
}

export class DocumentCursorPositionSelectionApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async next(): Promise<void> {
    await this.bridge.run("MoveSelNextPos");
  }

  async previous(): Promise<void> {
    await this.bridge.run("MoveSelPrevPos");
  }

  async nextChar(): Promise<void> {
    await this.bridge.run("MoveSelNextChar");
  }

  async previousChar(): Promise<void> {
    await this.bridge.run("MoveSelPrevChar");
  }
}

export class DocumentCursorDirectionSelectionApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async left(): Promise<void> {
    await this.bridge.run("MoveSelLeft");
  }

  async right(): Promise<void> {
    await this.bridge.run("MoveSelRight");
  }

  async up(): Promise<void> {
    await this.bridge.run("MoveSelUp");
  }

  async down(): Promise<void> {
    await this.bridge.run("MoveSelDown");
  }
}

export class DocumentCursorPageSelectionApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async up(): Promise<void> {
    await this.bridge.run("MoveSelPageUp");
  }

  async down(): Promise<void> {
    await this.bridge.run("MoveSelPageDown");
  }
}

export class DocumentCursorViewSelectionApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async up(): Promise<void> {
    await this.bridge.run("MoveSelViewUp");
  }

  async down(): Promise<void> {
    await this.bridge.run("MoveSelViewDown");
  }
}

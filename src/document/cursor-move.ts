import type { HwpBridge } from "../bridges/types";
import { requireBridgeMethod } from "./bridge-methods";
import { CURSOR_MOVE_TARGET_IDS, DocumentCursorBoundaryApi } from "./cursor-common";
import type { CursorMoveOptions, CursorMoveTarget } from "./types";

export class DocumentCursorMoveApi {
  readonly document: DocumentCursorBoundaryApi;
  readonly list: DocumentCursorBoundaryApi;
  readonly line: DocumentCursorLineApi;
  readonly paragraph: DocumentCursorParagraphApi;
  readonly word: DocumentCursorWordApi;
  readonly position: DocumentCursorPositionMoveApi;
  readonly char: DocumentCursorCharApi;
  readonly direction: DocumentCursorDirectionApi;
  readonly page: DocumentCursorPageApi;
  readonly view: DocumentCursorViewApi;
  readonly scroll: DocumentCursorScrollApi;
  readonly section: DocumentCursorSectionApi;
  readonly column: DocumentCursorColumnApi;
  readonly cell: DocumentCursorCellApi;

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "movePos">) {
    this.document = new DocumentCursorBoundaryApi(bridge, "MoveDocBegin", "MoveDocEnd");
    this.list = new DocumentCursorBoundaryApi(bridge, "MoveListBegin", "MoveListEnd");
    this.line = new DocumentCursorLineApi(bridge);
    this.paragraph = new DocumentCursorParagraphApi(bridge);
    this.word = new DocumentCursorWordApi(bridge);
    this.position = new DocumentCursorPositionMoveApi(bridge);
    this.char = new DocumentCursorCharApi(bridge);
    this.direction = new DocumentCursorDirectionApi(bridge);
    this.page = new DocumentCursorPageApi(bridge);
    this.view = new DocumentCursorViewApi(bridge);
    this.scroll = new DocumentCursorScrollApi(bridge);
    this.section = new DocumentCursorSectionApi(bridge);
    this.column = new DocumentCursorColumnApi(bridge);
    this.cell = new DocumentCursorCellApi(bridge);
  }

  async to(target: CursorMoveTarget, options: CursorMoveOptions = {}): Promise<boolean> {
    return await this.byId(CURSOR_MOVE_TARGET_IDS[target], options);
  }

  async byId(moveId: number, options: CursorMoveOptions = {}): Promise<boolean> {
    return await requireBridgeMethod(this.bridge.movePos, "MovePos")(moveId, options.para, options.pos);
  }
}

export class DocumentCursorLineApi extends DocumentCursorBoundaryApi {
  constructor(private readonly lineBridge: Pick<HwpBridge, "run">) {
    super(lineBridge, "MoveLineBegin", "MoveLineEnd");
  }

  async up(): Promise<void> {
    await this.lineBridge.run("MoveLineUp");
  }

  async down(): Promise<void> {
    await this.lineBridge.run("MoveLineDown");
  }
}

export class DocumentCursorParagraphApi extends DocumentCursorBoundaryApi {
  constructor(private readonly paragraphBridge: Pick<HwpBridge, "run">) {
    super(paragraphBridge, "MoveParaBegin", "MoveParaEnd");
  }

  async nextBegin(): Promise<void> {
    await this.paragraphBridge.run("MoveNextParaBegin");
  }

  async previousBegin(): Promise<void> {
    await this.paragraphBridge.run("MovePrevParaBegin");
  }

  async previousEnd(): Promise<void> {
    await this.paragraphBridge.run("MovePrevParaEnd");
  }
}

export class DocumentCursorWordApi extends DocumentCursorBoundaryApi {
  constructor(private readonly wordBridge: Pick<HwpBridge, "run">) {
    super(wordBridge, "MoveWordBegin", "MoveWordEnd");
  }

  async next(): Promise<void> {
    await this.wordBridge.run("MoveNextWord");
  }

  async previous(): Promise<void> {
    await this.wordBridge.run("MovePrevWord");
  }
}

export class DocumentCursorPositionMoveApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async next(): Promise<void> {
    await this.bridge.run("MoveNextPos");
  }

  async previous(): Promise<void> {
    await this.bridge.run("MovePrevPos");
  }

  async nextIncludingSubList(): Promise<void> {
    await this.bridge.run("MoveNextPosEx");
  }

  async previousIncludingSubList(): Promise<void> {
    await this.bridge.run("MovePrevPosEx");
  }
}

export class DocumentCursorCharApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async next(): Promise<void> {
    await this.bridge.run("MoveNextChar");
  }

  async previous(): Promise<void> {
    await this.bridge.run("MovePrevChar");
  }
}

export class DocumentCursorDirectionApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async left(): Promise<void> {
    await this.bridge.run("MoveLeft");
  }

  async right(): Promise<void> {
    await this.bridge.run("MoveRight");
  }

  async up(): Promise<void> {
    await this.bridge.run("MoveUp");
  }

  async down(): Promise<void> {
    await this.bridge.run("MoveDown");
  }
}

export class DocumentCursorPageApi extends DocumentCursorBoundaryApi {
  constructor(private readonly pageBridge: Pick<HwpBridge, "run">) {
    super(pageBridge, "MovePageBegin", "MovePageEnd");
  }

  async up(): Promise<void> {
    await this.pageBridge.run("MovePageUp");
  }

  async down(): Promise<void> {
    await this.pageBridge.run("MovePageDown");
  }
}

export class DocumentCursorViewApi extends DocumentCursorBoundaryApi {
  constructor(private readonly viewBridge: Pick<HwpBridge, "run">) {
    super(viewBridge, "MoveViewBegin", "MoveViewEnd");
  }

  async up(): Promise<void> {
    await this.viewBridge.run("MoveViewUp");
  }

  async down(): Promise<void> {
    await this.viewBridge.run("MoveViewDown");
  }
}

export class DocumentCursorScrollApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async up(): Promise<void> {
    await this.bridge.run("MoveScrollUp");
  }

  async down(): Promise<void> {
    await this.bridge.run("MoveScrollDown");
  }

  async next(): Promise<void> {
    await this.bridge.run("MoveScrollNext");
  }

  async previous(): Promise<void> {
    await this.bridge.run("MoveScrollPrev");
  }
}

export class DocumentCursorSectionApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async next(): Promise<void> {
    await this.bridge.run("MoveSectionDown");
  }

  async previous(): Promise<void> {
    await this.bridge.run("MoveSectionUp");
  }
}

export class DocumentCursorColumnApi extends DocumentCursorBoundaryApi {
  constructor(private readonly columnBridge: Pick<HwpBridge, "run">) {
    super(columnBridge, "MoveColumnBegin", "MoveColumnEnd");
  }

  async next(): Promise<void> {
    await this.columnBridge.run("MoveNextColumn");
  }

  async previous(): Promise<void> {
    await this.columnBridge.run("MovePrevColumn");
  }
}

export class DocumentCursorCellApi {
  constructor(private readonly bridge: Pick<HwpBridge, "movePos">) {}

  async left(): Promise<boolean> {
    return await this.move("cellLeft");
  }

  async right(): Promise<boolean> {
    return await this.move("cellRight");
  }

  async up(): Promise<boolean> {
    return await this.move("cellUp");
  }

  async down(): Promise<boolean> {
    return await this.move("cellDown");
  }

  async rowStart(): Promise<boolean> {
    return await this.move("cellStart");
  }

  async rowEnd(): Promise<boolean> {
    return await this.move("cellEnd");
  }

  async columnStart(): Promise<boolean> {
    return await this.move("cellTop");
  }

  async columnEnd(): Promise<boolean> {
    return await this.move("cellBottom");
  }

  private async move(target: CursorMoveTarget): Promise<boolean> {
    return await requireBridgeMethod(this.bridge.movePos, "MovePos")(CURSOR_MOVE_TARGET_IDS[target]);
  }
}

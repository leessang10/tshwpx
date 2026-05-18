import type { CursorPosition, CursorTextRange, HwpBridge } from "../bridges/types";
import { requireBridgeMethod } from "./bridge-methods";
import type { CursorMoveOptions, CursorMoveTarget } from "./types";

export class DocumentCursorApi {
  readonly move: DocumentCursorMoveApi;
  readonly position: DocumentCursorPositionApi;
  readonly selection: DocumentCursorSelectionApi;

  constructor(
    bridge: Pick<HwpBridge, "run" | "movePos" | "getPosBySet" | "setPosBySet" | "selectText">,
  ) {
    this.move = new DocumentCursorMoveApi(bridge);
    this.position = new DocumentCursorPositionApi(bridge);
    this.selection = new DocumentCursorSelectionApi(bridge);
  }
}

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

export class DocumentCursorPositionApi {
  constructor(private readonly bridge: Pick<HwpBridge, "getPosBySet" | "setPosBySet">) {}

  async get(): Promise<CursorPosition> {
    return await requireBridgeMethod(this.bridge.getPosBySet, "GetPosBySet")();
  }

  async set(position: CursorPosition): Promise<boolean> {
    return await requireBridgeMethod(this.bridge.setPosBySet, "SetPosBySet")(position);
  }
}

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

export class DocumentCursorBoundaryApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly beginActionId: string,
    private readonly endActionId: string,
  ) {}

  async begin(): Promise<void> {
    await this.bridge.run(this.beginActionId);
  }

  async end(): Promise<void> {
    await this.bridge.run(this.endActionId);
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

const CURSOR_MOVE_TARGET_IDS: Record<CursorMoveTarget, number> = {
  main: 0,
  currentList: 1,
  documentStart: 2,
  documentEnd: 3,
  listStart: 4,
  listEnd: 5,
  paragraphStart: 6,
  paragraphEnd: 7,
  wordStart: 8,
  wordEnd: 9,
  nextParagraph: 10,
  previousParagraph: 11,
  nextPosition: 12,
  previousPosition: 13,
  nextPositionEx: 14,
  previousPositionEx: 15,
  nextChar: 16,
  previousChar: 17,
  nextWord: 18,
  previousWord: 19,
  nextLine: 20,
  previousLine: 21,
  lineStart: 22,
  lineEnd: 23,
  parentList: 24,
  topLevelList: 25,
  rootList: 26,
  cellLeft: 100,
  cellRight: 101,
  cellUp: 102,
  cellDown: 103,
  cellStart: 104,
  cellEnd: 105,
  cellTop: 106,
  cellBottom: 107,
  screen: 200,
  scan: 201,
};

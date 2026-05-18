import type { CursorPosition, CursorTextRange, HwpBridge } from "./bridges/types";
import { ParameterSetsApi } from "./params";
import type { ParameterSetValues } from "./spec";

export type CharShapeOptions = {
  height?: number;
  bold?: boolean;
  italic?: boolean;
  faceName?: string;
  textColor?: number;
};

export type CharShapePresetColor = "black" | "blue" | "bluish" | "green" | "red" | "violet" | "white" | "yellow";

export type TableInsertOptions = {
  rows?: number;
  cols?: number;
  rowHeight?: readonly number[];
  colWidth?: readonly number[];
  cellInfo?: readonly number[];
  widthType?: number;
  heightType?: number;
  widthValue?: number;
  heightValue?: number;
  tableTemplateValue?: number;
  textSelect?: boolean;
};

export type TableCellSplitOptions = {
  rows?: number;
  cols?: number;
  distributeHeight?: boolean;
  mergeBeforeSplit?: boolean;
  keepAdjust?: boolean;
};

export type PageDeleteOptions = {
  range?: number;
  rangeCustom?: string;
  usingPageNumber?: boolean;
};

export type PageNumberingPositionOptions = {
  numberFormat?: number;
  userChar?: number;
  prefixChar?: number;
  suffixChar?: number;
  sideChar?: number;
  drawPos?: number;
  newNumber?: number;
};

export type PageSetupMargins = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

export type PageSetupOptions = {
  paperWidth?: number;
  paperHeight?: number;
  landscape?: boolean;
  margins?: PageSetupMargins;
  headerLength?: number;
  footerLength?: number;
  gutterLength?: number;
  gutterType?: number;
  applyTo?: number;
  applyClass?: number;
};

export type ParagraphShapeOptions = {
  leftMargin?: number;
  rightMargin?: number;
  indentation?: number;
  prevSpacing?: number;
  nextSpacing?: number;
  lineSpacingType?: number;
  lineSpacing?: number;
  alignType?: number;
  breakLatinWord?: number;
  breakNonLatinWord?: boolean;
  snapToGrid?: boolean;
  condense?: number;
  widowOrphan?: boolean;
  keepWithNext?: boolean;
  keepLinesTogether?: boolean;
  pageBreakBefore?: boolean;
  textAlignment?: number;
  fontLineHeight?: boolean;
  headingType?: number;
  level?: number;
  borderConnect?: boolean;
  borderText?: boolean;
  borderOffsetLeft?: number;
  borderOffsetRight?: number;
  borderOffsetTop?: number;
  borderOffsetBottom?: number;
  tailType?: boolean;
  lineWrap?: number;
};

export type ParagraphNumberingOptions = Pick<ParagraphShapeOptions, "level" | "headingType">;

export type ParagraphNumberingType = "none" | "outline" | "paragraph" | "bullet";

export type ParagraphNumberingSetOptions = ParagraphShapeOptions & {
  type?: ParagraphNumberingType;
};

export type CursorMoveTarget =
  | "main"
  | "currentList"
  | "documentStart"
  | "documentEnd"
  | "listStart"
  | "listEnd"
  | "paragraphStart"
  | "paragraphEnd"
  | "wordStart"
  | "wordEnd"
  | "nextParagraph"
  | "previousParagraph"
  | "nextPosition"
  | "previousPosition"
  | "nextPositionEx"
  | "previousPositionEx"
  | "nextChar"
  | "previousChar"
  | "nextWord"
  | "previousWord"
  | "nextLine"
  | "previousLine"
  | "lineStart"
  | "lineEnd"
  | "parentList"
  | "topLevelList"
  | "rootList"
  | "cellLeft"
  | "cellRight"
  | "cellUp"
  | "cellDown"
  | "cellStart"
  | "cellEnd"
  | "cellTop"
  | "cellBottom"
  | "screen"
  | "scan";

export type CursorMoveOptions = {
  para?: number;
  pos?: number;
};

export type StyleActionVersion = "modern" | "legacy";

export type StyleApplyOptions = {
  index: number;
  version?: StyleActionVersion;
};

export type StyleDeleteOptions = {
  target: number;
  alternation?: number;
};

export type StyleItemOptions = {
  type?: number;
  localName?: string;
  englishName?: string;
  next?: number;
  lockForm?: boolean;
  charShape?: ParameterSetValues;
  paraShape?: ParameterSetValues;
};

export class DocumentApi {
  readonly charShape: CharacterShapeApi;
  readonly cursor: DocumentCursorApi;
  readonly pages: DocumentPagesApi;
  readonly paragraph: DocumentParagraphApi;
  readonly styles: DocumentStylesApi;
  readonly tables: DocumentTablesApi;

  constructor(
    private readonly bridge: Pick<
      HwpBridge,
      "insertText" | "run" | "execute" | "movePos" | "getPosBySet" | "setPosBySet" | "selectText"
    >,
  ) {
    this.charShape = new CharacterShapeApi(bridge);
    this.cursor = new DocumentCursorApi(bridge);
    this.pages = new DocumentPagesApi(bridge);
    this.paragraph = new DocumentParagraphApi(bridge);
    this.styles = new DocumentStylesApi(bridge);
    this.tables = new DocumentTablesApi(bridge);
  }

  async insertText(text: string): Promise<void> {
    await this.bridge.insertText(text);
  }

  async setCharShape(options: CharShapeOptions): Promise<void> {
    await this.charShape.set(options);
  }
}

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

export class DocumentStylesApi {
  readonly numbering: DocumentStyleNumberingApi;
  readonly template: DocumentStyleTemplateApi;

  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {
    this.numbering = new DocumentStyleNumberingApi(bridge);
    this.template = new DocumentStyleTemplateApi(bridge);
  }

  async apply(input: number | StyleApplyOptions): Promise<void> {
    const options = normalizeStyleApplyInput(input);
    const actionId = options.version === "legacy" ? "Style" : "StyleEx";
    await this.executeStyle(actionId, options.index);
  }

  async add(index?: number): Promise<void> {
    await this.executeStyle("StyleAdd", index);
  }

  async edit(index: number): Promise<void> {
    await this.executeStyle("StyleEdit", index);
  }

  async delete(input: number | StyleDeleteOptions, alternation?: number): Promise<void> {
    const options = normalizeStyleDeleteInput(input, alternation);
    const values: Record<string, unknown> = { Target: options.target };

    if (options.alternation !== undefined) {
      values.Alternation = options.alternation;
    }

    await this.bridge.execute("StyleDelete", this.params.create("StyleDelete", values));
  }

  async changeToCurrentShape(options: StyleItemOptions): Promise<void> {
    await this.bridge.execute("StyleChangeToCurrentShape", this.params.create("StyleItem", createStyleItemValues(options)));
  }

  async clearCharStyle(): Promise<void> {
    await this.bridge.run("StyleClearCharStyle");
  }

  async shortcut(index: number): Promise<void> {
    if (!Number.isInteger(index) || index < 1 || index > 10) {
      throw new RangeError("Style shortcut index must be an integer from 1 to 10.");
    }

    await this.bridge.run(`StyleShortcut${index}`);
  }

  private async executeStyle(actionId: string, index: number | undefined): Promise<void> {
    const values = index === undefined ? {} : { Apply: index };
    await this.bridge.execute(actionId, this.params.create("Style", values));
  }
}

export class DocumentStyleNumberingApi {
  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async set(options: ParagraphNumberingSetOptions): Promise<void> {
    await this.bridge.execute(
      "StyleParaNumberBullet",
      this.params.create("ParaShape", createParagraphNumberingValues(options)),
    );
  }
}

export class DocumentStyleTemplateApi {
  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async open(fileName: string): Promise<void> {
    await this.bridge.execute("StyleTemplate", this.params.create("StyleTemplate", { FileName: fileName }));
  }
}

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

export class DocumentPagesApi {
  readonly move: DocumentPageMoveApi;
  readonly numbering: DocumentPageNumberingApi;
  readonly orientation: DocumentPageOrientationApi;
  readonly sections: DocumentPageSectionsApi;

  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {
    this.move = new DocumentPageMoveApi(bridge);
    this.numbering = new DocumentPageNumberingApi(bridge);
    this.orientation = new DocumentPageOrientationApi(bridge);
    this.sections = new DocumentPageSectionsApi(bridge);
  }

  async break(): Promise<void> {
    await this.bridge.run("BreakPage");
  }

  async copy(): Promise<void> {
    await this.bridge.run("CopyPage");
  }

  async paste(): Promise<void> {
    await this.bridge.run("PastePage");
  }

  async delete(options: PageDeleteOptions = {}): Promise<void> {
    await this.bridge.execute("DeletePage", this.params.create("DeletePage", createPageDeleteValues(options)));
  }

  async setup(options: PageSetupOptions = {}): Promise<void> {
    await this.bridge.execute("PageSetup", this.params.create("SecDef", createPageSetupValues(options)));
  }
}

export class DocumentPageSectionsApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async break(): Promise<void> {
    await this.bridge.run("BreakSection");
  }
}

export class DocumentPageMoveApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async begin(): Promise<void> {
    await this.bridge.run("MovePageBegin");
  }

  async end(): Promise<void> {
    await this.bridge.run("MovePageEnd");
  }

  async previous(): Promise<void> {
    await this.bridge.run("MovePageUp");
  }

  async next(): Promise<void> {
    await this.bridge.run("MovePageDown");
  }
}

export class DocumentPageNumberingApi {
  readonly position: DocumentPageNumberingPositionApi;

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {
    this.position = new DocumentPageNumberingPositionApi(bridge);
  }

  async insert(): Promise<void> {
    await this.bridge.run("InsertPageNum");
  }

  async recalculate(): Promise<void> {
    await this.bridge.run("RecalcPageCount");
  }
}

export class DocumentPageNumberingPositionApi {
  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async set(options: PageNumberingPositionOptions): Promise<void> {
    await this.bridge.execute("PageNumPos", this.params.create("PageNumPos", createPageNumberingPositionValues(options)));
  }
}

export class DocumentPageOrientationApi {
  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async landscape(): Promise<void> {
    await this.bridge.execute("PageLandscape", this.params.create("SecDef"));
  }

  async portrait(): Promise<void> {
    await this.bridge.execute("PagePortrait", this.params.create("SecDef"));
  }
}

export class DocumentTablesApi {
  readonly rows: DocumentTableRowsApi;
  readonly columns: DocumentTableColumnsApi;
  readonly cells: DocumentTableCellsApi;

  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {
    this.rows = new DocumentTableRowsApi(bridge);
    this.columns = new DocumentTableColumnsApi(bridge);
    this.cells = new DocumentTableCellsApi(bridge);
  }

  async insert(options: TableInsertOptions = {}): Promise<void> {
    const values: Record<string, unknown> = {};

    if (options.rows !== undefined) {
      values.Rows = options.rows;
    }

    if (options.cols !== undefined) {
      values.Cols = options.cols;
    }

    if (options.rowHeight !== undefined) {
      values.RowHeight = [...options.rowHeight];
    }

    if (options.colWidth !== undefined) {
      values.ColWidth = [...options.colWidth];
    }

    if (options.cellInfo !== undefined) {
      values.CellInfo = [...options.cellInfo];
    }

    if (options.widthType !== undefined) {
      values.WidthType = options.widthType;
    }

    if (options.heightType !== undefined) {
      values.HeightType = options.heightType;
    }

    if (options.widthValue !== undefined) {
      values.WidthValue = options.widthValue;
    }

    if (options.heightValue !== undefined) {
      values.HeightValue = options.heightValue;
    }

    if (options.tableTemplateValue !== undefined) {
      values.TableTemplateValue = options.tableTemplateValue;
    }

    if (options.textSelect !== undefined) {
      values.TextSelect = toHwpBoolean(options.textSelect);
    }

    await this.bridge.execute("TableCreate", this.params.create("TableCreation", values));
  }
}

export class DocumentTableRowsApi {
  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {}

  async insertAbove(count = 1): Promise<void> {
    await this.bridge.execute("TableInsertUpperRow", this.params.create("TableInsertLine", { Count: count }));
  }

  async insertBelow(count = 1): Promise<void> {
    await this.bridge.execute("TableInsertLowerRow", this.params.create("TableInsertLine", { Count: count }));
  }

  async append(): Promise<void> {
    await this.bridge.run("TableAppendRow");
  }

  async delete(): Promise<void> {
    await this.bridge.execute("TableDeleteRow", this.params.create("TableDeleteLine", { Type: 0 }));
  }
}

export class DocumentTableColumnsApi {
  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async insertLeft(count = 1): Promise<void> {
    await this.bridge.execute("TableInsertLeftColumn", this.params.create("TableInsertLine", { Count: count }));
  }

  async insertRight(count = 1): Promise<void> {
    await this.bridge.execute("TableInsertRightColumn", this.params.create("TableInsertLine", { Count: count }));
  }

  async delete(): Promise<void> {
    await this.bridge.execute("TableDeleteColumn", this.params.create("TableDeleteLine", { Type: 1 }));
  }
}

export class DocumentTableCellsApi {
  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {}

  async merge(): Promise<void> {
    await this.bridge.run("TableMergeCell");
  }

  async split(options: TableCellSplitOptions = {}): Promise<void> {
    const values: Record<string, unknown> = {};

    if (options.rows !== undefined) {
      values.Rows = options.rows;
    }

    if (options.cols !== undefined) {
      values.Cols = options.cols;
    }

    if (options.distributeHeight !== undefined) {
      values.DistributeHeight = toHwpBoolean(options.distributeHeight);
    }

    if (options.mergeBeforeSplit !== undefined) {
      values.Merge = toHwpBoolean(options.mergeBeforeSplit);
    }

    if (options.keepAdjust !== undefined) {
      values.Mode2 = toHwpBoolean(options.keepAdjust);
    }

    await this.bridge.execute("TableSplitCell", this.params.create("TableSplitCell", values));
  }

  async delete(): Promise<void> {
    await this.bridge.run("TableDeleteCell");
  }

  async distributeHeight(): Promise<void> {
    await this.bridge.run("TableDistributeCellHeight");
  }

  async distributeWidth(): Promise<void> {
    await this.bridge.run("TableDistributeCellWidth");
  }
}

export class CharacterShapeApi {
  readonly bold: CharacterShapeToggleApi;
  readonly centerline: CharacterShapeToggleApi;
  readonly dialog: CharacterShapeDialogApi;
  readonly emboss: CharacterShapeToggleApi;
  readonly engrave: CharacterShapeToggleApi;
  readonly height: CharacterShapeAdjustApi;
  readonly italic: CharacterShapeToggleApi;
  readonly language: CharacterShapeFocusApi;
  readonly faceName: CharacterShapeFaceNameApi;
  readonly normal: CharacterShapeApplyApi;
  readonly outline: CharacterShapeToggleApi;
  readonly shadow: CharacterShapeToggleApi;
  readonly spacing: CharacterShapeAdjustApi;
  readonly typeFace: CharacterShapeFocusApi;
  readonly textColor: CharacterShapeTextColorApi;
  readonly underline: CharacterShapeUnderlineApi;
  readonly width: CharacterShapeWidthApi;
  readonly script: CharacterShapeScriptApi;

  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {
    this.bold = new CharacterShapeToggleApi(bridge, "CharShapeBold");
    this.centerline = new CharacterShapeToggleApi(bridge, "CharShapeCenterline");
    this.dialog = new CharacterShapeDialogApi(bridge);
    this.emboss = new CharacterShapeToggleApi(bridge, "CharShapeEmboss");
    this.engrave = new CharacterShapeToggleApi(bridge, "CharShapeEngrave");
    this.height = new CharacterShapeAdjustApi(bridge, "CharShapeHeight", "CharShapeHeightIncrease", "CharShapeHeightDecrease");
    this.italic = new CharacterShapeToggleApi(bridge, "CharShapeItalic");
    this.language = new CharacterShapeFocusApi(bridge, "CharShapeLang");
    this.faceName = new CharacterShapeFaceNameApi(bridge);
    this.normal = new CharacterShapeApplyApi(bridge, "CharShapeNormal");
    this.outline = new CharacterShapeToggleApi(bridge, "CharShapeOutline");
    this.shadow = new CharacterShapeToggleApi(bridge, "CharShapeShadow");
    this.spacing = new CharacterShapeAdjustApi(
      bridge,
      "CharShapeSpacing",
      "CharShapeSpacingIncrease",
      "CharShapeSpacingDecrease",
    );
    this.typeFace = new CharacterShapeFocusApi(bridge, "CharShapeTypeFace");
    this.textColor = new CharacterShapeTextColorApi(bridge);
    this.underline = new CharacterShapeUnderlineApi(bridge);
    this.width = new CharacterShapeWidthApi(bridge);
    this.script = new CharacterShapeScriptApi(bridge);
  }

  async set(options: CharShapeOptions): Promise<void> {
    await this.bridge.execute("CharShape", this.params.create("CharShape", createCharShapeValues(options)));
  }
}

export class CharacterShapeToggleApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly actionId: string,
  ) {}

  async toggle(): Promise<void> {
    await this.bridge.run(this.actionId);
  }
}

export class CharacterShapeApplyApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly actionId: string,
  ) {}

  async apply(): Promise<void> {
    await this.bridge.run(this.actionId);
  }
}

export class CharacterShapeFocusApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly actionId: string,
  ) {}

  async focus(): Promise<void> {
    await this.bridge.run(this.actionId);
  }
}

export class CharacterShapeAdjustApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly focusActionId: string,
    private readonly increaseActionId: string,
    private readonly decreaseActionId: string,
  ) {}

  async focus(): Promise<void> {
    await this.bridge.run(this.focusActionId);
  }

  async increase(): Promise<void> {
    await this.bridge.run(this.increaseActionId);
  }

  async decrease(): Promise<void> {
    await this.bridge.run(this.decreaseActionId);
  }
}

export class CharacterShapeDialogApi {
  private readonly params = new ParameterSetsApi();

  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async open(options: CharShapeOptions = {}): Promise<void> {
    await this.bridge.execute("CharShapeDialog", this.params.create("CharShape", createCharShapeValues(options)));
  }

  async openWithoutBorder(options: CharShapeOptions = {}): Promise<void> {
    await this.bridge.execute(
      "CharShapeDialogWithoutBord",
      this.params.create("CharShape", createCharShapeValues(options)),
    );
  }
}

export class CharacterShapeFaceNameApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async next(): Promise<void> {
    await this.bridge.run("CharShapeNextFaceName");
  }

  async previous(): Promise<void> {
    await this.bridge.run("CharShapePrevFaceName");
  }
}

export class CharacterShapeTextColorApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async set(color: CharShapePresetColor): Promise<void> {
    await this.bridge.run(TEXT_COLOR_ACTIONS[color]);
  }
}

export class CharacterShapeUnderlineApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async toggle(): Promise<void> {
    await this.bridge.run("CharShapeUnderline");
  }
}

export class CharacterShapeWidthApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async focus(): Promise<void> {
    await this.bridge.run("CharShapeWidth");
  }

  async increase(): Promise<void> {
    await this.bridge.run("CharShapeWidthIncrease");
  }

  async decrease(): Promise<void> {
    await this.bridge.run("CharShapeWidthDecrease");
  }
}

export class CharacterShapeScriptApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async subscript(): Promise<void> {
    await this.bridge.run("CharShapeSubscript");
  }

  async superscript(): Promise<void> {
    await this.bridge.run("CharShapeSuperscript");
  }

  async cycleSuperSubscript(): Promise<void> {
    await this.bridge.run("CharShapeSuperSubscript");
  }
}

const FACE_NAME_ITEM_IDS = [
  "FaceNameHangul",
  "FaceNameLatin",
  "FaceNameHanja",
  "FaceNameJapanese",
  "FaceNameOther",
  "FaceNameSymbol",
  "FaceNameUser",
] as const;

const TEXT_COLOR_ACTIONS: Record<CharShapePresetColor, string> = {
  black: "CharShapeTextColorBlack",
  blue: "CharShapeTextColorBlue",
  bluish: "CharShapeTextColorBluish",
  green: "CharShapeTextColorGreen",
  red: "CharShapeTextColorRed",
  violet: "CharShapeTextColorViolet",
  white: "CharShapeTextColorWhite",
  yellow: "CharShapeTextColorYellow",
};

function createCharShapeValues(options: CharShapeOptions): Record<string, unknown> {
  const values: Record<string, unknown> = {};

  if (options.height !== undefined) {
    values.Height = options.height;
  }

  if (options.bold !== undefined) {
    values.Bold = toHwpBoolean(options.bold);
  }

  if (options.italic !== undefined) {
    values.Italic = toHwpBoolean(options.italic);
  }

  if (options.faceName !== undefined) {
    for (const itemId of FACE_NAME_ITEM_IDS) {
      values[itemId] = options.faceName;
    }
  }

  if (options.textColor !== undefined) {
    values.TextColor = options.textColor;
  }

  return values;
}

function createParagraphShapeValues(options: ParagraphShapeOptions): Record<string, unknown> {
  const values: Record<string, unknown> = {};

  setValue(values, "LeftMargin", options.leftMargin);
  setValue(values, "RightMargin", options.rightMargin);
  setValue(values, "Indentation", options.indentation);
  setValue(values, "PrevSpacing", options.prevSpacing);
  setValue(values, "NextSpacing", options.nextSpacing);
  setValue(values, "LineSpacingType", options.lineSpacingType);
  setValue(values, "LineSpacing", options.lineSpacing);
  setValue(values, "AlignType", options.alignType);
  setValue(values, "BreakLatinWord", options.breakLatinWord);
  setBooleanValue(values, "BreakNonLatinWord", options.breakNonLatinWord);
  setBooleanValue(values, "SnapToGrid", options.snapToGrid);
  setValue(values, "Condense", options.condense);
  setBooleanValue(values, "WidowOrphan", options.widowOrphan);
  setBooleanValue(values, "KeepWithNext", options.keepWithNext);
  setBooleanValue(values, "KeepLinesTogether", options.keepLinesTogether);
  setBooleanValue(values, "PagebreakBefore", options.pageBreakBefore);
  setValue(values, "TextAlignment", options.textAlignment);
  setBooleanValue(values, "FontLineHeight", options.fontLineHeight);
  setValue(values, "HeadingType", options.headingType);
  setValue(values, "Level", options.level);
  setBooleanValue(values, "BorderConnect", options.borderConnect);
  setBooleanValue(values, "BorderText", options.borderText);
  setValue(values, "BorderOffsetLeft", options.borderOffsetLeft);
  setValue(values, "BorderOffsetRight", options.borderOffsetRight);
  setValue(values, "BorderOffsetTop", options.borderOffsetTop);
  setValue(values, "BorderOffsetBottom", options.borderOffsetBottom);
  setBooleanValue(values, "TailType", options.tailType);
  setValue(values, "LineWrap", options.lineWrap);

  return values;
}

function createParagraphNumberingValues(options: ParagraphNumberingSetOptions): Record<string, unknown> {
  const values = createParagraphShapeValues(options);

  if (options.type !== undefined) {
    values.HeadingType = PARAGRAPH_NUMBERING_HEADING_TYPES[options.type];
  }

  return values;
}

function createStyleItemValues(options: StyleItemOptions): Record<string, unknown> {
  const values: Record<string, unknown> = {};

  setValue(values, "Type", options.type);
  setValue(values, "NameLocal", options.localName);
  setValue(values, "NameEng", options.englishName);
  setValue(values, "Next", options.next);
  setBooleanValue(values, "LockForm", options.lockForm);
  setValue(values, "CharShape", options.charShape);
  setValue(values, "ParaShape", options.paraShape);

  return values;
}

function createPageDeleteValues(options: PageDeleteOptions): Record<string, unknown> {
  const values: Record<string, unknown> = {};

  if (options.range !== undefined) {
    values.Range = options.range;
  }

  if (options.rangeCustom !== undefined) {
    values.RangeCustom = options.rangeCustom;
  }

  if (options.usingPageNumber !== undefined) {
    values.UsingPagenum = toHwpBoolean(options.usingPageNumber);
  }

  return values;
}

function createPageNumberingPositionValues(options: PageNumberingPositionOptions): Record<string, unknown> {
  const values: Record<string, unknown> = {};

  if (options.numberFormat !== undefined) {
    values.NumberFormat = options.numberFormat;
  }

  if (options.userChar !== undefined) {
    values.UserChar = options.userChar;
  }

  if (options.prefixChar !== undefined) {
    values.PrefixChar = options.prefixChar;
  }

  if (options.suffixChar !== undefined) {
    values.SuffixChar = options.suffixChar;
  }

  if (options.sideChar !== undefined) {
    values.SideChar = options.sideChar;
  }

  if (options.drawPos !== undefined) {
    values.DrawPos = options.drawPos;
  }

  if (options.newNumber !== undefined) {
    values.NewNumber = options.newNumber;
  }

  return values;
}

function createPageSetupValues(options: PageSetupOptions): Record<string, unknown> {
  const values: Record<string, unknown> = {};
  const pageDef: Record<string, unknown> = {};

  if (options.paperWidth !== undefined) {
    pageDef.PaperWidth = options.paperWidth;
  }

  if (options.paperHeight !== undefined) {
    pageDef.PaperHeight = options.paperHeight;
  }

  if (options.landscape !== undefined) {
    pageDef.Landscape = toHwpBoolean(options.landscape);
  }

  if (options.margins?.left !== undefined) {
    pageDef.LeftMargin = options.margins.left;
  }

  if (options.margins?.right !== undefined) {
    pageDef.RightMargin = options.margins.right;
  }

  if (options.margins?.top !== undefined) {
    pageDef.TopMargin = options.margins.top;
  }

  if (options.margins?.bottom !== undefined) {
    pageDef.BottomMargin = options.margins.bottom;
  }

  if (options.headerLength !== undefined) {
    pageDef.HeaderLen = options.headerLength;
  }

  if (options.footerLength !== undefined) {
    pageDef.FooterLen = options.footerLength;
  }

  if (options.gutterLength !== undefined) {
    pageDef.GutterLen = options.gutterLength;
  }

  if (options.gutterType !== undefined) {
    pageDef.GutterType = options.gutterType;
  }

  if (Object.keys(pageDef).length > 0) {
    values.PageDef = pageDef;
  }

  if (options.applyTo !== undefined) {
    values.ApplyTo = options.applyTo;
  }

  if (options.applyClass !== undefined) {
    values.ApplyClass = options.applyClass;
  }

  return values;
}

function toHwpBoolean(value: boolean): 0 | 1 {
  return value ? 1 : 0;
}

function setValue(values: Record<string, unknown>, key: string, value: unknown): void {
  if (value !== undefined) {
    values[key] = value;
  }
}

function setBooleanValue(values: Record<string, unknown>, key: string, value: boolean | undefined): void {
  if (value !== undefined) {
    values[key] = toHwpBoolean(value);
  }
}

function normalizeStyleApplyInput(input: number | StyleApplyOptions): StyleApplyOptions {
  if (typeof input === "number") {
    return { index: input };
  }

  return input;
}

function normalizeStyleDeleteInput(input: number | StyleDeleteOptions, alternation: number | undefined): StyleDeleteOptions {
  if (typeof input === "number") {
    return { target: input, alternation };
  }

  return input;
}

function requireBridgeMethod<T extends (...args: never[]) => unknown>(method: T | undefined, name: string): T {
  if (!method) {
    throw new Error(`The active HWP bridge does not support ${name}.`);
  }

  return method;
}

const PARAGRAPH_NUMBERING_HEADING_TYPES: Record<ParagraphNumberingType, number> = {
  none: 0,
  outline: 1,
  paragraph: 2,
  bullet: 3,
};

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

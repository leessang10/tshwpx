import type { ParameterSetValues } from "../spec";

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

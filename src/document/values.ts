import { setBooleanValue, setValue, type ParameterValues } from "../internal/parameter-values";
import type {
  PageDeleteOptions,
  PageNumberingPositionOptions,
  PageSetupOptions,
  ParagraphNumberingSetOptions,
  ParagraphNumberingType,
  ParagraphShapeOptions,
  StyleItemOptions,
} from "./types";

export function createParagraphShapeValues(options: ParagraphShapeOptions): ParameterValues {
  const values: ParameterValues = {};

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

export function createParagraphNumberingValues(options: ParagraphNumberingSetOptions): ParameterValues {
  const values = createParagraphShapeValues(options);

  if (options.type !== undefined) {
    values.HeadingType = PARAGRAPH_NUMBERING_HEADING_TYPES[options.type];
  }

  return values;
}

export function createStyleItemValues(options: StyleItemOptions): ParameterValues {
  const values: ParameterValues = {};

  setValue(values, "Type", options.type);
  setValue(values, "NameLocal", options.localName);
  setValue(values, "NameEng", options.englishName);
  setValue(values, "Next", options.next);
  setBooleanValue(values, "LockForm", options.lockForm);
  setValue(values, "CharShape", options.charShape);
  setValue(values, "ParaShape", options.paraShape);

  return values;
}

export function createPageDeleteValues(options: PageDeleteOptions): ParameterValues {
  const values: ParameterValues = {};

  setValue(values, "Range", options.range);
  setValue(values, "RangeCustom", options.rangeCustom);
  setBooleanValue(values, "UsingPagenum", options.usingPageNumber);

  return values;
}

export function createPageNumberingPositionValues(options: PageNumberingPositionOptions): ParameterValues {
  const values: ParameterValues = {};

  setValue(values, "NumberFormat", options.numberFormat);
  setValue(values, "UserChar", options.userChar);
  setValue(values, "PrefixChar", options.prefixChar);
  setValue(values, "SuffixChar", options.suffixChar);
  setValue(values, "SideChar", options.sideChar);
  setValue(values, "DrawPos", options.drawPos);
  setValue(values, "NewNumber", options.newNumber);

  return values;
}

export function createPageSetupValues(options: PageSetupOptions): ParameterValues {
  const values: ParameterValues = {};
  const pageDef: ParameterValues = {};

  setValue(pageDef, "PaperWidth", options.paperWidth);
  setValue(pageDef, "PaperHeight", options.paperHeight);
  setBooleanValue(pageDef, "Landscape", options.landscape);
  setValue(pageDef, "LeftMargin", options.margins?.left);
  setValue(pageDef, "RightMargin", options.margins?.right);
  setValue(pageDef, "TopMargin", options.margins?.top);
  setValue(pageDef, "BottomMargin", options.margins?.bottom);
  setValue(pageDef, "HeaderLen", options.headerLength);
  setValue(pageDef, "FooterLen", options.footerLength);
  setValue(pageDef, "GutterLen", options.gutterLength);
  setValue(pageDef, "GutterType", options.gutterType);

  if (Object.keys(pageDef).length > 0) {
    values.PageDef = pageDef;
  }

  setValue(values, "ApplyTo", options.applyTo);
  setValue(values, "ApplyClass", options.applyClass);

  return values;
}

export const PARAGRAPH_NUMBERING_HEADING_TYPES: Record<ParagraphNumberingType, number> = {
  none: 0,
  outline: 1,
  paragraph: 2,
  bullet: 3,
};

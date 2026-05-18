import type { HwpBridge } from "../bridges/types";
import {
  DocumentParagraphAlignApi,
  DocumentParagraphIndentationApi,
  DocumentParagraphLineSpacingApi,
  DocumentParagraphMarginApi,
  DocumentParagraphShapeApi,
  DocumentParagraphToggleApi,
} from "./paragraph-format";
import { DocumentParagraphNumberingApi } from "./paragraph-numbering";

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

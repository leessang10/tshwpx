import type { HwpBridge } from "../bridges/types";
import { CharacterShapeApi } from "./char-shape";
import { DocumentCursorApi } from "./cursor";
import { DocumentPagesApi } from "./pages";
import { DocumentParagraphApi } from "./paragraph";
import { DocumentStylesApi } from "./styles";
import { DocumentTablesApi } from "./tables";
import { DocumentTextApi } from "./text";
import type { SaveFormat } from "../app";
import { requireBridgeMethod } from "./bridge-methods";

type DocumentBridge = Pick<
  HwpBridge,
  | "insertText"
  | "run"
  | "execute"
  | "movePos"
  | "getPosBySet"
  | "setPosBySet"
  | "selectText"
> &
  Partial<Pick<HwpBridge, "save" | "saveAs" | "close">>;

export class DocumentApi {
  readonly charShape: CharacterShapeApi;
  readonly cursor: DocumentCursorApi;
  readonly pages: DocumentPagesApi;
  readonly paragraph: DocumentParagraphApi;
  readonly styles: DocumentStylesApi;
  readonly tables: DocumentTablesApi;
  readonly text: DocumentTextApi;

  constructor(private readonly bridge: DocumentBridge) {
    this.charShape = new CharacterShapeApi(bridge);
    this.cursor = new DocumentCursorApi(bridge);
    this.pages = new DocumentPagesApi(bridge);
    this.paragraph = new DocumentParagraphApi(bridge);
    this.styles = new DocumentStylesApi(bridge);
    this.tables = new DocumentTablesApi(bridge);
    this.text = new DocumentTextApi(bridge);
  }

  async save(): Promise<void> {
    await requireBridgeMethod(this.bridge.save, "Save").call(this.bridge);
  }

  async saveAs(path: string, format: SaveFormat = "HWP", arg = ""): Promise<void> {
    await requireBridgeMethod(this.bridge.saveAs, "SaveAs").call(this.bridge, path, format, arg);
  }

  async close(): Promise<void> {
    await requireBridgeMethod(this.bridge.close, "Close").call(this.bridge);
  }

}

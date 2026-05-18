import type { HwpBridge } from "../bridges/types";
import { CharacterShapeApi } from "./char-shape";
import { DocumentCursorApi } from "./cursor";
import { DocumentPagesApi } from "./pages";
import { DocumentParagraphApi } from "./paragraph";
import { DocumentStylesApi } from "./styles";
import { DocumentTablesApi } from "./tables";
import type { CharShapeOptions } from "./types";

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

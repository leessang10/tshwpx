import type { HwpBridge } from "../bridges/types";
import { DocumentCursorMoveApi } from "./cursor-move";
import { DocumentCursorPositionApi } from "./cursor-position";
import { DocumentCursorSelectionApi } from "./cursor-selection";

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

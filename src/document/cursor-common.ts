import type { HwpBridge } from "../bridges/types";
import type { CursorMoveTarget } from "./types";

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

export const CURSOR_MOVE_TARGET_IDS: Record<CursorMoveTarget, number> = {
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

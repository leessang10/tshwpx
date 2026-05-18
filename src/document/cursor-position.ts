import type { CursorPosition, HwpBridge } from "../bridges/types";
import { requireBridgeMethod } from "./bridge-methods";

export class DocumentCursorPositionApi {
  constructor(private readonly bridge: Pick<HwpBridge, "getPosBySet" | "setPosBySet">) {}

  async get(): Promise<CursorPosition> {
    return await requireBridgeMethod(this.bridge.getPosBySet, "GetPosBySet")();
  }

  async set(position: CursorPosition): Promise<boolean> {
    return await requireBridgeMethod(this.bridge.setPosBySet, "SetPosBySet")(position);
  }
}

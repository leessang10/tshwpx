import { HwpAutomationError } from "../com/errors";
import type { HwpBridge } from "../bridges/types";
import type { CursorPosition, CursorTextRange } from "../bridges/types";

export class LowLevelApi {
  constructor(
    private readonly bridge: Pick<
      HwpBridge,
      "run" | "execute" | "movePos" | "getPosBySet" | "setPos" | "setPosBySet" | "selectText"
    >,
  ) {}

  async run(actionName: string): Promise<void> {
    try {
      await this.bridge.run(actionName);
    } catch (error) {
      throw new HwpAutomationError("ACTION_FAILED", `Failed to run HWP action: ${actionName}`, error);
    }
  }

  async execute(actionName: string, parameterSet?: unknown): Promise<boolean> {
    try {
      return await this.bridge.execute(actionName, parameterSet);
    } catch (error) {
      throw new HwpAutomationError("ACTION_FAILED", `Failed to execute HWP action: ${actionName}`, error);
    }
  }

  async movePos(moveId: number, para?: number, pos?: number): Promise<boolean> {
    try {
      return await requireBridgeMethod(this.bridge.movePos, "MovePos")(moveId, para, pos);
    } catch (error) {
      throw new HwpAutomationError("ACTION_FAILED", `Failed to move HWP cursor with MovePos: ${moveId}`, error);
    }
  }

  async getPosBySet(): Promise<CursorPosition> {
    try {
      return await requireBridgeMethod(this.bridge.getPosBySet, "GetPosBySet")();
    } catch (error) {
      throw new HwpAutomationError("ACTION_FAILED", "Failed to get HWP cursor position.", error);
    }
  }

  async setPos(position: CursorPosition): Promise<void> {
    try {
      await requireBridgeMethod(this.bridge.setPos, "SetPos")(position);
    } catch (error) {
      throw new HwpAutomationError("ACTION_FAILED", "Failed to set HWP cursor position.", error);
    }
  }

  async setPosBySet(position: CursorPosition): Promise<boolean> {
    try {
      return await requireBridgeMethod(this.bridge.setPosBySet, "SetPosBySet")(position);
    } catch (error) {
      throw new HwpAutomationError("ACTION_FAILED", "Failed to set HWP cursor position by ParameterSet.", error);
    }
  }

  async selectText(range: CursorTextRange): Promise<boolean> {
    try {
      return await requireBridgeMethod(this.bridge.selectText, "SelectText")(range);
    } catch (error) {
      throw new HwpAutomationError("ACTION_FAILED", "Failed to select HWP text range.", error);
    }
  }
}

function requireBridgeMethod<T extends (...args: never[]) => unknown>(method: T | undefined, name: string): T {
  if (!method) {
    throw new HwpAutomationError("ACTION_FAILED", `The active HWP bridge does not support ${name}.`);
  }

  return method;
}

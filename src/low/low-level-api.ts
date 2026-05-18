import { HwpAutomationError } from "../com/errors";
import type { HwpBridge } from "../bridges/types";

export class LowLevelApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {}

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
}

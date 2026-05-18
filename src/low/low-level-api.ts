import { HwpAutomationError } from "../com/errors";
import type { HActionLike, HwpComObject } from "../com/types";

export class LowLevelApi {
  readonly HAction: HActionLike;
  readonly HParameterSet: Record<string, unknown>;

  constructor(private readonly raw: HwpComObject) {
    if (!raw.HAction) {
      throw new HwpAutomationError("HWP_NOT_INSTALLED", "HWP HAction is not available.");
    }

    this.HAction = raw.HAction;
    this.HParameterSet = raw.HParameterSet ?? {};
  }

  run(actionName: string): void {
    try {
      const ok = this.HAction.Run(actionName);
      if (ok === false) {
        throw new Error(`HAction.Run returned false for ${actionName}`);
      }
    } catch (error) {
      throw new HwpAutomationError("ACTION_FAILED", `Failed to run HWP action: ${actionName}`, error);
    }
  }

  execute(actionName: string, parameterSet?: unknown): boolean {
    try {
      const ok = this.HAction.Execute(actionName, parameterSet);
      if (ok === false) {
        throw new Error(`HAction.Execute returned false for ${actionName}`);
      }
      return ok;
    } catch (error) {
      throw new HwpAutomationError("ACTION_FAILED", `Failed to execute HWP action: ${actionName}`, error);
    }
  }
}

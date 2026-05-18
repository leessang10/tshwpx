import type { HwpBridge } from "./bridges/types";
import { HwpAutomationError } from "./com/errors";
import { actionDefinitions } from "./spec";
import type { ActionDefinition } from "./spec";

export class ActionsApi {
  private readonly actionMap = new Map(actionDefinitions.map((action) => [action.id, action]));

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {}

  list(): readonly ActionDefinition[] {
    return actionDefinitions;
  }

  get(actionId: string): ActionDefinition | undefined {
    return this.actionMap.get(actionId);
  }

  has(actionId: string): boolean {
    return this.actionMap.has(actionId);
  }

  async run(actionId: string): Promise<void> {
    this.requireAction(actionId);
    await this.bridge.run(actionId);
  }

  async execute(actionId: string, parameterSet?: unknown): Promise<boolean> {
    this.requireAction(actionId);
    return await this.bridge.execute(actionId, parameterSet);
  }

  private requireAction(actionId: string): ActionDefinition {
    const action = this.get(actionId);
    if (!action) {
      throw new HwpAutomationError("ACTION_FAILED", `Unknown HWP action: ${actionId}`);
    }

    return action;
  }
}

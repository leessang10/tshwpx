import { HwpAutomationError } from "./com/errors";
import { parameterSetDefinitions } from "./spec";
import type { ParameterSetDefinition, ParameterSetPayload, ParameterSetValues } from "./spec";

const PARAMETER_SET_MAP = new Map(parameterSetDefinitions.map((parameterSet) => [parameterSet.id, parameterSet]));
const PARAMETER_SET_ITEM_IDS = new Map(
  parameterSetDefinitions.map((parameterSet) => [
    parameterSet.id,
    new Set(parameterSet.items.map((item) => item.id)),
  ]),
);

export class ParameterSetsApi {
  list(): readonly ParameterSetDefinition[] {
    return parameterSetDefinitions;
  }

  get(parameterSetId: string): ParameterSetDefinition | undefined {
    return PARAMETER_SET_MAP.get(parameterSetId);
  }

  has(parameterSetId: string): boolean {
    return PARAMETER_SET_MAP.has(parameterSetId);
  }

  create(parameterSetId: string, values: ParameterSetValues = {}): ParameterSetPayload {
    this.requireParameterSet(parameterSetId);
    const itemIds = PARAMETER_SET_ITEM_IDS.get(parameterSetId);

    for (const itemId of Object.keys(values)) {
      if (!itemIds?.has(itemId)) {
        throw new HwpAutomationError("ACTION_FAILED", `Unknown item for ${parameterSetId}: ${itemId}`);
      }
    }

    return {
      parameterSetId,
      values: { ...values },
    };
  }

  private requireParameterSet(parameterSetId: string): ParameterSetDefinition {
    const parameterSet = this.get(parameterSetId);
    if (!parameterSet) {
      throw new HwpAutomationError("ACTION_FAILED", `Unknown HWP parameter set: ${parameterSetId}`);
    }

    return parameterSet;
  }
}

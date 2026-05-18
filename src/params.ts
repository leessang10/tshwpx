import { HwpAutomationError } from "./com/errors";
import { parameterSetDefinitions } from "./spec";
import type { ParameterSetDefinition, ParameterSetPayload, ParameterSetValues } from "./spec";

export class ParameterSetsApi {
  private readonly parameterSetMap = new Map(parameterSetDefinitions.map((parameterSet) => [parameterSet.id, parameterSet]));

  list(): readonly ParameterSetDefinition[] {
    return parameterSetDefinitions;
  }

  get(parameterSetId: string): ParameterSetDefinition | undefined {
    return this.parameterSetMap.get(parameterSetId);
  }

  has(parameterSetId: string): boolean {
    return this.parameterSetMap.has(parameterSetId);
  }

  create(parameterSetId: string, values: ParameterSetValues = {}): ParameterSetPayload {
    const definition = this.requireParameterSet(parameterSetId);
    const itemIds = new Set(definition.items.map((item) => item.id));

    for (const itemId of Object.keys(values)) {
      if (!itemIds.has(itemId)) {
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

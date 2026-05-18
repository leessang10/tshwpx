import { HwpAutomationError } from "../com/errors";
import { parameterSetDefinitions } from "../spec";
import type { ParameterSetDefinition, ParameterSetPayload, ParameterSetValues } from "../spec";

const PARAMETER_SET_MAP = new Map(parameterSetDefinitions.map((parameterSet) => [parameterSet.id, parameterSet]));
const PARAMETER_SET_ITEM_IDS = new Map(
  parameterSetDefinitions.map((parameterSet) => [
    parameterSet.id,
    new Set(parameterSet.items.map((item) => item.id)),
  ]),
);

export function listParameterSetDefinitions(): readonly ParameterSetDefinition[] {
  return parameterSetDefinitions;
}

export function getParameterSetDefinition(parameterSetId: string): ParameterSetDefinition | undefined {
  return PARAMETER_SET_MAP.get(parameterSetId);
}

export function createParameterSetPayload(
  parameterSetId: string,
  values: ParameterSetValues = {},
): ParameterSetPayload {
  requireParameterSet(parameterSetId);
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

function requireParameterSet(parameterSetId: string): ParameterSetDefinition {
  const parameterSet = getParameterSetDefinition(parameterSetId);
  if (!parameterSet) {
    throw new HwpAutomationError("ACTION_FAILED", `Unknown HWP parameter set: ${parameterSetId}`);
  }

  return parameterSet;
}

import type { ParameterSetPayload } from "./types";

export function isParameterSetPayload(value: unknown): value is ParameterSetPayload {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<ParameterSetPayload>;
  return typeof candidate.parameterSetId === "string" && !!candidate.values && typeof candidate.values === "object";
}

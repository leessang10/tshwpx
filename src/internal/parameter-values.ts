export type ParameterValues = Record<string, unknown>;

export function toHwpBoolean(value: boolean): 0 | 1 {
  return value ? 1 : 0;
}

export function setValue(values: ParameterValues, key: string, value: unknown): void {
  if (value !== undefined) {
    values[key] = value;
  }
}

export function setBooleanValue(values: ParameterValues, key: string, value: boolean | undefined): void {
  if (value !== undefined) {
    values[key] = toHwpBoolean(value);
  }
}

export function setArrayValue<T>(values: ParameterValues, key: string, value: readonly T[] | undefined): void {
  if (value !== undefined) {
    values[key] = [...value];
  }
}


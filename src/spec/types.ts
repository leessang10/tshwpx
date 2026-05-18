export type ActionDefinition = {
  readonly id: string;
  readonly parameterSetId?: string;
  readonly description: string;
  readonly notes?: string;
  readonly sourcePage: number;
};

export type ParameterItemDefinition = {
  readonly id: string;
  readonly type?: string;
  readonly subType?: string;
  readonly description: string;
};

export type ParameterSetDefinition = {
  readonly id: string;
  readonly description: string;
  readonly sourcePage: number;
  readonly items: readonly ParameterItemDefinition[];
};

export type HwpEventDefinition = {
  readonly id: string;
  readonly returnType?: string;
  readonly description: string;
  readonly sourcePage: number;
};

export type ParameterSetValues = Record<string, unknown>;

export type ParameterSetPayload = {
  readonly parameterSetId: string;
  readonly values: ParameterSetValues;
};

export type HActionLike = {
  Run(actionName: string): boolean;
  Execute(actionName: string, parameterSet?: unknown): boolean;
};

export type HwpComObject = {
  HAction?: HActionLike;
  HParameterSet?: Record<string, unknown>;
  RegisterModule?: (moduleType: string, moduleName: string) => boolean;
  Quit?: () => void;
  Open?: (...args: unknown[]) => boolean;
  Save?: (...args: unknown[]) => boolean;
  SaveAs?: (...args: unknown[]) => boolean;
  XHwpWindows?: {
    Item(index: number): {
      Visible?: boolean;
    };
  };
};


export type HActionLike = {
  Run(actionName: string): boolean;
  Execute(actionName: string, parameterSet?: unknown): boolean;
};

export type HwpComObject = {
  HAction?: HActionLike;
  HParameterSet?: Record<string, unknown>;
  ProcessID?: number;
  RegisterModule?: (moduleType: string, moduleName: string) => boolean;
  Quit?: () => void;
  Open?: (...args: unknown[]) => boolean;
  Save?: (...args: unknown[]) => boolean;
  SaveAs?: (...args: unknown[]) => boolean;
  MovePos?: (...args: unknown[]) => boolean;
  GetPosBySet?: () => unknown;
  SetPos?: (list: number, para: number, pos: number) => void;
  SetPosBySet?: (pos: unknown) => boolean;
  SelectText?: (spara: number, spos: number, epara: number, epos: number) => boolean;
  InsertPicture?: (
    path: string,
    embed: boolean,
    sizeOption: number,
    reverse: boolean,
    watermark: boolean,
    effect: number,
    width: number,
    height: number,
  ) => unknown;
  XHwpWindows?: {
    Item(index: number): {
      Visible?: boolean;
    };
  };
};


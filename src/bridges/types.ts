import type { OpenOptions, SaveFormat } from "../app";

export type CursorPosition = {
  list: number;
  para: number;
  pos: number;
};

export type CursorTextPosition = {
  para: number;
  pos: number;
};

export type CursorTextRange = {
  start: CursorTextPosition;
  end: CursorTextPosition;
};

export type BridgePictureInsertOptions = {
  embed?: boolean;
  sizeOption?: number;
  reverse?: boolean;
  watermark?: boolean;
  effect?: number;
  width?: number;
  height?: number;
};

export type HwpBridge = {
  readonly kind: string;
  readonly raw?: unknown;

  init?(): Promise<void>;
  setVisible(visible: boolean): Promise<void>;
  getPID(): Promise<number>;
  registerSecurityModule?(): Promise<void>;
  open(path: string, options?: OpenOptions): Promise<void>;
  save(): Promise<void>;
  saveAs(path: string, format?: SaveFormat, arg?: string): Promise<void>;
  close(): Promise<void>;
  quit(): Promise<void>;
  insertText(text: string): Promise<void>;
  insertPicture?(path: string, options?: BridgePictureInsertOptions): Promise<void>;
  run(actionName: string): Promise<void>;
  execute(actionName: string, parameterSet?: unknown): Promise<boolean>;
  movePos?(moveId: number, para?: number, pos?: number): Promise<boolean>;
  getPosBySet?(): Promise<CursorPosition>;
  setPos?(position: CursorPosition): Promise<void>;
  setPosBySet?(position: CursorPosition): Promise<boolean>;
  selectText?(range: CursorTextRange): Promise<boolean>;
};

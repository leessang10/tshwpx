import type { OpenOptions, SaveFormat } from "../app";

export type HwpBridge = {
  readonly kind: string;
  readonly raw?: unknown;

  init?(): Promise<void>;
  setVisible(visible: boolean): Promise<void>;
  registerSecurityModule?(): Promise<void>;
  open(path: string, options?: OpenOptions): Promise<void>;
  save(): Promise<void>;
  saveAs(path: string, format?: SaveFormat, arg?: string): Promise<void>;
  close(): Promise<void>;
  quit(): Promise<void>;
  insertText(text: string): Promise<void>;
  run(actionName: string): Promise<void>;
  execute(actionName: string, parameterSet?: unknown): Promise<boolean>;
};

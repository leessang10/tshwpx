import type { HwpBridge } from "../bridges/types";

export type FileOpenParameterOptions = {
  saveFileName?: string;
  openFormat?: string;
  openReadOnly?: boolean;
  openFlag?: number;
  saveOverwrite?: boolean;
  modifiedFlag?: boolean;
  argument?: string;
  saveCMFDoc30?: boolean;
  saveHwp97?: boolean;
  saveDistribute?: boolean;
  saveDRMDoc?: boolean;
};

export type FilePasswordOptions = {
  password?: string;
  fullRange?: boolean;
  ask?: boolean;
  level?: number;
  readAsk?: boolean;
  readPassword?: string;
  writePassword?: string;
  readOnly?: boolean;
};

export type FileSecurityOptions = {
  password?: string;
  noPrint?: boolean;
  noCopy?: boolean;
};

export type FileImageOptions = {
  fileName?: string;
  range?: number;
  rangeCustom?: string;
  printToFile?: boolean;
  printerName?: string;
  numCopy?: number;
};

export type FileBridge = Pick<HwpBridge, "open" | "save" | "saveAs" | "close" | "quit" | "run" | "execute">;

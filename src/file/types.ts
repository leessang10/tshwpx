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

export type FilePrintRange =
  | "all"
  | "current"
  | "fromCurrent"
  | "toCurrent"
  | "custom"
  | "selection"
  | "document"
  | "section"
  | number;

export type FilePrintImageFormat = "bmp" | "gif" | "png" | "jpg" | "wmf" | number;

export type FilePrintOptions = {
  fileName?: string;
  range?: FilePrintRange;
  rangeCustom?: string;
  includeLinkedDocuments?: boolean;
  numCopy?: number;
  collate?: boolean;
  printMethod?: number;
  printerPaperSize?: number;
  printerPaperWidth?: number;
  printerPaperLength?: number;
  printerName?: string;
  printToFile?: boolean;
  reverseOrder?: boolean;
  pause?: number;
  printImage?: boolean;
  printDrawObject?: boolean;
  printClickHere?: boolean;
  printCropMark?: boolean;
  printWallpaper?: boolean;
  lastBlankPage?: boolean;
  binderHoleType?: number;
  evenOddPageType?: number;
  zoomX?: number;
  zoomY?: number;
  flags?: number;
  device?: number;
  printFormObject?: boolean;
  printMarkPen?: boolean;
  printMemo?: boolean;
  printMemoContents?: boolean;
  printRevision?: boolean;
  userOrder?: boolean;
  overlapSize?: number;
  usingPageNumber?: boolean;
  printBarcode?: boolean;
  printPronounce?: boolean;
  printColorSet?: number;
  withoutBlank?: number;
};

export type FilePrintImageOptions = {
  fileName?: string;
  format?: FilePrintImageFormat;
  colorDepth?: number;
  resolution?: number;
  range?: FilePrintRange;
  width?: number;
  height?: number;
};

export type FileBridge = Pick<HwpBridge, "open" | "save" | "saveAs" | "close" | "quit" | "run" | "execute">;

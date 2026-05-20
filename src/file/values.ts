import { setBooleanValue, setValue, type ParameterValues } from "../internal/parameter-values";
import type {
  FileImageOptions,
  FileOpenParameterOptions,
  FilePasswordOptions,
  FilePrintImageFormat,
  FilePrintImageOptions,
  FilePrintOptions,
  FilePrintRange,
  FileSecurityOptions,
} from "./types";

const FILE_PRINT_RANGE_VALUES: Record<Exclude<FilePrintRange, number>, number> = {
  all: 0,
  current: 1,
  fromCurrent: 2,
  toCurrent: 3,
  custom: 4,
  selection: 5,
  document: 6,
  section: 7,
};

const FILE_PRINT_IMAGE_FORMAT_VALUES: Record<Exclude<FilePrintImageFormat, number>, number> = {
  bmp: 1,
  gif: 2,
  png: 3,
  jpg: 4,
  wmf: 5,
};

export function createFileOpenValues(options: FileOpenParameterOptions): ParameterValues {
  const values: ParameterValues = {};

  setValue(values, "SaveFileName", options.saveFileName);
  setValue(values, "OpenFormat", options.openFormat);
  setBooleanValue(values, "OpenReadOnly", options.openReadOnly);
  setValue(values, "OpenFlag", options.openFlag);
  setBooleanValue(values, "SaveOverWrite", options.saveOverwrite);
  setBooleanValue(values, "ModifiedFlag", options.modifiedFlag);
  setValue(values, "Argument", options.argument);
  setBooleanValue(values, "SaveCMFDoc30", options.saveCMFDoc30);
  setBooleanValue(values, "SaveHwp97", options.saveHwp97);
  setBooleanValue(values, "SaveDistribute", options.saveDistribute);
  setBooleanValue(values, "SaveDRMDoc", options.saveDRMDoc);

  return values;
}

export function createPasswordValues(options: FilePasswordOptions): ParameterValues {
  const values: ParameterValues = {};

  setValue(values, "String", options.password);
  setBooleanValue(values, "FullRange", options.fullRange);
  setBooleanValue(values, "Ask", options.ask);
  setValue(values, "Level", options.level);
  setBooleanValue(values, "RWAsk", options.readAsk);
  setValue(values, "ReadString", options.readPassword);
  setValue(values, "WriteString", options.writePassword);
  setBooleanValue(values, "ReadOnly", options.readOnly);

  return values;
}

export function createFileSecurityValues(options: FileSecurityOptions): ParameterValues {
  const values: ParameterValues = {};

  setValue(values, "Password", options.password);
  setBooleanValue(values, "NoPrint", options.noPrint);
  setBooleanValue(values, "NoCopy", options.noCopy);

  return values;
}

export function createFileImageValues(options: FileImageOptions): ParameterValues {
  const values: ParameterValues = {};

  setValue(values, "FileName", options.fileName);
  setValue(values, "Range", options.range);
  setValue(values, "RangeCustom", options.rangeCustom);
  setBooleanValue(values, "PrintToFile", options.printToFile);
  setValue(values, "PrinterName", options.printerName);
  setValue(values, "NumCopy", options.numCopy);

  return values;
}

export function createFilePrintValues(options: FilePrintOptions): ParameterValues {
  const values: ParameterValues = {};

  setValue(values, "FileName", options.fileName);
  setValue(values, "Range", mapFilePrintRange(options.range));
  setValue(values, "RangeCustom", options.rangeCustom);
  setBooleanValue(values, "RangeIncludeLinkedDoc", options.includeLinkedDocuments);
  setValue(values, "NumCopy", options.numCopy);
  setBooleanValue(values, "Collate", options.collate);
  setValue(values, "PrintMethod", options.printMethod);
  setValue(values, "PrinterPaperSize", options.printerPaperSize);
  setValue(values, "PrinterPaperWidth", options.printerPaperWidth);
  setValue(values, "PrinterPaperLength", options.printerPaperLength);
  setValue(values, "PrinterName", options.printerName);
  setBooleanValue(values, "PrintToFile", options.printToFile);
  setBooleanValue(values, "ReverseOrder", options.reverseOrder);
  setValue(values, "Pause", options.pause);
  setBooleanValue(values, "PrintImage", options.printImage);
  setBooleanValue(values, "PrintDrawObj", options.printDrawObject);
  setBooleanValue(values, "PrintClickHere", options.printClickHere);
  setBooleanValue(values, "PrintCropMark", options.printCropMark);
  setBooleanValue(values, "IdcPrintWallPaper", options.printWallpaper);
  setBooleanValue(values, "LastBlankPage", options.lastBlankPage);
  setValue(values, "BinderHoleType", options.binderHoleType);
  setValue(values, "EvenOddPageType", options.evenOddPageType);
  setValue(values, "ZoomX", options.zoomX);
  setValue(values, "ZoomY", options.zoomY);
  setValue(values, "Flags", options.flags);
  setValue(values, "Device", options.device);
  setBooleanValue(values, "PrintFormObj", options.printFormObject);
  setBooleanValue(values, "PrintMarkPen", options.printMarkPen);
  setBooleanValue(values, "PrintMemo", options.printMemo);
  setBooleanValue(values, "PrintMemoContents", options.printMemoContents);
  setBooleanValue(values, "PrintRevision", options.printRevision);
  setBooleanValue(values, "UserOrder", options.userOrder);
  setValue(values, "OverlapSize", options.overlapSize);
  setBooleanValue(values, "UsingPagenum", options.usingPageNumber);
  setBooleanValue(values, "PrintBarcode", options.printBarcode);
  setBooleanValue(values, "PrintPronounce", options.printPronounce);
  setValue(values, "PrintColorSet", options.printColorSet);
  setValue(values, "PrintWithoutBlank", options.withoutBlank);

  return values;
}

export function createFilePrintImageValues(options: FilePrintImageOptions): ParameterValues {
  const values: ParameterValues = {};

  setValue(values, "FileName", options.fileName);
  setValue(values, "Format", mapFilePrintImageFormat(options.format));
  setValue(values, "ColorDepth", options.colorDepth);
  setValue(values, "Resolution", options.resolution);
  setValue(values, "Range", mapFilePrintRange(options.range));
  setValue(values, "Width", options.width);
  setValue(values, "Height", options.height);

  return values;
}

function mapFilePrintRange(range: FilePrintRange | undefined): number | undefined {
  if (range === undefined) {
    return undefined;
  }

  return typeof range === "number" ? range : FILE_PRINT_RANGE_VALUES[range];
}

function mapFilePrintImageFormat(format: FilePrintImageFormat | undefined): number | undefined {
  if (format === undefined) {
    return undefined;
  }

  return typeof format === "number" ? format : FILE_PRINT_IMAGE_FORMAT_VALUES[format];
}

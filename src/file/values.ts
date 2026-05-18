import { setBooleanValue, setValue, type ParameterValues } from "../internal/parameter-values";
import type { FileImageOptions, FileOpenParameterOptions, FilePasswordOptions, FileSecurityOptions } from "./types";

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

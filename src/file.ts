import type { OpenOptions, SaveFormat } from "./app";
import type { HwpBridge } from "./bridges/types";
import { HwpAutomationError } from "./com/errors";
import { ParameterSetsApi } from "./params";

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

type FileBridge = Pick<HwpBridge, "open" | "save" | "saveAs" | "close" | "quit" | "run" | "execute">;

export class FileApi {
  readonly dialog: FileDialogApi;
  readonly image: FileImageApi;
  readonly password: FilePasswordApi;
  readonly preview: FilePreviewApi;
  readonly security: FileSecurityApi;
  readonly template: FileTemplateApi;

  constructor(
    private readonly bridge: FileBridge,
    private readonly ensureReady: () => Promise<void>,
    private readonly waitReady: () => Promise<void> = ensureReady,
  ) {
    this.dialog = new FileDialogApi(bridge, ensureReady);
    this.image = new FileImageApi(bridge, ensureReady);
    this.password = new FilePasswordApi(bridge, ensureReady);
    this.preview = new FilePreviewApi(bridge, ensureReady);
    this.security = new FileSecurityApi(bridge, ensureReady);
    this.template = new FileTemplateApi(bridge, ensureReady);
  }

  async open(path: string, options: OpenOptions = {}): Promise<void> {
    await this.fileOperation("open", () => this.bridge.open(path, options));
  }

  async save(): Promise<void> {
    await this.fileOperation("save", () => this.bridge.save());
  }

  async saveAs(path: string, format: SaveFormat = "HWP", arg = ""): Promise<void> {
    await this.fileOperation("saveAs", () => this.bridge.saveAs(path, format, arg));
  }

  async close(): Promise<void> {
    await this.fileOperation("close", () => this.bridge.close());
  }

  async quit(): Promise<void> {
    await this.waitReady();
    await this.bridge.quit();
  }

  async new(): Promise<void> {
    await runFileAction(this.bridge, this.ensureReady, "FileNew");
  }

  private async fileOperation(name: string, operation: () => Promise<unknown>): Promise<void> {
    try {
      await this.ensureReady();
      await operation();
    } catch (error) {
      throw new HwpAutomationError("FILE_OPERATION_FAILED", `HWP file operation failed: ${name}`, error);
    }
  }
}

export class FileDialogApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly ensureReady: () => Promise<void>,
  ) {}

  async open(): Promise<void> {
    await runFileAction(this.bridge, this.ensureReady, "FileOpen");
  }

  async recent(): Promise<void> {
    await runFileAction(this.bridge, this.ensureReady, "FileOpenMRU");
  }

  async saveAs(): Promise<void> {
    await runFileAction(this.bridge, this.ensureReady, "FileSaveAs");
  }

  async saveOptions(): Promise<void> {
    await runFileAction(this.bridge, this.ensureReady, "FileSaveOptionDlg");
  }
}

export class FilePreviewApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly ensureReady: () => Promise<void>,
  ) {}

  async open(): Promise<void> {
    await runFileAction(this.bridge, this.ensureReady, "FilePreview");
  }
}

export class FileTemplateApi {
  private readonly params = new ParameterSetsApi();

  constructor(
    private readonly bridge: Pick<HwpBridge, "execute">,
    private readonly ensureReady: () => Promise<void>,
  ) {}

  async open(options: FileOpenParameterOptions = {}): Promise<void> {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "FileTemplate",
      this.params.create("FileOpen", createFileOpenValues(options)),
    );
  }
}

export class FilePasswordApi {
  readonly readWrite: FileReadWritePasswordApi;
  private readonly params = new ParameterSetsApi();

  constructor(
    private readonly bridge: Pick<HwpBridge, "execute">,
    private readonly ensureReady: () => Promise<void>,
  ) {
    this.readWrite = new FileReadWritePasswordApi(bridge, ensureReady);
  }

  async set(options: FilePasswordOptions): Promise<void> {
    await this.executePasswordAction("FilePassword", options);
  }

  async change(options: FilePasswordOptions): Promise<void> {
    await this.executePasswordAction("FilePasswordChange", options);
  }

  private async executePasswordAction(actionId: string, options: FilePasswordOptions): Promise<void> {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      actionId,
      this.params.create("Password", createPasswordValues(options)),
    );
  }
}

export class FileReadWritePasswordApi {
  private readonly params = new ParameterSetsApi();

  constructor(
    private readonly bridge: Pick<HwpBridge, "execute">,
    private readonly ensureReady: () => Promise<void>,
  ) {}

  async set(options: FilePasswordOptions): Promise<void> {
    await this.executePasswordAction("FileRWPasswordNew", options);
  }

  async change(options: FilePasswordOptions): Promise<void> {
    await this.executePasswordAction("FileRWPasswordChange", options);
  }

  private async executePasswordAction(actionId: string, options: FilePasswordOptions): Promise<void> {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      actionId,
      this.params.create("Password", createPasswordValues(options)),
    );
  }
}

export class FileSecurityApi {
  private readonly params = new ParameterSetsApi();

  constructor(
    private readonly bridge: Pick<HwpBridge, "execute">,
    private readonly ensureReady: () => Promise<void>,
  ) {}

  async set(options: FileSecurityOptions): Promise<void> {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "FileSetSecurity",
      this.params.create("FileSetSecurity", createFileSecurityValues(options)),
    );
  }
}

export class FileImageApi {
  private readonly params = new ParameterSetsApi();

  constructor(
    private readonly bridge: Pick<HwpBridge, "execute">,
    private readonly ensureReady: () => Promise<void>,
  ) {}

  async save(options: FileImageOptions = {}): Promise<void> {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "FileSaveAsImage",
      this.params.create("Print", createFileImageValues(options)),
    );
  }

  async options(options: FileImageOptions = {}): Promise<void> {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "FileSaveAsImageOption",
      this.params.create("Print", createFileImageValues(options)),
    );
  }
}

function createFileOpenValues(options: FileOpenParameterOptions): Record<string, unknown> {
  const values: Record<string, unknown> = {};

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

function createPasswordValues(options: FilePasswordOptions): Record<string, unknown> {
  const values: Record<string, unknown> = {};

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

function createFileSecurityValues(options: FileSecurityOptions): Record<string, unknown> {
  const values: Record<string, unknown> = {};

  setValue(values, "Password", options.password);
  setBooleanValue(values, "NoPrint", options.noPrint);
  setBooleanValue(values, "NoCopy", options.noCopy);

  return values;
}

function createFileImageValues(options: FileImageOptions): Record<string, unknown> {
  const values: Record<string, unknown> = {};

  setValue(values, "FileName", options.fileName);
  setValue(values, "Range", options.range);
  setValue(values, "RangeCustom", options.rangeCustom);
  setBooleanValue(values, "PrintToFile", options.printToFile);
  setValue(values, "PrinterName", options.printerName);
  setValue(values, "NumCopy", options.numCopy);

  return values;
}

async function runFileAction(
  bridge: Pick<HwpBridge, "run">,
  ensureReady: () => Promise<void>,
  actionId: string,
): Promise<void> {
  await ensureReady();
  await bridge.run(actionId);
}

async function executeFileAction(
  bridge: Pick<HwpBridge, "execute">,
  ensureReady: () => Promise<void>,
  actionId: string,
  parameterSet: unknown,
): Promise<void> {
  await ensureReady();
  await bridge.execute(actionId, parameterSet);
}

function setValue(values: Record<string, unknown>, key: string, value: unknown): void {
  if (value !== undefined) {
    values[key] = value;
  }
}

function setBooleanValue(values: Record<string, unknown>, key: string, value: boolean | undefined): void {
  if (value !== undefined) {
    values[key] = value ? 1 : 0;
  }
}

import type { OpenOptions, SaveFormat } from "../app";
import { HwpAutomationError } from "../com/errors";
import { FileDialogApi } from "./dialog";
import { FileImageApi } from "./image";
import { FilePasswordApi } from "./password";
import { FilePreviewApi } from "./preview";
import { FileSecurityApi } from "./security";
import { FileTemplateApi } from "./template";
import { runFileAction } from "./helpers";
import type { FileBridge } from "./types";

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

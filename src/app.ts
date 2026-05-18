import { createHwpObject } from "./com/bridge";
import { HwpAutomationError } from "./com/errors";
import type { HwpComObject } from "./com/types";
import { DocumentApi } from "./doc";
import { LowLevelApi } from "./low/low-level-api";

export type SaveFormat = "HWP" | "HWPX" | "PDF";

export type OpenOptions = {
  format?: string;
  arg?: string;
};

export type AppOptions = {
  visible?: boolean;
  reuseExisting?: boolean;
  registerSecurityModule?: boolean;
  createObject?: () => HwpComObject;
};

export class App {
  readonly raw: HwpComObject;
  readonly low: LowLevelApi;
  readonly doc: DocumentApi;

  constructor(options: AppOptions = {}) {
    this.raw = options.createObject?.() ?? createHwpObject();
    this.low = new LowLevelApi(this.raw);
    this.doc = new DocumentApi(this.low);

    if (options.visible !== undefined) {
      this.setVisible(options.visible);
    }

    if (options.registerSecurityModule) {
      this.registerSecurityModule();
    }
  }

  setVisible(visible: boolean): void {
    const window = this.raw.XHwpWindows?.Item(0);
    if (window) {
      window.Visible = visible;
    }
  }

  open(path: string, options: OpenOptions = {}): void {
    this.fileOperation("open", () => this.raw.Open?.(path, options.format ?? "", options.arg ?? ""));
  }

  save(): void {
    this.fileOperation("save", () => this.raw.Save?.());
  }

  saveAs(path: string, format: SaveFormat = "HWP", arg = ""): void {
    this.fileOperation("saveAs", () => this.raw.SaveAs?.(path, format, arg));
  }

  close(): void {
    this.low.run("FileClose");
  }

  quit(): void {
    this.raw.Quit?.();
  }

  private fileOperation(name: string, operation: () => unknown): void {
    try {
      const ok = operation();
      if (ok === false) {
        throw new Error(`${name} returned false`);
      }
    } catch (error) {
      throw new HwpAutomationError("FILE_OPERATION_FAILED", `HWP file operation failed: ${name}`, error);
    }
  }

  private registerSecurityModule(): void {
    try {
      const ok = this.raw.RegisterModule?.("FilePathCheckDLL", "FilePathCheckerModule");
      if (ok === false) {
        throw new Error("RegisterModule returned false");
      }
    } catch (error) {
      throw new HwpAutomationError(
        "SECURITY_MODULE_FAILED",
        "Failed to register the Hancom HWP automation security module.",
        error,
      );
    }
  }
}

export const Hwp = App;

import { HwpAutomationError } from "./com/errors";
import type { HwpComObject } from "./com/types";
import { ComObjectBridge } from "./bridges/com-object";
import { PowerShellBridge } from "./bridges/powershell";
import type { HwpBridge } from "./bridges/types";
import { DocumentApi } from "./doc";
import { FileApi } from "./file";

export type SaveFormat = "HWP" | "HWPX" | "PDF";

export type OpenOptions = {
  format?: string;
  arg?: string;
};

export type AppOptions = {
  visible?: boolean;
  reuseExisting?: boolean;
  registerSecurityModule?: boolean;
  bridge?: HwpBridge;
  createObject?: () => HwpComObject;
};

export class App {
  readonly bridge: HwpBridge;
  readonly raw: unknown;
  readonly doc: DocumentApi;
  readonly file: FileApi;
  readonly ready: Promise<void>;

  constructor(options: AppOptions = {}) {
    this.bridge = options.bridge ?? (options.createObject ? new ComObjectBridge(options.createObject()) : new PowerShellBridge());
    this.raw = this.bridge.raw ?? this.bridge;
    this.doc = new DocumentApi(this.bridge);
    this.file = new FileApi(
      this.bridge,
      () => this.ensureReady(),
      () => this.ready,
    );
    this.ready = this.initialize(options);
  }

  async setVisible(visible: boolean): Promise<void> {
    await this.ensureReady();
    await this.bridge.setVisible(visible);
  }

  async open(path: string, options: OpenOptions = {}): Promise<void> {
    await this.file.open(path, options);
  }

  async save(): Promise<void> {
    await this.file.save();
  }

  async saveAs(path: string, format: SaveFormat = "HWP", arg = ""): Promise<void> {
    await this.file.saveAs(path, format, arg);
  }

  async close(): Promise<void> {
    await this.file.close();
  }

  async quit(): Promise<void> {
    await this.file.quit();
  }

  private async initialize(options: AppOptions): Promise<void> {
    if (options.visible === undefined && !options.registerSecurityModule) {
      return;
    }

    await this.bridge.init?.();

    if (options.visible !== undefined) {
      await this.bridge.setVisible(options.visible);
    }

    if (options.registerSecurityModule) {
      await this.registerSecurityModule();
    }
  }

  private async ensureReady(): Promise<void> {
    await this.ready;
    await this.bridge.init?.();
  }

  private async registerSecurityModule(): Promise<void> {
    try {
      await this.bridge.registerSecurityModule?.();
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

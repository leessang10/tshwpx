import type { HwpBridge } from "../bridges/types";
import { runFileAction } from "./helpers";

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

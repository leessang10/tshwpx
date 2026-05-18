import type { HwpBridge } from "../bridges/types";
import { runFileAction } from "./helpers";

export class FilePreviewApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly ensureReady: () => Promise<void>,
  ) {}

  async open(): Promise<void> {
    await runFileAction(this.bridge, this.ensureReady, "FilePreview");
  }
}

import type { HwpBridge } from "../bridges/types";
import { executeFileAction, FILE_PARAMS } from "./helpers";
import type { FileImageOptions } from "./types";
import { createFileImageValues } from "./values";

export class FileImageApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "execute">,
    private readonly ensureReady: () => Promise<void>,
  ) {}

  async save(options: FileImageOptions = {}): Promise<void> {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "FileSaveAsImage",
      FILE_PARAMS.create("Print", createFileImageValues(options)),
    );
  }

  async options(options: FileImageOptions = {}): Promise<void> {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "FileSaveAsImageOption",
      FILE_PARAMS.create("Print", createFileImageValues(options)),
    );
  }
}

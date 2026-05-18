import type { HwpBridge } from "../bridges/types";
import { createParameterSetPayload } from "../internal/parameter-sets";
import { executeFileAction } from "./helpers";
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
      createParameterSetPayload("Print", createFileImageValues(options)),
    );
  }

  async options(options: FileImageOptions = {}): Promise<void> {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "FileSaveAsImageOption",
      createParameterSetPayload("Print", createFileImageValues(options)),
    );
  }
}

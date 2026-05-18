import type { HwpBridge } from "../bridges/types";
import { createParameterSetPayload } from "../internal/parameter-sets";
import { executeFileAction } from "./helpers";
import type { FileOpenParameterOptions } from "./types";
import { createFileOpenValues } from "./values";

export class FileTemplateApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "execute">,
    private readonly ensureReady: () => Promise<void>,
  ) {}

  async open(options: FileOpenParameterOptions = {}): Promise<void> {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "FileTemplate",
      createParameterSetPayload("FileOpen", createFileOpenValues(options)),
    );
  }
}

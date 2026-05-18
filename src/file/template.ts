import type { HwpBridge } from "../bridges/types";
import { executeFileAction, FILE_PARAMS } from "./helpers";
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
      FILE_PARAMS.create("FileOpen", createFileOpenValues(options)),
    );
  }
}

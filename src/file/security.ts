import type { HwpBridge } from "../bridges/types";
import { executeFileAction, FILE_PARAMS } from "./helpers";
import type { FileSecurityOptions } from "./types";
import { createFileSecurityValues } from "./values";

export class FileSecurityApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "execute">,
    private readonly ensureReady: () => Promise<void>,
  ) {}

  async set(options: FileSecurityOptions): Promise<void> {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "FileSetSecurity",
      FILE_PARAMS.create("FileSetSecurity", createFileSecurityValues(options)),
    );
  }
}

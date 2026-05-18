import type { HwpBridge } from "../bridges/types";
import { createParameterSetPayload } from "../internal/parameter-sets";
import { executeFileAction } from "./helpers";
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
      createParameterSetPayload("FileSetSecurity", createFileSecurityValues(options)),
    );
  }
}

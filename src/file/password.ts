import type { HwpBridge } from "../bridges/types";
import { executePasswordAction } from "./helpers";
import type { FilePasswordOptions } from "./types";

export class FilePasswordApi {
  readonly readWrite: FileReadWritePasswordApi;

  constructor(
    private readonly bridge: Pick<HwpBridge, "execute">,
    private readonly ensureReady: () => Promise<void>,
  ) {
    this.readWrite = new FileReadWritePasswordApi(bridge, ensureReady);
  }

  async set(options: FilePasswordOptions): Promise<void> {
    await executePasswordAction(this.bridge, this.ensureReady, "FilePassword", options);
  }

  async change(options: FilePasswordOptions): Promise<void> {
    await executePasswordAction(this.bridge, this.ensureReady, "FilePasswordChange", options);
  }
}

export class FileReadWritePasswordApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "execute">,
    private readonly ensureReady: () => Promise<void>,
  ) {}

  async set(options: FilePasswordOptions): Promise<void> {
    await executePasswordAction(this.bridge, this.ensureReady, "FileRWPasswordNew", options);
  }

  async change(options: FilePasswordOptions): Promise<void> {
    await executePasswordAction(this.bridge, this.ensureReady, "FileRWPasswordChange", options);
  }
}

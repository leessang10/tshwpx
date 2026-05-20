import type { HwpBridge } from "../bridges/types";
import { createParameterSetPayload } from "../internal/parameter-sets";
import { executeFileAction } from "./helpers";
import type { FilePrintImageOptions, FilePrintOptions } from "./types";
import { createFilePrintImageValues, createFilePrintValues } from "./values";

export class FilePrintApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "execute">,
    private readonly ensureReady: () => Promise<void>,
  ) {}

  async print(options: FilePrintOptions = {}): Promise<void> {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "Print",
      createParameterSetPayload("Print", createFilePrintValues(options)),
    );
  }

  async setup(options: FilePrintOptions = {}): Promise<void> {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "PrintSetup",
      createParameterSetPayload("Print", createFilePrintValues(options)),
    );
  }

  async pdf(options: FilePrintOptions = {}): Promise<void> {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "PrintToPDF",
      createParameterSetPayload("Print", createFilePrintValues(options)),
    );
  }

  async image(options: FilePrintImageOptions = {}): Promise<void> {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "PrintToImage",
      createParameterSetPayload("PrintToImage", createFilePrintImageValues(options)),
    );
  }
}

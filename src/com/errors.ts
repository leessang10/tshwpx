export type HwpAutomationErrorCode =
  | "UNSUPPORTED_PLATFORM"
  | "COM_BRIDGE_NOT_FOUND"
  | "HWP_NOT_INSTALLED"
  | "ACTION_FAILED"
  | "FILE_OPERATION_FAILED"
  | "SECURITY_MODULE_FAILED";

export class HwpAutomationError extends Error {
  readonly code: HwpAutomationErrorCode;

  constructor(code: HwpAutomationErrorCode, message: string, cause?: unknown) {
    super(message, { cause });
    this.name = "HwpAutomationError";
    this.code = code;
  }
}

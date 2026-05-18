import { HwpAutomationError } from "./com/errors";
import { LowLevelApi } from "./low/low-level-api";

type InsertTextParameterSet = {
  Text: string;
  HSet: unknown;
};

export class DocumentApi {
  constructor(private readonly low: LowLevelApi) {}

  insertText(text: string): void {
    const parameterSet = this.low.HParameterSet.HInsertText as InsertTextParameterSet | undefined;

    if (!parameterSet) {
      throw new HwpAutomationError("ACTION_FAILED", "HInsertText parameter set is not available.");
    }

    parameterSet.Text = text;
    this.low.execute("InsertText", parameterSet.HSet);
  }
}

import type { HwpComObject } from "../com/types";
import { isParameterSetPayload } from "../spec";
import type { OpenOptions, SaveFormat } from "../app";
import type { HwpBridge } from "./types";

export class ComObjectBridge implements HwpBridge {
  readonly kind = "com-object";
  readonly raw: HwpComObject;

  constructor(raw: HwpComObject) {
    this.raw = raw;
  }

  async setVisible(visible: boolean): Promise<void> {
    const window = this.raw.XHwpWindows?.Item(0);
    if (window) {
      window.Visible = visible;
    }
  }

  async registerSecurityModule(): Promise<void> {
    const ok = this.raw.RegisterModule?.("FilePathCheckDLL", "FilePathCheckerModule");
    if (ok === false) {
      throw new Error("RegisterModule returned false");
    }
  }

  async open(path: string, options: OpenOptions = {}): Promise<void> {
    const ok = this.raw.Open?.(path, options.format ?? "", options.arg ?? "");
    if (ok === false) {
      throw new Error("Open returned false");
    }
  }

  async save(): Promise<void> {
    const ok = this.raw.Save?.();
    if (ok === false) {
      throw new Error("Save returned false");
    }
  }

  async saveAs(path: string, format: SaveFormat = "HWP", arg = ""): Promise<void> {
    const ok = this.raw.SaveAs?.(path, format, arg);
    if (ok === false) {
      throw new Error("SaveAs returned false");
    }
  }

  async close(): Promise<void> {
    await this.run("FileClose");
  }

  async quit(): Promise<void> {
    this.raw.Quit?.();
  }

  async insertText(text: string): Promise<void> {
    const parameterSet = this.raw.HParameterSet?.HInsertText as { Text: string; HSet: unknown } | undefined;
    if (!parameterSet) {
      throw new Error("HInsertText parameter set is not available.");
    }

    parameterSet.Text = text;
    await this.execute("InsertText", parameterSet.HSet);
  }

  async run(actionName: string): Promise<void> {
    const ok = this.raw.HAction?.Run(actionName);
    if (ok === false) {
      throw new Error(`HAction.Run returned false for ${actionName}`);
    }
  }

  async execute(actionName: string, parameterSet?: unknown): Promise<boolean> {
    const resolvedParameterSet = this.resolveParameterSet(parameterSet);
    const ok = this.raw.HAction?.Execute(actionName, resolvedParameterSet);
    if (ok === false) {
      throw new Error(`HAction.Execute returned false for ${actionName}`);
    }
    return ok ?? true;
  }

  private resolveParameterSet(parameterSet?: unknown): unknown {
    if (!isParameterSetPayload(parameterSet)) {
      return parameterSet;
    }

    const rawParameterSet = this.raw.HParameterSet?.[parameterSet.parameterSetId] as
      | (Record<string, unknown> & { HSet?: unknown })
      | undefined;
    if (!rawParameterSet) {
      throw new Error(`HParameterSet.${parameterSet.parameterSetId} is not available.`);
    }

    for (const [key, value] of Object.entries(parameterSet.values)) {
      rawParameterSet[key] = value;
    }

    return rawParameterSet.HSet;
  }
}

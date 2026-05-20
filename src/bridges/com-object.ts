import type { HwpComObject } from "../com/types";
import { isParameterSetPayload } from "../spec";
import type { OpenOptions, SaveFormat } from "../app";
import type { BridgePictureInsertOptions, HwpBridge } from "./types";
import type { CursorPosition, CursorTextRange } from "./types";

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

  async getPID(): Promise<number> {
    const processId = this.raw.ProcessID;
    if (typeof processId === "number") {
      return processId;
    }

    throw new Error("HWP process ID is not available from this COM object.");
  }

  async registerSecurityModule(): Promise<void> {
    const ok = this.raw.RegisterModule?.("FilePathCheckDLL", "FilePathCheckerModuleExample");
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

  async insertPicture(path: string, options: BridgePictureInsertOptions = {}): Promise<void> {
    const insertPicture = this.raw.InsertPicture;
    if (typeof insertPicture !== "function") {
      throw new Error("HWP InsertPicture method is unavailable.");
    }

    const result = insertPicture.call(
      this.raw,
      path,
      options.embed ?? true,
      options.sizeOption ?? 0,
      options.reverse ?? false,
      options.watermark ?? false,
      options.effect ?? 0,
      options.width ?? 0,
      options.height ?? 0,
    );
    if (result === false) {
      throw new Error("HWP InsertPicture returned false.");
    }
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

  async movePos(moveId: number, para?: number, pos?: number): Promise<boolean> {
    if (!this.raw.MovePos) {
      throw new Error("MovePos is not available.");
    }

    const ok =
      para !== undefined && pos !== undefined
        ? this.raw.MovePos(moveId, para, pos)
        : this.raw.MovePos(moveId);
    if (ok === false) {
      throw new Error(`MovePos returned false for ${moveId}`);
    }
    return ok ?? true;
  }

  async getPosBySet(): Promise<CursorPosition> {
    const positionSet = this.raw.GetPosBySet?.();
    if (!isComItemSet(positionSet)) {
      throw new Error("GetPosBySet is not available.");
    }

    return {
      list: Number(positionSet.Item("List")),
      para: Number(positionSet.Item("Para")),
      pos: Number(positionSet.Item("Pos")),
    };
  }

  async setPos(position: CursorPosition): Promise<void> {
    if (!this.raw.SetPos) {
      throw new Error("SetPos is not available.");
    }

    this.raw.SetPos(position.list, position.para, position.pos);
  }

  async setPosBySet(position: CursorPosition): Promise<boolean> {
    if (!this.raw.SetPosBySet) {
      throw new Error("SetPosBySet is not available.");
    }

    const rawParameterSet = this.raw.HParameterSet?.ListParaPos as
      | (Record<string, unknown> & { HSet?: unknown })
      | undefined;
    if (!rawParameterSet) {
      throw new Error("HParameterSet.ListParaPos is not available.");
    }

    rawParameterSet.List = position.list;
    rawParameterSet.Para = position.para;
    rawParameterSet.Pos = position.pos;

    const ok = this.raw.SetPosBySet(rawParameterSet.HSet);
    if (ok === false) {
      throw new Error("SetPosBySet returned false.");
    }

    return ok ?? true;
  }

  async selectText(range: CursorTextRange): Promise<boolean> {
    if (!this.raw.SelectText) {
      throw new Error("SelectText is not available.");
    }

    const ok = this.raw.SelectText(range.start.para, range.start.pos, range.end.para, range.end.pos);
    if (ok === false) {
      throw new Error("SelectText returned false.");
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

    this.applyParameterSetValues(rawParameterSet, parameterSet.values);

    return rawParameterSet.HSet;
  }

  private applyParameterSetValues(target: Record<string, unknown>, values: Record<string, unknown>): void {
    for (const [key, value] of Object.entries(values)) {
      if (isNestedParameterSetValue(value)) {
        const nestedSet = this.createNestedParameterSet(target, key);
        this.applyParameterSetValues(nestedSet, value);
        continue;
      }

      target[key] = value;
    }
  }

  private createNestedParameterSet(target: Record<string, unknown>, itemId: string): Record<string, unknown> {
    const createItemSet = target.CreateItemSet;
    if (typeof createItemSet !== "function") {
      throw new Error(`Nested HWP parameter set is not available for ${itemId}.`);
    }

    return createItemSet.call(target, itemId, itemId) as Record<string, unknown>;
  }
}

function isNestedParameterSetValue(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function isComItemSet(value: unknown): value is { Item(name: string): unknown } {
  return !!value && typeof value === "object" && typeof (value as { Item?: unknown }).Item === "function";
}

import type { HwpBridge } from "../bridges/types";
import { setValue, type ParameterValues } from "../internal/parameter-values";
import { createParameterSetPayload } from "../internal/parameter-sets";
import { createParagraphNumberingValues, createStyleItemValues } from "./values";
import type { ParagraphNumberingSetOptions, StyleApplyOptions, StyleDeleteOptions, StyleItemOptions } from "./types";

export class DocumentStylesApi {
  readonly numbering: DocumentStyleNumberingApi;
  readonly template: DocumentStyleTemplateApi;

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {
    this.numbering = new DocumentStyleNumberingApi(bridge);
    this.template = new DocumentStyleTemplateApi(bridge);
  }

  async apply(input: number | StyleApplyOptions): Promise<void> {
    const options = normalizeStyleApplyInput(input);
    const actionId = options.version === "legacy" ? "Style" : "StyleEx";
    await this.executeStyle(actionId, options.index);
  }

  async add(index?: number): Promise<void> {
    await this.executeStyle("StyleAdd", index);
  }

  async edit(index: number): Promise<void> {
    await this.executeStyle("StyleEdit", index);
  }

  async delete(input: number | StyleDeleteOptions, alternation?: number): Promise<void> {
    const options = normalizeStyleDeleteInput(input, alternation);
    const values: ParameterValues = { Target: options.target };

    if (options.alternation !== undefined) {
      values.Alternation = options.alternation;
    }

    await this.bridge.execute("StyleDelete", createParameterSetPayload("StyleDelete", values));
  }

  async changeToCurrentShape(options: StyleItemOptions): Promise<void> {
    await this.bridge.execute("StyleChangeToCurrentShape", createParameterSetPayload("StyleItem", createStyleItemValues(options)));
  }

  async clearCharStyle(): Promise<void> {
    await this.bridge.run("StyleClearCharStyle");
  }

  async shortcut(index: number): Promise<void> {
    if (!Number.isInteger(index) || index < 1 || index > 10) {
      throw new RangeError("Style shortcut index must be an integer from 1 to 10.");
    }

    await this.bridge.run(`StyleShortcut${index}`);
  }

  private async executeStyle(actionId: string, index: number | undefined): Promise<void> {
    const values = index === undefined ? {} : { Apply: index };
    await this.bridge.execute(actionId, createParameterSetPayload("Style", values));
  }
}

export class DocumentStyleNumberingApi {
  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async set(options: ParagraphNumberingSetOptions): Promise<void> {
    await this.bridge.execute(
      "StyleParaNumberBullet",
      createParameterSetPayload("ParaShape", createParagraphNumberingValues(options)),
    );
  }
}

export class DocumentStyleTemplateApi {
  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async open(fileName: string): Promise<void> {
    await this.bridge.execute("StyleTemplate", createParameterSetPayload("StyleTemplate", { FileName: fileName }));
  }
}

function normalizeStyleApplyInput(input: number | StyleApplyOptions): StyleApplyOptions {
  if (typeof input === "number") {
    return { index: input };
  }

  return input;
}

function normalizeStyleDeleteInput(input: number | StyleDeleteOptions, alternation: number | undefined): StyleDeleteOptions {
  if (typeof input === "number") {
    return { target: input, alternation };
  }

  return input;
}

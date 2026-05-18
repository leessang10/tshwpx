import type { HwpBridge } from "../bridges/types";
import { createParameterSetPayload } from "../internal/parameter-sets";
import { createPageDeleteValues, createPageNumberingPositionValues, createPageSetupValues } from "./values";
import type { PageDeleteOptions, PageNumberingPositionOptions, PageSetupOptions } from "./types";

export class DocumentPagesApi {
  readonly move: DocumentPageMoveApi;
  readonly numbering: DocumentPageNumberingApi;
  readonly orientation: DocumentPageOrientationApi;
  readonly sections: DocumentPageSectionsApi;

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {
    this.move = new DocumentPageMoveApi(bridge);
    this.numbering = new DocumentPageNumberingApi(bridge);
    this.orientation = new DocumentPageOrientationApi(bridge);
    this.sections = new DocumentPageSectionsApi(bridge);
  }

  async break(): Promise<void> {
    await this.bridge.run("BreakPage");
  }

  async copy(): Promise<void> {
    await this.bridge.run("CopyPage");
  }

  async paste(): Promise<void> {
    await this.bridge.run("PastePage");
  }

  async delete(options: PageDeleteOptions = {}): Promise<void> {
    await this.bridge.execute("DeletePage", createParameterSetPayload("DeletePage", createPageDeleteValues(options)));
  }

  async setup(options: PageSetupOptions = {}): Promise<void> {
    await this.bridge.execute("PageSetup", createParameterSetPayload("SecDef", createPageSetupValues(options)));
  }
}

export class DocumentPageSectionsApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async break(): Promise<void> {
    await this.bridge.run("BreakSection");
  }
}

export class DocumentPageMoveApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async begin(): Promise<void> {
    await this.bridge.run("MovePageBegin");
  }

  async end(): Promise<void> {
    await this.bridge.run("MovePageEnd");
  }

  async previous(): Promise<void> {
    await this.bridge.run("MovePageUp");
  }

  async next(): Promise<void> {
    await this.bridge.run("MovePageDown");
  }
}

export class DocumentPageNumberingApi {
  readonly position: DocumentPageNumberingPositionApi;

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {
    this.position = new DocumentPageNumberingPositionApi(bridge);
  }

  async insert(): Promise<void> {
    await this.bridge.run("InsertPageNum");
  }

  async recalculate(): Promise<void> {
    await this.bridge.run("RecalcPageCount");
  }
}

export class DocumentPageNumberingPositionApi {
  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async set(options: PageNumberingPositionOptions): Promise<void> {
    await this.bridge.execute("PageNumPos", createParameterSetPayload("PageNumPos", createPageNumberingPositionValues(options)));
  }
}

export class DocumentPageOrientationApi {
  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async landscape(): Promise<void> {
    await this.bridge.execute("PageLandscape", createParameterSetPayload("SecDef"));
  }

  async portrait(): Promise<void> {
    await this.bridge.execute("PagePortrait", createParameterSetPayload("SecDef"));
  }
}

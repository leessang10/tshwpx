import { createParameterSetPayload } from "../internal/parameter-sets";
import type { HwpBridge } from "../bridges/types";
import type { ParameterValues } from "../internal/parameter-values";
import type { SearchOptions, SearchReplaceOptions } from "./types";

type SearchBridge = Pick<HwpBridge, "run" | "execute">;

const SEARCH_DIRECTION_VALUES: Record<NonNullable<SearchOptions["direction"]>, number> = {
  forward: 0,
  backward: 1,
  all: 2,
};

export class DocumentSearchApi {
  readonly dialog: DocumentSearchDialogApi;

  constructor(private readonly bridge: SearchBridge) {
    this.dialog = new DocumentSearchDialogApi(bridge);
  }

  async find(text: string, options: SearchOptions = {}): Promise<void> {
    await this.bridge.execute(
      "RepeatFind",
      createParameterSetPayload("FindReplace", {
        FindString: text,
        ...createSearchOptionValues(options),
        ReplaceMode: 0,
        IgnoreMessage: 1,
      }),
    );
  }

  async replace(options: SearchReplaceOptions): Promise<void> {
    await this.bridge.execute(
      "RepeatFind",
      createParameterSetPayload("FindReplace", createReplaceValues(options)),
    );
  }

  async replaceAll(options: SearchReplaceOptions): Promise<void> {
    await this.bridge.execute(
      "AllReplace",
      createParameterSetPayload("FindReplace", createReplaceValues(options)),
    );
  }
}

export class DocumentSearchDialogApi {
  constructor(private readonly bridge: SearchBridge) {}

  async open(): Promise<void> {
    await this.bridge.run("FindDlg");
  }

  async replace(): Promise<void> {
    await this.bridge.run("ReplaceDlg");
  }
}

function createReplaceValues(options: SearchReplaceOptions): ParameterValues {
  return {
    FindString: options.find,
    ReplaceString: options.replace,
    ...createSearchOptionValues(options),
    ReplaceMode: 1,
    IgnoreMessage: 1,
  };
}

function createSearchOptionValues(options: SearchOptions): ParameterValues {
  const values: ParameterValues = {};

  if (options.direction !== undefined) {
    values.Direction = SEARCH_DIRECTION_VALUES[options.direction];
  }
  if (options.matchCase !== undefined) {
    values.MatchCase = options.matchCase ? 1 : 0;
  }
  if (options.wholeWord !== undefined) {
    values.WholeWordOnly = options.wholeWord ? 1 : 0;
  }
  if (options.useRegex !== undefined) {
    values.FindRegExp = options.useRegex ? 1 : 0;
  }

  return values;
}

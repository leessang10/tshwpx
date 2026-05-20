import type { HwpBridge } from "../bridges/types";
import { createParameterSetPayload } from "../internal/parameter-sets";
import type { BookmarkOptions, BookmarkType, HyperlinkInsertOptions, HyperlinkJumpOptions } from "./types";

type ReferencesBridge = Pick<HwpBridge, "run" | "execute">;

const BOOKMARK_TYPE_VALUES: Record<BookmarkType, number> = {
  normal: 0,
  block: 1,
};

export class DocumentReferencesApi {
  readonly bookmarks: DocumentBookmarkApi;
  readonly hyperlinks: DocumentHyperlinkApi;
  readonly comments: DocumentCommentApi;
  readonly memos: DocumentMemoApi;

  constructor(bridge: ReferencesBridge) {
    this.bookmarks = new DocumentBookmarkApi(bridge);
    this.hyperlinks = new DocumentHyperlinkApi(bridge);
    this.comments = new DocumentCommentApi(bridge);
    this.memos = new DocumentMemoApi(bridge);
  }
}

export class DocumentBookmarkApi {
  readonly dialog: DocumentBookmarkDialogApi;

  constructor(private readonly bridge: ReferencesBridge) {
    this.dialog = new DocumentBookmarkDialogApi(bridge);
  }

  async add(name: string, options: BookmarkOptions = {}): Promise<void> {
    await this.execute("Bookmark", name, 0, options);
  }

  async moveTo(name: string, options: BookmarkOptions = {}): Promise<void> {
    await this.execute("Bookmark", name, 1, options);
  }

  async modify(_name: string, newName: string, options: BookmarkOptions = {}): Promise<void> {
    await this.execute("ModifyBookmark", newName, 2, options);
  }

  private async execute(actionName: string, name: string, command: number, options: BookmarkOptions): Promise<void> {
    await this.bridge.execute(
      actionName,
      createParameterSetPayload("BookMark", {
        Name: name,
        Type: BOOKMARK_TYPE_VALUES[options.type ?? "normal"],
        Command: command,
      }),
    );
  }
}

export class DocumentBookmarkDialogApi {
  constructor(private readonly bridge: ReferencesBridge) {}

  async open(): Promise<void> {
    await this.bridge.run("BookmarkEditDialog");
  }
}

export class DocumentHyperlinkApi {
  constructor(private readonly bridge: ReferencesBridge) {}

  async insert(options: HyperlinkInsertOptions): Promise<void> {
    await this.bridge.execute(
      "Hyperlink",
      createParameterSetPayload("HyperLink", {
        ...(options.text !== undefined ? { Text: options.text } : {}),
        Command: createHyperlinkCommand(options),
        DirectInsert: options.directInsert === false ? 0 : 1,
      }),
    );
  }

  async jump(options: HyperlinkJumpOptions): Promise<void> {
    await this.bridge.execute(
      "HyperlinkJump",
      createParameterSetPayload("HyperlinkJump", {
        ...(options.source !== undefined ? { Source: options.source } : {}),
        Target: options.target,
      }),
    );
  }

  async next(): Promise<void> {
    await this.bridge.run("HyperlinkForward");
  }

  async previous(): Promise<void> {
    await this.bridge.run("HyperlinkBackward");
  }
}

export class DocumentCommentApi {
  constructor(private readonly bridge: ReferencesBridge) {}

  async insert(): Promise<void> {
    await this.bridge.run("Comment");
  }

  async modify(): Promise<void> {
    await this.bridge.run("CommentModify");
  }

  async delete(): Promise<void> {
    await this.bridge.run("CommentDelete");
  }
}

export class DocumentMemoApi {
  constructor(private readonly bridge: ReferencesBridge) {}

  async next(): Promise<void> {
    await this.bridge.run("MemoToNext");
  }

  async previous(): Promise<void> {
    await this.bridge.run("MemoToPrev");
  }
}

function createHyperlinkCommand(options: HyperlinkInsertOptions): string {
  return [
    options.target,
    options.linkType ?? 1,
    options.objectType ?? 0,
    options.option ?? 0,
  ].join(";");
}

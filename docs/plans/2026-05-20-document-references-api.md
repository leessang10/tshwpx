# Document References API Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add `app.doc.references` for bookmarks, hyperlinks, comments, and memo navigation.

**Architecture:** Add a new `DocumentReferencesApi` submodule owned by `DocumentApi`. Parameterized bookmark and hyperlink operations use `createParameterSetPayload`; simple comment, memo, dialog, and navigation helpers call `bridge.run`.

**Tech Stack:** TypeScript, Vitest, existing HWP bridge abstraction, generated HWP action/parameter metadata, static HTML API docs.

---

## Confirmed HWP Metadata

From `src/spec/generated.ts`:

- `Bookmark` uses `BookMark`
- `ModifyBookmark` uses `BookMark`
- `BookMark` items: `Name`, `Type`, `Command`
- `Hyperlink` uses `HyperLink`
- `HyperLink` items: `Text`, `Command`, `NoLInk`, `ShapeObject`, `DirectInsert`
- `HyperlinkJump` uses `HyperlinkJump`
- `HyperlinkJump` items: `Source`, `Target`
- `Comment`, `CommentModify`, `CommentDelete`, `MemoToNext`, `MemoToPrev`, `BookmarkEditDialog`, `HyperlinkForward`, `HyperlinkBackward` are no-parameter actions

### Task 1: Add Reference API Red Tests

**Files:**
- Modify: `tests/unit/doc.test.ts`

**Step 1: Write failing tests**

Add tests near the existing `doc.search` tests:

```ts
  it("executes bookmark reference actions with BookMark payloads", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.references.bookmarks.add("intro");
    await doc.references.bookmarks.moveTo("intro");
    await doc.references.bookmarks.modify("intro", "intro-renamed");
    await doc.references.bookmarks.dialog.open();

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "Bookmark", {
      parameterSetId: "BookMark",
      values: { Name: "intro", Type: 0, Command: 0 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "Bookmark", {
      parameterSetId: "BookMark",
      values: { Name: "intro", Type: 0, Command: 1 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(3, "ModifyBookmark", {
      parameterSetId: "BookMark",
      values: { Name: "intro-renamed", Type: 0, Command: 2 },
    });
    expect(bridge.run).toHaveBeenCalledWith("BookmarkEditDialog");
  });

  it("executes hyperlink reference actions with HyperLink payloads", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.references.hyperlinks.insert({ target: "https://example.com", text: "Example" });
    await doc.references.hyperlinks.jump({ target: "https://example.com", source: "current" });
    await doc.references.hyperlinks.next();
    await doc.references.hyperlinks.previous();

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "Hyperlink", {
      parameterSetId: "HyperLink",
      values: {
        Text: "Example",
        Command: "https://example.com;1;0;0",
        DirectInsert: 1,
      },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "HyperlinkJump", {
      parameterSetId: "HyperlinkJump",
      values: {
        Source: "current",
        Target: "https://example.com",
      },
    });
    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual(["HyperlinkForward", "HyperlinkBackward"]);
  });

  it("runs comment and memo reference actions", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.references.comments.insert();
    await doc.references.comments.modify();
    await doc.references.comments.delete();
    await doc.references.memos.next();
    await doc.references.memos.previous();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "Comment",
      "CommentModify",
      "CommentDelete",
      "MemoToNext",
      "MemoToPrev",
    ]);
  });
```

**Step 2: Run test to verify it fails**

Run:

```bash
npx vitest run tests/unit/doc.test.ts
```

Expected: FAIL because `DocumentApi` does not expose `references`.

### Task 2: Implement DocumentReferencesApi

**Files:**
- Create: `src/document/references.ts`
- Modify: `src/document/api.ts`
- Modify: `src/document/types.ts`
- Modify: `src/doc.ts`
- Modify: `src/index.ts`
- Modify: `tests/unit/package-metadata.test.ts`

**Step 1: Add public types**

Add to `src/document/types.ts`:

```ts
export type BookmarkType = "normal" | "block";

export type BookmarkOptions = {
  type?: BookmarkType;
};

export type HyperlinkInsertOptions = {
  target: string;
  text?: string;
  linkType?: 0 | 1 | 2 | 3;
  objectType?: number;
  option?: number;
  directInsert?: boolean;
};

export type HyperlinkJumpOptions = {
  target: string;
  source?: string;
};
```

**Step 2: Implement `src/document/references.ts`**

```ts
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
```

**Step 3: Wire `DocumentApi`**

In `src/document/api.ts`:

- import `DocumentReferencesApi`
- add `readonly references: DocumentReferencesApi`
- instantiate `this.references = new DocumentReferencesApi(bridge)`

**Step 4: Export public APIs**

In `src/doc.ts` and `src/index.ts`, export:

- `DocumentReferencesApi`
- `DocumentBookmarkApi`
- `DocumentBookmarkDialogApi`
- `DocumentHyperlinkApi`
- `DocumentCommentApi`
- `DocumentMemoApi`

Export types:

- `BookmarkType`
- `BookmarkOptions`
- `HyperlinkInsertOptions`
- `HyperlinkJumpOptions`

Update `tests/unit/package-metadata.test.ts` to assert at least `DocumentReferencesApi`, `DocumentBookmarkApi`, `DocumentHyperlinkApi`, `DocumentCommentApi`, and `DocumentMemoApi` are available from the package root.

**Step 5: Verify focused tests**

Run:

```bash
npx vitest run tests/unit/doc.test.ts tests/unit/package-metadata.test.ts
npm run typecheck
```

Expected: PASS.

**Step 6: Commit**

```bash
git add src/document/references.ts src/document/api.ts src/document/types.ts src/doc.ts src/index.ts tests/unit/doc.test.ts tests/unit/package-metadata.test.ts
git commit -m "feat: add document references api"
```

### Task 3: Update References Documentation

**Files:**
- Modify: `README.md`
- Add: `docs/api/v2/app-doc-references.html`
- Modify: `docs/api/v2/app-doc.html`
- Modify: `docs/api/v2/index.html`

**Step 1: Update README**

Add a short example near the document API examples:

```ts
await app.doc.references.bookmarks.add("intro");
await app.doc.references.bookmarks.moveTo("intro");
await app.doc.references.hyperlinks.insert({ target: "https://example.com", text: "Example" });
await app.doc.references.comments.insert();
await app.doc.references.memos.next();
```

Add a bullet:

```md
- `app.doc.references.*` manages bookmarks, hyperlinks, comments, and memo navigation.
```

**Step 2: Add v2 API page**

Create `docs/api/v2/app-doc-references.html` with tables for bookmarks, hyperlinks, comments, and memos. Include the action mappings from this plan.

**Step 3: Link docs**

Add `app.doc.references` to `docs/api/v2/app-doc.html` and `docs/api/v2/index.html`.

**Step 4: Verify docs-adjacent checks**

Run:

```bash
npm run typecheck
npx vitest run tests/unit/doc.test.ts
```

Expected: PASS.

**Step 5: Commit**

```bash
git add README.md docs/api/v2/app-doc-references.html docs/api/v2/app-doc.html docs/api/v2/index.html
git commit -m "docs: document references api"
```

### Task 4: Final Verification

**Step 1: Run full checks**

Run:

```bash
npm run typecheck
npm test
npm run build
```

Expected: all commands PASS.

**Step 2: Inspect git state**

Run:

```bash
git status --short
```

Expected: clean.

**Step 3: Commit only if fixes were needed**

If final verification required fixes:

```bash
git add <changed-files>
git commit -m "chore: verify document references api"
```

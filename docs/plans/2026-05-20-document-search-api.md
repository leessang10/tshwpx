# Document Search API Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a high-level `app.doc.search` API for find, replace, replace-all, and find/replace dialogs.

**Architecture:** Add a new `DocumentSearchApi` module owned by `DocumentApi`, matching existing document submodules. The search API will build validated `FindReplace` payloads through `createParameterSetPayload` and execute HWP search actions through the existing bridge.

**Tech Stack:** TypeScript, Vitest, existing HWP bridge abstraction, generated HWP action/parameter metadata, static HTML API docs.

---

## Confirmed HWP Metadata

From `src/spec/generated.ts`:

- `RepeatFind` uses ParameterSet `FindReplace`
- `AllReplace` uses ParameterSet `FindReplace`
- `FindDlg` uses ParameterSet `FindReplace`
- `ReplaceDlg` uses ParameterSet `FindReplace`
- `FindReplace` items include `FindString`, `ReplaceString`, `Direction`, `MatchCase`, `WholeWordOnly`, `ReplaceMode`, `IgnoreMessage`, and `FindRegExp`

Use these mappings:

| Public API | HWP action | Required payload |
| --- | --- | --- |
| `find(text, options?)` | `RepeatFind` | `FindString`, `ReplaceMode: 0`, `IgnoreMessage: 1` |
| `replace(input)` | `RepeatFind` | `FindString`, `ReplaceString`, `ReplaceMode: 1`, `IgnoreMessage: 1` |
| `replaceAll(input)` | `AllReplace` | `FindString`, `ReplaceString`, `ReplaceMode: 1`, `IgnoreMessage: 1` |
| `dialog.open()` | `FindDlg` | none |
| `dialog.replace()` | `ReplaceDlg` | none |

Supported option mapping:

| TypeScript option | FindReplace item |
| --- | --- |
| `direction: "forward"` | `Direction: 0` |
| `direction: "backward"` | `Direction: 1` |
| `direction: "all"` | `Direction: 2` |
| `matchCase` | `MatchCase: 1/0` |
| `wholeWord` | `WholeWordOnly: 1/0` |
| `useRegex` | `FindRegExp: 1/0` |

### Task 1: Add Search API Red Tests

**Files:**
- Modify: `tests/unit/doc.test.ts`

**Step 1: Write failing tests**

Add tests near the existing `doc.text` tests:

```ts
  it("runs search dialogs through doc.search.dialog", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.search.dialog.open();
    await doc.search.dialog.replace();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual(["FindDlg", "ReplaceDlg"]);
  });

  it("executes find and replace actions with FindReplace payloads", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.search.find("old", { direction: "backward", matchCase: true, wholeWord: true, useRegex: false });
    await doc.search.replace({ find: "old", replace: "new" });
    await doc.search.replaceAll({ find: "old", replace: "new", direction: "all" });

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "RepeatFind", {
      parameterSetId: "FindReplace",
      values: {
        FindString: "old",
        Direction: 1,
        MatchCase: 1,
        WholeWordOnly: 1,
        FindRegExp: 0,
        ReplaceMode: 0,
        IgnoreMessage: 1,
      },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "RepeatFind", {
      parameterSetId: "FindReplace",
      values: {
        FindString: "old",
        ReplaceString: "new",
        ReplaceMode: 1,
        IgnoreMessage: 1,
      },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(3, "AllReplace", {
      parameterSetId: "FindReplace",
      values: {
        FindString: "old",
        ReplaceString: "new",
        Direction: 2,
        ReplaceMode: 1,
        IgnoreMessage: 1,
      },
    });
  });
```

**Step 2: Run test to verify it fails**

Run:

```bash
npx vitest run tests/unit/doc.test.ts
```

Expected: FAIL because `DocumentApi` does not expose `search`.

### Task 2: Implement DocumentSearchApi

**Files:**
- Create: `src/document/search.ts`
- Modify: `src/document/api.ts`
- Modify: `src/document/types.ts`
- Modify: `src/doc.ts`

**Step 1: Add search types**

Add to `src/document/types.ts`:

```ts
export type SearchDirection = "forward" | "backward" | "all";

export type SearchOptions = {
  direction?: SearchDirection;
  matchCase?: boolean;
  wholeWord?: boolean;
  useRegex?: boolean;
};

export type SearchReplaceOptions = SearchOptions & {
  find: string;
  replace: string;
};
```

**Step 2: Implement `src/document/search.ts`**

```ts
import { createParameterSetPayload } from "../internal/parameter-sets";
import type { HwpBridge } from "../bridges/types";
import type { ParameterValues } from "../spec";
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
```

**Step 3: Wire `DocumentApi`**

In `src/document/api.ts`:

- import `DocumentSearchApi`
- add `readonly search: DocumentSearchApi`
- instantiate `this.search = new DocumentSearchApi(bridge)`

**Step 4: Export public APIs**

In `src/doc.ts`, export `DocumentSearchApi` and `DocumentSearchDialogApi`; export `SearchDirection`, `SearchOptions`, and `SearchReplaceOptions` from the type export block.

**Step 5: Run focused tests**

Run:

```bash
npx vitest run tests/unit/doc.test.ts
npm run typecheck
```

Expected: PASS.

**Step 6: Commit**

```bash
git add src/document/search.ts src/document/api.ts src/document/types.ts src/doc.ts tests/unit/doc.test.ts
git commit -m "feat: add document search api"
```

### Task 3: Update Search Documentation

**Files:**
- Modify: `README.md`
- Add: `docs/api/v2/app-doc-search.html`
- Modify: `docs/api/v2/app-doc.html`
- Modify: `docs/api/v2/index.html`

**Step 1: Update README**

Add a short example after the `app.doc.text` example block:

```ts
await app.doc.search.find("old");
await app.doc.search.replace({ find: "old", replace: "new" });
await app.doc.search.replaceAll({ find: "old", replace: "new", direction: "all" });
await app.doc.search.dialog.open();
```

Add a bullet:

```md
- `app.doc.search.*` finds and replaces text in the active document.
```

**Step 2: Add v2 API page**

Create `docs/api/v2/app-doc-search.html`:

```html
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>app.doc.search</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<header>
  <div class="crumb"><a href="index.html">v2</a> / app.doc.search</div>
  <h1>app.doc.search</h1>
  <p class="lead">현재 활성 문서에서 문자열을 찾고 바꿉니다.</p>
</header>
<main>
  <h2>개요</h2>
  <table>
    <tr><th>TSHWPX API</th><th>한글 오토메이션 연동</th></tr>
    <tr><td><code>app.doc.search.find(text, options)</code></td><td><code>RepeatFind</code> Action + <code>FindReplace</code> ParameterSet</td></tr>
    <tr><td><code>app.doc.search.replace(options)</code></td><td><code>RepeatFind</code> Action + <code>FindReplace</code> ParameterSet</td></tr>
    <tr><td><code>app.doc.search.replaceAll(options)</code></td><td><code>AllReplace</code> Action + <code>FindReplace</code> ParameterSet</td></tr>
    <tr><td><code>app.doc.search.dialog.open()</code></td><td><code>FindDlg</code> Action 실행</td></tr>
    <tr><td><code>app.doc.search.dialog.replace()</code></td><td><code>ReplaceDlg</code> Action 실행</td></tr>
  </table>

  <h2>옵션</h2>
  <table>
    <tr><th>옵션</th><th>FindReplace 항목</th></tr>
    <tr><td><code>direction</code></td><td><code>Direction</code>: <code>forward</code>=0, <code>backward</code>=1, <code>all</code>=2</td></tr>
    <tr><td><code>matchCase</code></td><td><code>MatchCase</code></td></tr>
    <tr><td><code>wholeWord</code></td><td><code>WholeWordOnly</code></td></tr>
    <tr><td><code>useRegex</code></td><td><code>FindRegExp</code></td></tr>
  </table>
</main>
</body>
</html>
```

**Step 3: Link docs**

In `docs/api/v2/app-doc.html`, add `app.doc.search` to the API/module tables.

In `docs/api/v2/index.html`, add `app.doc.search` to the document module list.

**Step 4: Verify docs-adjacent checks**

Run:

```bash
npm run typecheck
npx vitest run tests/unit/doc.test.ts
```

Expected: PASS.

**Step 5: Commit**

```bash
git add README.md docs/api/v2/app-doc-search.html docs/api/v2/app-doc.html docs/api/v2/index.html
git commit -m "docs: document search api"
```

### Task 4: Final Verification

**Files:**
- Modify as needed based on failures.

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
git commit -m "chore: verify document search api"
```

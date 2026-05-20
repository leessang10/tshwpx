# Document Text API Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add common text-editing helpers under `app.doc.text` and keep README/API docs aligned with the implementation.

**Architecture:** `DocumentTextApi` already receives the active `HwpBridge`, so new no-parameter text-editing helpers should call `bridge.run(...)` with documented HWP action IDs. No bridge interface changes are needed because `run` already supports these command-style actions.

**Tech Stack:** TypeScript, Vitest, existing HWP bridge abstraction, static HTML API docs.

---

### Task 1: Add Failing Text API Tests

**Files:**
- Modify: `tests/unit/doc.test.ts`

**Step 1: Write the failing test**

Add a test near the existing `doc.text.insert` test:

```ts
  it("runs text editing shortcut actions through doc.text helpers", async () => {
    const bridge = {
      insertText: vi.fn(async () => undefined),
      run: vi.fn(async (_actionId: string) => undefined),
      execute: vi.fn(async () => true),
    };

    const doc = new DocumentApi(bridge);
    await doc.text.lineBreak();
    await doc.text.paragraphBreak();
    await doc.text.tab();
    await doc.text.deletePreviousChar();
    await doc.text.deleteNextChar();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "BreakLine",
      "BreakPara",
      "InsertTab",
      "DeleteBack",
      "Delete",
    ]);
  });
```

**Step 2: Run test to verify it fails**

Run:

```bash
npx vitest run tests/unit/doc.test.ts
```

Expected: FAIL because `DocumentTextApi` does not yet expose the new methods.

### Task 2: Implement DocumentTextApi Helpers

**Files:**
- Modify: `src/document/text.ts`

**Step 1: Implement the minimal methods**

Add methods to `DocumentTextApi`:

```ts
  async lineBreak(): Promise<void> {
    await this.bridge.run("BreakLine");
  }

  async paragraphBreak(): Promise<void> {
    await this.bridge.run("BreakPara");
  }

  async tab(): Promise<void> {
    await this.bridge.run("InsertTab");
  }

  async deletePreviousChar(): Promise<void> {
    await this.bridge.run("DeleteBack");
  }

  async deleteNextChar(): Promise<void> {
    await this.bridge.run("Delete");
  }
```

Keep the existing `insert(text)` behavior unchanged.

**Step 2: Run focused tests**

Run:

```bash
npx vitest run tests/unit/doc.test.ts
```

Expected: PASS.

**Step 3: Commit**

```bash
git add src/document/text.ts tests/unit/doc.test.ts
git commit -m "feat: expand document text api"
```

### Task 3: Update Documentation

**Files:**
- Modify: `README.md`
- Modify: `docs/api/v2/app-doc-text.html`

**Step 1: Update README examples**

In the high-level API example, add a short block after `app.doc.text.insert("Hello world");`:

```ts
await app.doc.text.lineBreak();
await app.doc.text.paragraphBreak();
await app.doc.text.tab();
await app.doc.text.deletePreviousChar();
await app.doc.text.deleteNextChar();
```

Update the text API bullet to say:

```md
- `app.doc.text.*` inserts and edits text at the current cursor position.
```

**Step 2: Update v2 text API page**

In `docs/api/v2/app-doc-text.html`, add rows for:

```html
<tr><td><code>app.doc.text.lineBreak()</code></td><td><code>BreakLine</code> Action 실행</td></tr>
<tr><td><code>app.doc.text.paragraphBreak()</code></td><td><code>BreakPara</code> Action 실행</td></tr>
<tr><td><code>app.doc.text.tab()</code></td><td><code>InsertTab</code> Action 실행</td></tr>
<tr><td><code>app.doc.text.deletePreviousChar()</code></td><td><code>DeleteBack</code> Action 실행</td></tr>
<tr><td><code>app.doc.text.deleteNextChar()</code></td><td><code>Delete</code> Action 실행</td></tr>
```

**Step 3: Run docs-adjacent checks**

Run:

```bash
npm run typecheck
npx vitest run tests/unit/doc.test.ts
```

Expected: PASS.

**Step 4: Commit**

```bash
git add README.md docs/api/v2/app-doc-text.html
git commit -m "docs: document expanded text api"
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

Expected: no unexpected changes except any pre-existing user work.

**Step 3: Final commit only if needed**

If final verification required fixes:

```bash
git add <changed-files>
git commit -m "chore: verify document text api"
```

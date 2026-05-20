# Document Objects API Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add high-level HWP automation helpers for selected pictures, drawing shapes, and generic document objects.

**Architecture:** Add `app.doc.objects` under `DocumentApi`. Most methods are thin `bridge.run(actionId)` wrappers for current-selection object actions; picture replacement and object style copy/paste use existing parameter-set payload helpers.

**Tech Stack:** TypeScript, Vitest, HWP action bridge (`HwpBridge.run` and `HwpBridge.execute`), generated parameter-set validation, static HTML docs.

---

### Task 1: Add Failing Unit Tests For Object Helpers

**Files:**
- Modify: `tests/unit/doc.test.ts`
- Modify: `tests/unit/package-metadata.test.ts`

**Step 1: Add red tests for `app.doc.objects`**

In `tests/unit/doc.test.ts`, add tests near the other `DocumentApi` high-level API tests.

Test that `DocumentApi` exposes `objects` by constructing a document API with a fake bridge:

```ts
const bridge = createBridge();
const doc = new DocumentApi(bridge);
expect(doc.objects).toBeDefined();
```

Expected red result: TypeScript or runtime failure because `objects` does not exist yet.

**Step 2: Add red test for picture replacement**

Add a test that calls:

```ts
await doc.objects.picture.change({ path: "C:/tmp/new.png", embed: true });
```

Assert `bridge.execute` was called with:

```ts
"PictureChange",
{
  parameterSetId: "PictureChange",
  values: {
    PicturePath: "C:/tmp/new.png",
    PictureEmbed: true,
  },
}
```

**Step 3: Add red test for picture dialog and effects**

Call:

```ts
await doc.objects.picture.dialog.open();
await doc.objects.picture.effects.grayscale();
await doc.objects.picture.effects.blackWhite();
await doc.objects.picture.effects.watermark();
await doc.objects.picture.effects.none();
await doc.objects.picture.effects.brightness.increase();
await doc.objects.picture.effects.brightness.decrease();
await doc.objects.picture.effects.contrast.increase();
await doc.objects.picture.effects.contrast.decrease();
await doc.objects.picture.effects.restoreOriginal();
```

Assert `bridge.run` action IDs in order:

```ts
[
  "PictureInsertDialog",
  "PictureEffect1",
  "PictureEffect2",
  "PictureEffect3",
  "PictureEffect4",
  "PictureEffect5",
  "PictureEffect6",
  "PictureEffect7",
  "PictureEffect8",
  "PictureToOriginal",
]
```

**Step 4: Add red test for alignment and ordering**

Call:

```ts
await doc.objects.align.left();
await doc.objects.align.center();
await doc.objects.align.right();
await doc.objects.align.top();
await doc.objects.align.middle();
await doc.objects.align.bottom();
await doc.objects.align.width();
await doc.objects.align.height();
await doc.objects.align.size();
await doc.objects.align.horizontalSpacing();
await doc.objects.align.verticalSpacing();

await doc.objects.order.bringForward();
await doc.objects.order.bringToFront();
await doc.objects.order.sendBack();
await doc.objects.order.sendToBack();
await doc.objects.order.bringInFrontOfText();
await doc.objects.order.sendBehindText();
```

Assert action IDs:

```ts
[
  "ShapeObjAlignLeft",
  "ShapeObjAlignCenter",
  "ShapeObjAlignRight",
  "ShapeObjAlignTop",
  "ShapeObjAlignMiddle",
  "ShapeObjAlignBottom",
  "ShapeObjAlignWidth",
  "ShapeObjAlignHeight",
  "ShapeObjAlignSize",
  "ShapeObjAlignHorzSpacing",
  "ShapeObjAlignVertSpacing",
  "ShapeObjBringForward",
  "ShapeObjBringToFront",
  "ShapeObjSendBack",
  "ShapeObjSendToBack",
  "ShapeObjBringInFrontOfText",
  "ShapeObjCtrlSendBehindText",
]
```

**Step 5: Add red test for movement, resize, and clipboard**

Call:

```ts
await doc.objects.move.up();
await doc.objects.move.down();
await doc.objects.move.left();
await doc.objects.move.right();
await doc.objects.resize.up();
await doc.objects.resize.down();
await doc.objects.resize.left();
await doc.objects.resize.right();
await doc.objects.copy();
await doc.objects.paste();
await doc.objects.cut();
```

Assert action IDs:

```ts
[
  "ShapeObjMoveUp",
  "ShapeObjMoveDown",
  "ShapeObjMoveLeft",
  "ShapeObjMoveRight",
  "ShapeObjResizeUp",
  "ShapeObjResizeDown",
  "ShapeObjResizeLeft",
  "ShapeObjResizeRight",
  "Copy",
  "Paste",
  "Cut",
]
```

**Step 6: Add red test for object style copy/paste**

Call:

```ts
await doc.objects.style.copy({ line: true, fill: true, size: true, shadow: true, pictureEffect: true });
await doc.objects.style.paste({ line: true, fill: false, size: true });
```

Assert both `bridge.execute` calls use parameter set `ShapeObjectCopyPaste` and map values:

```ts
{
  ShapeObjectLine: true,
  ShapeObjectFill: true,
  ShapeObjectSize: true,
  ShapeObjectShadow: true,
  ShapeObjectPicEffect: true,
}
```

and:

```ts
{
  ShapeObjectLine: true,
  ShapeObjectFill: false,
  ShapeObjectSize: true,
}
```

**Step 7: Add package surface red assertions**

In `tests/unit/package-metadata.test.ts`, add the expected public exports:

```ts
DocumentObjectsApi
DocumentObjectPictureApi
DocumentObjectPictureDialogApi
DocumentObjectPictureEffectsApi
DocumentObjectPictureBrightnessApi
DocumentObjectPictureContrastApi
DocumentObjectAlignApi
DocumentObjectOrderApi
DocumentObjectMoveApi
DocumentObjectResizeApi
DocumentObjectStyleApi
```

Add exported types:

```ts
PictureChangeOptions
ObjectStyleCopyOptions
```

Use the existing package-metadata test style.

**Step 8: Run the red tests**

Run:

```bash
npx vitest run tests/unit/doc.test.ts tests/unit/package-metadata.test.ts
```

Expected: FAIL because `objects` and exports are not implemented.

**Step 9: Do not commit red tests unless the orchestrating session asks**

Leave the red state uncommitted for the implementation task.

---

### Task 2: Implement `app.doc.objects`

**Files:**
- Create: `src/document/objects.ts`
- Modify: `src/document/api.ts`
- Modify: `src/document/types.ts`
- Modify: `src/doc.ts`
- Modify: `src/index.ts`
- Modify: `tests/unit/doc.test.ts`
- Modify: `tests/unit/package-metadata.test.ts`

**Step 1: Add public option types**

In `src/document/types.ts`, add:

```ts
export type PictureChangeOptions = {
  path: string;
  embed?: boolean;
};

export type ObjectStyleCopyOptions = {
  line?: boolean;
  fill?: boolean;
  size?: boolean;
  shadow?: boolean;
  pictureEffect?: boolean;
};
```

**Step 2: Add value mappers**

In `src/document/objects.ts`, either inline the mapping helpers or import `setBooleanValue` and `setValue` from `../internal/parameter-values`.

Map:

```ts
PictureChangeOptions.path -> PicturePath
PictureChangeOptions.embed -> PictureEmbed
ObjectStyleCopyOptions.line -> ShapeObjectLine
ObjectStyleCopyOptions.fill -> ShapeObjectFill
ObjectStyleCopyOptions.size -> ShapeObjectSize
ObjectStyleCopyOptions.shadow -> ShapeObjectShadow
ObjectStyleCopyOptions.pictureEffect -> ShapeObjectPicEffect
```

Use `createParameterSetPayload(...)`.

**Step 3: Create `DocumentObjectsApi`**

In `src/document/objects.ts`, add:

```ts
export class DocumentObjectsApi {
  readonly picture: DocumentObjectPictureApi;
  readonly align: DocumentObjectAlignApi;
  readonly order: DocumentObjectOrderApi;
  readonly move: DocumentObjectMoveApi;
  readonly resize: DocumentObjectResizeApi;
  readonly style: DocumentObjectStyleApi;

  constructor(private readonly bridge: HwpBridge) {
    this.picture = new DocumentObjectPictureApi(bridge);
    this.align = new DocumentObjectAlignApi(bridge);
    this.order = new DocumentObjectOrderApi(bridge);
    this.move = new DocumentObjectMoveApi(bridge);
    this.resize = new DocumentObjectResizeApi(bridge);
    this.style = new DocumentObjectStyleApi(bridge);
  }

  async copy(): Promise<void> {
    await this.bridge.run("Copy");
  }

  async paste(): Promise<void> {
    await this.bridge.run("Paste");
  }

  async cut(): Promise<void> {
    await this.bridge.run("Cut");
  }
}
```

Use the narrower `DocumentBridge` type if needed, but the file can accept `Pick<HwpBridge, "run" | "execute">`.

**Step 4: Add picture APIs**

Add:

```ts
export class DocumentObjectPictureApi {
  readonly dialog: DocumentObjectPictureDialogApi;
  readonly effects: DocumentObjectPictureEffectsApi;

  constructor(private readonly bridge: HwpBridge) {
    this.dialog = new DocumentObjectPictureDialogApi(bridge);
    this.effects = new DocumentObjectPictureEffectsApi(bridge);
  }

  async change(options: PictureChangeOptions): Promise<void> {
    await this.bridge.execute("PictureChange", createParameterSetPayload("PictureChange", createPictureChangeValues(options)));
  }
}
```

Add `DocumentObjectPictureDialogApi.open()` -> `PictureInsertDialog`.

Add `DocumentObjectPictureEffectsApi` with:

```ts
readonly brightness: DocumentObjectPictureBrightnessApi;
readonly contrast: DocumentObjectPictureContrastApi;
grayscale(): Promise<void>; // PictureEffect1
blackWhite(): Promise<void>; // PictureEffect2
watermark(): Promise<void>; // PictureEffect3
none(): Promise<void>; // PictureEffect4
restoreOriginal(): Promise<void>; // PictureToOriginal
```

Add brightness and contrast groups:

```ts
brightness.increase() -> PictureEffect5
brightness.decrease() -> PictureEffect6
contrast.increase() -> PictureEffect7
contrast.decrease() -> PictureEffect8
```

**Step 5: Add alignment API**

Add `DocumentObjectAlignApi` methods:

```ts
left() -> ShapeObjAlignLeft
center() -> ShapeObjAlignCenter
right() -> ShapeObjAlignRight
top() -> ShapeObjAlignTop
middle() -> ShapeObjAlignMiddle
bottom() -> ShapeObjAlignBottom
width() -> ShapeObjAlignWidth
height() -> ShapeObjAlignHeight
size() -> ShapeObjAlignSize
horizontalSpacing() -> ShapeObjAlignHorzSpacing
verticalSpacing() -> ShapeObjAlignVertSpacing
```

**Step 6: Add order API**

Add `DocumentObjectOrderApi` methods:

```ts
bringForward() -> ShapeObjBringForward
bringToFront() -> ShapeObjBringToFront
sendBack() -> ShapeObjSendBack
sendToBack() -> ShapeObjSendToBack
bringInFrontOfText() -> ShapeObjBringInFrontOfText
sendBehindText() -> ShapeObjCtrlSendBehindText
```

**Step 7: Add movement and resize APIs**

Add `DocumentObjectMoveApi` methods:

```ts
up() -> ShapeObjMoveUp
down() -> ShapeObjMoveDown
left() -> ShapeObjMoveLeft
right() -> ShapeObjMoveRight
```

Add `DocumentObjectResizeApi` methods:

```ts
up() -> ShapeObjResizeUp
down() -> ShapeObjResizeDown
left() -> ShapeObjResizeLeft
right() -> ShapeObjResizeRight
```

**Step 8: Add object style API**

Add `DocumentObjectStyleApi`:

```ts
copy(options: ObjectStyleCopyOptions = {}): Promise<void>; // ShapeObjectCopy
paste(options: ObjectStyleCopyOptions = {}): Promise<void>; // ShapeObjectPaste
```

Both use parameter set `ShapeObjectCopyPaste`.

**Step 9: Attach to `DocumentApi`**

In `src/document/api.ts`:

```ts
import { DocumentObjectsApi } from "./objects";
```

Add:

```ts
readonly objects: DocumentObjectsApi;
```

Instantiate in the constructor:

```ts
this.objects = new DocumentObjectsApi(bridge);
```

**Step 10: Export the new API**

Update `src/doc.ts` and `src/index.ts` to export all new classes and types.

**Step 11: Run focused tests and typecheck**

Run:

```bash
npx vitest run tests/unit/doc.test.ts tests/unit/package-metadata.test.ts
npm run typecheck
```

Expected: PASS.

**Step 12: Commit**

```bash
git add src/document/objects.ts src/document/api.ts src/document/types.ts src/doc.ts src/index.ts tests/unit/doc.test.ts tests/unit/package-metadata.test.ts
git commit -m "feat: add document objects automation api"
```

---

### Task 3: Document `app.doc.objects`

**Files:**
- Modify: `README.md`
- Create: `docs/api/v2/app-doc-objects.html`
- Modify: `docs/api/v2/app-doc.html`
- Modify: `docs/api/v2/index.html`

**Step 1: Update README**

Add examples near the high-level document API examples:

```ts
await app.doc.objects.picture.change({ path: "C:/tmp/new.png", embed: true });
await app.doc.objects.picture.effects.grayscale();
await app.doc.objects.align.center();
await app.doc.objects.order.bringToFront();
await app.doc.objects.move.right();
await app.doc.objects.resize.down();
await app.doc.objects.copy();
```

Keep the wording brief and consistent with nearby examples.

**Step 2: Create `app-doc-objects.html`**

Create `docs/api/v2/app-doc-objects.html` using the same structure as nearby v2 pages.

Include:

- Title and crumb for `app.doc.objects`
- A short warning that these helpers act on the current selected object or picture
- A note that direct image file insertion and shape creation are not included in this release
- Table of method groups:
  - `picture.change(options)`
  - `picture.dialog.open()`
  - `picture.effects.*`
  - `align.*`
  - `order.*`
  - `move.*`
  - `resize.*`
  - `copy()`, `paste()`, `cut()`
  - `style.copy(options)`, `style.paste(options)`
- Parameter tables for `PictureChangeOptions` and `ObjectStyleCopyOptions`

**Step 3: Link from v2 docs**

In `docs/api/v2/app-doc.html`, add a row for:

```html
<a href="app-doc-objects.html"><code>app.doc.objects</code></a>
```

In `docs/api/v2/index.html`, add a list item for `app.doc.objects`.

**Step 4: Run documentation-adjacent verification**

Run:

```bash
npm run typecheck
npx vitest run tests/unit/doc.test.ts tests/unit/package-metadata.test.ts
```

Expected: PASS.

**Step 5: Commit**

```bash
git add README.md docs/api/v2/app-doc-objects.html docs/api/v2/app-doc.html docs/api/v2/index.html
git commit -m "docs: document document objects api"
```

---

### Task 4: Final Verification And Review

**Files:**
- Inspect all changed files from Tasks 1-3.

**Step 1: Run full verification**

Run:

```bash
npm run typecheck
npm test
npm run build
```

Expected:
- `npm run typecheck`: PASS
- `npm test`: PASS, preserving any known skipped integration test
- `npm run build`: PASS

If `npm test` or `npm run build` fails only because Vitest or tsup cannot create temporary config files under sandboxed permissions, rerun the same command with approved escalation and record both the sandbox failure and escalated success.

**Step 2: Inspect git state**

Run:

```bash
git status --short
git log --oneline -8
```

Expected: clean working tree after all commits.

**Step 3: Review requirement coverage**

Check:

- `app.doc.objects` is exposed from `DocumentApi`.
- Picture replacement uses `PictureChange` and `PictureChange` parameter set.
- All action wrapper methods map to the exact action IDs in this plan.
- Direct image insertion and shape creation are not documented as supported.
- Public exports and package metadata tests agree.

**Step 4: Request final code review**

Use `superpowers:requesting-code-review` before claiming completion. Address any findings with `superpowers:receiving-code-review`.

**Step 5: Finish branch**

After verification and review pass, use `superpowers:finishing-a-development-branch` and present the required completion options.

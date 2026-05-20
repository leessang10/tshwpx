# Document Picture Insert API Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a direct `doc.objects.picture.insert()` API that inserts an image at the current HWP document position through the HWP `InsertPicture` COM method.

**Architecture:** The public document object API normalizes ergonomic TypeScript options into bridge-level numeric COM arguments. Both bridge implementations expose a dedicated `insertPicture` method: the direct COM bridge calls `raw.InsertPicture(...)`, and the PowerShell bridge sends a JSON-RPC request handled by the generated PowerShell script.

**Tech Stack:** TypeScript, Vitest, HWP COM automation, PowerShell JSON-RPC bridge.

---

### Task 1: Public API Red Tests

**Files:**
- Modify: `tests/unit/doc.test.ts`

**Step 1: Write failing tests for picture insertion mapping**

Add tests near the existing `doc.objects.picture` tests:

```ts
it("inserts pictures through the bridge with default options", async () => {
  const bridge = createMockBridge();
  const app = new HwpApplication({ bridge });

  await app.doc.objects.picture.insert({ path: "C:/tmp/photo.png" });

  expect(bridge.insertPicture).toHaveBeenCalledWith("C:/tmp/photo.png", {
    embed: true,
    sizeOption: 0,
    reverse: false,
    watermark: false,
    effect: 0,
    width: undefined,
    height: undefined,
  });
});

it("maps picture insertion size and effect aliases", async () => {
  const bridge = createMockBridge();
  const app = new HwpApplication({ bridge });

  await app.doc.objects.picture.insert({
    path: "C:/tmp/photo.png",
    embed: false,
    size: "specific",
    reverse: true,
    watermark: true,
    effect: "grayscale",
    width: 50,
    height: 30,
  });

  expect(bridge.insertPicture).toHaveBeenCalledWith("C:/tmp/photo.png", {
    embed: false,
    sizeOption: 1,
    reverse: true,
    watermark: true,
    effect: 1,
    width: 50,
    height: 30,
  });
});

it("passes numeric picture insertion constants through", async () => {
  const bridge = createMockBridge();
  const app = new HwpApplication({ bridge });

  await app.doc.objects.picture.insert({
    path: "C:/tmp/photo.png",
    size: 3,
    effect: 2,
  });

  expect(bridge.insertPicture).toHaveBeenCalledWith(
    "C:/tmp/photo.png",
    expect.objectContaining({ sizeOption: 3, effect: 2 }),
  );
});
```

If `createMockBridge()` does not currently include `insertPicture`, add a `vi.fn().mockResolvedValue(undefined)` field to that helper.

**Step 2: Run tests and verify red**

Run: `npm test -- tests/unit/doc.test.ts`

Expected: fail because `doc.objects.picture.insert` and/or `bridge.insertPicture` does not exist yet.

---

### Task 2: Bridge Red Tests

**Files:**
- Modify: `tests/unit/com-object-bridge.test.ts`
- Modify: `tests/unit/powershell-bridge.test.ts`

**Step 1: Add COM bridge tests**

Add tests proving `ComObjectBridge.insertPicture()` calls the raw method with positional COM arguments and rejects false results:

```ts
it("inserts pictures through raw InsertPicture", async () => {
  const raw = createRawHwpObject({
    InsertPicture: vi.fn(() => true),
  });
  const bridge = new ComObjectBridge(raw);

  await bridge.insertPicture("C:/tmp/photo.png", {
    embed: true,
    sizeOption: 1,
    reverse: false,
    watermark: false,
    effect: 1,
    width: 50,
    height: 30,
  });

  expect(raw.InsertPicture).toHaveBeenCalledWith(
    "C:/tmp/photo.png",
    true,
    1,
    false,
    false,
    1,
    50,
    30,
  );
});

it("throws when raw InsertPicture returns false", async () => {
  const raw = createRawHwpObject({
    InsertPicture: vi.fn(() => false),
  });
  const bridge = new ComObjectBridge(raw);

  await expect(bridge.insertPicture("C:/tmp/photo.png")).rejects.toThrow(
    "HWP InsertPicture returned false.",
  );
});
```

Use the existing raw HWP mock helper style from this test file. If the helper name differs, adapt the snippet to the local helper.

**Step 2: Add PowerShell bridge tests**

Add tests to `tests/unit/powershell-bridge.test.ts`:

```ts
it("sends picture insertion requests through JSON-RPC", async () => {
  const { bridge, write } = createBridge();

  await bridge.insertPicture("C:/tmp/photo.png", {
    embed: true,
    sizeOption: 1,
    reverse: false,
    watermark: false,
    effect: 1,
    width: 50,
    height: 30,
  });

  expect(JSON.parse(write.mock.calls[1]?.[0] ?? "{}")).toMatchObject({
    method: "insertPicture",
    params: {
      path: "C:/tmp/photo.png",
      embed: true,
      sizeOption: 1,
      reverse: false,
      watermark: false,
      effect: 1,
      width: 50,
      height: 30,
    },
  });
});

it("generates powershell script support for picture insertion", async () => {
  const { bridge, spawn } = createBridge();

  await bridge.init();

  const spawnArgs = (spawn.mock.calls[0] as unknown[] | undefined)?.[1] as string[] | undefined;
  const scriptPath = spawnArgs?.[spawnArgs.length - 1];
  const script = readFileSync(scriptPath as string, "utf8");
  expect(script).toContain('"insertPicture"');
  expect(script).toContain("$hwp.InsertPicture");
});
```

**Step 3: Run tests and verify red**

Run: `npm test -- tests/unit/com-object-bridge.test.ts tests/unit/powershell-bridge.test.ts`

Expected: fail because bridge methods and generated script handler are missing.

---

### Task 3: Bridge Implementation

**Files:**
- Modify: `src/bridges/types.ts`
- Modify: `src/com/types.ts`
- Modify: `src/bridges/com-object.ts`
- Modify: `src/bridges/powershell.ts`
- Modify: `src/bridges/powershell-script.ts`

**Step 1: Add bridge option type and method**

In `src/bridges/types.ts`, add:

```ts
export type BridgePictureInsertOptions = {
  embed?: boolean;
  sizeOption?: number;
  reverse?: boolean;
  watermark?: boolean;
  effect?: number;
  width?: number;
  height?: number;
};
```

Extend `HwpBridge`:

```ts
insertPicture?(path: string, options?: BridgePictureInsertOptions): Promise<void>;
```

**Step 2: Add raw COM method type**

In `src/com/types.ts`, add `InsertPicture` to the raw HWP object shape:

```ts
InsertPicture?: (
  path: string,
  embed: boolean,
  sizeOption: number,
  reverse: boolean,
  watermark: boolean,
  effect: number,
  width: number,
  height: number,
) => unknown;
```

**Step 3: Implement `ComObjectBridge.insertPicture`**

In `src/bridges/com-object.ts`, import `BridgePictureInsertOptions` and add:

```ts
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
```

**Step 4: Implement `PowerShellBridge.insertPicture`**

In `src/bridges/powershell.ts`, import `BridgePictureInsertOptions` and add:

```ts
async insertPicture(path: string, options: BridgePictureInsertOptions = {}): Promise<void> {
  await this.request("insertPicture", {
    path,
    embed: options.embed ?? true,
    sizeOption: options.sizeOption ?? 0,
    reverse: options.reverse ?? false,
    watermark: options.watermark ?? false,
    effect: options.effect ?? 0,
    width: options.width ?? 0,
    height: options.height ?? 0,
  });
}
```

**Step 5: Add PowerShell script handler**

In `src/bridges/powershell-script.ts`, add a switch case after `insertText`:

```powershell
"insertPicture" {
  $result = $hwp.InsertPicture(
    [string]$params.path,
    [bool]$params.embed,
    [int16]$params.sizeOption,
    [bool]$params.reverse,
    [bool]$params.watermark,
    [int16]$params.effect,
    [int32]$params.width,
    [int32]$params.height
  )
  Send-Response $id ([bool]$result) ([bool]$result) "HWP InsertPicture returned false."
}
```

Keep the exact formatting idiomatic for the existing raw string.

**Step 6: Run bridge tests**

Run: `npm test -- tests/unit/com-object-bridge.test.ts tests/unit/powershell-bridge.test.ts`

Expected: PASS.

**Step 7: Commit**

```bash
git add src/bridges/types.ts src/com/types.ts src/bridges/com-object.ts src/bridges/powershell.ts src/bridges/powershell-script.ts tests/unit/com-object-bridge.test.ts tests/unit/powershell-bridge.test.ts
git commit -m "feat: add picture insert bridge support"
```

---

### Task 4: Document API Implementation

**Files:**
- Modify: `src/document/types.ts`
- Modify: `src/document/objects.ts`
- Modify: `src/doc.ts`
- Modify: `src/index.ts`
- Modify: `tests/unit/doc.test.ts`

**Step 1: Add public types**

In `src/document/types.ts`, add:

```ts
export type PictureInsertSize = "real" | "specific" | "cell" | "cellRatio" | number;
export type PictureInsertEffect = "real" | "grayscale" | "blackWhite" | number;

export type PictureInsertOptions = {
  path: string;
  embed?: boolean;
  size?: PictureInsertSize;
  reverse?: boolean;
  watermark?: boolean;
  effect?: PictureInsertEffect;
  width?: number;
  height?: number;
};
```

**Step 2: Wire `DocumentObjectPictureApi.insert`**

In `src/document/objects.ts`, add `insertPicture` to the bridge pick and import `PictureInsertOptions`.

Add helper functions:

```ts
function resolvePictureInsertSize(size: PictureInsertOptions["size"]): number {
  if (typeof size === "number") return size;
  switch (size ?? "real") {
    case "real":
      return 0;
    case "specific":
      return 1;
    case "cell":
      return 2;
    case "cellRatio":
      return 3;
  }
}

function resolvePictureInsertEffect(effect: PictureInsertOptions["effect"]): number {
  if (typeof effect === "number") return effect;
  switch (effect ?? "real") {
    case "real":
      return 0;
    case "grayscale":
      return 1;
    case "blackWhite":
      return 2;
  }
}
```

Add method to `DocumentObjectPictureApi`:

```ts
async insert(options: PictureInsertOptions): Promise<void> {
  await requireBridgeMethod(this.bridge.insertPicture, "InsertPicture").call(this.bridge, options.path, {
    embed: options.embed ?? true,
    sizeOption: resolvePictureInsertSize(options.size),
    reverse: options.reverse ?? false,
    watermark: options.watermark ?? false,
    effect: resolvePictureInsertEffect(options.effect),
    width: options.width,
    height: options.height,
  });
}
```

**Step 3: Export public types**

In `src/doc.ts` and `src/index.ts`, export:

```ts
export type { PictureInsertEffect, PictureInsertOptions, PictureInsertSize } from "./document/types";
```

Follow the existing grouped export style.

**Step 4: Run document tests**

Run: `npm test -- tests/unit/doc.test.ts`

Expected: PASS.

**Step 5: Commit**

```bash
git add src/document/types.ts src/document/objects.ts src/doc.ts src/index.ts tests/unit/doc.test.ts
git commit -m "feat: add document picture insert api"
```

---

### Task 5: Documentation

**Files:**
- Modify: `README.md`
- Modify: `docs/api/v2/app-doc-objects.html`

**Step 1: Update README**

Add a picture insertion example near the existing object/picture examples:

```ts
await app.doc.objects.picture.insert({
  path: "C:/tmp/photo.png",
  size: "specific",
  width: 50,
  height: 30,
  effect: "grayscale",
});
```

Mention that `width` and `height` are millimeters.

**Step 2: Update API HTML docs**

In `docs/api/v2/app-doc-objects.html`, add `picture.insert(options)` to the picture section, including:

- `path`
- `embed`
- `size`
- `reverse`
- `watermark`
- `effect`
- `width`
- `height`

Document size/effect alias mappings and note that this wraps HWP `InsertPicture`.

**Step 3: Run docs-sensitive checks**

Run: `npm test -- tests/unit/package-metadata.test.ts`

Expected: PASS.

**Step 4: Commit**

```bash
git add README.md docs/api/v2/app-doc-objects.html
git commit -m "docs: document picture insert api"
```

---

### Task 6: Final Verification and Review

**Files:**
- No direct edits expected unless verification or review finds an issue.

**Step 1: Run focused tests**

Run:

```bash
npm test -- tests/unit/doc.test.ts tests/unit/com-object-bridge.test.ts tests/unit/powershell-bridge.test.ts
```

Expected: PASS.

**Step 2: Run full verification**

Run:

```bash
npm run typecheck
npm test
npm run build
```

Expected: all pass. If sandbox blocks temp config creation with `EPERM`, rerun the same command with approved escalation and record both the sandbox failure and escalated result.

**Step 3: Code review**

Use a fresh review pass to check:

- Public alias mapping matches the design.
- Bridge defaults are consistent across COM and PowerShell.
- No action-based picture insertion path was accidentally introduced.
- Docs and examples match the shipped types.

**Step 4: Fix and commit review findings**

If review finds issues, patch them and commit:

```bash
git add <changed-files>
git commit -m "fix: refine picture insert api"
```

**Step 5: Final status**

Report:

- Commits created.
- Verification commands and results.
- Any residual limitations, especially that positioning/object-selection remains out of scope.

# File Print And Export API Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add high-level file print and export helpers for normal printing, print setup, PDF output, and image output.

**Architecture:** Extend the existing `FileApi` with a `print` group. Print/PDF actions use the HWP `Print` parameter set; image output uses the `PrintToImage` parameter set. Existing `app.file.image` remains unchanged.

**Tech Stack:** TypeScript, Vitest, HWP action bridge (`HwpBridge.execute`), generated parameter-set validation, static HTML docs.

---

### Task 1: Add Failing Tests For `app.file.print`

**Files:**
- Modify: `tests/unit/file-api.test.ts`
- Modify: `tests/unit/package-metadata.test.ts`

**Step 1: Add catalog assertions**

In `tests/unit/file-api.test.ts`, extend the existing action/parameter catalog test to assert:

```ts
expect(ACTION_MAP.get("Print")).toMatchObject({ id: "Print", parameterSetId: "Print" });
expect(ACTION_MAP.get("PrintSetup")).toMatchObject({ id: "PrintSetup", parameterSetId: "Print" });
expect(ACTION_MAP.get("PrintToPDF")).toMatchObject({ id: "PrintToPDF", parameterSetId: "Print" });
expect(ACTION_MAP.get("PrintToImage")).toMatchObject({ id: "PrintToImage", parameterSetId: "PrintToImage" });
expect(getParameterSetDefinition("Print")?.items.some((item) => item.id === "PrintMemo")).toBe(true);
expect(getParameterSetDefinition("PrintToImage")?.items.some((item) => item.id === "Resolution")).toBe(true);
```

**Step 2: Add red test for normal print**

Add a test that calls:

```ts
await app.file.print.print({
  range: "custom",
  rangeCustom: "1-3",
  includeLinkedDocuments: true,
  numCopy: 2,
  collate: true,
  printerName: "Hancom PDF",
  printToFile: true,
  fileName: "C:/tmp/out.prn",
  reverseOrder: false,
  printImage: true,
  printDrawObject: true,
  printMemo: false,
  printRevision: true,
  printColorSet: 2,
  withoutBlank: 1,
});
```

Assert `bridge.execute` called `Print` with parameter set `Print` and values:

```ts
{
  Range: 4,
  RangeCustom: "1-3",
  RangeIncludeLinkedDoc: 1,
  NumCopy: 2,
  Collate: 1,
  PrinterName: "Hancom PDF",
  PrintToFile: 1,
  FileName: "C:/tmp/out.prn",
  ReverseOrder: 0,
  PrintImage: 1,
  PrintDrawObj: 1,
  PrintMemo: 0,
  PrintRevision: 1,
  PrintColorSet: 2,
  PrintWithoutBlank: 1,
}
```

**Step 3: Add red test for setup and PDF**

Call:

```ts
await app.file.print.setup({ printMemo: true, printMemoContents: true });
await app.file.print.pdf({ fileName: "C:/tmp/out.pdf", range: "current", printToFile: true });
```

Assert:

- first call action `PrintSetup`, parameter set `Print`, values `{ PrintMemo: 1, PrintMemoContents: 1 }`
- second call action `PrintToPDF`, parameter set `Print`, values `{ FileName: "C:/tmp/out.pdf", Range: 1, PrintToFile: 1 }`

**Step 4: Add red test for image output**

Call:

```ts
await app.file.print.image({
  fileName: "C:/tmp/page.png",
  format: "png",
  range: "current",
  resolution: 200,
  colorDepth: 24,
  width: 1200,
  height: 1600,
});
```

Assert action `PrintToImage`, parameter set `PrintToImage`, values:

```ts
{
  FileName: "C:/tmp/page.png",
  Format: 3,
  Range: 1,
  Resolution: 200,
  ColorDepth: 24,
  Width: 1200,
  Height: 1600,
}
```

**Step 5: Add package metadata red assertion**

In `tests/unit/package-metadata.test.ts`, add:

```ts
FilePrintApi: expect.any(Function)
```

If the test includes runtime exports only, do not add type-only assertions.

**Step 6: Run red tests**

Run:

```bash
npx vitest run tests/unit/file-api.test.ts tests/unit/package-metadata.test.ts
```

Expected: FAIL because `app.file.print` and `FilePrintApi` are not implemented.

**Step 7: Do not commit red tests unless the orchestrating session asks**

Leave the red state uncommitted for Task 2.

---

### Task 2: Implement `FilePrintApi`

**Files:**
- Create: `src/file/print.ts`
- Modify: `src/file/api.ts`
- Modify: `src/file/index.ts`
- Modify: `src/file/types.ts`
- Modify: `src/file/values.ts`
- Modify: `src/index.ts`
- Modify: `tests/unit/file-api.test.ts`
- Modify: `tests/unit/package-metadata.test.ts`

**Step 1: Add public types**

In `src/file/types.ts`, add:

```ts
export type FilePrintRange =
  | "all"
  | "current"
  | "fromCurrent"
  | "toCurrent"
  | "custom"
  | "selection"
  | "document"
  | "section"
  | number;

export type FilePrintImageFormat = "bmp" | "gif" | "png" | "jpg" | "wmf" | number;

export type FilePrintOptions = {
  fileName?: string;
  range?: FilePrintRange;
  rangeCustom?: string;
  includeLinkedDocuments?: boolean;
  numCopy?: number;
  collate?: boolean;
  printMethod?: number;
  printerPaperSize?: number;
  printerPaperWidth?: number;
  printerPaperLength?: number;
  printerName?: string;
  printToFile?: boolean;
  reverseOrder?: boolean;
  pause?: number;
  printImage?: boolean;
  printDrawObject?: boolean;
  printClickHere?: boolean;
  printCropMark?: boolean;
  printWallpaper?: boolean;
  lastBlankPage?: boolean;
  binderHoleType?: number;
  evenOddPageType?: number;
  zoomX?: number;
  zoomY?: number;
  flags?: number;
  device?: number;
  printFormObject?: boolean;
  printMarkPen?: boolean;
  printMemo?: boolean;
  printMemoContents?: boolean;
  printRevision?: boolean;
  userOrder?: boolean;
  overlapSize?: number;
  usingPageNumber?: boolean;
  printBarcode?: boolean;
  printPronounce?: boolean;
  printColorSet?: number;
  withoutBlank?: number;
};

export type FilePrintImageOptions = {
  fileName?: string;
  format?: FilePrintImageFormat;
  colorDepth?: number;
  resolution?: number;
  range?: FilePrintRange;
  width?: number;
  height?: number;
};
```

**Step 2: Add value mappers**

In `src/file/values.ts`, add helpers:

```ts
export function createFilePrintValues(options: FilePrintOptions): ParameterValues;
export function createFilePrintImageValues(options: FilePrintImageOptions): ParameterValues;
```

Range alias mapping:

```ts
const FILE_PRINT_RANGE_VALUES = {
  all: 0,
  current: 1,
  fromCurrent: 2,
  toCurrent: 3,
  custom: 4,
  selection: 5,
  document: 6,
  section: 7,
} as const;
```

Image format alias mapping:

```ts
const FILE_PRINT_IMAGE_FORMAT_VALUES = {
  bmp: 1,
  gif: 2,
  png: 3,
  jpg: 4,
  wmf: 5,
} as const;
```

Map print fields exactly:

```ts
fileName -> FileName
range -> Range
rangeCustom -> RangeCustom
includeLinkedDocuments -> RangeIncludeLinkedDoc
numCopy -> NumCopy
collate -> Collate
printMethod -> PrintMethod
printerPaperSize -> PrinterPaperSize
printerPaperWidth -> PrinterPaperWidth
printerPaperLength -> PrinterPaperLength
printerName -> PrinterName
printToFile -> PrintToFile
reverseOrder -> ReverseOrder
pause -> Pause
printImage -> PrintImage
printDrawObject -> PrintDrawObj
printClickHere -> PrintClickHere
printCropMark -> PrintCropMark
printWallpaper -> IdcPrintWallPaper
lastBlankPage -> LastBlankPage
binderHoleType -> BinderHoleType
evenOddPageType -> EvenOddPageType
zoomX -> ZoomX
zoomY -> ZoomY
flags -> Flags
device -> Device
printFormObject -> PrintFormObj
printMarkPen -> PrintMarkPen
printMemo -> PrintMemo
printMemoContents -> PrintMemoContents
printRevision -> PrintRevision
userOrder -> UserOrder
overlapSize -> OverlapSize
usingPageNumber -> UsingPagenum
printBarcode -> PrintBarcode
printPronounce -> PrintPronounce
printColorSet -> PrintColorSet
withoutBlank -> PrintWithoutBlank
```

Map image fields:

```ts
fileName -> FileName
format -> Format
colorDepth -> ColorDepth
resolution -> Resolution
range -> Range
width -> Width
height -> Height
```

Use `setBooleanValue` for boolean fields and `setValue` for numeric/string fields.

**Step 3: Create `src/file/print.ts`**

Implement:

```ts
export class FilePrintApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "execute">,
    private readonly ensureReady: () => Promise<void>,
  ) {}

  async print(options: FilePrintOptions = {}): Promise<void> {
    await executeFileAction(this.bridge, this.ensureReady, "Print", createParameterSetPayload("Print", createFilePrintValues(options)));
  }

  async setup(options: FilePrintOptions = {}): Promise<void> {
    await executeFileAction(this.bridge, this.ensureReady, "PrintSetup", createParameterSetPayload("Print", createFilePrintValues(options)));
  }

  async pdf(options: FilePrintOptions = {}): Promise<void> {
    await executeFileAction(this.bridge, this.ensureReady, "PrintToPDF", createParameterSetPayload("Print", createFilePrintValues(options)));
  }

  async image(options: FilePrintImageOptions = {}): Promise<void> {
    await executeFileAction(this.bridge, this.ensureReady, "PrintToImage", createParameterSetPayload("PrintToImage", createFilePrintImageValues(options)));
  }
}
```

**Step 4: Attach to `FileApi`**

In `src/file/api.ts`:

```ts
import { FilePrintApi } from "./print";
readonly print: FilePrintApi;
this.print = new FilePrintApi(bridge, ensureReady);
```

**Step 5: Export public API**

In `src/file/index.ts`, export `FilePrintApi` and the new types.

In `src/index.ts`, export `FilePrintApi` and the new types.

**Step 6: Run focused tests and typecheck**

Run:

```bash
npx vitest run tests/unit/file-api.test.ts tests/unit/package-metadata.test.ts
npm run typecheck
```

Expected: PASS.

**Step 7: Commit**

```bash
git add src/file/print.ts src/file/api.ts src/file/index.ts src/file/types.ts src/file/values.ts src/index.ts tests/unit/file-api.test.ts tests/unit/package-metadata.test.ts
git commit -m "feat: add file print export api"
```

---

### Task 3: Document Print And Export API

**Files:**
- Modify: `README.md`
- Modify: `docs/api/v2/app-file.html`

**Step 1: Update README**

Add examples near existing file API examples:

```ts
await app.file.print.print({ range: "all", numCopy: 2, collate: true });
await app.file.print.pdf({ fileName: "C:/tmp/out.pdf", range: "current", printToFile: true });
await app.file.print.image({ fileName: "C:/tmp/page.png", format: "png", resolution: 200 });
```

Keep existing `app.file.image.save/options` examples if present. Do not remove compatibility docs.

**Step 2: Update `docs/api/v2/app-file.html`**

Add a print/export section that includes:

- `print.print(options)` -> `Print`
- `print.setup(options)` -> `PrintSetup`
- `print.pdf(options)` -> `PrintToPDF`
- `print.image(options)` -> `PrintToImage`
- `FilePrintOptions` table
- `FilePrintImageOptions` table
- Range aliases and image format aliases
- Note that `app.file.image.save/options` remains the `FileSaveAsImage` API.

**Step 3: Run documentation-adjacent verification**

Run:

```bash
npm run typecheck
npx vitest run tests/unit/file-api.test.ts tests/unit/package-metadata.test.ts
```

Expected: PASS.

**Step 4: Commit**

```bash
git add README.md docs/api/v2/app-file.html
git commit -m "docs: document file print export api"
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
- `npm test`: PASS
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

- `app.file.print` is exposed from `FileApi`.
- Print/PDF/setup actions use the `Print` parameter set.
- Image output uses `PrintToImage` parameter set.
- Existing `app.file.image` remains unchanged.
- Docs distinguish `print.image()` from `image.save()`.
- Public exports and package metadata tests agree.

**Step 4: Request final code review**

Use `superpowers:requesting-code-review` before claiming completion. Address any findings with `superpowers:receiving-code-review`.

**Step 5: Finish**

Because the user requested direct work on `main`, do not offer merge options. Report completed commits and verification results.

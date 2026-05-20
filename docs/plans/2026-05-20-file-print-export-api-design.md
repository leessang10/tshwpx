# File Print And Export API Design

## Goal

Add high-level automation helpers for printing and exporting documents to PDF or image files.

The API should expose the stable HWP print actions:

- `Print`
- `PrintSetup`
- `PrintToPDF`
- `PrintToImage`

Existing `app.file.image.save(options)` and `app.file.image.options(options)` remain available for compatibility. The new `app.file.print.image(options)` is the clearer document image export API.

## Public API Shape

Add `print` to `FileApi`:

```ts
await app.file.print.print({
  range: "all",
  numCopy: 2,
  collate: true,
  printerName: "Hancom PDF",
  printImage: true,
  printDrawObject: true,
  printMemo: false,
});

await app.file.print.setup({ printMemo: true });

await app.file.print.pdf({
  fileName: "C:/tmp/out.pdf",
  range: "current",
  printToFile: true,
});

await app.file.print.image({
  fileName: "C:/tmp/page.png",
  format: "png",
  range: "current",
  resolution: 200,
  width: 1200,
  height: 1600,
});
```

## Module Layout

Add `src/file/print.ts`.

Planned classes:

- `FilePrintApi`

Planned types:

- `FilePrintOptions`
- `FilePrintImageOptions`
- `FilePrintRange`
- `FilePrintImageFormat`

Update:

- `src/file/api.ts`
- `src/file/index.ts`
- `src/file/types.ts`
- `src/file/values.ts`
- `src/index.ts`

## Print Options

`FilePrintOptions` maps to the HWP `Print` parameter set.

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
```

Range mapping:

- `all` -> `0`
- `current` -> `1`
- `fromCurrent` -> `2`
- `toCurrent` -> `3`
- `custom` -> `4`
- `selection` -> `5`
- `document` -> `6`
- `section` -> `7`

Boolean options use the existing HWP numeric boolean convention through `setBooleanValue`.

## Print Actions

`app.file.print.print(options)` executes:

- Action: `Print`
- ParameterSet: `Print`

`app.file.print.setup(options)` executes:

- Action: `PrintSetup`
- ParameterSet: `Print`

`app.file.print.pdf(options)` executes:

- Action: `PrintToPDF`
- ParameterSet: `Print`

The API does not force a particular PDF driver. Users can pass `printerName`, `fileName`, `printToFile`, and `device` if their HWP/printer setup needs those values.

## Image Export

`FilePrintImageOptions` maps to the HWP `PrintToImage` parameter set.

```ts
export type FilePrintImageFormat = "bmp" | "gif" | "png" | "jpg" | "wmf" | number;

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

Format mapping:

- `bmp` -> `1`
- `gif` -> `2`
- `png` -> `3`
- `jpg` -> `4`
- `wmf` -> `5`

`app.file.print.image(options)` executes:

- Action: `PrintToImage`
- ParameterSet: `PrintToImage`

## Non-Goals

This pass does not model the nested `PrintWatermark` parameter set.

This pass does not query OS printer lists.

This pass does not remove or rename `app.file.image`. That API continues to wrap `FileSaveAsImage` and `FileSaveAsImageOption`.

## Tests

Add unit tests in `tests/unit/file-api.test.ts` for:

- `app.file.print.print(options)` executing `Print` with `Print` parameter payload.
- `app.file.print.setup(options)` executing `PrintSetup` with `Print` parameter payload.
- `app.file.print.pdf(options)` executing `PrintToPDF` with `Print` parameter payload.
- `app.file.print.image(options)` executing `PrintToImage` with `PrintToImage` parameter payload.
- String range and image format aliases mapping to numeric HWP values.
- Boolean print options mapping to `1` and `0`.

Update package metadata tests for `FilePrintApi`.

## Documentation

Update `README.md` and `docs/api/v2/app-file.html`.

The docs should explain the distinction:

- `app.file.print.image(options)` uses `PrintToImage`.
- `app.file.image.save(options)` remains the older `FileSaveAsImage` wrapper.

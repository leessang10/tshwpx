# tshwpx

TypeScript wrapper for Hancom HwpAutomation.

## Requirements

- Windows
- Node.js 18+
- Hancom HWP installed
- Windows PowerShell available as `powershell.exe`

Hancom HwpAutomation may have separate commercial-use terms. Check Hancom's official policy before using this package commercially.

## Install

```bash
npm install tshwpx
```

## Quick Start

```ts
import { App } from "tshwpx";

const app = new App({ visible: true });
await app.file.open("C:/tmp/input.hwp");
await app.doc.insertText("Hello world");
await app.file.saveAs("C:/tmp/output.hwp");
await app.file.quit();
```

## High-Level Document API

```ts
const app = new App({ visible: true });

await app.doc.charShape.set({
  height: 1200,
  bold: true,
  faceName: "맑은 고딕",
  textColor: 0x0000ff,
});

await app.doc.charShape.textColor.set("red");
await app.doc.charShape.underline.toggle();
await app.doc.charShape.width.increase();
await app.doc.charShape.script.cycleSuperSubscript();
await app.doc.charShape.bold.toggle();
await app.doc.charShape.height.decrease();
await app.doc.charShape.spacing.increase();
await app.doc.charShape.faceName.next();
await app.doc.charShape.dialog.open({ bold: true });

await app.doc.tables.insert({
  rows: 3,
  cols: 4,
  rowHeight: [1200, 1200, 1200],
  colWidth: [3000, 3000, 3000, 3000],
});
await app.doc.tables.rows.insertBelow(1);
await app.doc.tables.columns.insertRight(1);
await app.doc.tables.cells.split({ rows: 2, cols: 2 });
await app.doc.tables.cells.merge();

await app.doc.pages.break();
await app.doc.pages.sections.break();
await app.doc.pages.move.next();
await app.doc.pages.delete({ range: 2, rangeCustom: "1-3", usingPageNumber: true });
await app.doc.pages.numbering.insert();
await app.doc.pages.numbering.position.set({ drawPos: 5, numberFormat: 4 });
await app.doc.pages.orientation.landscape();
await app.doc.pages.setup({
  paperWidth: 59528,
  paperHeight: 84188,
  landscape: true,
  margins: {
    left: 2834,
    right: 2834,
    top: 5668,
    bottom: 5668,
  },
  applyTo: 3,
});

await app.doc.paragraph.shape.set({
  leftMargin: 100,
  rightMargin: 100,
  lineSpacingType: 0,
  lineSpacing: 160,
  alignType: 3,
  keepWithNext: true,
});
await app.doc.paragraph.align.center();
await app.doc.paragraph.margin.left.increase();
await app.doc.paragraph.lineSpacing.decrease();
await app.doc.paragraph.indentation.positive();
await app.doc.paragraph.numbering.bullet({ level: 1 });
await app.doc.paragraph.numbering.set({
  type: "paragraph",
  level: 1,
  leftMargin: 120,
  indentation: -40,
});
await app.doc.paragraph.numbering.startNew({ level: 1 });
await app.doc.paragraph.numbering.levelDown();
await app.doc.paragraph.numbering.defaults.bullet();
await app.doc.paragraph.numbering.dialog.paragraph({ level: 1 });
await app.doc.paragraph.numbering.clear();

await app.doc.styles.apply(3);
await app.doc.styles.shortcut(1);
await app.doc.styles.edit(3);
await app.doc.styles.delete({ target: 7, alternation: 1 });
await app.doc.styles.changeToCurrentShape({
  type: 1,
  localName: "본문",
  charShape: { Height: 1000 },
  paraShape: { AlignType: 3 },
});
await app.doc.styles.numbering.set({ type: "bullet", level: 1 });
await app.doc.styles.template.open("C:/tmp/base.sty");
await app.doc.styles.clearCharStyle();

await app.doc.cursor.move.document.begin();
await app.doc.cursor.move.word.next();
await app.doc.cursor.move.to("documentEnd");
const cursorPosition = await app.doc.cursor.position.get();
await app.doc.cursor.position.set(cursorPosition);
await app.doc.cursor.selection.start();
await app.doc.cursor.selection.extend.nextWord();
await app.doc.cursor.selection.range({ start: { para: 0, pos: 0 }, end: { para: 0, pos: 5 } });
await app.doc.cursor.selection.cancel();

await app.file.new();
await app.file.dialog.open();
await app.file.preview.open();
await app.file.password.set({ password: "secret", fullRange: true, level: 1 });
await app.file.security.set({ password: "1234567", noPrint: true, noCopy: false });
await app.file.image.save({ fileName: "C:/tmp/page.png", range: 6, printToFile: true });
await app.file.template.open({ saveFileName: "C:/tmp/template.hwt", openFormat: "HWP" });

await app.quit();
```

`app.doc.charShape.set(...)` is backed by the documented `CharShape` action and `CharShape` ParameterSet. Boolean options are converted to HWP's `0`/`1` values.
The `charShape` group covers the documented `CharShape*` actions, including preset text colors, underline, width, script, bold/italic, height, spacing, face-name navigation, focus helpers, and dialogs.
`app.doc.tables.*` is backed by documented table actions such as `TableCreate`, `TableInsertLowerRow`, `TableInsertRightColumn`, `TableSplitCell`, and `TableMergeCell`.
`app.doc.pages.*` is backed by documented page actions such as `BreakPage`, `BreakSection`, `DeletePage`, `PageNumPos`, `PageLandscape`, `PagePortrait`, and `PageSetup`. Page setup values are sent through `SecDef.PageDef`, matching Hancom's nested ParameterSet shape.
`app.doc.paragraph.*` is backed by documented paragraph actions such as `ParagraphShape`, `ParagraphShapeAlign*`, `ParagraphShapeIncrease*`, `PutBullet`, `PutParaNumber`, and `PutOutlineNumber`.
`app.doc.styles.*` is backed by documented style actions such as `StyleEx`, `StyleAdd`, `StyleEdit`, `StyleDelete`, `StyleShortcut*`, `StyleChangeToCurrentShape`, `StyleParaNumberBullet`, and `StyleTemplate`.
`app.doc.cursor.*` is backed by documented cursor actions such as `Move*`, `MoveSel*`, `Select*`, plus automation methods such as `MovePos`, `GetPosBySet`, `SetPosBySet`, and `SelectText`.
`app.file.*` wraps direct bridge file operations and documented file actions such as `FileNew`, `FileOpen`, `FilePassword`, `FileSetSecurity`, `FileSaveAsImage`, and `FileTemplate`. Existing `app.open(...)`, `app.save(...)`, `app.saveAs(...)`, `app.close()`, and `app.quit()` remain as compatibility aliases.

## Low-Level Access

```ts
const app = new App();
await app.low.run("MoveDocBegin");
await app.quit();
```

The default bridge is PowerShell-based and keeps HWP state in a child process. Direct JavaScript COM object access is only available when a custom bridge exposes it through `app.raw`.

## Catalog-Backed API

`tshwpx` includes local metadata extracted from Hancom's official 2504 HwpAutomation PDF tables.

```ts
const app = new App();

const action = app.actions.get("CharShape");
const charShape = app.params.create("CharShape", {
  Height: 1200,
  Bold: 1,
});

await app.actions.execute("CharShape", charShape);

const events = app.events.list();
const dispose = app.events.on("DocumentAfterOpen", (documentId) => {
  console.log(documentId);
});

dispose();
await app.quit();
```

- `app.actions` exposes ActionTable entries and delegates `run`/`execute` to the active bridge.
- `app.params` exposes ParameterSetTable entries and creates structured parameter payloads.
- `app.events` exposes documented event metadata and local listener registration. Native event delivery depends on bridge support.

Converted local references are available under `docs/api/`.

## pyhwpx Mapping

| pyhwpx | tshwpx |
| --- | --- |
| `Hwp` | `App` |
| `insert_text` | `app.doc.insertText` |
| `save_as` | `app.saveAs` |
| `quit` | `app.quit` |

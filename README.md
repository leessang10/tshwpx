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

## HWP Automation Security Module

Hancom HWP may show a security approval prompt when automation opens or saves local files.
Register the file path checker module explicitly when you want to suppress that prompt for automation file access:

```bash
npx tshwpx install-security-module
npx tshwpx doctor
```

Then enable the runtime registration call when creating the app:

```ts
const app = new App({ registerSecurityModule: true });
```

To remove the registry registration and the installed DLL copy:

```bash
npx tshwpx uninstall-security-module
```

The CLI writes the registration under `HKCU\Software\HNC\HwpAutomation\Modules`, using the value name `FilePathCheckerModuleExample`.

## Quick Start

```ts
import { App } from "tshwpx";

const app = new App({ visible: true });
await app.file.open("C:/tmp/input.hwp");
await app.doc.text.insert("Hello world");
await app.doc.saveAs("C:/tmp/output.hwp");
await app.close();
```

## High-Level Document API

```ts
const app = new App({ visible: true });

await app.doc.text.insert("Hello world");
await app.doc.text.lineBreak();
await app.doc.text.paragraphBreak();
await app.doc.text.tab();
await app.doc.text.deletePreviousChar();
await app.doc.text.deleteNextChar();

await app.doc.search.find("old");
await app.doc.search.replace({ find: "old", replace: "new" });
await app.doc.search.replaceAll({ find: "old", replace: "new", direction: "all" });
await app.doc.search.dialog.open();

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

await app.close();
```

The high-level API is grouped by what you want to edit:

- `app.doc.text.*` inserts and edits text at the current cursor position.
- `app.doc.search.*` finds and replaces text in the active document.
- `app.doc.charShape.*` changes text appearance.
- `app.doc.paragraph.*` changes paragraph layout, alignment, spacing, and numbering.
- `app.doc.tables.*` creates and edits tables.
- `app.doc.pages.*` handles page breaks, sections, numbering, orientation, and page setup.
- `app.doc.cursor.*` moves the cursor and controls text selection.
- `app.doc.styles.*` applies and edits HWP styles.
- `app.doc.save()`, `app.doc.saveAs(...)`, and `app.doc.close()` manage the current document lifecycle.
- `app.file.*` opens documents, creates documents, protects files, previews, and exports files.
- `app.close()` closes the HWP application process.

## Raw Bridge Access

```ts
const app = new App();
const raw = app.raw;
await app.close();
```

The public API is intentionally high-level. `app.raw` is the only escape hatch for unsupported automation. The default PowerShell bridge keeps HWP state in a child process, so direct JavaScript COM object access is only available when a custom bridge exposes it through `app.raw`.

Converted local references are available under `docs/api/`. Original HTML conversions are stored in `docs/api/v1/`, and TSHWPX API notes start in `docs/api/v2/`.

## pyhwpx Mapping

| pyhwpx | tshwpx |
| --- | --- |
| `Hwp` | `App` |
| `insert_text` | `app.doc.text.insert` |
| `save_as` | `app.doc.saveAs` |
| `quit` | `app.close` |

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
await app.open("C:/tmp/input.hwp");
await app.doc.insertText("Hello world");
await app.saveAs("C:/tmp/output.hwp");
await app.quit();
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

await app.quit();
```

`app.doc.charShape.set(...)` is backed by the documented `CharShape` action and `CharShape` ParameterSet. Boolean options are converted to HWP's `0`/`1` values.
The `charShape` group covers the documented `CharShape*` actions, including preset text colors, underline, width, script, bold/italic, height, spacing, face-name navigation, focus helpers, and dialogs.

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

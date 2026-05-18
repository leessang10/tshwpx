# tshwpx

TypeScript wrapper for Hancom HwpAutomation.

## Requirements

- Windows
- Node.js 18+
- Hancom HWP installed
- A working COM bridge dependency, currently `winax`

Hancom HwpAutomation may have separate commercial-use terms. Check Hancom's official policy before using this package commercially.

## Install

```bash
npm install tshwpx
```

## Quick Start

```ts
import { App } from "tshwpx";

const app = new App({ visible: true });
app.open("C:/tmp/input.hwp");
app.doc.insertText("Hello world");
app.saveAs("C:/tmp/output.hwp");
app.quit();
```

## Low-Level Access

```ts
const app = new App();
app.low.run("MoveDocBegin");
app.raw.HAction.Run("MoveDocBegin");
```

## pyhwpx Mapping

| pyhwpx | tshwpx |
| --- | --- |
| `Hwp` | `App` |
| `insert_text` | `app.doc.insertText` |
| `save_as` | `app.saveAs` |
| `quit` | `app.quit` |

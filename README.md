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

## Low-Level Access

```ts
const app = new App();
await app.low.run("MoveDocBegin");
await app.quit();
```

The default bridge is PowerShell-based and keeps HWP state in a child process. Direct JavaScript COM object access is only available when a custom bridge exposes it through `app.raw`.

## pyhwpx Mapping

| pyhwpx | tshwpx |
| --- | --- |
| `Hwp` | `App` |
| `insert_text` | `app.doc.insertText` |
| `save_as` | `app.saveAs` |
| `quit` | `app.quit` |

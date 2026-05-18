# tshwpx Design

Date: 2026-05-18

## Goal

Build `tshwpx`, a Windows-only TypeScript/JavaScript wrapper for Hancom HwpAutomation.
The first release should use a two-layer API:

- `App` and `app.doc` for everyday document automation.
- `app.low` and `app.raw` for direct HwpAutomation access.

The library should avoid a Python dependency. It will call the installed Hancom HWP COM/OLE automation object directly through a Node COM bridge.

## Scope

The MVP targets this usage:

```ts
import { App } from "tshwpx";

const app = new App({ visible: true });
app.open("C:/tmp/input.hwp");
app.doc.insertText("Hello world");
app.saveAs("C:/tmp/output.hwp");
app.quit();
```

Low-level access remains explicit:

```ts
app.low.run("MoveDocBegin");
app.raw.HAction.Run("MoveDocBegin");
```

The package is explicitly limited to:

- Windows runtime
- Node.js runtime
- Installed Hancom HWP application
- A working Node COM bridge, initially `winax`

It does not parse HWP/HWPX files directly and does not provide a browser runtime.

## Architecture

The public surface starts with `App`, not `Hwp`. `App` owns the COM application lifecycle, file operations, and window visibility. Document-scoped operations live under `app.doc`. Direct HwpAutomation access lives under `app.low` and `app.raw`.

```text
src/
  index.ts
  app.ts
  doc.ts
  com/
    bridge.ts
    errors.ts
    types.ts
  low/
    actions.ts
    parameter-sets.ts
    engine.ts
  features/
    file.ts
    text.ts
```

Layer boundaries:

```text
App
- lifecycle: visible, quit
- files: open, save, saveAs, close
- document facade: app.doc
- low-level facade: app.low
- raw COM handle: app.raw

Document
- insertText
- future fields/bookmarks/tables/paragraphs collections

LowLevelApi
- run
- execute
- HAction
- HParameterSet
```

This mirrors the useful part of Python `hwpapi`: a small ergonomic top layer and a documented escape hatch. It also keeps the MVP smaller than a full action/ParameterSet generator.

## Public API

The MVP uses TypeScript-friendly camelCase method names.

```ts
type AppOptions = {
  visible?: boolean;
  reuseExisting?: boolean;
  registerSecurityModule?: boolean;
};

class App {
  constructor(options?: AppOptions);

  readonly raw: HwpComObject;
  readonly low: LowLevelApi;
  readonly doc: DocumentApi;

  setVisible(visible: boolean): void;
  quit(): void;

  open(path: string, options?: OpenOptions): void;
  save(): void;
  saveAs(path: string, format?: SaveFormat): void;
  close(): void;
}

class DocumentApi {
  insertText(text: string): void;
}

class LowLevelApi {
  readonly HAction: unknown;
  readonly HParameterSet: unknown;

  run(actionName: string): void;
  execute(actionName: string, parameterSet?: unknown): boolean;
}
```

The package may export `Hwp` as an alias of `App` only if we want a compatibility path for users coming from `pyhwpx`. The recommended docs should use `App`.

```ts
export { App };
export const Hwp = App;
```

The README should include a small migration table.

```text
pyhwpx       tshwpx
Hwp          App
insert_text app.doc.insertText
save_as     app.saveAs
quit        app.quit
```

## Future Collections

The two-layer structure reserves space for document-scoped collections without forcing them into the MVP.

```ts
app.doc.fields["author"] = "Hong";
app.doc.bookmarks.add("intro");
for (const table of app.doc.tables) {
  console.log(table.rows, table.cols);
}
```

Collections should be added incrementally after the core COM bridge is stable. Each collection needs fake-COM unit tests plus at least one opt-in Windows integration test.

## COM Bridge

The first bridge candidate is `winax`.

```ts
const winax = require("winax");
const hwp = new winax.Object("HWPFrame.HwpObject");
```

The constructor creates a new HWP automation object by default. `reuseExisting` can later attempt to attach to an existing instance if the bridge supports it reliably.

```ts
new App();
new App({ visible: true });
new App({ reuseExisting: true });
```

Security module registration is optional:

```ts
new App({ registerSecurityModule: true });
```

The MVP should treat this as a best-effort operation because registration behavior may depend on the installed HWP version and local environment.

## Error Handling

Public top-layer calls should wrap raw bridge or COM failures in `HwpAutomationError`.

```ts
try {
  app.open("missing.hwp");
} catch (error) {
  if (error instanceof HwpAutomationError) {
    console.error(error.code, error.message, error.cause);
  }
}
```

Initial error codes:

```text
UNSUPPORTED_PLATFORM
COM_BRIDGE_NOT_FOUND
HWP_NOT_INSTALLED
ACTION_FAILED
FILE_OPERATION_FAILED
SECURITY_MODULE_FAILED
```

`app.low` should also wrap action failures, but `app.raw` should preserve original COM behavior as much as possible.

## Testing

Tests are split into unit and integration layers.

Unit tests must run without Windows or HWP by using fake COM objects:

```text
tests/
  unit/
    app.test.ts
    doc.test.ts
    low-actions.test.ts
    bridge.test.ts
    errors.test.ts
```

Integration tests require a Windows machine with Hancom HWP installed and should only run when explicitly enabled.

```text
tests/
  integration/
    smoke.test.ts
```

Suggested gate:

```text
HWP_INTEGRATION=1
```

## Documentation

The initial documentation set:

```text
README.md
docs/
  getting-started.md
  pyhwpx-migration.md
  low-level-api.md
  automation-notes.md
```

The README must clearly state:

- Windows-only runtime
- Hancom HWP must be installed
- Supported Node.js versions
- Node COM bridge requirement
- Hancom HwpAutomation commercial-use terms must be checked against Hancom policy

## Release Plan

Start with `0.x` releases.

```text
0.1.0
- App class
- app.doc DocumentApi
- app.low LowLevelApi
- app.raw escape hatch
- open/save/saveAs/close/quit
- app.doc.insertText
- app.low.run/app.low.execute
- basic error handling

0.2.x
- selection and cursor helpers under app.doc

0.3.x
- fields and bookmarks collections

0.4.x
- table helpers and table collection

0.5.x
- replace and mail-merge helpers

1.0.0
- stabilized two-layer core API
```

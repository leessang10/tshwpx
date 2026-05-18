# tshwpx Design

Date: 2026-05-18

## Goal

Build `tshwpx`, a Windows-only TypeScript/JavaScript wrapper for Hancom HwpAutomation.
The first release should feel similar to `pyhwpx`: users create an `Hwp` instance and call simple methods such as `insertText`, `open`, `saveAs`, and `quit`.

The library should avoid a Python dependency. It will call the installed Hancom HWP COM/OLE automation object directly through a Node COM bridge.

## Scope

The MVP targets this usage:

```ts
import { Hwp } from "tshwpx";

const hwp = new Hwp({ visible: true });
hwp.insertText("Hello world");
hwp.saveAs("C:/tmp/hello.hwp");
hwp.quit();
```

The package is explicitly limited to:

- Windows runtime
- Node.js runtime
- Installed Hancom HWP application
- A working Node COM bridge, initially `winax`

It does not parse HWP/HWPX files directly and does not provide a browser runtime.

## Architecture

The public surface starts with one primary class, `Hwp`. Internally the package separates COM loading, action execution, parameter helpers, and feature methods.

```text
src/
  index.ts
  hwp.ts
  com/
    bridge.ts
    errors.ts
    types.ts
  actions/
    action-runner.ts
    parameter-set.ts
  features/
    app.ts
    file.ts
    text.ts
```

`Hwp` composes these internal modules and exposes a small ergonomic API. The raw COM object remains available for users who need the official HwpAutomation API directly.

```ts
const hwp = new Hwp();

hwp.insertText("Hello");
hwp.saveAs("C:/tmp/a.hwp");

hwp.raw.HAction.Run("MoveDocBegin");
```

## Public API

The MVP uses TypeScript-friendly camelCase method names instead of copying Python snake_case names.

```ts
type HwpOptions = {
  visible?: boolean;
  reuseExisting?: boolean;
  registerSecurityModule?: boolean;
};

class Hwp {
  constructor(options?: HwpOptions);

  readonly raw: HwpComObject;
  readonly HAction: unknown;
  readonly HParameterSet: unknown;

  setVisible(visible: boolean): void;
  quit(): void;

  open(path: string, options?: OpenOptions): void;
  save(): void;
  saveAs(path: string, format?: SaveFormat): void;
  close(): void;

  insertText(text: string): void;

  run(actionName: string): void;
  execute(actionName: string, parameterSet?: unknown): boolean;
}
```

The README should include a small migration table for `pyhwpx` users.

```text
pyhwpx       tshwpx
insert_text insertText
save_as     saveAs
quit        quit
```

## COM Bridge

The first bridge candidate is `winax`.

```ts
const winax = require("winax");
const hwp = new winax.Object("HWPFrame.HwpObject");
```

The constructor creates a new HWP automation object by default. `reuseExisting` can later attempt to attach to an existing instance if the bridge supports it reliably.

```ts
new Hwp();
new Hwp({ visible: true });
new Hwp({ reuseExisting: true });
```

Security module registration is optional:

```ts
new Hwp({ registerSecurityModule: true });
```

The MVP should treat this as a best-effort operation because registration behavior may depend on the installed HWP version and local environment.

## Error Handling

Convenience methods should wrap raw bridge or COM failures in `HwpAutomationError`.

```ts
try {
  hwp.open("missing.hwp");
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

The raw escape hatch should preserve original COM behavior as much as possible.

## Testing

Tests are split into unit and integration layers.

Unit tests must run without Windows or HWP by using fake COM objects:

```text
tests/
  unit/
    hwp.test.ts
    action-runner.test.ts
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
- Hwp class
- open/save/saveAs/close/quit
- insertText
- run/execute
- raw/HAction/HParameterSet escape hatch
- basic error handling

0.2.x
- selection and cursor helpers

0.3.x
- table helpers

0.4.x
- field, replace, and mail-merge helpers

1.0.0
- stabilized core API
```

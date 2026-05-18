# tshwpx Two-Layer API Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the first `tshwpx` MVP with a two-layer API: `App`/`app.doc` for everyday automation and `app.low`/`app.raw` for direct HwpAutomation access.

**Architecture:** `App` owns the HWP COM object lifecycle, window visibility, and file operations. `DocumentApi` owns document-scoped helpers such as `insertText`. `LowLevelApi` wraps `HAction` and `HParameterSet`, while `app.raw` exposes the original COM object.

**Tech Stack:** TypeScript, Node.js, Vitest, tsup, `winax` as an optional Windows COM bridge dependency.

---

## Notes Before Starting

This repository already has a remote at `git@github.com:leessang10/tshwpx.git`.

Runtime support is intentionally narrow:

- Windows
- Node.js 18+
- Installed Hancom HWP
- Working Node COM bridge, initially `winax`

Unit tests must not require Windows or Hancom HWP.

---

### Task 1: Project Scaffold

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsup.config.ts`
- Create: `vitest.config.ts`
- Modify: `.gitignore`
- Create: `src/index.ts`

**Step 1: Create package metadata**

Write `package.json` with ESM/CJS exports, build scripts, test scripts, and optional `winax` dependency.

```json
{
  "name": "tshwpx",
  "version": "0.1.0",
  "description": "TypeScript wrapper for Hancom HwpAutomation.",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    }
  },
  "files": ["dist", "README.md"],
  "scripts": {
    "build": "tsup",
    "test": "vitest run",
    "typecheck": "tsc --noEmit"
  },
  "keywords": ["hwp", "hwpx", "hancom", "automation", "com"],
  "license": "MIT",
  "optionalDependencies": {
    "winax": "^3.6.1"
  },
  "devDependencies": {
    "@types/node": "^20.12.0",
    "tsup": "^8.0.0",
    "typescript": "^5.4.0",
    "vitest": "^1.5.0"
  },
  "engines": {
    "node": ">=18"
  }
}
```

**Step 2: Add TypeScript and build config**

Write `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "declaration": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "dist"
  },
  "include": ["src", "tests"]
}
```

Write `tsup.config.ts`:

```ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  external: ["winax"],
});
```

Write `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
  },
});
```

Ensure `.gitignore` contains:

```gitignore
.idea/
node_modules
dist
coverage
*.tsbuildinfo
```

**Step 3: Create public entry exports**

Write `src/index.ts`:

```ts
export { App, Hwp } from "./app";
export { DocumentApi } from "./doc";
export { LowLevelApi } from "./low/low-level-api";
export { HwpAutomationError } from "./com/errors";
export type { AppOptions, OpenOptions, SaveFormat } from "./app";
```

`Hwp` is an alias for `App`; docs should prefer `App`.

**Step 4: Install and verify scaffold**

Run:

```bash
npm install
npm run typecheck
npm test
```

Expected: dependency installation succeeds. Typecheck may fail until later tasks create referenced files.

**Step 5: Commit**

```bash
git add package.json tsconfig.json tsup.config.ts vitest.config.ts .gitignore src/index.ts
git commit -m "chore: scaffold tshwpx package"
```

---

### Task 2: Error Model

**Files:**
- Create: `src/com/errors.ts`
- Test: `tests/unit/errors.test.ts`

**Step 1: Write the failing test**

```ts
import { describe, expect, it } from "vitest";
import { HwpAutomationError } from "../../src/com/errors";

describe("HwpAutomationError", () => {
  it("stores code, message, and cause", () => {
    const cause = new Error("native failure");
    const error = new HwpAutomationError("HWP_NOT_INSTALLED", "Cannot create HWP.", cause);

    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe("HwpAutomationError");
    expect(error.code).toBe("HWP_NOT_INSTALLED");
    expect(error.cause).toBe(cause);
  });
});
```

**Step 2: Run test to verify it fails**

Run:

```bash
npx vitest run tests/unit/errors.test.ts
```

Expected: FAIL because `src/com/errors.ts` does not exist.

**Step 3: Implement error class**

```ts
export type HwpAutomationErrorCode =
  | "UNSUPPORTED_PLATFORM"
  | "COM_BRIDGE_NOT_FOUND"
  | "HWP_NOT_INSTALLED"
  | "ACTION_FAILED"
  | "FILE_OPERATION_FAILED"
  | "SECURITY_MODULE_FAILED";

export class HwpAutomationError extends Error {
  readonly code: HwpAutomationErrorCode;

  constructor(code: HwpAutomationErrorCode, message: string, cause?: unknown) {
    super(message, { cause });
    this.name = "HwpAutomationError";
    this.code = code;
  }
}
```

**Step 4: Verify and commit**

Run:

```bash
npx vitest run tests/unit/errors.test.ts
```

Expected: PASS.

Commit:

```bash
git add src/com/errors.ts tests/unit/errors.test.ts
git commit -m "feat: add hwp automation error model"
```

---

### Task 3: COM Bridge Loader

**Files:**
- Create: `src/com/types.ts`
- Create: `src/com/bridge.ts`
- Test: `tests/unit/bridge.test.ts`

**Step 1: Write the failing test**

```ts
import { describe, expect, it, vi } from "vitest";
import { createHwpObject } from "../../src/com/bridge";
import { HwpAutomationError } from "../../src/com/errors";

describe("createHwpObject", () => {
  it("rejects non-Windows platforms", () => {
    expect(() =>
      createHwpObject({
        platform: "linux",
        loadWinax: () => ({ Object: vi.fn() }),
      }),
    ).toThrow(HwpAutomationError);
  });

  it("creates HWPFrame.HwpObject through winax", () => {
    const raw = {};
    const ObjectCtor = vi.fn(() => raw);

    const result = createHwpObject({
      platform: "win32",
      loadWinax: () => ({ Object: ObjectCtor }),
    });

    expect(ObjectCtor).toHaveBeenCalledWith("HWPFrame.HwpObject");
    expect(result).toBe(raw);
  });
});
```

**Step 2: Implement COM types**

```ts
export type HActionLike = {
  Run(actionName: string): boolean;
  Execute(actionName: string, parameterSet?: unknown): boolean;
};

export type HwpComObject = {
  HAction?: HActionLike;
  HParameterSet?: Record<string, unknown>;
  RegisterModule?: (moduleType: string, moduleName: string) => boolean;
  Quit?: () => void;
  Open?: (...args: unknown[]) => boolean;
  Save?: (...args: unknown[]) => boolean;
  SaveAs?: (...args: unknown[]) => boolean;
  XHwpWindows?: {
    Item(index: number): {
      Visible?: boolean;
    };
  };
};

export type WinaxBridge = {
  Object: new (programId: string) => HwpComObject;
  GetObject?: (programId: string) => HwpComObject;
};
```

**Step 3: Implement bridge loader**

```ts
import { createRequire } from "node:module";
import { HwpAutomationError } from "./errors";
import type { HwpComObject, WinaxBridge } from "./types";

const require = createRequire(import.meta.url);

type BridgeOptions = {
  platform?: NodeJS.Platform;
  loadWinax?: () => WinaxBridge;
};

function loadDefaultWinax(): WinaxBridge {
  try {
    return require("winax") as WinaxBridge;
  } catch (error) {
    throw new HwpAutomationError(
      "COM_BRIDGE_NOT_FOUND",
      "The winax COM bridge is required to use tshwpx on Windows.",
      error,
    );
  }
}

export function createHwpObject(options: BridgeOptions = {}): HwpComObject {
  const platform = options.platform ?? process.platform;

  if (platform !== "win32") {
    throw new HwpAutomationError(
      "UNSUPPORTED_PLATFORM",
      "tshwpx requires Windows because Hancom HwpAutomation is exposed through COM/OLE.",
    );
  }

  const bridge = options.loadWinax?.() ?? loadDefaultWinax();

  try {
    return new bridge.Object("HWPFrame.HwpObject");
  } catch (error) {
    throw new HwpAutomationError(
      "HWP_NOT_INSTALLED",
      "Hancom HWP automation object could not be created. Check that Hancom HWP is installed.",
      error,
    );
  }
}
```

**Step 4: Verify and commit**

Run:

```bash
npx vitest run tests/unit/bridge.test.ts
```

Expected: PASS.

Commit:

```bash
git add src/com/types.ts src/com/bridge.ts tests/unit/bridge.test.ts
git commit -m "feat: add windows com bridge loader"
```

---

### Task 4: Low-Level API

**Files:**
- Create: `src/low/low-level-api.ts`
- Test: `tests/unit/low-level-api.test.ts`

**Step 1: Write the failing test**

```ts
import { describe, expect, it, vi } from "vitest";
import { LowLevelApi } from "../../src/low/low-level-api";
import { HwpAutomationError } from "../../src/com/errors";

describe("LowLevelApi", () => {
  it("exposes HAction and HParameterSet", () => {
    const raw = {
      HAction: { Run: vi.fn(() => true), Execute: vi.fn(() => true) },
      HParameterSet: { HInsertText: {} },
    };

    const low = new LowLevelApi(raw);

    expect(low.HAction).toBe(raw.HAction);
    expect(low.HParameterSet).toBe(raw.HParameterSet);
  });

  it("runs an action by name", () => {
    const raw = {
      HAction: { Run: vi.fn(() => true), Execute: vi.fn(() => true) },
      HParameterSet: {},
    };

    new LowLevelApi(raw).run("MoveDocBegin");

    expect(raw.HAction.Run).toHaveBeenCalledWith("MoveDocBegin");
  });

  it("wraps failed execute calls", () => {
    const raw = {
      HAction: { Run: vi.fn(() => true), Execute: vi.fn(() => false) },
      HParameterSet: {},
    };

    expect(() => new LowLevelApi(raw).execute("InsertText", {})).toThrow(HwpAutomationError);
  });
});
```

**Step 2: Implement `LowLevelApi`**

```ts
import { HwpAutomationError } from "../com/errors";
import type { HActionLike, HwpComObject } from "../com/types";

export class LowLevelApi {
  readonly HAction: HActionLike;
  readonly HParameterSet: Record<string, unknown>;

  constructor(private readonly raw: HwpComObject) {
    if (!raw.HAction) {
      throw new HwpAutomationError("HWP_NOT_INSTALLED", "HWP HAction is not available.");
    }

    this.HAction = raw.HAction;
    this.HParameterSet = raw.HParameterSet ?? {};
  }

  run(actionName: string): void {
    try {
      const ok = this.HAction.Run(actionName);
      if (ok === false) {
        throw new Error(`HAction.Run returned false for ${actionName}`);
      }
    } catch (error) {
      throw new HwpAutomationError("ACTION_FAILED", `Failed to run HWP action: ${actionName}`, error);
    }
  }

  execute(actionName: string, parameterSet?: unknown): boolean {
    try {
      const ok = this.HAction.Execute(actionName, parameterSet);
      if (ok === false) {
        throw new Error(`HAction.Execute returned false for ${actionName}`);
      }
      return ok;
    } catch (error) {
      throw new HwpAutomationError("ACTION_FAILED", `Failed to execute HWP action: ${actionName}`, error);
    }
  }
}
```

**Step 3: Verify and commit**

Run:

```bash
npx vitest run tests/unit/low-level-api.test.ts
```

Expected: PASS.

Commit:

```bash
git add src/low/low-level-api.ts tests/unit/low-level-api.test.ts
git commit -m "feat: add low-level hwp automation api"
```

---

### Task 5: Document API

**Files:**
- Create: `src/doc.ts`
- Test: `tests/unit/doc.test.ts`

**Step 1: Write the failing test**

```ts
import { describe, expect, it, vi } from "vitest";
import { DocumentApi } from "../../src/doc";
import { LowLevelApi } from "../../src/low/low-level-api";

describe("DocumentApi", () => {
  it("inserts text through HInsertText", () => {
    const parameterSet = { Text: "", HSet: { id: "set" } };
    const raw = {
      HAction: { Run: vi.fn(() => true), Execute: vi.fn(() => true) },
      HParameterSet: { HInsertText: parameterSet },
    };

    const doc = new DocumentApi(new LowLevelApi(raw));
    doc.insertText("Hello");

    expect(parameterSet.Text).toBe("Hello");
    expect(raw.HAction.Execute).toHaveBeenCalledWith("InsertText", parameterSet.HSet);
  });
});
```

**Step 2: Implement `DocumentApi`**

```ts
import { HwpAutomationError } from "./com/errors";
import { LowLevelApi } from "./low/low-level-api";

type InsertTextParameterSet = {
  Text: string;
  HSet: unknown;
};

export class DocumentApi {
  constructor(private readonly low: LowLevelApi) {}

  insertText(text: string): void {
    const parameterSet = this.low.HParameterSet.HInsertText as InsertTextParameterSet | undefined;

    if (!parameterSet) {
      throw new HwpAutomationError("ACTION_FAILED", "HInsertText parameter set is not available.");
    }

    parameterSet.Text = text;
    this.low.execute("InsertText", parameterSet.HSet);
  }
}
```

**Step 3: Verify and commit**

Run:

```bash
npx vitest run tests/unit/doc.test.ts
```

Expected: PASS.

Commit:

```bash
git add src/doc.ts tests/unit/doc.test.ts
git commit -m "feat: add document text api"
```

---

### Task 6: App Core and File Operations

**Files:**
- Create: `src/app.ts`
- Test: `tests/unit/app.test.ts`
- Modify: `src/index.ts`

**Step 1: Write the failing test**

```ts
import { describe, expect, it, vi } from "vitest";
import { App, Hwp } from "../../src/app";
import { HwpAutomationError } from "../../src/com/errors";

function createFakeRaw() {
  return {
    HAction: { Run: vi.fn(() => true), Execute: vi.fn(() => true) },
    HParameterSet: { HInsertText: { Text: "", HSet: {} } },
    XHwpWindows: { Item: vi.fn(() => ({ Visible: false })) },
    Open: vi.fn(() => true),
    Save: vi.fn(() => true),
    SaveAs: vi.fn(() => true),
    Quit: vi.fn(),
  };
}

describe("App", () => {
  it("exposes doc, low, and raw layers", () => {
    const raw = createFakeRaw();
    const app = new App({ createObject: () => raw });

    expect(app.raw).toBe(raw);
    expect(app.doc).toBeTruthy();
    expect(app.low.HAction).toBe(raw.HAction);
  });

  it("supports Hwp as an alias", () => {
    expect(Hwp).toBe(App);
  });

  it("opens and saves files", () => {
    const raw = createFakeRaw();
    const app = new App({ createObject: () => raw });

    app.open("C:/tmp/a.hwp");
    app.saveAs("C:/tmp/a.hwpx", "HWPX");

    expect(raw.Open).toHaveBeenCalledWith("C:/tmp/a.hwp", "", "");
    expect(raw.SaveAs).toHaveBeenCalledWith("C:/tmp/a.hwpx", "HWPX", "");
  });

  it("wraps failed file operations", () => {
    const raw = createFakeRaw();
    raw.Open = vi.fn(() => false);
    const app = new App({ createObject: () => raw });

    expect(() => app.open("C:/tmp/missing.hwp")).toThrow(HwpAutomationError);
  });
});
```

**Step 2: Implement `App`**

```ts
import { createHwpObject } from "./com/bridge";
import { HwpAutomationError } from "./com/errors";
import type { HwpComObject } from "./com/types";
import { DocumentApi } from "./doc";
import { LowLevelApi } from "./low/low-level-api";

export type SaveFormat = "HWP" | "HWPX" | "PDF";

export type OpenOptions = {
  format?: string;
  arg?: string;
};

export type AppOptions = {
  visible?: boolean;
  reuseExisting?: boolean;
  registerSecurityModule?: boolean;
  createObject?: () => HwpComObject;
};

export class App {
  readonly raw: HwpComObject;
  readonly low: LowLevelApi;
  readonly doc: DocumentApi;

  constructor(options: AppOptions = {}) {
    this.raw = options.createObject?.() ?? createHwpObject();
    this.low = new LowLevelApi(this.raw);
    this.doc = new DocumentApi(this.low);

    if (options.visible !== undefined) {
      this.setVisible(options.visible);
    }

    if (options.registerSecurityModule) {
      this.registerSecurityModule();
    }
  }

  setVisible(visible: boolean): void {
    const window = this.raw.XHwpWindows?.Item(0);
    if (window) {
      window.Visible = visible;
    }
  }

  open(path: string, options: OpenOptions = {}): void {
    this.fileOperation("open", () => this.raw.Open?.(path, options.format ?? "", options.arg ?? ""));
  }

  save(): void {
    this.fileOperation("save", () => this.raw.Save?.());
  }

  saveAs(path: string, format: SaveFormat = "HWP", arg = ""): void {
    this.fileOperation("saveAs", () => this.raw.SaveAs?.(path, format, arg));
  }

  close(): void {
    this.low.run("FileClose");
  }

  quit(): void {
    this.raw.Quit?.();
  }

  private fileOperation(name: string, operation: () => unknown): void {
    try {
      const ok = operation();
      if (ok === false) {
        throw new Error(`${name} returned false`);
      }
    } catch (error) {
      throw new HwpAutomationError("FILE_OPERATION_FAILED", `HWP file operation failed: ${name}`, error);
    }
  }

  private registerSecurityModule(): void {
    try {
      const ok = this.raw.RegisterModule?.("FilePathCheckDLL", "FilePathCheckerModule");
      if (ok === false) {
        throw new Error("RegisterModule returned false");
      }
    } catch (error) {
      throw new HwpAutomationError(
        "SECURITY_MODULE_FAILED",
        "Failed to register the Hancom HWP automation security module.",
        error,
      );
    }
  }
}

export const Hwp = App;
```

**Step 3: Verify exports**

Ensure `src/index.ts` exports `App`, `Hwp`, `DocumentApi`, `LowLevelApi`, and public types.

**Step 4: Verify and commit**

Run:

```bash
npx vitest run tests/unit/app.test.ts
npm run typecheck
```

Expected: PASS.

Commit:

```bash
git add src/app.ts src/index.ts tests/unit/app.test.ts
git commit -m "feat: add two-layer app facade"
```

---

### Task 7: README and Integration Smoke Test

**Files:**
- Create: `README.md`
- Create: `tests/integration/smoke.test.ts`

**Step 1: Write README**

```md
# tshwpx

TypeScript wrapper for Hancom HwpAutomation.

## Requirements

- Windows
- Node.js 18+
- Hancom HWP installed
- A working COM bridge dependency, currently `winax`

Hancom HwpAutomation may have separate commercial-use terms. Check Hancom's official policy before using this package commercially.

## Quick Start

\`\`\`ts
import { App } from "tshwpx";

const app = new App({ visible: true });
app.open("C:/tmp/input.hwp");
app.doc.insertText("Hello world");
app.saveAs("C:/tmp/output.hwp");
app.quit();
\`\`\`

## Low-Level Access

\`\`\`ts
const app = new App();
app.low.run("MoveDocBegin");
app.raw.HAction.Run("MoveDocBegin");
\`\`\`

## pyhwpx Mapping

| pyhwpx | tshwpx |
| --- | --- |
| `Hwp` | `App` |
| `insert_text` | `app.doc.insertText` |
| `save_as` | `app.saveAs` |
| `quit` | `app.quit` |
```

**Step 2: Add integration smoke test**

```ts
import { describe, expect, it } from "vitest";
import { App } from "../../src";

const runIntegration = process.env.HWP_INTEGRATION === "1";

describe.skipIf(!runIntegration)("HWP integration smoke test", () => {
  it("starts HWP automation and quits", () => {
    const app = new App({ visible: false });
    expect(app.raw).toBeTruthy();
    app.quit();
  });
});
```

**Step 3: Verify and commit**

Run:

```bash
npm test
```

Expected: unit tests PASS, integration test SKIPPED.

Commit:

```bash
git add README.md tests/integration/smoke.test.ts
git commit -m "docs: add two-layer usage guide"
```

---

### Task 8: Final Verification

**Files:**
- Modify as needed based on failures.

**Step 1: Run full checks**

Run:

```bash
npm run typecheck
npm test
npm run build
```

Expected: all commands PASS.

**Step 2: Inspect package output**

Run:

```bash
npm pack --dry-run
```

Expected: package includes `dist`, `README.md`, and package metadata.

**Step 3: Commit and push final state**

```bash
git add .
git commit -m "chore: verify tshwpx two-layer mvp package"
git push
```

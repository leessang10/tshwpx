# tshwpx Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the first `tshwpx` MVP: a TypeScript `Hwp` class that wraps Hancom HwpAutomation through a Windows COM bridge.

**Architecture:** The package exposes one public `Hwp` class and keeps COM loading, error normalization, action execution, and feature methods in separate internal modules. Unit tests use fake COM objects so the core behavior can be verified without Windows or Hancom HWP.

**Tech Stack:** TypeScript, Node.js, Vitest, tsup, `winax` as an optional Windows COM bridge dependency.

---

## Notes Before Starting

This workspace is currently not a git repository. Initialize git before using the commit steps:

```bash
git init
```

The package is Windows-only at runtime, but unit tests should run without Hancom HWP installed.

---

### Task 1: Project Scaffold

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsup.config.ts`
- Create: `vitest.config.ts`
- Create: `.gitignore`
- Create: `src/index.ts`

**Step 1: Create package metadata**

Write `package.json`:

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
  "files": [
    "dist",
    "README.md"
  ],
  "scripts": {
    "build": "tsup",
    "test": "vitest run",
    "typecheck": "tsc --noEmit"
  },
  "keywords": [
    "hwp",
    "hwpx",
    "hancom",
    "automation",
    "com"
  ],
  "license": "MIT",
  "peerDependenciesMeta": {
    "winax": {
      "optional": true
    }
  },
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

**Step 2: Create TypeScript config**

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

**Step 3: Create build and test config**

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

Write `.gitignore`:

```gitignore
node_modules
dist
coverage
*.tsbuildinfo
```

**Step 4: Create the public entry file**

Write `src/index.ts`:

```ts
export { Hwp } from "./hwp";
export { HwpAutomationError } from "./com/errors";
export type { HwpOptions, SaveFormat, OpenOptions } from "./hwp";
```

**Step 5: Install dependencies**

Run:

```bash
npm install
```

Expected: dependencies install successfully. On non-Windows systems, `winax` may be skipped or fail depending on optional dependency handling.

**Step 6: Run checks**

Run:

```bash
npm run typecheck
npm test
```

Expected: typecheck may fail until later tasks create referenced files. Test command should start Vitest once tests exist.

**Step 7: Commit**

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

Write `tests/unit/errors.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { HwpAutomationError } from "../../src/com/errors";

describe("HwpAutomationError", () => {
  it("stores code, message, and cause", () => {
    const cause = new Error("native failure");
    const error = new HwpAutomationError(
      "HWP_NOT_INSTALLED",
      "Hancom HWP automation object could not be created.",
      cause,
    );

    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe("HwpAutomationError");
    expect(error.code).toBe("HWP_NOT_INSTALLED");
    expect(error.message).toContain("Hancom HWP");
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

**Step 3: Write minimal implementation**

Write `src/com/errors.ts`:

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

**Step 4: Run test to verify it passes**

Run:

```bash
npx vitest run tests/unit/errors.test.ts
```

Expected: PASS.

**Step 5: Commit**

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

Write `tests/unit/bridge.test.ts`:

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

  it("creates HWPFrame.HwpObject through the bridge", () => {
    const raw = { XHwpWindows: { Item: vi.fn() } };
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

**Step 2: Run test to verify it fails**

Run:

```bash
npx vitest run tests/unit/bridge.test.ts
```

Expected: FAIL because bridge files do not exist.

**Step 3: Write minimal implementation**

Write `src/com/types.ts`:

```ts
export type HwpComObject = {
  HAction?: unknown;
  HParameterSet?: unknown;
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

Write `src/com/bridge.ts`:

```ts
import { HwpAutomationError } from "./errors";
import type { HwpComObject, WinaxBridge } from "./types";

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

**Step 4: Run test to verify it passes**

Run:

```bash
npx vitest run tests/unit/bridge.test.ts
```

Expected: PASS.

**Step 5: Commit**

```bash
git add src/com/types.ts src/com/bridge.ts tests/unit/bridge.test.ts
git commit -m "feat: add windows com bridge loader"
```

---

### Task 4: Action Runner

**Files:**
- Create: `src/actions/action-runner.ts`
- Test: `tests/unit/action-runner.test.ts`

**Step 1: Write the failing test**

Write `tests/unit/action-runner.test.ts`:

```ts
import { describe, expect, it, vi } from "vitest";
import { ActionRunner } from "../../src/actions/action-runner";
import { HwpAutomationError } from "../../src/com/errors";

describe("ActionRunner", () => {
  it("runs an action by name", () => {
    const run = vi.fn(() => true);
    const runner = new ActionRunner({ Run: run, Execute: vi.fn() });

    runner.run("MoveDocBegin");

    expect(run).toHaveBeenCalledWith("MoveDocBegin");
  });

  it("wraps failed execute calls", () => {
    const runner = new ActionRunner({
      Run: vi.fn(),
      Execute: vi.fn(() => false),
    });

    expect(() => runner.execute("InsertText", {})).toThrow(HwpAutomationError);
  });
});
```

**Step 2: Run test to verify it fails**

Run:

```bash
npx vitest run tests/unit/action-runner.test.ts
```

Expected: FAIL because `ActionRunner` does not exist.

**Step 3: Write minimal implementation**

Write `src/actions/action-runner.ts`:

```ts
import { HwpAutomationError } from "../com/errors";

type HActionLike = {
  Run(actionName: string): boolean;
  Execute(actionName: string, parameterSet?: unknown): boolean;
};

export class ActionRunner {
  constructor(private readonly action: HActionLike) {}

  run(actionName: string): void {
    try {
      const ok = this.action.Run(actionName);
      if (ok === false) {
        throw new Error(`HAction.Run returned false for ${actionName}`);
      }
    } catch (error) {
      throw new HwpAutomationError(
        "ACTION_FAILED",
        `Failed to run HWP action: ${actionName}`,
        error,
      );
    }
  }

  execute(actionName: string, parameterSet?: unknown): boolean {
    try {
      const ok = this.action.Execute(actionName, parameterSet);
      if (ok === false) {
        throw new Error(`HAction.Execute returned false for ${actionName}`);
      }
      return ok;
    } catch (error) {
      throw new HwpAutomationError(
        "ACTION_FAILED",
        `Failed to execute HWP action: ${actionName}`,
        error,
      );
    }
  }
}
```

**Step 4: Run test to verify it passes**

Run:

```bash
npx vitest run tests/unit/action-runner.test.ts
```

Expected: PASS.

**Step 5: Commit**

```bash
git add src/actions/action-runner.ts tests/unit/action-runner.test.ts
git commit -m "feat: add hwp action runner"
```

---

### Task 5: Hwp Class Core

**Files:**
- Create: `src/hwp.ts`
- Test: `tests/unit/hwp.test.ts`
- Modify: `src/index.ts`

**Step 1: Write the failing test**

Write `tests/unit/hwp.test.ts`:

```ts
import { describe, expect, it, vi } from "vitest";
import { Hwp } from "../../src/hwp";

function createFakeRaw() {
  return {
    HAction: {
      Run: vi.fn(() => true),
      Execute: vi.fn(() => true),
    },
    HParameterSet: {
      HInsertText: {
        Text: "",
        HSet: {},
      },
    },
    XHwpWindows: {
      Item: vi.fn(() => ({ Visible: false })),
    },
    Quit: vi.fn(),
  };
}

describe("Hwp", () => {
  it("exposes raw automation handles", () => {
    const raw = createFakeRaw();
    const hwp = new Hwp({ createObject: () => raw });

    expect(hwp.raw).toBe(raw);
    expect(hwp.HAction).toBe(raw.HAction);
    expect(hwp.HParameterSet).toBe(raw.HParameterSet);
  });

  it("sets visible option on construction", () => {
    const window = { Visible: false };
    const raw = createFakeRaw();
    raw.XHwpWindows.Item = vi.fn(() => window);

    new Hwp({ visible: true, createObject: () => raw });

    expect(window.Visible).toBe(true);
  });

  it("quits the application", () => {
    const raw = createFakeRaw();
    const hwp = new Hwp({ createObject: () => raw });

    hwp.quit();

    expect(raw.Quit).toHaveBeenCalled();
  });
});
```

**Step 2: Run test to verify it fails**

Run:

```bash
npx vitest run tests/unit/hwp.test.ts
```

Expected: FAIL because `src/hwp.ts` does not exist.

**Step 3: Write minimal implementation**

Write `src/hwp.ts`:

```ts
import { ActionRunner } from "./actions/action-runner";
import { createHwpObject } from "./com/bridge";
import { HwpAutomationError } from "./com/errors";
import type { HwpComObject } from "./com/types";

export type SaveFormat = "HWP" | "HWPX" | "PDF";

export type OpenOptions = {
  format?: string;
  arg?: string;
};

export type HwpOptions = {
  visible?: boolean;
  reuseExisting?: boolean;
  registerSecurityModule?: boolean;
  createObject?: () => HwpComObject;
};

export class Hwp {
  readonly raw: HwpComObject;
  readonly HAction: unknown;
  readonly HParameterSet: unknown;

  private readonly actions: ActionRunner;

  constructor(options: HwpOptions = {}) {
    this.raw = options.createObject?.() ?? createHwpObject();
    this.HAction = this.raw.HAction;
    this.HParameterSet = this.raw.HParameterSet;
    this.actions = new ActionRunner(this.raw.HAction as never);

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

  quit(): void {
    this.raw.Quit?.();
  }

  run(actionName: string): void {
    this.actions.run(actionName);
  }

  execute(actionName: string, parameterSet?: unknown): boolean {
    return this.actions.execute(actionName, parameterSet);
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
```

**Step 4: Run test to verify it passes**

Run:

```bash
npx vitest run tests/unit/hwp.test.ts
```

Expected: PASS.

**Step 5: Run typecheck**

Run:

```bash
npm run typecheck
```

Expected: PASS after any type issues are corrected.

**Step 6: Commit**

```bash
git add src/hwp.ts src/index.ts tests/unit/hwp.test.ts
git commit -m "feat: add hwp class core"
```

---

### Task 6: Text Feature

**Files:**
- Modify: `src/hwp.ts`
- Test: `tests/unit/hwp-text.test.ts`

**Step 1: Write the failing test**

Write `tests/unit/hwp-text.test.ts`:

```ts
import { describe, expect, it, vi } from "vitest";
import { Hwp } from "../../src/hwp";

describe("Hwp text methods", () => {
  it("inserts text through HInsertText parameter set", () => {
    const parameterSet = {
      Text: "",
      HSet: { id: "set" },
    };
    const raw = {
      HAction: {
        Run: vi.fn(() => true),
        Execute: vi.fn(() => true),
      },
      HParameterSet: {
        HInsertText: parameterSet,
      },
    };

    const hwp = new Hwp({ createObject: () => raw });
    hwp.insertText("Hello");

    expect(parameterSet.Text).toBe("Hello");
    expect(raw.HAction.Execute).toHaveBeenCalledWith("InsertText", parameterSet.HSet);
  });
});
```

**Step 2: Run test to verify it fails**

Run:

```bash
npx vitest run tests/unit/hwp-text.test.ts
```

Expected: FAIL because `insertText` does not exist.

**Step 3: Write minimal implementation**

Add to `Hwp`:

```ts
  insertText(text: string): void {
    const parameterSet = (this.raw.HParameterSet as any)?.HInsertText;
    parameterSet.Text = text;
    this.execute("InsertText", parameterSet.HSet);
  }
```

**Step 4: Run test to verify it passes**

Run:

```bash
npx vitest run tests/unit/hwp-text.test.ts
```

Expected: PASS.

**Step 5: Commit**

```bash
git add src/hwp.ts tests/unit/hwp-text.test.ts
git commit -m "feat: add insert text helper"
```

---

### Task 7: File Feature

**Files:**
- Modify: `src/hwp.ts`
- Test: `tests/unit/hwp-file.test.ts`

**Step 1: Write the failing test**

Write `tests/unit/hwp-file.test.ts`:

```ts
import { describe, expect, it, vi } from "vitest";
import { Hwp } from "../../src/hwp";
import { HwpAutomationError } from "../../src/com/errors";

function createRaw() {
  return {
    HAction: {
      Run: vi.fn(() => true),
      Execute: vi.fn(() => true),
    },
    HParameterSet: {},
    Open: vi.fn(() => true),
    Save: vi.fn(() => true),
    SaveAs: vi.fn(() => true),
    Run: vi.fn(),
  };
}

describe("Hwp file methods", () => {
  it("opens a file", () => {
    const raw = createRaw();
    const hwp = new Hwp({ createObject: () => raw });

    hwp.open("C:/tmp/a.hwp");

    expect(raw.Open).toHaveBeenCalledWith("C:/tmp/a.hwp", "", "");
  });

  it("saves as a target format", () => {
    const raw = createRaw();
    const hwp = new Hwp({ createObject: () => raw });

    hwp.saveAs("C:/tmp/a.hwpx", "HWPX");

    expect(raw.SaveAs).toHaveBeenCalledWith("C:/tmp/a.hwpx", "HWPX", "");
  });

  it("wraps failed file operations", () => {
    const raw = createRaw();
    raw.Open = vi.fn(() => false);
    const hwp = new Hwp({ createObject: () => raw });

    expect(() => hwp.open("C:/tmp/missing.hwp")).toThrow(HwpAutomationError);
  });
});
```

**Step 2: Run test to verify it fails**

Run:

```bash
npx vitest run tests/unit/hwp-file.test.ts
```

Expected: FAIL because file methods are incomplete.

**Step 3: Write minimal implementation**

Add to `Hwp`:

```ts
  open(path: string, options: OpenOptions = {}): void {
    this.fileOperation("open", () =>
      this.raw.Open?.(path, options.format ?? "", options.arg ?? ""),
    );
  }

  save(): void {
    this.fileOperation("save", () => this.raw.Save?.());
  }

  saveAs(path: string, format: SaveFormat = "HWP", arg = ""): void {
    this.fileOperation("saveAs", () => this.raw.SaveAs?.(path, format, arg));
  }

  close(): void {
    this.run("FileClose");
  }

  private fileOperation(name: string, operation: () => unknown): void {
    try {
      const ok = operation();
      if (ok === false) {
        throw new Error(`${name} returned false`);
      }
    } catch (error) {
      throw new HwpAutomationError(
        "FILE_OPERATION_FAILED",
        `HWP file operation failed: ${name}`,
        error,
      );
    }
  }
```

**Step 4: Run test to verify it passes**

Run:

```bash
npx vitest run tests/unit/hwp-file.test.ts
```

Expected: PASS.

**Step 5: Commit**

```bash
git add src/hwp.ts tests/unit/hwp-file.test.ts
git commit -m "feat: add file operation helpers"
```

---

### Task 8: README and Integration Smoke Test

**Files:**
- Create: `README.md`
- Create: `tests/integration/smoke.test.ts`
- Modify: `vitest.config.ts`

**Step 1: Write README**

Write `README.md`:

```md
# tshwpx

TypeScript wrapper for Hancom HwpAutomation.

## Requirements

- Windows
- Node.js 18+
- Hancom HWP installed
- A working COM bridge dependency, currently `winax`

Hancom HwpAutomation may have separate commercial-use terms. Check Hancom's official policy before using this package commercially.

## Install

\`\`\`bash
npm install tshwpx
\`\`\`

## Quick Start

\`\`\`ts
import { Hwp } from "tshwpx";

const hwp = new Hwp({ visible: true });
hwp.insertText("Hello world");
hwp.saveAs("C:/tmp/hello.hwp");
hwp.quit();
\`\`\`

## Escape Hatch

\`\`\`ts
const hwp = new Hwp();
hwp.raw.HAction.Run("MoveDocBegin");
\`\`\`

## pyhwpx Mapping

| pyhwpx | tshwpx |
| --- | --- |
| `insert_text` | `insertText` |
| `save_as` | `saveAs` |
| `quit` | `quit` |
```

**Step 2: Add integration test**

Write `tests/integration/smoke.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { Hwp } from "../../src";

const runIntegration = process.env.HWP_INTEGRATION === "1";

describe.skipIf(!runIntegration)("HWP integration smoke test", () => {
  it("starts HWP automation and quits", () => {
    const hwp = new Hwp({ visible: false });
    expect(hwp.raw).toBeTruthy();
    hwp.quit();
  });
});
```

**Step 3: Update test config**

Keep `vitest.config.ts` including all tests because integration tests are skipped unless `HWP_INTEGRATION=1`.

**Step 4: Run unit tests**

Run:

```bash
npm test
```

Expected: unit tests PASS, integration test SKIPPED.

**Step 5: Run integration smoke test on a Windows HWP machine**

Run:

```bash
HWP_INTEGRATION=1 npx vitest run tests/integration/smoke.test.ts
```

Expected: PASS if Hancom HWP and COM automation are installed correctly.

**Step 6: Commit**

```bash
git add README.md tests/integration/smoke.test.ts vitest.config.ts
git commit -m "docs: add usage guide and integration smoke test"
```

---

### Task 9: Final Verification

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

Expected: package includes `dist`, `README.md`, and package metadata only.

**Step 3: Commit final fixes**

```bash
git add .
git commit -m "chore: verify tshwpx mvp package"
```

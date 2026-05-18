# Public API Cleanup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove duplicated low-level public APIs and keep only high-level APIs plus `app.raw`.

**Architecture:** `App` exposes lifecycle methods, `doc`, `file`, and `raw`. Generated catalog metadata remains available to internal modules through a small payload helper, not through `app.actions`, `app.params`, or public package exports. Unsupported low-level automation goes through `app.raw`.

**Tech Stack:** TypeScript, Vitest, tsup, generated local HWP catalog metadata.

---

### Task 1: Lock Reduced App Surface

**Files:**
- Modify: `tests/unit/app.test.ts`
- Modify: `src/app.ts`

**Step 1: Write the failing test**

Change the first app test to assert only `raw`, `doc`, and `file`, and assert `low`, `actions`, `params`, and `events` are absent.

**Step 2: Run test to verify it fails**

Run: `npx vitest run tests/unit/app.test.ts`
Expected: FAIL because `App` still exposes the removed properties.

**Step 3: Remove public properties from App**

Delete imports, readonly fields, and constructor assignments for `LowLevelApi`, `ActionsApi`, `ParameterSetsApi`, and `EventsApi`.

**Step 4: Run test to verify it passes**

Run: `npx vitest run tests/unit/app.test.ts`
Expected: PASS.

### Task 2: Remove Low-Level Public Exports

**Files:**
- Modify: `src/index.ts`
- Delete: `src/actions.ts`
- Delete: `src/events.ts`
- Delete: `src/low/low-level-api.ts`
- Modify: tests that import removed public classes

**Step 1: Write failing export test**

Add a test that imports `* as tshwpx from "../../src"` and asserts `ActionsApi`, `EventsApi`, `LowLevelApi`, `ParameterSetsApi`, and generated catalog exports are absent.

**Step 2: Run test to verify it fails**

Run: `npx vitest run tests/unit/package-metadata.test.ts`
Expected: FAIL because these symbols are still exported.

**Step 3: Remove exports and obsolete tests**

Delete public exports for low-level/catalog classes and generated catalog definitions from `src/index.ts`. Delete tests that only test removed public classes. Keep high-level behavior tests.

**Step 4: Run focused tests**

Run: `npx vitest run tests/unit/package-metadata.test.ts tests/unit/app.test.ts`
Expected: PASS.

### Task 3: Convert Parameter Payload Creation To Internal Helper

**Files:**
- Add: `src/internal/parameter-sets.ts`
- Modify: high-level modules that import `../params`
- Delete: `src/params.ts`
- Modify: metadata tests that should remain internal

**Step 1: Write failing helper test**

Create or update a test to call `createParameterSetPayload("CharShape", { Height: 1200 })` and assert it validates unknown sets/items.

**Step 2: Run test to verify it fails**

Run: `npx vitest run tests/unit/params.test.ts`
Expected: FAIL because the helper does not exist yet.

**Step 3: Implement helper and update imports**

Move validation logic into `src/internal/parameter-sets.ts` as `createParameterSetPayload`, plus optional internal metadata lookup helpers only where needed by tests.

**Step 4: Run affected tests**

Run: `npx vitest run tests/unit/params.test.ts tests/unit/doc.test.ts tests/unit/file-api.test.ts tests/unit/page-api.test.ts tests/unit/paragraph-api.test.ts tests/unit/style-api.test.ts`
Expected: PASS.

### Task 4: Update Documentation

**Files:**
- Modify: `README.md`

**Step 1: Remove misleading low-level examples**

Delete `Low-Level Access` and `Catalog-Backed API` as user workflows. Add a short `Raw Bridge Access` section explaining that `app.raw` is the only escape hatch.

**Step 2: Preserve pyhwpx mapping**

Keep `insert_text -> app.doc.insertText` and make clear it is a high-level API, not an example placeholder.

**Step 3: Verify docs and full suite**

Run: `npm test`
Run: `npm run typecheck`
Expected: PASS for both.

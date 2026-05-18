# Action Parameter Event API Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add `app.actions`, `app.params`, and `app.events` API objects backed by local catalogs extracted from the official 2504 HwpAutomation PDF references.

**Architecture:** Keep `app.doc` as the ergonomic high-level surface and keep `app.low` as the raw action escape hatch. Add catalog-backed facades for ActionTable, ParameterSetTable, and event metadata so future high-level helpers can be built from documented API definitions.

**Tech Stack:** TypeScript, Vitest, static generated TypeScript catalog data, existing PowerShell and COM-object bridge abstractions.

---

### Task 1: Public API Tests

**Files:**
- Create: `tests/unit/actions.test.ts`
- Create: `tests/unit/params.test.ts`
- Create: `tests/unit/events.test.ts`
- Modify: `tests/unit/app.test.ts`

**Steps:**
1. Add failing tests for catalog lookup, action run/execute delegation, parameter payload creation, event subscription state, and `App` facade exposure.
2. Run `npx vitest run tests/unit/actions.test.ts tests/unit/params.test.ts tests/unit/events.test.ts tests/unit/app.test.ts`.
3. Confirm failures are caused by missing modules or missing `App` properties.

### Task 2: Catalog Modules

**Files:**
- Create: `src/spec/types.ts`
- Create: `src/spec/generated.ts`
- Create: `src/spec/index.ts`

**Steps:**
1. Generate action and parameter set metadata from `docs/api/*.html`.
2. Include a curated event metadata list from the event handler and automation references.
3. Export typed readonly catalog arrays and lookup helpers.

### Task 3: API Facades

**Files:**
- Create: `src/actions.ts`
- Create: `src/params.ts`
- Create: `src/events.ts`

**Steps:**
1. Implement `ActionsApi` with `list`, `get`, `has`, `run`, and `execute`.
2. Implement `ParameterSetsApi` with `list`, `get`, `has`, and `create`.
3. Implement `EventsApi` with `list`, `get`, `has`, `on`, `off`, and `listeners`.

### Task 4: App and Exports

**Files:**
- Modify: `src/app.ts`
- Modify: `src/index.ts`
- Modify: `README.md`

**Steps:**
1. Attach `actions`, `params`, and `events` to `App`.
2. Export API classes and metadata types.
3. Document the new low-level catalog-backed usage.

### Task 5: Verification

**Commands:**
- `npx vitest run tests/unit/actions.test.ts tests/unit/params.test.ts tests/unit/events.test.ts tests/unit/app.test.ts`
- `npm run typecheck`
- `npm test`
- `npm run build`

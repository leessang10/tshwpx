# Advanced Table API Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add high-level Korean HWP automation helpers for advanced table editing: cell alignment, border shortcuts, shading, formulas, and resize commands.

**Architecture:** Extend the existing `DocumentTablesApi` object graph rather than creating a new top-level namespace. The implementation is a thin typed wrapper over known HWP action ids, so tests should assert exact bridge action names and public package exports.

**Tech Stack:** TypeScript, Vitest, HWP action bridge (`HwpBridge.run`), package exports in `src/doc.ts` and `src/index.ts`, static HTML docs.

---

### Task 1: Add Failing Unit Tests For Advanced Table Helpers

**Files:**
- Modify: `tests/unit/doc.test.ts`

**Step 1: Find the existing table tests**

Open `tests/unit/doc.test.ts` and locate the `doc.tables` tests. Add the new tests next to the current table row, column, and cell helper tests so related behavior stays together.

**Step 2: Write the failing test for alignment, borders, and shading**

Add a test that calls:

```ts
doc.tables.cells.align.leftTop();
doc.tables.cells.align.centerMiddle();
doc.tables.cells.align.rightBottom();

doc.tables.cells.border.all();
doc.tables.cells.border.none();
doc.tables.cells.border.outside();
doc.tables.cells.border.inside();
doc.tables.cells.border.insideHorizontal();
doc.tables.cells.border.insideVertical();
doc.tables.cells.border.diagonalDown();
doc.tables.cells.border.diagonalUp();

doc.tables.cells.shading.increase();
doc.tables.cells.shading.decrease();
```

Assert that the fake bridge received these action ids in order:

```ts
[
  "TableCellAlignLeftTop",
  "TableCellAlignCenterCenter",
  "TableCellAlignRightBottom",
  "TableCellBorderAll",
  "TableCellBorderNo",
  "TableCellBorderOutside",
  "TableCellBorderInside",
  "TableCellBorderInsideHorz",
  "TableCellBorderInsideVert",
  "TableCellBorderDiagonalDow",
  "TableCellBorderDiagonalUp",
  "TableCellShadeInc",
  "TableCellShadeDec",
]
```

**Step 3: Write the failing test for formulas**

Add a test that calls:

```ts
doc.tables.formulas.sum.auto();
doc.tables.formulas.sum.horizontal();
doc.tables.formulas.sum.vertical();
doc.tables.formulas.average.auto();
doc.tables.formulas.average.horizontal();
doc.tables.formulas.average.vertical();
doc.tables.formulas.product.auto();
doc.tables.formulas.product.horizontal();
doc.tables.formulas.product.vertical();
```

Assert action ids:

```ts
[
  "TableFormulaSumAuto",
  "TableFormulaSumHor",
  "TableFormulaSumVer",
  "TableFormulaAvgAuto",
  "TableFormulaAvgHor",
  "TableFormulaAvgVer",
  "TableFormulaProAuto",
  "TableFormulaProHor",
  "TableFormulaProVer",
]
```

**Step 4: Write the failing test for resizing**

Add a test that calls all directions for every resize group:

```ts
doc.tables.resize.cell.up();
doc.tables.resize.cell.down();
doc.tables.resize.cell.left();
doc.tables.resize.cell.right();
doc.tables.resize.table.up();
doc.tables.resize.table.down();
doc.tables.resize.table.left();
doc.tables.resize.table.right();
doc.tables.resize.line.up();
doc.tables.resize.line.down();
doc.tables.resize.line.left();
doc.tables.resize.line.right();
doc.tables.resize.extended.up();
doc.tables.resize.extended.down();
doc.tables.resize.extended.left();
doc.tables.resize.extended.right();
```

Assert action ids:

```ts
[
  "TableResizeCellUp",
  "TableResizeCellDown",
  "TableResizeCellLeft",
  "TableResizeCellRight",
  "TableResizeUp",
  "TableResizeDown",
  "TableResizeLeft",
  "TableResizeRight",
  "TableResizeLineUp",
  "TableResizeLineDown",
  "TableResizeLineLeft",
  "TableResizeLineRight",
  "TableResizeExUp",
  "TableResizeExDown",
  "TableResizeExLeft",
  "TableResizeExRight",
]
```

**Step 5: Run tests to verify failure**

Run:

```bash
npx vitest run tests/unit/doc.test.ts
```

Expected: FAIL because `align`, `border`, `shading`, `formulas`, and `resize` are not implemented yet.

**Step 6: Commit only if requested by the orchestrating session**

Do not commit this red state unless the orchestrating session explicitly asks for a checkpoint commit.

---

### Task 2: Implement The Advanced Table API Surface

**Files:**
- Modify: `src/document/tables.ts`
- Modify: `src/doc.ts`
- Modify: `src/index.ts`
- Modify: `tests/unit/package-metadata.test.ts`

**Step 1: Extend `DocumentTableCellsApi`**

In `src/document/tables.ts`, add readonly properties and instantiate them in the constructor:

```ts
readonly align: DocumentTableCellAlignmentApi;
readonly border: DocumentTableCellBorderApi;
readonly shading: DocumentTableCellShadingApi;
```

**Step 2: Add cell alignment wrapper**

Add `DocumentTableCellAlignmentApi` with these methods:

```ts
leftTop(): void;
leftMiddle(): void;
leftBottom(): void;
centerTop(): void;
centerMiddle(): void;
centerBottom(): void;
rightTop(): void;
rightMiddle(): void;
rightBottom(): void;
```

Each method calls `this.bridge.run(...)` with the exact action ids:

```ts
TableCellAlignLeftTop
TableCellAlignLeftCenter
TableCellAlignLeftBottom
TableCellAlignCenterTop
TableCellAlignCenterCenter
TableCellAlignCenterBottom
TableCellAlignRightTop
TableCellAlignRightCenter
TableCellAlignRightBottom
```

**Step 3: Add cell border wrapper**

Add `DocumentTableCellBorderApi` with methods:

```ts
all(): void;
none(): void;
outside(): void;
inside(): void;
top(): void;
bottom(): void;
left(): void;
right(): void;
insideHorizontal(): void;
insideVertical(): void;
diagonalDown(): void;
diagonalUp(): void;
```

Map to exact action ids:

```ts
TableCellBorderAll
TableCellBorderNo
TableCellBorderOutside
TableCellBorderInside
TableCellBorderTop
TableCellBorderBottom
TableCellBorderLeft
TableCellBorderRight
TableCellBorderInsideHorz
TableCellBorderInsideVert
TableCellBorderDiagonalDow
TableCellBorderDiagonalUp
```

**Step 4: Add cell shading wrapper**

Add `DocumentTableCellShadingApi`:

```ts
increase(): void; // TableCellShadeInc
decrease(): void; // TableCellShadeDec
```

**Step 5: Extend `DocumentTablesApi` with formulas and resize**

Add readonly properties:

```ts
readonly formulas: DocumentTableFormulasApi;
readonly resize: DocumentTableResizeApi;
```

Instantiate them in the `DocumentTablesApi` constructor.

**Step 6: Add formula wrappers**

Add `DocumentTableFormulasApi` with:

```ts
readonly sum: DocumentTableFormulaGroupApi;
readonly average: DocumentTableFormulaGroupApi;
readonly product: DocumentTableFormulaGroupApi;
```

Add reusable `DocumentTableFormulaGroupApi` with:

```ts
auto(): void;
horizontal(): void;
vertical(): void;
```

Configure the groups as:

```ts
sum: TableFormulaSumAuto, TableFormulaSumHor, TableFormulaSumVer
average: TableFormulaAvgAuto, TableFormulaAvgHor, TableFormulaAvgVer
product: TableFormulaProAuto, TableFormulaProHor, TableFormulaProVer
```

**Step 7: Add resize wrappers**

Add `DocumentTableResizeApi` with:

```ts
readonly cell: DocumentTableResizeDirectionApi;
readonly table: DocumentTableResizeDirectionApi;
readonly line: DocumentTableResizeDirectionApi;
readonly extended: DocumentTableResizeDirectionApi;
```

Add reusable `DocumentTableResizeDirectionApi` with:

```ts
up(): void;
down(): void;
left(): void;
right(): void;
```

Configure the groups as:

```ts
cell: TableResizeCellUp, TableResizeCellDown, TableResizeCellLeft, TableResizeCellRight
table: TableResizeUp, TableResizeDown, TableResizeLeft, TableResizeRight
line: TableResizeLineUp, TableResizeLineDown, TableResizeLineLeft, TableResizeLineRight
extended: TableResizeExUp, TableResizeExDown, TableResizeExLeft, TableResizeExRight
```

**Step 8: Export public classes**

Update `src/doc.ts` and `src/index.ts` to export the new public classes from `src/document/tables.ts`.

**Step 9: Update package metadata tests**

In `tests/unit/package-metadata.test.ts`, add representative new class exports to the package surface assertion:

```ts
DocumentTableCellAlignmentApi
DocumentTableCellBorderApi
DocumentTableCellShadingApi
DocumentTableFormulasApi
DocumentTableResizeApi
```

Include `DocumentTableFormulaGroupApi` and `DocumentTableResizeDirectionApi` too if the existing export test expects every public class to appear.

**Step 10: Run focused tests and typecheck**

Run:

```bash
npx vitest run tests/unit/doc.test.ts tests/unit/package-metadata.test.ts
npm run typecheck
```

Expected: PASS.

**Step 11: Commit**

```bash
git add src/document/tables.ts src/doc.ts src/index.ts tests/unit/doc.test.ts tests/unit/package-metadata.test.ts
git commit -m "feat: add advanced table automation api"
```

---

### Task 3: Document The Advanced Table Helpers

**Files:**
- Modify: `README.md`
- Modify: `docs/api/v2/app-doc-tables.html`

**Step 1: Update README examples**

Find the existing document automation or table API section in `README.md`. Add examples that show the intended fluent surface:

```ts
doc.tables.cells.align.centerMiddle();
doc.tables.cells.border.outside();
doc.tables.cells.shading.increase();
doc.tables.formulas.sum.auto();
doc.tables.resize.cell.right();
doc.tables.resize.table.down();
```

Keep the wording brief and consistent with nearby examples.

**Step 2: Update API HTML documentation**

In `docs/api/v2/app-doc-tables.html`, extend the table automation page with advanced subsections:

```html
<h3>Cell alignment</h3>
<code>app.doc.tables.cells.align.centerMiddle()</code>

<h3>Cell borders and shading</h3>
<code>app.doc.tables.cells.border.outside()</code>
<code>app.doc.tables.cells.shading.increase()</code>

<h3>Formulas</h3>
<code>app.doc.tables.formulas.sum.auto()</code>

<h3>Resize commands</h3>
<code>app.doc.tables.resize.cell.right()</code>
```

Mention that these helpers run HWP's current-selection table actions and do not take detailed border or fill parameters in this release.

**Step 3: Run documentation-adjacent verification**

Run:

```bash
npm run typecheck
npx vitest run tests/unit/doc.test.ts tests/unit/package-metadata.test.ts
```

Expected: PASS.

**Step 4: Commit**

```bash
git add README.md docs/api/v2/app-doc-tables.html
git commit -m "docs: document advanced table automation"
```

---

### Task 4: Final Verification And Review

**Files:**
- Inspect: all files changed by Tasks 1-3

**Step 1: Run full verification**

Run:

```bash
npm run typecheck
npm test
npm run build
```

Expected:
- `npm run typecheck`: PASS
- `npm test`: PASS, preserving the known skipped test count if still present
- `npm run build`: PASS

**Step 2: Inspect git state**

Run:

```bash
git status --short
git log --oneline -5
```

Expected: clean working tree except any intentional uncommitted files from the orchestrating session.

**Step 3: Review API consistency**

Check:
- Method names are camelCase and match existing `doc.tables` style.
- Every helper maps to the exact HWP action id listed in this plan.
- Public exports and package metadata tests agree.
- Docs do not claim unsupported detailed border/fill parameters.

**Step 4: Request final code review**

Use `superpowers:requesting-code-review` before claiming the branch is complete. Address any review findings with `superpowers:receiving-code-review`.

**Step 5: Finish branch**

After verification and review pass, use `superpowers:finishing-a-development-branch` and present the required completion options.

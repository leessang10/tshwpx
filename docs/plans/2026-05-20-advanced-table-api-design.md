# Advanced Table API Design

## Goal

Extend `app.doc.tables` with common advanced table editing helpers for cell alignment, border shortcuts, shading shortcuts, formulas, and resizing.

## Scope

Add first-version shortcut APIs:

```ts
await app.doc.tables.cells.align.centerMiddle();
await app.doc.tables.cells.align.leftTop();
await app.doc.tables.cells.align.rightBottom();

await app.doc.tables.cells.border.all();
await app.doc.tables.cells.border.none();
await app.doc.tables.cells.border.outside();
await app.doc.tables.cells.border.inside();

await app.doc.tables.cells.shading.increase();
await app.doc.tables.cells.shading.decrease();

await app.doc.tables.formulas.sum.auto();
await app.doc.tables.formulas.sum.horizontal();
await app.doc.tables.formulas.average.vertical();

await app.doc.tables.resize.cell.up();
await app.doc.tables.resize.table.right();
await app.doc.tables.resize.line.down();
```

## Architecture

Keep the feature under the existing `DocumentTablesApi` rather than creating a separate top-level module. Add nested helper classes:

- `DocumentTableCellAlignmentApi`
- `DocumentTableCellBorderApi`
- `DocumentTableCellShadingApi`
- `DocumentTableFormulasApi`
- `DocumentTableFormulaGroupApi`
- `DocumentTableResizeApi`
- `DocumentTableResizeDirectionApi`

These helpers should call `bridge.run(actionName)` for no-parameter actions.

## Action Groups

### Cell Alignment

Expose all 9 combinations:

- `leftTop`, `leftMiddle`, `leftBottom`
- `centerTop`, `centerMiddle`, `centerBottom`
- `rightTop`, `rightMiddle`, `rightBottom`

Map to `TableCellAlign{Horizontal}{Vertical}` where HWP uses `Center` for vertical middle, for example:

- `centerMiddle()` -> `TableCellAlignCenterCenter`
- `leftTop()` -> `TableCellAlignLeftTop`
- `rightBottom()` -> `TableCellAlignRightBottom`

### Cell Border Shortcuts

Expose common toggle/clear shortcuts:

- `all()` -> `TableCellBorderAll`
- `none()` -> `TableCellBorderNo`
- `outside()` -> `TableCellBorderOutside`
- `inside()` -> `TableCellBorderInside`
- `top()` -> `TableCellBorderTop`
- `bottom()` -> `TableCellBorderBottom`
- `left()` -> `TableCellBorderLeft`
- `right()` -> `TableCellBorderRight`
- `insideHorizontal()` -> `TableCellBorderInsideHorz`
- `insideVertical()` -> `TableCellBorderInsideVert`
- `diagonalDown()` -> `TableCellBorderDiagonalDow`
- `diagonalUp()` -> `TableCellBorderDiagonalUp`

### Shading

- `increase()` -> `TableCellShadeInc`
- `decrease()` -> `TableCellShadeDec`

### Formulas

Expose formula groups:

- `sum.auto()` -> `TableFormulaSumAuto`
- `sum.horizontal()` -> `TableFormulaSumHor`
- `sum.vertical()` -> `TableFormulaSumVer`
- `average.auto()` -> `TableFormulaAvgAuto`
- `average.horizontal()` -> `TableFormulaAvgHor`
- `average.vertical()` -> `TableFormulaAvgVer`
- `product.auto()` -> `TableFormulaProAuto`
- `product.horizontal()` -> `TableFormulaProHor`
- `product.vertical()` -> `TableFormulaProVer`

### Resizing

Expose directional groups:

- `resize.cell.up/down/left/right` -> `TableResizeCell*`
- `resize.table.up/down/left/right` -> `TableResize*`
- `resize.line.up/down/left/right` -> `TableResizeLine*`
- `resize.extended.up/down/left/right` -> `TableResizeEx*`

## Out of Scope

Do not implement full `CellBorderFill`/`BorderFill` value editing in this pass. It is useful but complex enough to warrant a separate design for colors, line widths, diagonal flags, and fill values.

## Documentation

Update README and `docs/api/v2/app-doc-tables.html` to show the advanced helpers. No new top-level docs page is needed because the feature extends `app.doc.tables`.

## Testing

Add unit tests under `tests/unit/doc.test.ts` or `tests/unit/table-api.test.ts` that verify the high-level helpers call exact action IDs in order. Also update root export tests if new classes are publicly exported.

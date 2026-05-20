# Document Objects API Design

## Goal

Add high-level HWP automation helpers for selected pictures, drawing shapes, and generic document objects.

The first release focuses on reliable action-backed operations:

- Replace the currently selected picture with another image file.
- Open the picture insert dialog.
- Apply picture effects to the selected picture.
- Align, order, move, resize, copy, paste, and cut the currently selected object.
- Copy and paste selected object style attributes.

## Non-Goals

This pass does not add direct image insertion from a file path. The HWP action catalog exposes `InsertLinkImageToDoc`, `PictureInsertDialog`, and `ShapeObject`-based flows, but direct file insertion needs separate runtime verification before it is safe as a high-level API.

This pass also excludes shape creation through `DrawObjCreator*` actions. Many of those actions start interactive drawing modes, so they need separate design and testing.

Coordinate-based movement and exact size setting are excluded. This API wraps current-selection actions only.

## Public API Shape

Add `objects` to `DocumentApi`:

```ts
await app.doc.objects.picture.change({ path: "C:/tmp/new.png", embed: true });
await app.doc.objects.picture.dialog.open();
await app.doc.objects.picture.effects.grayscale();
await app.doc.objects.picture.effects.brightness.increase();

await app.doc.objects.align.left();
await app.doc.objects.align.center();
await app.doc.objects.align.middle();
await app.doc.objects.align.right();

await app.doc.objects.order.bringToFront();
await app.doc.objects.order.sendToBack();
await app.doc.objects.move.left();
await app.doc.objects.resize.right();

await app.doc.objects.copy();
await app.doc.objects.paste();
await app.doc.objects.cut();
await app.doc.objects.style.copy({ line: true, fill: true, size: true });
await app.doc.objects.style.paste({ line: true, fill: true, size: true });
```

## Module Layout

Create `src/document/objects.ts` and keep the implementation close to the existing `tables`, `pages`, and `paragraph` wrapper style.

Planned classes:

- `DocumentObjectsApi`
- `DocumentObjectPictureApi`
- `DocumentObjectPictureDialogApi`
- `DocumentObjectPictureEffectsApi`
- `DocumentObjectPictureBrightnessApi`
- `DocumentObjectPictureContrastApi`
- `DocumentObjectAlignApi`
- `DocumentObjectOrderApi`
- `DocumentObjectMoveApi`
- `DocumentObjectResizeApi`
- `DocumentObjectStyleApi`

Add public exports from `src/doc.ts` and `src/index.ts`.

## Picture Replacement

`app.doc.objects.picture.change(options)` executes:

- Action: `PictureChange`
- ParameterSet: `PictureChange`
- Values:
  - `path` -> `PicturePath`
  - `embed` -> `PictureEmbed`

Type:

```ts
export type PictureChangeOptions = {
  path: string;
  embed?: boolean;
};
```

`path` is required because a picture replacement without a target file is not meaningful.

## Picture Dialog And Effects

`app.doc.objects.picture.dialog.open()` runs `PictureInsertDialog`.

Effect methods run no-parameter picture actions against the selected picture:

- `effects.grayscale()` -> `PictureEffect1`
- `effects.blackWhite()` -> `PictureEffect2`
- `effects.watermark()` -> `PictureEffect3`
- `effects.none()` -> `PictureEffect4`
- `effects.brightness.increase()` -> `PictureEffect5`
- `effects.brightness.decrease()` -> `PictureEffect6`
- `effects.contrast.increase()` -> `PictureEffect7`
- `effects.contrast.decrease()` -> `PictureEffect8`
- `effects.restoreOriginal()` -> `PictureToOriginal`

## Object Alignment

Alignment methods run `ShapeObjAlign*` actions against the current selection:

- `align.left()` -> `ShapeObjAlignLeft`
- `align.center()` -> `ShapeObjAlignCenter`
- `align.right()` -> `ShapeObjAlignRight`
- `align.top()` -> `ShapeObjAlignTop`
- `align.middle()` -> `ShapeObjAlignMiddle`
- `align.bottom()` -> `ShapeObjAlignBottom`
- `align.width()` -> `ShapeObjAlignWidth`
- `align.height()` -> `ShapeObjAlignHeight`
- `align.size()` -> `ShapeObjAlignSize`
- `align.horizontalSpacing()` -> `ShapeObjAlignHorzSpacing`
- `align.verticalSpacing()` -> `ShapeObjAlignVertSpacing`

## Object Order

Ordering methods run z-order and text wrapping order actions:

- `order.bringForward()` -> `ShapeObjBringForward`
- `order.bringToFront()` -> `ShapeObjBringToFront`
- `order.sendBack()` -> `ShapeObjSendBack`
- `order.sendToBack()` -> `ShapeObjSendToBack`
- `order.bringInFrontOfText()` -> `ShapeObjBringInFrontOfText`
- `order.sendBehindText()` -> `ShapeObjCtrlSendBehindText`

## Object Movement And Resize

Movement and resize methods run keyboard-like current-selection actions:

- `move.up()` -> `ShapeObjMoveUp`
- `move.down()` -> `ShapeObjMoveDown`
- `move.left()` -> `ShapeObjMoveLeft`
- `move.right()` -> `ShapeObjMoveRight`
- `resize.up()` -> `ShapeObjResizeUp`
- `resize.down()` -> `ShapeObjResizeDown`
- `resize.left()` -> `ShapeObjResizeLeft`
- `resize.right()` -> `ShapeObjResizeRight`

## Copy, Paste, Cut, And Style Copy

Generic clipboard methods run the standard actions:

- `copy()` -> `Copy`
- `paste()` -> `Paste`
- `cut()` -> `Cut`

Object style copy/paste uses `ShapeObjectCopy` and `ShapeObjectPaste` with the `ShapeObjectCopyPaste` parameter set.

Type:

```ts
export type ObjectStyleCopyOptions = {
  line?: boolean;
  fill?: boolean;
  size?: boolean;
  shadow?: boolean;
  pictureEffect?: boolean;
};
```

Mappings:

- `line` -> `ShapeObjectLine`
- `fill` -> `ShapeObjectFill`
- `size` -> `ShapeObjectSize`
- `shadow` -> `ShapeObjectShadow`
- `pictureEffect` -> `ShapeObjectPicEffect`

## Errors And Behavior

These helpers rely on HWP's current selection. If no compatible picture or object is selected, HWP decides whether the action is ignored, opens UI, or fails through the bridge. The high-level API does not preflight selection state in this pass.

The implementation should keep validation minimal: require `picture.change.path`, and let the existing parameter-set validation catch unsupported item names.

## Tests

Add unit tests to `tests/unit/doc.test.ts` that verify:

- `DocumentApi` exposes `objects`.
- Picture replacement executes `PictureChange` with the correct parameter set payload.
- Picture dialog and effect helpers run the exact action IDs in order.
- Alignment, order, movement, and resize helpers run exact action IDs.
- Generic `copy`, `paste`, and `cut` run standard clipboard actions.
- Object style copy/paste packs the `ShapeObjectCopyPaste` parameter set correctly.

Update `tests/unit/package-metadata.test.ts` for newly exported classes and types.

## Documentation

Add examples to `README.md`.

Create `docs/api/v2/app-doc-objects.html` and link it from:

- `docs/api/v2/app-doc.html`
- `docs/api/v2/index.html`

The docs must clearly state that this first release operates on the current selected object and does not include direct file-path image insertion or shape creation.

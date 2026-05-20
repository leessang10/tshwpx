# Document Picture Insert API Design

Date: 2026-05-20

## Context

The object automation API already exposes picture replacement and object formatting helpers, but it does not provide a direct way to insert an image into the current document position. HWP exposes a stable COM method for this workflow:

```ts
InsertPicture(path, embeded, sizeoption, reverse, watermark, effect, width, height)
```

The official automation documentation describes this as the direct picture insertion path. It supports embedded or linked images, real or specified sizing modes, optional reverse/watermark flags, picture effect selection, and width/height values in millimeters.

## Public API

Add `doc.objects.picture.insert(options)`:

```ts
await app.doc.objects.picture.insert({
  path: "C:/tmp/image.png",
  embed: true,
  size: "real",
});

await app.doc.objects.picture.insert({
  path: "C:/tmp/image.png",
  embed: true,
  size: "specific",
  width: 50,
  height: 30,
  effect: "grayscale",
});
```

### Options

```ts
type PictureInsertOptions = {
  path: string;
  embed?: boolean;
  size?: "real" | "specific" | "cell" | "cellRatio" | number;
  reverse?: boolean;
  watermark?: boolean;
  effect?: "real" | "grayscale" | "blackWhite" | number;
  width?: number;
  height?: number;
};
```

Option mapping:

- `size: "real"` -> `0`
- `size: "specific"` -> `1`
- `size: "cell"` -> `2`
- `size: "cellRatio"` -> `3`
- `effect: "real"` -> `0`
- `effect: "grayscale"` -> `1`
- `effect: "blackWhite"` -> `2`
- Numeric `size` and `effect` values pass through for forward compatibility with HWP constants.

Defaults:

- `embed`: `true`
- `size`: `"real"`
- `reverse`: `false`
- `watermark`: `false`
- `effect`: `"real"`
- `width` and `height`: omitted by the public API unless provided; bridge implementations may coerce omitted values to `0` where COM invocation requires positional arguments.

## Bridge Design

Extend `HwpBridge` with a dedicated optional bridge method:

```ts
insertPicture(path: string, options?: BridgePictureInsertOptions): Promise<void>
```

`BridgePictureInsertOptions` stores normalized COM values:

```ts
type BridgePictureInsertOptions = {
  embed?: boolean;
  sizeOption?: number;
  reverse?: boolean;
  watermark?: boolean;
  effect?: number;
  width?: number;
  height?: number;
};
```

`ComObjectBridge` calls the raw COM method directly:

```ts
raw.InsertPicture(path, embed, sizeOption, reverse, watermark, effect, width, height)
```

It should throw if `InsertPicture` is unavailable or if the method returns `false`.

`PowerShellBridge` sends a JSON-RPC request named `insertPicture`. The generated PowerShell script handles that request by calling `$hwp.InsertPicture(...)` with the normalized arguments and returns false as an error.

## Scope Boundaries

This API intentionally wraps `InsertPicture` only.

Out of scope:

- `InsertLinkImageToDoc` action path.
- `PictureInsertDialog` UI automation.
- `DrawImageAttr` and `ShapeObject` low-level placement controls.
- Returning the inserted control object.

Those can be added later as a separate positioning/object-selection API without overloading direct insertion.

## Tests

Add unit coverage for:

- `doc.objects.picture.insert()` maps public aliases to bridge values.
- Numeric `size` and `effect` values pass through.
- Defaults are applied consistently.
- `ComObjectBridge.insertPicture()` invokes `InsertPicture` with the expected positional arguments and reports failure.
- `PowerShellBridge.insertPicture()` sends the expected JSON-RPC payload.
- Generated PowerShell script includes the `insertPicture` request handler.

## Documentation

Update README and API docs with:

- A basic image insertion example.
- A specific-size example.
- Option tables for size/effect aliases.
- A note that width/height are in millimeters and are mainly used with `size: "specific"`.

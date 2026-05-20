# Document Search API Design

## Goal

Add a high-level `app.doc.search` module for common Hancom HWP find and replace automation without exposing low-level action catalogs as public API.

## Scope

Add these APIs:

```ts
await app.doc.search.find("old");
await app.doc.search.replace({ find: "old", replace: "new" });
await app.doc.search.replaceAll({ find: "old", replace: "new" });
await app.doc.search.dialog.open();
await app.doc.search.dialog.replace();
```

The initial scope focuses on action and parameter payload wiring. It does not try to model every `FindReplace` option yet.

## Architecture

`DocumentApi` will own a new `DocumentSearchApi` instance, following the existing `text`, `tables`, `pages`, `cursor`, `paragraph`, `styles`, and `charShape` module pattern.

Search methods will use the existing bridge abstraction:

- no-parameter dialogs call `bridge.run(...)`
- find/replace methods call `bridge.execute(...)` with `createParameterSetPayload("FindReplace", values)`

This keeps validation centralized in the internal parameter set helper and preserves the high-level API boundary.

## API Mapping

| API | HWP automation |
| --- | --- |
| `search.find(text, options?)` | `RepeatFind` + `FindReplace` ParameterSet |
| `search.replace(input)` | `RepeatFind` or replacement action with `FindReplace` ParameterSet |
| `search.replaceAll(input)` | `AllReplace` + `FindReplace` ParameterSet |
| `search.dialog.open()` | `FindDlg` Action |
| `search.dialog.replace()` | `ReplaceDlg` Action |

Before implementation, the plan should verify exact action IDs and available `FindReplace` item names from `src/spec/generated.ts`.

## Options

The first version should support a small typed option set only where item names are already clear:

```ts
type SearchOptions = {
  direction?: "forward" | "backward";
  matchCase?: boolean;
  wholeWord?: boolean;
  useRegex?: boolean;
};
```

If any option cannot be mapped confidently to a generated item ID, leave it out of the first implementation rather than guessing.

## Error Handling

Use the existing bridge error paths. Unknown parameter item names will be caught by `createParameterSetPayload`, and bridge failures will surface through the active bridge implementation.

## Documentation

Update README and add a new `docs/api/v2/app-doc-search.html` page. Link `app.doc.search` from the v2 index and `app-doc.html`.

## Testing

Add unit tests that instantiate `DocumentApi`, call `doc.search` methods, and verify bridge calls:

- dialogs use `run("FindDlg")` and `run("ReplaceDlg")`
- `find` and replace methods use the expected action IDs
- `FindReplace` payloads include `FindString` and, for replacement, `ReplaceString`

Run focused document tests, typecheck, full tests, and build before completion.

# Document Text API Expansion Design

## Goal

Expand `app.doc.text` with small, common text-editing helpers while keeping the public API high-level and consistent with the current bridge architecture.

## Scope

Add these methods to `DocumentTextApi`:

```ts
await app.doc.text.lineBreak();
await app.doc.text.paragraphBreak();
await app.doc.text.tab();
await app.doc.text.deletePreviousChar();
await app.doc.text.deleteNextChar();
```

`app.doc.text.insert(text)` remains unchanged.

## Architecture

`DocumentApi` already owns a `DocumentTextApi` instance and passes the active bridge into it. The new methods will live in `src/document/text.ts` and call `bridge.run(...)` with documented HWP action IDs. This matches the current high-level API pattern used by pages, paragraph, cursor, styles, tables, and character shape helpers.

No new bridge method is needed because the actions are no-parameter commands.

## Action Mapping

| API | HWP action |
| --- | --- |
| `lineBreak()` | `BreakLine` |
| `paragraphBreak()` | `BreakPara` |
| `tab()` | `InsertTab` |
| `deletePreviousChar()` | `DeleteBack` |
| `deleteNextChar()` | `Delete` |

## Documentation

Update `README.md` and `docs/api/v2/app-doc-text.html` so the documented API matches the implementation. Keep examples short and grouped under `app.doc.text`.

## Error Handling

The new methods rely on the existing bridge `run` behavior. If the bridge cannot execute an action, the active bridge is responsible for surfacing the failure through its current error path. No text-specific error wrapper is needed.

## Testing

Add unit coverage that instantiates `DocumentApi`, calls the new `app.doc.text` methods, and verifies the bridge receives the expected action IDs in order. Run focused tests first, then typecheck and the full unit suite before completion.

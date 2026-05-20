# Document References API Design

## Goal

Add a high-level `app.doc.references` module for common document reference and annotation workflows: bookmarks, hyperlinks, comments, and memo navigation.

## Scope

Add these first-version APIs:

```ts
await app.doc.references.bookmarks.add("intro");
await app.doc.references.bookmarks.moveTo("intro");
await app.doc.references.bookmarks.modify("intro", "intro-renamed");
await app.doc.references.bookmarks.dialog.open();

await app.doc.references.hyperlinks.insert({ target: "https://example.com" });
await app.doc.references.hyperlinks.jump({ target: "https://example.com" });
await app.doc.references.hyperlinks.next();
await app.doc.references.hyperlinks.previous();

await app.doc.references.comments.insert();
await app.doc.references.comments.modify();
await app.doc.references.comments.delete();

await app.doc.references.memos.next();
await app.doc.references.memos.previous();
```

## Architecture

`DocumentApi` will own a new `DocumentReferencesApi` instance, following the existing high-level document module pattern.

The module will contain four focused submodules:

- `bookmarks`
- `hyperlinks`
- `comments`
- `memos`

Commands with parameter sets will use `createParameterSetPayload(...)` so item names are validated against generated metadata. Simple navigation/dialog/comment commands will call `bridge.run(...)`.

## Action Mapping

| API | HWP automation |
| --- | --- |
| `bookmarks.add(name)` | `Bookmark` + `BookMark` ParameterSet |
| `bookmarks.moveTo(name)` | `Bookmark` + `BookMark` ParameterSet |
| `bookmarks.modify(name, newName)` | `ModifyBookmark` + `BookMark` ParameterSet |
| `bookmarks.dialog.open()` | `BookmarkEditDialog` Action |
| `hyperlinks.insert(input)` | `Hyperlink` + `HyperLink` ParameterSet |
| `hyperlinks.jump(input)` | `HyperlinkJump` + `HyperlinkJump` ParameterSet |
| `hyperlinks.next()` | `HyperlinkForward` Action |
| `hyperlinks.previous()` | `HyperlinkBackward` Action |
| `comments.insert()` | `Comment` Action |
| `comments.modify()` | `CommentModify` Action |
| `comments.delete()` | `CommentDelete` Action |
| `memos.next()` | `MemoToNext` Action |
| `memos.previous()` | `MemoToPrev` Action |

## Payload Notes

Generated metadata confirms:

- `BookMark` has `Name`, `Type`, and `Command`.
  - `Command: 0` creates a bookmark.
  - `Command: 1` moves to a bookmark.
  - `Command: 2` modifies a bookmark.
- `HyperLink` contains `Command`, `NoLInk`, `ShapeObject`, and `DirectInsert`.
- `HyperlinkJump` contains `Source` and `Target`.

The implementation plan must re-check exact `HyperLink` casing and item names from `src/spec/generated.ts` before writing tests.

## Error Handling

Use existing bridge error behavior. Invalid parameter set or item IDs are rejected by `createParameterSetPayload`.

## Documentation

Update README and add `docs/api/v2/app-doc-references.html`. Link the new page from `docs/api/v2/index.html` and `docs/api/v2/app-doc.html`.

## Testing

Add unit tests that instantiate `DocumentApi`, call the new APIs, and verify exact bridge `run`/`execute` calls and payloads. Add root package export coverage for the new public classes and types.

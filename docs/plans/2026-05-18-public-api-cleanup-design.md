# Public API Cleanup Design

**Goal:** Keep `tshwpx` focused on high-level document/file APIs and expose only `app.raw` for direct bridge access.

**Decision:** Remove the public low-level facades. `app.low`, `app.actions`, `app.params`, and `app.events` are not compatibility requirements and should not remain as user-facing APIs.

**Architecture:** `App` owns lifecycle and exposes `doc`, `file`, and `raw`. High-level modules may still use generated HWP catalog metadata internally to build structured parameter payloads, but catalog helpers are implementation details rather than public API. Users who need unsupported automation can access the active bridge or COM object through `app.raw`.

**Implementation Notes:**
- Delete `LowLevelApi`, `ActionsApi`, and `EventsApi` from the public surface and from `App`.
- Replace `ParameterSetsApi` with an internal helper that validates generated ParameterSet metadata and returns `ParameterSetPayload`.
- Remove catalog and low-level examples from README.
- Keep high-level API behavior unchanged, including `app.doc.insertText(text)`.
- Update tests to assert the reduced `App` and package export surface.

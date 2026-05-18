# COM Bridge Investigation

Date: 2026-05-18

## Summary

Hancom HwpAutomation itself works on this machine. The current blocker is the Node COM bridge, not HWP Automation.

Confirmed baseline:

```powershell
$hwp = New-Object -ComObject HWPFrame.HwpObject
$hwp.XHwpWindows.Item(0).Visible = $true
$pset = $hwp.HParameterSet.HInsertText
$pset.Text = "안녕하세요"
$hwp.HAction.Execute("InsertText", $pset.HSet)
```

Result:

```text
InsertText=True
```

## Environment

```text
OS: Windows_NT 10.0.26200
Node versions tested:
- 22.22.0 x64
- 20.18.3 x64
- 18.20.8 x64
Visual Studio Build Tools: VS2022, v143 toolset
Windows SDK: 10.0.26100.0
Python tested:
- Python 3.14.2 from py launcher
- Python 3.12.13 from Codex bundled runtime
```

## `winax` Findings

Package metadata:

```text
name: winax
latest tested: 3.6.9
description: Windows COM bindings
repository: https://github.com/durs/node-activex
license: MIT
modified: 2026-03-31
```

`winax` is still the most direct conceptual match for `tshwpx`, but it failed in this local environment.

Observed failures:

```text
Node 22.22.0 + winax 3.6.9:
- Native build fails against V8 callback APIs.
- Representative errors:
  - error C2672: 'v8this': no matching overloaded function
  - error C2665: 'DispObject::NodeCreate': no overloaded function can convert all arguments

Node 18.20.8 / Node 20.18.3 + winax 3.6.9:
- Native build still fails with MSVC compile errors.
- Representative errors:
  - error C2061: syntax error: identifier 'type'
  - error C2955: 'CComVariant': use of class template requires template argument list
```

Additional observation:

```text
package.json currently uses "winax": "^3.6.2".
This allows npm to resolve newer 3.6.x releases such as 3.6.9.
If we keep winax, we should test and pin a known working version instead of using a caret range.
```

## Candidate Matrix

| Candidate | Type | Status | Notes |
| --- | --- | --- | --- |
| `winax` | Native Node COM binding | Blocked locally | Direct API fit, but native build failed across Node 18/20/22 in this environment. |
| `node-activex` | Native Node COM binding | Needs testing | Same family/repository lineage as `winax`; latest npm metadata found was `3.4.1`, modified 2023-11-11. |
| `win32ole` | Native Node COM binding | Not recommended | Very old package (`0.1.3`, old V8-era API). Likely worse compatibility risk than `winax`. |
| `edge-js` | Node -> .NET bridge | Verified works | `edge-js@26.0.0` loaded on Node 20.18.3 and successfully created `HWPFrame.HwpObject`, made HWP visible, and inserted text. |
| PowerShell bridge | Child process bridge | Verified works | `New-Object -ComObject HWPFrame.HwpObject` successfully inserted text. Reliable baseline, but process/state management needs design. |
| `ffi-napi` | FFI library | Not recommended for MVP | Could theoretically call COM APIs, but IDispatch/VARIANT handling would be large native/ABI work. Package metadata shows older maintenance. |
| `koffi` | FFI library | Future option | More active FFI package than `ffi-napi`, but implementing COM Automation through FFI is still a large project. |

## `edge-js` Verification

Package metadata:

```text
name: edge-js
version: 26.0.0
description: run .NET and Node.js in-process on Windows, Mac OS, and Linux
repository: https://github.com/agracio/edge-js
license: MIT
modified: 2026-05-06
```

Temporary test:

```text
Directory: C:\tmp\tshwpx-com-bridge-edge-test
Node: 20.18.3
Command:
- npm install edge-js
- require("edge-js")
- C# Type.GetTypeFromProgID("HWPFrame.HwpObject")
- Activator.CreateInstance(type)
- hwp.HAction.Execute("InsertText", pset.HSet)
```

Result:

```text
edge-js InsertText=true
```

This means `edge-js` is currently the strongest alternative bridge candidate.

## Recommended Direction

Short term:

1. Keep `winax` support, but stop assuming it is the only runtime bridge.
2. Introduce a bridge abstraction:

```ts
type BridgeKind = "winax" | "edge" | "powershell";
```

3. Add `edge-js` as the next experimental bridge because it passed a real HWP insert test.
4. Keep PowerShell bridge as a fallback/diagnostic bridge because it is the simplest proven baseline.

Medium term:

1. Change `AppOptions` to accept a bridge strategy:

```ts
new App({ bridge: "edge", visible: true });
new App({ bridge: "winax", visible: true });
```

2. Keep `createObject` for test injection and advanced users.
3. Document Node version requirements per bridge.
4. Add integration tests:

```text
HWP_INTEGRATION=1 HWP_BRIDGE=edge npm test
HWP_INTEGRATION=1 HWP_BRIDGE=powershell npm test
HWP_INTEGRATION=1 HWP_BRIDGE=winax npm test
```

## Next Implementation Proposal

Implement bridge abstraction in this order:

1. Extract current `winax` bridge into `src/bridges/winax.ts`.
2. Add `src/bridges/edge.ts` using `edge-js`.
3. Move `createHwpObject` to a bridge resolver.
4. Add docs and integration test gate for bridge selection.
5. Leave default as `winax` only if a working version can be pinned; otherwise default to `edge` on Windows.

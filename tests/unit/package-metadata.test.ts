import { describe, expect, it } from "vitest";
import packageJson from "../../package.json";
import * as tshwpx from "../../src";

describe("package metadata", () => {
  it("does not ship a native COM bridge dependency by default", () => {
    expect(packageJson).not.toHaveProperty("dependencies.winax");
    expect(packageJson).not.toHaveProperty("optionalDependencies.winax");
    expect(packageJson).not.toHaveProperty("dependencies.edge-js");
    expect(packageJson).not.toHaveProperty("optionalDependencies.edge-js");
  });

  it("exposes explicit security module CLI commands", () => {
    expect(packageJson.bin).toMatchObject({
      tshwpx: "./dist/cli.js",
    });
    expect(packageJson.files).toContain("security-module");
  });

  it("does not export low-level or catalog-backed API facades", () => {
    expect("ActionsApi" in tshwpx).toBe(false);
    expect("EventsApi" in tshwpx).toBe(false);
    expect("LowLevelApi" in tshwpx).toBe(false);
    expect("ParameterSetsApi" in tshwpx).toBe(false);
    expect("actionDefinitions" in tshwpx).toBe(false);
    expect("eventDefinitions" in tshwpx).toBe(false);
    expect("parameterSetDefinitions" in tshwpx).toBe(false);
    expect("isParameterSetPayload" in tshwpx).toBe(false);
  });

  it("keeps the high-level document and file APIs on the public package surface", () => {
    expect(tshwpx).toMatchObject({
      App: expect.any(Function),
      Hwp: expect.any(Function),
      DocumentApi: expect.any(Function),
      CharacterShapeApi: expect.any(Function),
      DocumentBookmarkApi: expect.any(Function),
      DocumentCommentApi: expect.any(Function),
      DocumentCursorApi: expect.any(Function),
      DocumentHyperlinkApi: expect.any(Function),
      DocumentMemoApi: expect.any(Function),
      DocumentObjectAlignApi: expect.any(Function),
      DocumentObjectMoveApi: expect.any(Function),
      DocumentObjectOrderApi: expect.any(Function),
      DocumentObjectPictureApi: expect.any(Function),
      DocumentObjectPictureBrightnessApi: expect.any(Function),
      DocumentObjectPictureContrastApi: expect.any(Function),
      DocumentObjectPictureDialogApi: expect.any(Function),
      DocumentObjectPictureEffectsApi: expect.any(Function),
      DocumentObjectResizeApi: expect.any(Function),
      DocumentObjectsApi: expect.any(Function),
      DocumentObjectStyleApi: expect.any(Function),
      DocumentPagesApi: expect.any(Function),
      DocumentParagraphApi: expect.any(Function),
      DocumentReferencesApi: expect.any(Function),
      DocumentSearchApi: expect.any(Function),
      DocumentSearchDialogApi: expect.any(Function),
      DocumentStylesApi: expect.any(Function),
      DocumentTableCellAlignmentApi: expect.any(Function),
      DocumentTableCellBorderApi: expect.any(Function),
      DocumentTablesApi: expect.any(Function),
      DocumentTableCellShadingApi: expect.any(Function),
      DocumentTableFormulasApi: expect.any(Function),
      DocumentTableFormulaGroupApi: expect.any(Function),
      DocumentTableResizeApi: expect.any(Function),
      DocumentTableResizeDirectionApi: expect.any(Function),
      FileApi: expect.any(Function),
      FileDialogApi: expect.any(Function),
      FileImageApi: expect.any(Function),
      FilePasswordApi: expect.any(Function),
      FilePrintApi: expect.any(Function),
      FileSecurityApi: expect.any(Function),
      FileTemplateApi: expect.any(Function),
      PowerShellBridge: expect.any(Function),
      HwpAutomationError: expect.any(Function),
    });
  });
});

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
      DocumentCursorApi: expect.any(Function),
      DocumentPagesApi: expect.any(Function),
      DocumentParagraphApi: expect.any(Function),
      DocumentSearchApi: expect.any(Function),
      DocumentSearchDialogApi: expect.any(Function),
      DocumentStylesApi: expect.any(Function),
      DocumentTablesApi: expect.any(Function),
      FileApi: expect.any(Function),
      FileDialogApi: expect.any(Function),
      FileImageApi: expect.any(Function),
      FilePasswordApi: expect.any(Function),
      FileSecurityApi: expect.any(Function),
      FileTemplateApi: expect.any(Function),
      PowerShellBridge: expect.any(Function),
      HwpAutomationError: expect.any(Function),
    });
  });
});

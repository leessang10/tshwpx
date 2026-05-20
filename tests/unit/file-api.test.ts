import { describe, expect, it, vi } from "vitest";
import { App } from "../../src/app";
import { getParameterSetDefinition } from "../../src/internal/parameter-sets";
import { actionDefinitions } from "../../src/spec";

const ACTION_MAP = new Map(actionDefinitions.map((action) => [action.id, action]));

describe("file API", () => {
  it("uses documented file actions and parameter sets internally", () => {
    expect(ACTION_MAP.get("FileClose")).toMatchObject({ id: "FileClose" });
    expect(ACTION_MAP.get("FileNew")).toMatchObject({ id: "FileNew" });
    expect(ACTION_MAP.get("FilePassword")).toMatchObject({ id: "FilePassword", parameterSetId: "Password" });
    expect(ACTION_MAP.get("FileSetSecurity")).toMatchObject({
      id: "FileSetSecurity",
      parameterSetId: "FileSetSecurity",
    });
    expect(ACTION_MAP.get("FileSaveAsImage")).toMatchObject({ id: "FileSaveAsImage", parameterSetId: "Print" });
    expect(ACTION_MAP.get("FileTemplate")).toMatchObject({ id: "FileTemplate", parameterSetId: "FileOpen" });
    expect(ACTION_MAP.get("Print")).toMatchObject({ id: "Print", parameterSetId: "Print" });
    expect(ACTION_MAP.get("PrintSetup")).toMatchObject({ id: "PrintSetup", parameterSetId: "Print" });
    expect(ACTION_MAP.get("PrintToPDF")).toMatchObject({ id: "PrintToPDF", parameterSetId: "Print" });
    expect(ACTION_MAP.get("PrintToImage")).toMatchObject({ id: "PrintToImage", parameterSetId: "PrintToImage" });
    expect(getParameterSetDefinition("FileOpen")?.items.some((item) => item.id === "SaveFileName")).toBe(true);
    expect(getParameterSetDefinition("Password")?.items.some((item) => item.id === "String")).toBe(true);
    expect(getParameterSetDefinition("FileSetSecurity")?.items.map((item) => item.id)).toEqual([
      "Password",
      "NoPrint",
      "NoCopy",
    ]);
    expect(getParameterSetDefinition("Print")?.items.some((item) => item.id === "FileName")).toBe(true);
    expect(getParameterSetDefinition("Print")?.items.some((item) => item.id === "PrintMemo")).toBe(true);
    expect(getParameterSetDefinition("PrintToImage")?.items.some((item) => item.id === "Resolution")).toBe(true);
  });

  it("wraps file open through the app bridge", async () => {
    const bridge = createBridge();
    const app = new App({ bridge });

    await app.file.open("C:/tmp/input.hwp", { format: "HWP", arg: "forceopen:true" });

    expect(bridge.open).toHaveBeenCalledWith("C:/tmp/input.hwp", { format: "HWP", arg: "forceopen:true" });
  });

  it("keeps file API focused on file input, export, and security", () => {
    const bridge = createBridge();
    const app = new App({ bridge });

    expect("save" in app.file).toBe(false);
    expect("saveAs" in app.file).toBe(false);
    expect("close" in app.file).toBe(false);
    expect("quit" in app.file).toBe(false);
  });

  it("runs documented file dialog and lifecycle actions", async () => {
    const bridge = createBridge();
    const app = new App({ bridge });

    await app.file.new();
    await app.file.dialog.open();
    await app.file.dialog.recent();
    await app.file.dialog.saveAs();
    await app.file.dialog.saveOptions();
    await app.file.preview.open();

    expect(bridge.run.mock.calls.map((call) => call[0])).toEqual([
      "FileNew",
      "FileOpen",
      "FileOpenMRU",
      "FileSaveAs",
      "FileSaveOptionDlg",
      "FilePreview",
    ]);
  });

  it("initializes the bridge before high-level file action helpers", async () => {
    const bridge = createBridge();
    const app = new App({ bridge });

    await app.file.dialog.open();
    await app.file.template.open({ saveFileName: "C:/tmp/template.hwt" });

    expect(bridge.init).toHaveBeenCalledTimes(2);
    expect(bridge.init.mock.invocationCallOrder[0]).toBeLessThan(bridge.run.mock.invocationCallOrder[0]);
    expect(bridge.init.mock.invocationCallOrder[1]).toBeLessThan(bridge.execute.mock.invocationCallOrder[0]);
  });

  it("executes file template, password, security, and image actions with documented parameter sets", async () => {
    const bridge = createBridge();
    const app = new App({ bridge });

    await app.file.template.open({
      saveFileName: "C:/tmp/template.hwt",
      openFormat: "HWP",
      openReadOnly: true,
      openFlag: 16,
      argument: "template:true",
    });
    await app.file.password.set({ password: "secret", fullRange: true, ask: false, level: 1 });
    await app.file.password.change({ password: "changed" });
    await app.file.password.readWrite.set({ readPassword: "read", writePassword: "write", readOnly: true });
    await app.file.password.readWrite.change({ readPassword: "new-read", writePassword: "new-write" });
    await app.file.security.set({ password: "1234567", noPrint: true, noCopy: false });
    await app.file.image.save({ fileName: "C:/tmp/page.png", range: 6, printToFile: true });
    await app.file.image.options({ fileName: "C:/tmp/page.png", numCopy: 2 });

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "FileTemplate", {
      parameterSetId: "FileOpen",
      values: {
        SaveFileName: "C:/tmp/template.hwt",
        OpenFormat: "HWP",
        OpenReadOnly: 1,
        OpenFlag: 16,
        Argument: "template:true",
      },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "FilePassword", {
      parameterSetId: "Password",
      values: {
        String: "secret",
        FullRange: 1,
        Ask: 0,
        Level: 1,
      },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(3, "FilePasswordChange", {
      parameterSetId: "Password",
      values: { String: "changed" },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(4, "FileRWPasswordNew", {
      parameterSetId: "Password",
      values: {
        ReadString: "read",
        WriteString: "write",
        ReadOnly: 1,
      },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(5, "FileRWPasswordChange", {
      parameterSetId: "Password",
      values: {
        ReadString: "new-read",
        WriteString: "new-write",
      },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(6, "FileSetSecurity", {
      parameterSetId: "FileSetSecurity",
      values: {
        Password: "1234567",
        NoPrint: 1,
        NoCopy: 0,
      },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(7, "FileSaveAsImage", {
      parameterSetId: "Print",
      values: {
        FileName: "C:/tmp/page.png",
        Range: 6,
        PrintToFile: 1,
      },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(8, "FileSaveAsImageOption", {
      parameterSetId: "Print",
      values: {
        FileName: "C:/tmp/page.png",
        NumCopy: 2,
      },
    });
  });

  it("executes normal print with documented print parameters", async () => {
    const bridge = createBridge();
    const app = new App({ bridge });

    await app.file.print.print({
      range: "custom",
      rangeCustom: "1-3",
      includeLinkedDocuments: true,
      numCopy: 2,
      collate: true,
      printerName: "Hancom PDF",
      printToFile: true,
      fileName: "C:/tmp/out.prn",
      reverseOrder: false,
      printImage: true,
      printDrawObject: true,
      printMemo: false,
      printRevision: true,
      printColorSet: 2,
      withoutBlank: 1,
    });

    expect(bridge.execute).toHaveBeenCalledWith("Print", {
      parameterSetId: "Print",
      values: {
        Range: 4,
        RangeCustom: "1-3",
        RangeIncludeLinkedDoc: 1,
        NumCopy: 2,
        Collate: 1,
        PrinterName: "Hancom PDF",
        PrintToFile: 1,
        FileName: "C:/tmp/out.prn",
        ReverseOrder: 0,
        PrintImage: 1,
        PrintDrawObj: 1,
        PrintMemo: 0,
        PrintRevision: 1,
        PrintColorSet: 2,
        PrintWithoutBlank: 1,
      },
    });
  });

  it("maps all documented print range aliases", async () => {
    const bridge = createBridge();
    const app = new App({ bridge });
    const cases = [
      ["all", 0],
      ["current", 1],
      ["fromCurrent", 2],
      ["toCurrent", 3],
      ["custom", 4],
      ["selection", 5],
      ["document", 6],
      ["section", 7],
    ] as const;

    for (const [range, expected] of cases) {
      bridge.execute.mockClear();

      await app.file.print.print({ range });

      expect(bridge.execute).toHaveBeenCalledWith("Print", {
        parameterSetId: "Print",
        values: { Range: expected },
      });
    }
  });

  it("executes print setup and PDF export with documented print parameters", async () => {
    const bridge = createBridge();
    const app = new App({ bridge });

    await app.file.print.setup({ printMemo: true, printMemoContents: true });
    await app.file.print.pdf({ fileName: "C:/tmp/out.pdf", range: "current", printToFile: true });

    expect(bridge.execute).toHaveBeenNthCalledWith(1, "PrintSetup", {
      parameterSetId: "Print",
      values: { PrintMemo: 1, PrintMemoContents: 1 },
    });
    expect(bridge.execute).toHaveBeenNthCalledWith(2, "PrintToPDF", {
      parameterSetId: "Print",
      values: { FileName: "C:/tmp/out.pdf", Range: 1, PrintToFile: 1 },
    });
  });

  it("maps all documented image print format aliases", async () => {
    const bridge = createBridge();
    const app = new App({ bridge });
    const cases = [
      ["bmp", 1],
      ["gif", 2],
      ["png", 3],
      ["jpg", 4],
      ["wmf", 5],
    ] as const;

    for (const [format, expected] of cases) {
      bridge.execute.mockClear();

      await app.file.print.image({ format });

      expect(bridge.execute).toHaveBeenCalledWith("PrintToImage", {
        parameterSetId: "PrintToImage",
        values: { Format: expected },
      });
    }
  });

  it("executes image output with documented image print parameters", async () => {
    const bridge = createBridge();
    const app = new App({ bridge });

    await app.file.print.image({
      fileName: "C:/tmp/page.png",
      format: "png",
      range: "current",
      resolution: 200,
      colorDepth: 24,
      width: 1200,
      height: 1600,
    });

    expect(bridge.execute).toHaveBeenCalledWith("PrintToImage", {
      parameterSetId: "PrintToImage",
      values: {
        FileName: "C:/tmp/page.png",
        Format: 3,
        Range: 1,
        Resolution: 200,
        ColorDepth: 24,
        Width: 1200,
        Height: 1600,
      },
    });
  });
});

function createBridge() {
  return {
    kind: "fake",
    raw: { name: "raw" },
    init: vi.fn(async () => undefined),
    setVisible: vi.fn(async () => undefined),
    open: vi.fn(async (_path: string, _options = {}) => undefined),
    save: vi.fn(async () => undefined),
    saveAs: vi.fn(async (_path: string, _format = "HWP", _arg = "") => undefined),
    close: vi.fn(async () => undefined),
    quit: vi.fn(async () => undefined),
    getPID: vi.fn(async () => 1234),
    insertText: vi.fn(async (_text: string) => undefined),
    run: vi.fn(async (_actionId: string) => undefined),
    execute: vi.fn(async () => true),
    registerSecurityModule: vi.fn(async () => undefined),
  };
}

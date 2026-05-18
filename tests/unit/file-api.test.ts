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
    expect(getParameterSetDefinition("FileOpen")?.items.some((item) => item.id === "SaveFileName")).toBe(true);
    expect(getParameterSetDefinition("Password")?.items.some((item) => item.id === "String")).toBe(true);
    expect(getParameterSetDefinition("FileSetSecurity")?.items.map((item) => item.id)).toEqual([
      "Password",
      "NoPrint",
      "NoCopy",
    ]);
    expect(getParameterSetDefinition("Print")?.items.some((item) => item.id === "FileName")).toBe(true);
  });

  it("wraps direct file operations through the app bridge", async () => {
    const bridge = createBridge();
    const app = new App({ bridge });

    await app.file.open("C:/tmp/input.hwp", { format: "HWP", arg: "forceopen:true" });
    await app.file.save();
    await app.file.saveAs("C:/tmp/output.hwpx", "HWPX", "lock:false");
    await app.file.close();
    await app.file.quit();

    expect(bridge.open).toHaveBeenCalledWith("C:/tmp/input.hwp", { format: "HWP", arg: "forceopen:true" });
    expect(bridge.save).toHaveBeenCalled();
    expect(bridge.saveAs).toHaveBeenCalledWith("C:/tmp/output.hwpx", "HWPX", "lock:false");
    expect(bridge.close).toHaveBeenCalled();
    expect(bridge.quit).toHaveBeenCalled();
  });

  it("keeps existing app-level file methods as aliases", async () => {
    const bridge = createBridge();
    const app = new App({ bridge });

    await app.open("C:/tmp/input.hwp");
    await app.save();
    await app.saveAs("C:/tmp/output.hwp");
    await app.close();

    expect(bridge.open).toHaveBeenCalledWith("C:/tmp/input.hwp", {});
    expect(bridge.save).toHaveBeenCalled();
    expect(bridge.saveAs).toHaveBeenCalledWith("C:/tmp/output.hwp", "HWP", "");
    expect(bridge.close).toHaveBeenCalled();
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
    insertText: vi.fn(async (_text: string) => undefined),
    run: vi.fn(async (_actionId: string) => undefined),
    execute: vi.fn(async () => true),
    registerSecurityModule: vi.fn(async () => undefined),
  };
}

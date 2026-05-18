import { describe, expect, it, vi } from "vitest";
import { App, Hwp } from "../../src/app";
import { HwpAutomationError } from "../../src/com/errors";

function createFakeRaw() {
  return {
    HAction: { Run: vi.fn(() => true), Execute: vi.fn(() => true) },
    HParameterSet: { HInsertText: { Text: "", HSet: {} } },
    XHwpWindows: { Item: vi.fn(() => ({ Visible: false })) },
    Open: vi.fn(() => true),
    Save: vi.fn(() => true),
    SaveAs: vi.fn(() => true),
    Quit: vi.fn(),
    RegisterModule: vi.fn(() => true),
  };
}

describe("App", () => {
  it("exposes doc, low, and raw layers", () => {
    const raw = createFakeRaw();
    const app = new App({ createObject: () => raw });

    expect(app.raw).toBe(raw);
    expect(app.doc).toBeTruthy();
    expect(app.low.HAction).toBe(raw.HAction);
  });

  it("supports Hwp as an alias", () => {
    expect(Hwp).toBe(App);
  });

  it("sets window visibility", () => {
    const raw = createFakeRaw();
    const window = { Visible: false };
    raw.XHwpWindows.Item = vi.fn(() => window);

    const app = new App({ createObject: () => raw });
    app.setVisible(true);

    expect(window.Visible).toBe(true);
  });

  it("applies visible option during construction", () => {
    const raw = createFakeRaw();
    const window = { Visible: false };
    raw.XHwpWindows.Item = vi.fn(() => window);

    new App({ visible: true, createObject: () => raw });

    expect(window.Visible).toBe(true);
  });

  it("opens, saves, and saves as files", () => {
    const raw = createFakeRaw();
    const app = new App({ createObject: () => raw });

    app.open("C:/tmp/a.hwp");
    app.save();
    app.saveAs("C:/tmp/a.hwpx", "HWPX");

    expect(raw.Open).toHaveBeenCalledWith("C:/tmp/a.hwp", "", "");
    expect(raw.Save).toHaveBeenCalled();
    expect(raw.SaveAs).toHaveBeenCalledWith("C:/tmp/a.hwpx", "HWPX", "");
  });

  it("closes through the FileClose action", () => {
    const raw = createFakeRaw();
    const app = new App({ createObject: () => raw });

    app.close();

    expect(raw.HAction.Run).toHaveBeenCalledWith("FileClose");
  });

  it("quits the application", () => {
    const raw = createFakeRaw();
    const app = new App({ createObject: () => raw });

    app.quit();

    expect(raw.Quit).toHaveBeenCalled();
  });

  it("registers the security module when requested", () => {
    const raw = createFakeRaw();

    new App({ createObject: () => raw, registerSecurityModule: true });

    expect(raw.RegisterModule).toHaveBeenCalledWith("FilePathCheckDLL", "FilePathCheckerModule");
  });

  it("wraps failed file operations", () => {
    const raw = createFakeRaw();
    raw.Open = vi.fn(() => false);
    const app = new App({ createObject: () => raw });

    expect(() => app.open("C:/tmp/missing.hwp")).toThrow(HwpAutomationError);
  });
});

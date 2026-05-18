import { describe, expect, it, vi } from "vitest";
import { App, Hwp } from "../../src/app";
import { HwpAutomationError } from "../../src/com/errors";

function createFakeBridge() {
  return {
    kind: "fake",
    raw: { name: "raw" },
    init: vi.fn(async () => undefined),
    setVisible: vi.fn(async () => undefined),
    open: vi.fn(async () => undefined),
    save: vi.fn(async () => undefined),
    saveAs: vi.fn(async () => undefined),
    close: vi.fn(async () => undefined),
    quit: vi.fn(async () => undefined),
    insertText: vi.fn(async () => undefined),
    run: vi.fn(async () => undefined),
    execute: vi.fn(async () => true),
    registerSecurityModule: vi.fn(async () => undefined),
  };
}

describe("App", () => {
  it("exposes doc, low, and raw layers", () => {
    const bridge = createFakeBridge();
    const app = new App({ bridge });

    expect(app.raw).toBe(bridge.raw);
    expect(app.doc).toBeTruthy();
    expect(app.low).toBeTruthy();
  });

  it("supports Hwp as an alias", () => {
    expect(Hwp).toBe(App);
  });

  it("uses PowerShell as the default bridge", () => {
    const app = new App();

    expect(app.bridge.kind).toBe("powershell");
    void app.quit();
  });

  it("sets window visibility", async () => {
    const bridge = createFakeBridge();
    const app = new App({ bridge });
    await app.setVisible(true);

    expect(bridge.setVisible).toHaveBeenCalledWith(true);
  });

  it("applies visible option during initialization", async () => {
    const bridge = createFakeBridge();
    const app = new App({ visible: true, bridge });

    await app.ready;

    expect(bridge.init).toHaveBeenCalled();
    expect(bridge.setVisible).toHaveBeenCalledWith(true);
  });

  it("opens, saves, and saves as files", async () => {
    const bridge = createFakeBridge();
    const app = new App({ bridge });

    await app.open("C:/tmp/a.hwp");
    await app.save();
    await app.saveAs("C:/tmp/a.hwpx", "HWPX");

    expect(bridge.open).toHaveBeenCalledWith("C:/tmp/a.hwp", {});
    expect(bridge.save).toHaveBeenCalled();
    expect(bridge.saveAs).toHaveBeenCalledWith("C:/tmp/a.hwpx", "HWPX", "");
  });

  it("closes through the bridge", async () => {
    const bridge = createFakeBridge();
    const app = new App({ bridge });

    await app.close();

    expect(bridge.close).toHaveBeenCalled();
  });

  it("quits the application", async () => {
    const bridge = createFakeBridge();
    const app = new App({ bridge });

    await app.quit();

    expect(bridge.quit).toHaveBeenCalled();
  });

  it("waits for initialization before quitting", async () => {
    let finishInit: (() => void) | undefined;
    const bridge = createFakeBridge();
    bridge.init.mockImplementation(
      () =>
        new Promise<undefined>((resolve) => {
          finishInit = () => resolve(undefined);
        }),
    );

    const app = new App({ bridge, visible: true });
    const quit = app.quit();

    expect(bridge.quit).not.toHaveBeenCalled();
    finishInit?.();
    await quit;

    expect(bridge.quit).toHaveBeenCalled();
  });

  it("registers the security module when requested", async () => {
    const bridge = createFakeBridge();

    const app = new App({ bridge, registerSecurityModule: true });
    await app.ready;

    expect(bridge.registerSecurityModule).toHaveBeenCalled();
  });

  it("wraps failed file operations", async () => {
    const bridge = createFakeBridge();
    bridge.open.mockRejectedValue(new Error("open failed"));
    const app = new App({ bridge });

    await expect(app.open("C:/tmp/missing.hwp")).rejects.toThrow(HwpAutomationError);
  });
});

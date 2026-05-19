import { describe, expect, it, vi } from "vitest";
import { App, Hwp } from "../../src/app";

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
    getPID: vi.fn(async () => 1234),
    insertText: vi.fn(async () => undefined),
    run: vi.fn(async () => undefined),
    execute: vi.fn(async () => true),
    registerSecurityModule: vi.fn(async () => undefined),
  };
}

describe("App", () => {
  it("exposes high-level document and file APIs plus raw bridge access", () => {
    const bridge = createFakeBridge();
    const app = new App({ bridge });

    expect(app.raw).toBe(bridge.raw);
    expect(app.doc).toBeTruthy();
    expect(app.file).toBeTruthy();
    expect("low" in app).toBe(false);
    expect("actions" in app).toBe(false);
    expect("params" in app).toBe(false);
    expect("events" in app).toBe(false);
  });

  it("supports Hwp as an alias", () => {
    expect(Hwp).toBe(App);
  });

  it("uses PowerShell as the default bridge", () => {
    const app = new App();

    expect(app.bridge.kind).toBe("powershell");
    void app.close();
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

  it("keeps app focused on the automation session", () => {
    const bridge = createFakeBridge();
    const app = new App({ bridge });

    expect("open" in app).toBe(false);
    expect("save" in app).toBe(false);
    expect("saveAs" in app).toBe(false);
    expect("quit" in app).toBe(false);
  });

  it("closes the application through the bridge", async () => {
    const bridge = createFakeBridge();
    const app = new App({ bridge });

    await app.close();

    expect(bridge.quit).toHaveBeenCalled();
    expect(bridge.close).not.toHaveBeenCalled();
  });

  it("waits for initialization before closing", async () => {
    let finishInit: (() => void) | undefined;
    const bridge = createFakeBridge();
    bridge.init.mockImplementation(
      () =>
        new Promise<undefined>((resolve) => {
          finishInit = () => resolve(undefined);
        }),
    );

    const app = new App({ bridge, visible: true });
    const close = app.close();

    expect(bridge.quit).not.toHaveBeenCalled();
    finishInit?.();
    await close;

    expect(bridge.quit).toHaveBeenCalled();
  });

  it("returns the current HWP process id", async () => {
    const bridge = createFakeBridge();
    const app = new App({ bridge });

    await expect(app.getPID()).resolves.toBe(1234);
    expect(bridge.getPID).toHaveBeenCalled();
  });

  it("registers the security module when requested", async () => {
    const bridge = createFakeBridge();

    const app = new App({ bridge, registerSecurityModule: true });
    await app.ready;

    expect(bridge.registerSecurityModule).toHaveBeenCalled();
  });

});

import { describe, expect, it } from "vitest";
import { App } from "../../src";

const runIntegration = process.env.HWP_INTEGRATION === "1";

describe.skipIf(!runIntegration)("HWP integration smoke test", () => {
  it("starts HWP automation and quits", () => {
    const app = new App({ visible: false });
    expect(app.raw).toBeTruthy();
    app.quit();
  });
});

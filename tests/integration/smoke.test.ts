import { describe, expect, it } from "vitest";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { App } from "../../src";

const runIntegration = process.env.HWP_INTEGRATION === "1";

describe.skipIf(!runIntegration)("HWP integration smoke test", () => {
  it("starts HWP automation, inserts Korean text, saves, and quits", async () => {
    const app = new App({ visible: true });
    const outputPath = join(tmpdir(), `tshwpx-smoke-${Date.now()}.hwp`);

    expect(app.raw).toBeTruthy();

    try {
      await app.ready;
      await app.doc.text.insert("안녕하세요");
      await app.doc.saveAs(outputPath, "HWP");
    } finally {
      await app.close();
    }
  }, 60_000);
});

import { describe, expect, it } from "vitest";
import packageJson from "../../package.json";

describe("package metadata", () => {
  it("does not ship a native COM bridge dependency by default", () => {
    expect(packageJson).not.toHaveProperty("dependencies.winax");
    expect(packageJson).not.toHaveProperty("optionalDependencies.winax");
    expect(packageJson).not.toHaveProperty("dependencies.edge-js");
    expect(packageJson).not.toHaveProperty("optionalDependencies.edge-js");
  });
});

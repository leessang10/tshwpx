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
});

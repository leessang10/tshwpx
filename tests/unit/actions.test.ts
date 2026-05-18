import { describe, expect, it, vi } from "vitest";
import { ActionsApi } from "../../src/actions";
import { HwpAutomationError } from "../../src/com/errors";
import { ParameterSetsApi } from "../../src/params";

describe("ActionsApi", () => {
  function createBridge() {
    return {
      run: vi.fn(async () => undefined),
      execute: vi.fn(async () => true),
    };
  }

  it("lists action metadata extracted from the official action table", () => {
    const actions = new ActionsApi(createBridge());

    expect(actions.list().length).toBeGreaterThan(900);
    expect(actions.has("CharShape")).toBe(true);
    expect(actions.get("CharShape")).toMatchObject({
      id: "CharShape",
      parameterSetId: "CharShape",
    });
  });

  it("runs a known action through the bridge", async () => {
    const bridge = createBridge();
    const actions = new ActionsApi(bridge);

    await actions.run("MoveDocBegin");

    expect(bridge.run).toHaveBeenCalledWith("MoveDocBegin");
  });

  it("executes a known action with a parameter set payload", async () => {
    const bridge = createBridge();
    const actions = new ActionsApi(bridge);
    const params = new ParameterSetsApi();
    const payload = params.create("CharShape", { Height: 1200 });

    await expect(actions.execute("CharShape", payload)).resolves.toBe(true);

    expect(bridge.execute).toHaveBeenCalledWith("CharShape", payload);
  });

  it("rejects unknown actions before calling the bridge", async () => {
    const bridge = createBridge();
    const actions = new ActionsApi(bridge);

    await expect(actions.run("NotARealAction")).rejects.toThrow(HwpAutomationError);
    expect(bridge.run).not.toHaveBeenCalled();
  });
});

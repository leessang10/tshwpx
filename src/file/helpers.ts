import type { HwpBridge } from "../bridges/types";
import { ParameterSetsApi } from "../params";
import type { FilePasswordOptions } from "./types";
import { createPasswordValues } from "./values";

export const FILE_PARAMS = new ParameterSetsApi();

export async function runFileAction(
  bridge: Pick<HwpBridge, "run">,
  ensureReady: () => Promise<void>,
  actionId: string,
): Promise<void> {
  await ensureReady();
  await bridge.run(actionId);
}

export async function executeFileAction(
  bridge: Pick<HwpBridge, "execute">,
  ensureReady: () => Promise<void>,
  actionId: string,
  parameterSet: unknown,
): Promise<void> {
  await ensureReady();
  await bridge.execute(actionId, parameterSet);
}

export async function executePasswordAction(
  bridge: Pick<HwpBridge, "execute">,
  ensureReady: () => Promise<void>,
  actionId: string,
  options: FilePasswordOptions,
): Promise<void> {
  await executeFileAction(bridge, ensureReady, actionId, FILE_PARAMS.create("Password", createPasswordValues(options)));
}

import { createRequire } from "node:module";
import { HwpAutomationError } from "./errors";
import type { HwpComObject, WinaxBridge } from "./types";

type BridgeOptions = {
  platform?: NodeJS.Platform;
  loadWinax?: () => WinaxBridge;
};

function loadDefaultWinax(): WinaxBridge {
  try {
    return getRuntimeRequire()("winax") as WinaxBridge;
  } catch (error) {
    throw new HwpAutomationError(
      "COM_BRIDGE_NOT_FOUND",
      "The winax COM bridge is required to use tshwpx on Windows.",
      error,
    );
  }
}

function getRuntimeRequire(): NodeRequire {
  const runtimeRequire = Function("return typeof require === 'function' ? require : undefined")() as
    | NodeRequire
    | undefined;

  return runtimeRequire ?? createRequire(`${process.cwd()}/package.json`);
}

export function createHwpObject(options: BridgeOptions = {}): HwpComObject {
  const platform = options.platform ?? process.platform;

  if (platform !== "win32") {
    throw new HwpAutomationError(
      "UNSUPPORTED_PLATFORM",
      "tshwpx requires Windows because Hancom HwpAutomation is exposed through COM/OLE.",
    );
  }

  const bridge = options.loadWinax?.() ?? loadDefaultWinax();

  try {
    return new bridge.Object("HWPFrame.HwpObject");
  } catch (error) {
    throw new HwpAutomationError(
      "HWP_NOT_INSTALLED",
      "Hancom HWP automation object could not be created. Check that Hancom HWP is installed.",
      error,
    );
  }
}

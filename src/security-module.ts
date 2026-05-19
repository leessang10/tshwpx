import { execFile } from "node:child_process";
import { access, copyFile, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";
import { basename, dirname, join } from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export const HWP_SECURITY_MODULE_FILE_NAME = "FilePathCheckerModuleExample.dll";
export const HWP_SECURITY_MODULE_REGISTRY_KEY = "HKCU\\Software\\HNC\\HwpAutomation\\Modules";
export const HWP_SECURITY_MODULE_VALUE_NAME = "FilePathCheckerModuleExample";

export type SecurityModuleRegistry = {
  setValue(key: string, name: string, value: string): Promise<void>;
  getValue(key: string, name: string): Promise<string | null>;
  deleteValue(key: string, name: string): Promise<void>;
};

export type SecurityModuleInstallOptions = {
  sourceDllPath?: string;
  installDir?: string;
  registry?: SecurityModuleRegistry;
};

export type SecurityModuleInstallResult = {
  dllPath: string;
  registryKey: string;
  valueName: string;
};

export type SecurityModuleDoctorResult = {
  ok: boolean;
  registryKey: string;
  valueName: string;
  registryValue: string | null;
  dllExists: boolean;
  messages: string[];
};

export class WindowsRegistry implements SecurityModuleRegistry {
  async setValue(key: string, name: string, value: string): Promise<void> {
    await execFileAsync("reg", ["add", key, "/v", name, "/t", "REG_SZ", "/d", value, "/f"]);
  }

  async getValue(key: string, name: string): Promise<string | null> {
    try {
      const { stdout } = await execFileAsync("reg", ["query", key, "/v", name]);
      const line = stdout
        .split(/\r?\n/)
        .map((entry) => entry.trim())
        .find((entry) => entry.startsWith(name));
      if (!line) {
        return null;
      }

      const match = line.match(new RegExp(`^${escapeRegExp(name)}\\s+REG_SZ\\s+(.+)$`));
      return match?.[1]?.trim() ?? null;
    } catch {
      return null;
    }
  }

  async deleteValue(key: string, name: string): Promise<void> {
    try {
      await execFileAsync("reg", ["delete", key, "/v", name, "/f"]);
    } catch {
      return;
    }
  }
}

export async function installSecurityModule(
  options: SecurityModuleInstallOptions = {},
): Promise<SecurityModuleInstallResult> {
  const sourceDllPath = options.sourceDllPath ?? getBundledSecurityModulePath();
  const installDir = options.installDir ?? getDefaultSecurityModuleInstallDir();
  const registry = options.registry ?? new WindowsRegistry();
  const dllPath = join(installDir, basename(sourceDllPath));

  await assertFileExists(sourceDllPath, `Security module DLL was not found: ${sourceDllPath}`);
  await mkdir(installDir, { recursive: true });
  await copyFile(sourceDllPath, dllPath);
  await registry.setValue(HWP_SECURITY_MODULE_REGISTRY_KEY, HWP_SECURITY_MODULE_VALUE_NAME, dllPath);

  return {
    dllPath,
    registryKey: HWP_SECURITY_MODULE_REGISTRY_KEY,
    valueName: HWP_SECURITY_MODULE_VALUE_NAME,
  };
}

export async function uninstallSecurityModule(
  options: Omit<SecurityModuleInstallOptions, "sourceDllPath"> = {},
): Promise<SecurityModuleInstallResult> {
  const installDir = options.installDir ?? getDefaultSecurityModuleInstallDir();
  const registry = options.registry ?? new WindowsRegistry();
  const dllPath = join(installDir, HWP_SECURITY_MODULE_FILE_NAME);

  await registry.deleteValue(HWP_SECURITY_MODULE_REGISTRY_KEY, HWP_SECURITY_MODULE_VALUE_NAME);
  await rm(dllPath, { force: true });

  return {
    dllPath,
    registryKey: HWP_SECURITY_MODULE_REGISTRY_KEY,
    valueName: HWP_SECURITY_MODULE_VALUE_NAME,
  };
}

export async function doctorSecurityModule(
  options: Pick<SecurityModuleInstallOptions, "registry"> = {},
): Promise<SecurityModuleDoctorResult> {
  const registry = options.registry ?? new WindowsRegistry();
  const registryValue = await registry.getValue(HWP_SECURITY_MODULE_REGISTRY_KEY, HWP_SECURITY_MODULE_VALUE_NAME);
  const dllExists = registryValue ? await fileExists(registryValue) : false;
  const messages: string[] = [];

  if (!registryValue) {
    messages.push("Security module registry value is not registered.");
  } else if (!dllExists) {
    messages.push(`Registered security module DLL does not exist: ${registryValue}`);
  } else {
    messages.push("Security module registry value and DLL are available.");
  }

  return {
    ok: !!registryValue && dllExists,
    registryKey: HWP_SECURITY_MODULE_REGISTRY_KEY,
    valueName: HWP_SECURITY_MODULE_VALUE_NAME,
    registryValue,
    dllExists,
    messages,
  };
}

export function getDefaultSecurityModuleInstallDir(): string {
  const localAppData = process.env.LOCALAPPDATA ?? join(homedir(), "AppData", "Local");
  return join(localAppData, "tshwpx", "security-module");
}

export function getBundledSecurityModulePath(): string {
  return join(dirname(fileURLToPath(import.meta.url)), "..", "security-module", HWP_SECURITY_MODULE_FILE_NAME);
}

async function assertFileExists(path: string, message: string): Promise<void> {
  if (!(await fileExists(path))) {
    throw new Error(message);
  }
}

async function fileExists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

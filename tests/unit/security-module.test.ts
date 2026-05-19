import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  HWP_SECURITY_MODULE_REGISTRY_KEY,
  HWP_SECURITY_MODULE_VALUE_NAME,
  doctorSecurityModule,
  installSecurityModule,
  uninstallSecurityModule,
  type SecurityModuleRegistry,
} from "../../src/security-module";

function createRegistry(): SecurityModuleRegistry & { values: Map<string, string> } {
  const values = new Map<string, string>();

  return {
    values,
    async setValue(key, name, value) {
      values.set(`${key}\\${name}`, value);
    },
    async getValue(key, name) {
      return values.get(`${key}\\${name}`) ?? null;
    },
    async deleteValue(key, name) {
      values.delete(`${key}\\${name}`);
    },
  };
}

describe("security module setup", () => {
  it("copies the DLL and registers its installed path under HKCU", async () => {
    const root = await mkdtemp(join(tmpdir(), "tshwpx-security-"));
    const sourceDllPath = join(root, "FilePathCheckerModuleExample.dll");
    const installDir = join(root, "install");
    const registry = createRegistry();

    await writeFile(sourceDllPath, "dll bytes");

    const result = await installSecurityModule({ sourceDllPath, installDir, registry });

    await expect(readFile(result.dllPath, "utf8")).resolves.toBe("dll bytes");
    expect(result).toMatchObject({
      registryKey: HWP_SECURITY_MODULE_REGISTRY_KEY,
      valueName: HWP_SECURITY_MODULE_VALUE_NAME,
    });
    await expect(registry.getValue(HWP_SECURITY_MODULE_REGISTRY_KEY, HWP_SECURITY_MODULE_VALUE_NAME)).resolves.toBe(
      result.dllPath,
    );

    await rm(root, { recursive: true, force: true });
  });

  it("removes the registry value and installed DLL", async () => {
    const root = await mkdtemp(join(tmpdir(), "tshwpx-security-"));
    const dllPath = join(root, "FilePathCheckerModuleExample.dll");
    const registry = createRegistry();
    await writeFile(dllPath, "dll bytes");
    await registry.setValue(HWP_SECURITY_MODULE_REGISTRY_KEY, HWP_SECURITY_MODULE_VALUE_NAME, dllPath);

    const result = await uninstallSecurityModule({ installDir: root, registry });

    expect(result.registryKey).toBe(HWP_SECURITY_MODULE_REGISTRY_KEY);
    await expect(registry.getValue(HWP_SECURITY_MODULE_REGISTRY_KEY, HWP_SECURITY_MODULE_VALUE_NAME)).resolves.toBeNull();
    await expect(readFile(dllPath)).rejects.toThrow();

    await rm(root, { recursive: true, force: true });
  });

  it("reports doctor status for registry and DLL availability", async () => {
    const root = await mkdtemp(join(tmpdir(), "tshwpx-security-"));
    const dllPath = join(root, "FilePathCheckerModuleExample.dll");
    const registry = createRegistry();
    await writeFile(dllPath, "dll bytes");
    await registry.setValue(HWP_SECURITY_MODULE_REGISTRY_KEY, HWP_SECURITY_MODULE_VALUE_NAME, dllPath);

    const result = await doctorSecurityModule({ registry });

    expect(result.ok).toBe(true);
    expect(result.registryValue).toBe(dllPath);
    expect(result.dllExists).toBe(true);

    await rm(root, { recursive: true, force: true });
  });
});

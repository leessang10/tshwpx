#!/usr/bin/env node
import { doctorSecurityModule, installSecurityModule, uninstallSecurityModule } from "./security-module";

async function main(): Promise<void> {
  const command = process.argv[2];

  try {
    switch (command) {
      case "install-security-module": {
        const result = await installSecurityModule();
        console.log(`Installed ${result.valueName}`);
        console.log(`Registry: ${result.registryKey}`);
        console.log(`DLL: ${result.dllPath}`);
        break;
      }
      case "uninstall-security-module": {
        const result = await uninstallSecurityModule();
        console.log(`Uninstalled ${result.valueName}`);
        console.log(`Registry: ${result.registryKey}`);
        break;
      }
      case "doctor": {
        const result = await doctorSecurityModule();
        console.log(result.ok ? "OK" : "NOT OK");
        for (const message of result.messages) {
          console.log(message);
        }
        if (result.registryValue) {
          console.log(`Registry value: ${result.registryValue}`);
        }
        process.exitCode = result.ok ? 0 : 1;
        break;
      }
      default:
        console.log("Usage: tshwpx <install-security-module|uninstall-security-module|doctor>");
        process.exitCode = command ? 1 : 0;
    }
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}

void main();

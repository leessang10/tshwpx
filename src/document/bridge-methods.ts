export function requireBridgeMethod<T extends (...args: never[]) => unknown>(method: T | undefined, name: string): T {
  if (!method) {
    throw new Error(`The active HWP bridge does not support ${name}.`);
  }

  return method;
}

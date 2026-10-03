/** Runtime environment bridge shared by Bun and Cloudflare Worker builds. */
export type RuntimeEnv = Record<string, string | undefined>;

const FALLBACK_ENV: RuntimeEnv = {};

export function runtimeEnv(): RuntimeEnv {
  const workerEnv = (globalThis as { __ICS_ENV__?: RuntimeEnv }).__ICS_ENV__;
  if (workerEnv) return workerEnv;
  if (typeof process !== "undefined" && process.env) return process.env;
  return FALLBACK_ENV;
}

export function setRuntimeEnv(env: RuntimeEnv): void {
  (globalThis as { __ICS_ENV__?: RuntimeEnv }).__ICS_ENV__ = env;
}

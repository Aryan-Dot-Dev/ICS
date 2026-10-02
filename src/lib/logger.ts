/**
 * Frontend logging — thin structured wrapper over console.
 *
 * Namespaced, level-gated: debug/info logs are suppressed in production
 * builds; warn/error always surface. Gives every log a subsystem tag so the
 * browser console is greppable instead of scattered raw diagnostics.
 */

/**
 * Dev-build detection that works under the Bun dev server AND production
 * builds. Bun's browser runtime defines neither `process.env.NODE_ENV` nor
 * `import.meta.env.DEV` (a Vite convention), so the reliable signal here is
 * the origin: the dev server (`bun run dev`) always runs on localhost, while
 * production serves from the real domain (and the single-container demo mode
 * is itself a local environment, where showing dev tooling is fine).
 */
const isDev =
  (typeof process !== "undefined" && process.env?.NODE_ENV === "development") ||
  Boolean((typeof import.meta !== "undefined" && (import.meta as { env?: { DEV?: boolean } }).env?.DEV)) ||
  (typeof window !== "undefined" &&
    /^(localhost|127\.0\.0\.1|\[::1\]|0\.0\.0\.0)$/.test(window.location.hostname));

/** True in dev-server builds (bun run dev); false on the production domain. */
export const IS_DEV_BUILD = isDev;

export type LogLevel = "debug" | "info" | "warn" | "error";

type Emit = (message: string, ...details: unknown[]) => void;

function makeEmit(tag: string, level: LogLevel): Emit {
  return (message: string, ...details: unknown[]) => {
    if ((level === "debug" || level === "info") && !isDev) return;
    const prefixed = `[${tag}] ${message}`;
    const impl =
      level === "error" ? console.error : level === "warn" ? console.warn : console.log;
    if (details.length > 0) impl(prefixed, ...details);
    else impl(prefixed);
  };
}

export interface Logger {
  debug: Emit;
  info: Emit;
  warn: Emit;
  error: Emit;
  /** Derive a namespaced child logger, e.g. logger.child("submit"). */
  child: (subtag: string) => Logger;
}

export function createLogger(tag: string): Logger {
  return {
    debug: makeEmit(tag, "debug"),
    info: makeEmit(tag, "info"),
    warn: makeEmit(tag, "warn"),
    error: makeEmit(tag, "error"),
    child: (subtag: string) => createLogger(`${tag}:${subtag}`),
  };
}

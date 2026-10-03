/**
 * Backend logging — structured, request-aware logger for the API server.
 *
 * Every line is single-line JSON (greppable, parseable by log shippers) with:
 * - `ts`      ISO-8601 timestamp
 * - `level`   debug | info | warn | error
 * - `msg`     human-readable message
 * - `service` fixed service name
 * - `reqId`   request correlation id, when logging within a request
 * - ...free-form structured fields
 *
 * Replaces raw console.log diagnostics; warn/error always emit, debug/info
 * are suppressed unless NODE_ENV=development.
 */

type Level = "debug" | "info" | "warn" | "error";
import { runtimeEnv } from "./runtimeEnv";

const LEVELS: Record<Level, number> = { debug: 10, info: 20, warn: 30, error: 40 };

const minLevel =
  runtimeEnv().NODE_ENV === "development" || runtimeEnv().NODE_ENV === "test"
    ? LEVELS.debug
    : LEVELS.info;

export interface LogFields {
  reqId?: string;
  route?: string;
  status?: number;
  durationMs?: number;
  [key: string]: unknown;
}

function emit(level: Level, msg: string, fields: LogFields = {}): void {
  if (LEVELS[level] < minLevel) return;
  const line = JSON.stringify({
    ts: new Date().toISOString(),
    level,
    msg,
    service: "ics-api",
    ...fields,
  });
  if (level === "error") console.error(line);
  else if (level === "warn") console.warn(line);
  else console.log(line);
}

export const log = {
  debug: (msg: string, fields?: LogFields) => emit("debug", msg, fields),
  info: (msg: string, fields?: LogFields) => emit("info", msg, fields),
  warn: (msg: string, fields?: LogFields) => emit("warn", msg, fields),
  error: (msg: string, fields?: LogFields) => emit("error", msg, fields),
};

/**
 * Generate a short request id. Uses crypto.randomUUID when available
 * (Bun/Node 19+), falls back to a random hex string.
 */
export function newRequestId(): string {
  try {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
      return crypto.randomUUID().slice(0, 8);
    }
  } catch {
    // fall through
  }
  return Math.random().toString(16).slice(2, 10);
}

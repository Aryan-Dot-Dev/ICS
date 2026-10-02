/**
 * Per-key token-bucket rate limiter (in-memory, single process).
 *
 * Used to protect the chat endpoints from a single client exhausting the
 * shared Groq API quota. Each key (client IP) owns a bucket:
 *  - `capacity` tokens (burst allowance)
 *  - refilled continuously at `refillPerSecond` tokens/second (sustained rate)
 *
 * The bucket is the classic algorithm: cheap O(1) per request, allows short
 * bursts while capping the sustained rate, and smooths traffic without the
 * boundary spikes of fixed windows.
 *
 * Memory hygiene: idle buckets are swept lazily (bounded work per call), so
 * abandoned visitors do not leak entries. State lives in-process by design —
 * the quota being protected (Groq) is per-API-key, which matches this
 * deployment model. Clock injection keeps the tests deterministic.
 */

export interface TokenBucketLimiterOptions {
  /** Maximum burst size in requests (bucket capacity). */
  capacity: number;
  /** Sustained refill rate in tokens per second. */
  refillPerSecond: number;
  /** Evict buckets idle longer than this (ms). Default: 30 minutes. */
  idleTtlMs?: number;
  /** Injectable monotonic-ish clock (ms). Defaults to Date.now. */
  now?: () => number;
}

export interface RateLimitDecision {
  allowed: boolean;
  /** Tokens remaining after this request (floor) — for x-rate-limit headers. */
  remaining: number;
  /** Seconds until the next token is available (when denied; 0 otherwise). */
  retryAfterSeconds: number;
  /** Configured capacity, echoed for logging/headers. */
  limit: number;
}

interface Bucket {
  tokens: number;
  updatedAtMs: number;
  lastSeenMs: number;
}

export class TokenBucketLimiter {
  private readonly buckets = new Map<string, Bucket>();
  private readonly capacity: number;
  private readonly refillPerSecond: number;
  private readonly idleTtlMs: number;
  private readonly nowFn: () => number;
  private lastSweepMs: number;

  constructor(options: TokenBucketLimiterOptions) {
    if (!Number.isFinite(options.capacity) || options.capacity < 1) {
      throw new Error(`Invalid capacity: ${options.capacity} — must be >= 1.`);
    }
    if (!Number.isFinite(options.refillPerSecond) || options.refillPerSecond <= 0) {
      throw new Error(`Invalid refillPerSecond: ${options.refillPerSecond} — must be > 0.`);
    }
    this.capacity = options.capacity;
    this.refillPerSecond = options.refillPerSecond;
    this.idleTtlMs = options.idleTtlMs ?? 30 * 60 * 1000;
    this.nowFn = options.now ?? (() => Date.now());
    this.lastSweepMs = this.nowFn();
  }

  /**
   * Consume one token for `key`. Always call exactly once per request you
   * want counted, BEFORE doing expensive work.
   */
  take(key: string): RateLimitDecision {
    const now = this.nowFn();
    this.sweepIfDue(now);

    const bucket = this.buckets.get(key) ?? {
      tokens: this.capacity,
      updatedAtMs: now,
      lastSeenMs: now,
    };

    // Refill continuously since the bucket was last touched.
    const elapsedSeconds = Math.max(0, (now - bucket.updatedAtMs) / 1000);
    bucket.tokens = Math.min(this.capacity, bucket.tokens + elapsedSeconds * this.refillPerSecond);
    bucket.updatedAtMs = now;
    bucket.lastSeenMs = now;

    if (bucket.tokens >= 1) {
      bucket.tokens -= 1;
      this.buckets.set(key, bucket);
      return { allowed: true, remaining: Math.floor(bucket.tokens), retryAfterSeconds: 0, limit: this.capacity };
    }

    // Denied: report when the next full token will exist.
    const deficit = 1 - bucket.tokens;
    const retryAfterSeconds = Math.max(1, Math.ceil(deficit / this.refillPerSecond));
    this.buckets.set(key, bucket);
    return { allowed: false, remaining: 0, retryAfterSeconds, limit: this.capacity };
  }

  /** Number of live buckets (observability / tests). */
  get size(): number {
    return this.buckets.size;
  }

  /** Force-expire idle buckets; also runs lazily inside take(). */
  sweep(now: number = this.nowFn()): number {
    let removed = 0;
    for (const [key, bucket] of this.buckets) {
      if (now - bucket.lastSeenMs > this.idleTtlMs) {
        this.buckets.delete(key);
        removed++;
      }
    }
    this.lastSweepMs = now;
    return removed;
  }

  private sweepIfDue(now: number): void {
    // At most one sweep per minute of traffic, so take() stays O(1) amortized.
    if (now - this.lastSweepMs < 60_000) return;
    this.sweep(now);
  }
}

/**
 * Best-effort client identity for rate limiting. Behind a gateway/proxy the
 * forwarding header carries the real client; direct connections (local dev)
 * share the "unknown" bucket.
 */
export function clientIpKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

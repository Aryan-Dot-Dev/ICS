import { describe, expect, test } from "bun:test";
import { TokenBucketLimiter, clientIpKey } from "./rateLimiter";

/** Deterministic fake clock. */
function fakeClock() {
  let t = 1_000_000;
  return {
    now: () => t,
    advance: (ms: number) => {
      t += ms;
    },
  };
}

describe("TokenBucketLimiter", () => {
  test("allows a full burst, then denies", () => {
    const clock = fakeClock();
    const limiter = new TokenBucketLimiter({ capacity: 3, refillPerSecond: 0.1, now: clock.now });

    expect(limiter.take("ip-a").allowed).toBe(true);
    expect(limiter.take("ip-a").allowed).toBe(true);
    const third = limiter.take("ip-a");
    expect(third.allowed).toBe(true);
    expect(third.remaining).toBe(0);

    const denied = limiter.take("ip-a");
    expect(denied.allowed).toBe(false);
    expect(denied.remaining).toBe(0);
    expect(denied.retryAfterSeconds).toBeGreaterThan(0);
  });

  test("keys are isolated — one client's burst never affects another", () => {
    const clock = fakeClock();
    const limiter = new TokenBucketLimiter({ capacity: 1, refillPerSecond: 0.01, now: clock.now });

    expect(limiter.take("ip-a").allowed).toBe(true);
    expect(limiter.take("ip-a").allowed).toBe(false);
    expect(limiter.take("ip-b").allowed).toBe(true); // untouched bucket
  });

  test("refills continuously over time", () => {
    const clock = fakeClock();
    // 1 token/second: an empty bucket recovers one message per second.
    const limiter = new TokenBucketLimiter({ capacity: 2, refillPerSecond: 1, now: clock.now });

    expect(limiter.take("ip").allowed).toBe(true);
    expect(limiter.take("ip").allowed).toBe(true);
    expect(limiter.take("ip").allowed).toBe(false);

    clock.advance(1000);
    expect(limiter.take("ip").allowed).toBe(true);
    expect(limiter.take("ip").allowed).toBe(false);

    clock.advance(5000);
    // After 5s idle the bucket is full (2) again.
    expect(limiter.take("ip").allowed).toBe(true);
    expect(limiter.take("ip").remaining).toBe(0);
  });

  test("retryAfterSeconds reflects the deficit against the refill rate", () => {
    const clock = fakeClock();
    const limiter = new TokenBucketLimiter({ capacity: 1, refillPerSecond: 0.5, now: clock.now });

    limiter.take("ip"); // empties the bucket (1 -> 0)
    const denied = limiter.take("ip");
    expect(denied.allowed).toBe(false);
    // A full token missing at 0.5/s -> 2s.
    expect(denied.retryAfterSeconds).toBe(2);

    // After 1s the bucket holds 0.5 tokens: only half a token missing -> 1s.
    clock.advance(1000);
    const deniedAgain = limiter.take("ip");
    expect(deniedAgain.retryAfterSeconds).toBe(1);
  });

  test("sweep removes idle buckets and keeps active ones", () => {
    const clock = fakeClock();
    const limiter = new TokenBucketLimiter({
      capacity: 2,
      refillPerSecond: 0.1,
      idleTtlMs: 10_000,
      now: clock.now,
    });

    limiter.take("old-visitor");
    clock.advance(20_000);
    limiter.take("active-visitor");
    const removed = limiter.sweep(clock.now());

    expect(removed).toBe(1);
    expect(limiter.size).toBe(1);
  });

  test("take() sweeps lazily at most once per minute", () => {
    const clock = fakeClock();
    const limiter = new TokenBucketLimiter({
      capacity: 5,
      refillPerSecond: 0.1,
      idleTtlMs: 1_000,
      now: clock.now,
    });

    limiter.take("ghost");
    clock.advance(61_000);
    limiter.take("ghost"); // sweep runs here (idle bucket is also the caller)
    clock.advance(10);
    limiter.take("ghost"); // no sweep: 10ms < 60s since last sweep
    expect(limiter.size).toBe(1);
  });

  test("rejects invalid configuration", () => {
    expect(() => new TokenBucketLimiter({ capacity: 0, refillPerSecond: 1 })).toThrow(/capacity/);
    expect(() => new TokenBucketLimiter({ capacity: 5, refillPerSecond: 0 })).toThrow(/refillPerSecond/);
  });
});

describe("clientIpKey", () => {
  const makeRequest = (headers: Record<string, string>) =>
    new Request("http://localhost:8000/api/chat", { headers });

  test("uses the first x-forwarded-for entry (gateway chain)", () => {
    expect(clientIpKey(makeRequest({ "x-forwarded-for": "203.0.113.7, 10.0.0.1" }))).toBe("203.0.113.7");
  });

  test("falls back to x-real-ip, then the shared bucket", () => {
    expect(clientIpKey(makeRequest({ "x-real-ip": "198.51.100.2" }))).toBe("198.51.100.2");
    expect(clientIpKey(makeRequest({}))).toBe("unknown");
  });
});

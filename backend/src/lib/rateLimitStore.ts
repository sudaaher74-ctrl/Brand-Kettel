import type { Store } from 'express-rate-limit';

/**
 * Builds a rate-limit store.
 *
 * express-rate-limit's default store keeps counters in process memory, which is
 * only correct while exactly one instance is running. As soon as the API is
 * scaled to two containers, each keeps its own counter and the effective limit
 * doubles — so a shared Redis store is used whenever one is configured.
 *
 * Set REDIS_URL (an Upstash `rediss://` URL works directly) to enable it. When
 * it is unset the in-memory store is used and a warning is logged at startup,
 * because that is a real limitation rather than a silent default.
 */
export function createRateLimitStore(prefix: string): Store | undefined {
  const url = process.env.REDIS_URL?.trim();
  if (!url) return undefined;

  try {
    // Required lazily so the dependency is only loaded when actually configured.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const RedisStore = require('rate-limit-redis').default ?? require('rate-limit-redis');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Redis = require('ioredis').default ?? require('ioredis');

    const client = new Redis(url, { maxRetriesPerRequest: 2, enableOfflineQueue: false });
    client.on('error', (err: Error) => {
      console.error('[rate-limit] redis error:', err.message);
    });

    return new RedisStore({
      prefix: `rl:${prefix}:`,
      sendCommand: (...args: string[]) => client.call(...args),
    }) as Store;
  } catch (error) {
    console.error(
      '[rate-limit] REDIS_URL is set but the Redis store could not be created; ' +
        'falling back to the in-memory store. Install `ioredis` and `rate-limit-redis`.',
      error,
    );
    return undefined;
  }
}

/** Logged once at startup so a single-instance-only limiter is never a surprise. */
export function warnIfMemoryStore(): void {
  if (!process.env.REDIS_URL?.trim()) {
    console.warn(
      '[rate-limit] REDIS_URL is not set — rate limit counters are per-process. ' +
        'This is only correct while a single API instance is running.',
    );
  }
}

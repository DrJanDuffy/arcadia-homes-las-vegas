/**
 * Next.js instrumentation - Sentry init for server and edge.
 * Replaces sentry.server.config.ts and sentry.edge.config.ts.
 * @see https://docs.sentry.io/platforms/javascript/guides/nextjs/tracing/instrumentation
 */

export async function register() {
  const runtime = process.env.NEXT_RUNTIME;

  if (runtime === "nodejs") {
    const Sentry = await import("@sentry/nextjs");
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: 1.0,
      debug: false,
    });
  } else if (runtime === "edge") {
    const Sentry = await import("@sentry/nextjs");
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: 1.0,
      debug: false,
    });
  }
}

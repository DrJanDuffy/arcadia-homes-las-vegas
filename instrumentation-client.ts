/**
 * Next.js client instrumentation - Sentry init for browser.
 * Replaces sentry.client.config.ts (Turbopack / instrumentation migration).
 * @see https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup
 */

import * as Sentry from "@sentry/nextjs";

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});

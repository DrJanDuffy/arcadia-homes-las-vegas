"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import { siteConfig, agentInfo } from "@/lib/site-config";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-slate-50">
          <h1 className="text-2xl font-bold text-slate-800 mb-2">
            Something went wrong
          </h1>
          <p className="text-slate-600 mb-6 text-center max-w-md">
            We’ve been notified. If you need help with Arcadia or Summerlin West
            real estate, we’re here.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
          >
            Try again
          </button>
          <p className="mt-8 text-sm text-slate-500">
            {siteConfig.name} · {agentInfo.phoneFormatted}
          </p>
        </div>
      </body>
    </html>
  );
}

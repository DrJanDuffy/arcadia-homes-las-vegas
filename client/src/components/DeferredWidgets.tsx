import { lazy, Suspense, useEffect, useState } from "react";

const AIChatWidget = lazy(() =>
  import("@/components/chat/AIChatWidget").then((m) => ({ default: m.AIChatWidget }))
);
const CalendlyBadge = lazy(() =>
  import("@/components/calendly/CalendlyBadge").then((m) => ({ default: m.CalendlyBadge }))
);

/**
 * Renders chat and Calendly only after first paint so the main page (nav, content, footer)
 * appears even if these chunks load slowly or fail. Avoids blank page from lazy chunk 404.
 */
export function DeferredWidgets() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <AIChatWidget />
      <CalendlyBadge
        url="https://calendly.com/drjanduffy/showing"
        text="Schedule a showing"
        color="#235d8f"
        textColor="#ffffff"
      />
    </Suspense>
  );
}

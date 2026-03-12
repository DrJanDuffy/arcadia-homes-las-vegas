import { useEffect } from "react";

/**
 * Load RealScout widget script only when a page that uses it is mounted.
 * Reduces unused JS on routes that don't use RealScout (saves ~200 KiB).
 */
const REALSOUT_SCRIPT_URL = "https://em.realscout.com/widgets/realscout-web-components.umd.js";

export function useRealScoutScript() {
  useEffect(() => {
    if (document.querySelector('script[src*="realscout-web-components"]')) return;
    if (customElements.get("realscout-office-listings") || customElements.get("realscout-home-value") || customElements.get("realscout-advanced-search"))
      return;

    const script = document.createElement("script");
    script.src = REALSOUT_SCRIPT_URL;
    script.type = "module";
    script.onerror = () => {
      if (import.meta.env.DEV) console.warn("RealScout script failed to load");
    };
    document.head.appendChild(script);
  }, []);
}

import { useEffect, useRef } from "react";

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

export interface CalendlyWidgetProps {
  url?: string;
  minWidth?: string;
  height?: string;
}

export function CalendlyWidget({
  url = "https://calendly.com/drjanduffy/showing",
  minWidth = "320px",
  height = "700px",
}: CalendlyWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    const link = document.querySelector(`link[href="${CALENDLY_CSS}"]`);
    if (!link) {
      const el = document.createElement("link");
      el.href = CALENDLY_CSS;
      el.rel = "stylesheet";
      document.head.appendChild(el);
    }
    const existing = document.querySelector(`script[src="${CALENDLY_JS}"]`);
    if (existing) {
      scriptLoaded.current = true;
      return;
    }
    const script = document.createElement("script");
    script.src = CALENDLY_JS;
    script.async = true;
    script.onload = () => {
      scriptLoaded.current = true;
    };
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const initWidget = () => {
      if (typeof window === "undefined" || !window.Calendly || !widgetRef.current) return;
      widgetRef.current.innerHTML = "";
      const widgetDiv = document.createElement("div");
      widgetDiv.className = "calendly-inline-widget";
      widgetDiv.setAttribute("data-url", url);
      widgetDiv.style.minWidth = minWidth;
      widgetDiv.style.height = height;
      widgetDiv.style.width = "100%";
      widgetRef.current.appendChild(widgetDiv);
      window.Calendly.initInlineWidget({ url, parentElement: widgetDiv });
    };

    if (window.Calendly) {
      initWidget();
    } else {
      const t = setInterval(() => {
        if (window.Calendly) {
          clearInterval(t);
          initWidget();
        }
      }, 100);
      const timeout = setTimeout(() => clearInterval(t), 10000);
      return () => {
        clearInterval(t);
        clearTimeout(timeout);
      };
    }
  }, [url, minWidth, height]);

  return (
    <div
      ref={widgetRef}
      style={{ minWidth, height, width: "100%" }}
      aria-label="Schedule a showing with Dr. Jan Duffy"
    />
  );
}

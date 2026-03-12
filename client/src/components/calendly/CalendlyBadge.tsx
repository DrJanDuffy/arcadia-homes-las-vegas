import { useEffect, useRef } from "react";

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

export interface CalendlyBadgeProps {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
}

export function CalendlyBadge({
  url = "https://calendly.com/drjanduffy/showing",
  text = "Schedule time with me",
  color = "#235d8f",
  textColor = "#ffffff",
  branding = true,
}: CalendlyBadgeProps) {
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current) return;
    const link = document.querySelector(`link[href="${CALENDLY_CSS}"]`);
    if (!link) {
      const el = document.createElement("link");
      el.href = CALENDLY_CSS;
      el.rel = "stylesheet";
      document.head.appendChild(el);
    }
    const existing = document.querySelector(`script[src="${CALENDLY_JS}"]`);
    if (existing) {
      if (window.Calendly) {
        initRef.current = true;
        window.Calendly.initBadgeWidget({ url, text, color, textColor, branding });
      }
      return;
    }
    const script = document.createElement("script");
    script.src = CALENDLY_JS;
    script.async = true;
    script.onload = () => {
      if (window.Calendly && !initRef.current) {
        initRef.current = true;
        window.Calendly.initBadgeWidget({ url, text, color, textColor, branding });
      }
    };
    document.body.appendChild(script);
  }, [url, text, color, textColor, branding]);

  return null;
}

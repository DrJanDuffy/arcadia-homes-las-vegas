import { useEffect, useRef } from "react";

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

export interface CalendlyButtonProps {
  url?: string;
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export function CalendlyButton({
  url = "https://calendly.com/drjanduffy/appointment",
  text = "Schedule time with me",
  className = "inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors",
  children,
}: CalendlyButtonProps) {
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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    }
  };

  return (
    <a href="#" onClick={handleClick} className={className} role="button">
      {children ?? text}
    </a>
  );
}

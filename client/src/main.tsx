import { createRoot } from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import "./index.css";

const root = document.getElementById("root")!;
createRoot(root).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

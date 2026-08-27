import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { ServicePage } from "../src/components/servicepage.jsx";
import "../src/index.css";

// hydrateRoot, not createRoot: scripts/prerender.mjs has already written this
// page's markup into #root, and createRoot would throw it away and repaint.
hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <ServicePage slug="wallpaper" />
  </StrictMode>,
);

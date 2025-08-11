"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Inject brutalist cursor styles using design tokens
    const style = document.createElement("style");
    style.textContent = `
      * { cursor: none !important; }
      :root { --cursor-scale: 1; }
      body::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 16px;
        height: 16px;
        background: var(--color-primary);
        border: 3px solid var(--color-black);
        border-radius: 0; /* square */
        box-shadow: 4px 4px 0 rgba(0,0,0,0.9);
        pointer-events: none;
        z-index: 9999;
        transform: translate(var(--mouse-x, 0), var(--mouse-y, 0)) scale(var(--cursor-scale, 1));
        transition: transform 0.12s ease, background 0.2s ease, opacity 0.2s ease;
        mix-blend-mode: normal;
      }
      body.cursor-hidden::after { opacity: 0; }
    `;
    document.head.appendChild(style);

    // Update cursor position (offset by half size + border)
    const updateCursor = (e) => {
      const offset = 11; // 16/2 + 3px border
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX - offset}px`
      );
      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY - offset}px`
      );
    };

    // Hover and active scaling using CSS variable
    const hoverSelectors =
      "a, button, [role='button'], .btn-brutal, .card-brutal";
    let hoverCount = 0;

    const onMouseOver = (e) => {
      if (e.target.closest && e.target.closest(hoverSelectors)) {
        hoverCount += 1;
        document.documentElement.style.setProperty("--cursor-scale", "1.25");
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest && e.target.closest(hoverSelectors)) {
        hoverCount = Math.max(0, hoverCount - 1);
        if (hoverCount === 0) {
          document.documentElement.style.setProperty("--cursor-scale", "1");
        }
      }
    };

    const onMouseDown = () => {
      document.documentElement.style.setProperty("--cursor-scale", "0.9");
    };
    const onMouseUp = () => {
      const current = hoverCount > 0 ? "1.25" : "1";
      document.documentElement.style.setProperty("--cursor-scale", current);
    };

    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseover", onMouseOver, true);
    document.addEventListener("mouseout", onMouseOut, true);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseover", onMouseOver, true);
      document.removeEventListener("mouseout", onMouseOut, true);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.head.removeChild(style);
    };
  }, []);

  return null;
}

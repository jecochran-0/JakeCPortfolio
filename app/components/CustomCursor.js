"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Check if device supports hover
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Add CSS to create custom cursor
    const style = document.createElement("style");
    style.textContent = `
      * {
        cursor: none !important;
      }
      
      body::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        background: #6b7280;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transform: translate(var(--mouse-x, 0), var(--mouse-y, 0));
        transition: transform 0.1s ease-out;
      }
    `;
    document.head.appendChild(style);

    // Update cursor position
    const updateCursor = (e) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX - 10}px`
      );
      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY - 10}px`
      );
    };

    document.addEventListener("mousemove", updateCursor);

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.head.removeChild(style);
    };
  }, []);

  return null;
}

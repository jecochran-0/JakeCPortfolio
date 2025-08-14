"use client";

import { useEffect, useRef } from "react";

export default function PerformanceMonitor() {
  const hasOptimized = useRef(false);

  useEffect(() => {
    // Early return if mobile - don't run any performance monitoring
    const checkMobile = () => {
      return window.innerWidth <= 768;
    };

    if (checkMobile()) {
      return; // Exit early on mobile
    }

    if (hasOptimized.current) return;

    const applyOptimizations = () => {
      // Apply performance optimizations for desktop only
      const style = document.createElement("style");
      style.setAttribute("data-performance-optimization", "true");
      style.textContent = `
        /* Desktop-only performance optimizations */
        @media (min-width: 769px) {
          .glass-card {
            will-change: transform, box-shadow;
            transform: translateZ(0);
          }
          
          .card-brutal {
            will-change: transform, box-shadow;
            transform: translateZ(0);
          }
          
          .btn-brutal {
            will-change: transform, box-shadow;
            transform: translateZ(0);
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Monitor performance metrics (desktop only)
    const monitorPerformance = () => {
      if (typeof window === "undefined") return;

      // Monitor frame rate
      let frameCount = 0;
      let lastTime = performance.now();

      const checkFrameRate = () => {
        frameCount++;
        const currentTime = performance.now();

        if (currentTime - lastTime >= 1000) {
          const fps = Math.round(
            (frameCount * 1000) / (currentTime - lastTime)
          );

          if (fps < 30) {
            console.warn("Low frame rate detected:", fps + " FPS");
            // Apply additional optimizations for low frame rate
            const style = document.createElement("style");
            style.setAttribute("data-performance-optimization", "true");
            style.textContent = `
              * {
                animation: none !important;
                transition: opacity 0.1s ease !important;
              }
            `;
            document.head.appendChild(style);
          }

          frameCount = 0;
          lastTime = currentTime;
        }

        requestAnimationFrame(checkFrameRate);
      };

      requestAnimationFrame(checkFrameRate);
    };

    // Apply optimizations immediately
    applyOptimizations();

    // Start performance monitoring (desktop only)
    monitorPerformance();

    // Re-apply optimizations on resize (desktop only)
    const handleResize = () => {
      if (checkMobile()) return; // Don't run on mobile
      
      // Remove existing optimizations
      const existingStyles = document.querySelectorAll(
        "style[data-performance-optimization]"
      );
      existingStyles.forEach((style) => style.remove());

      // Re-apply optimizations
      applyOptimizations();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      
      // Clean up performance styles
      const existingStyles = document.querySelectorAll(
        "style[data-performance-optimization]"
      );
      existingStyles.forEach((style) => style.remove());
    };
  }, []);

  // Don't render anything - this is a background component
  return null;
}

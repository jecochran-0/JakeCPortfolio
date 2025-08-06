"use client";

import { useEffect, useRef } from "react";
import { performanceUtils } from "../utils/performance";

export default function PerformanceMonitor() {
  const hasOptimized = useRef(false);

  useEffect(() => {
    if (hasOptimized.current) return;
    hasOptimized.current = true;

    // Apply performance optimizations based on device capabilities
    const applyOptimizations = () => {
      const isLowPower = performanceUtils.isLowPowerDevice();
      const prefersReduced = performanceUtils.prefersReducedMotion();
      const animationSettings = performanceUtils.getAnimationSettings();

      // Add CSS variables for performance-based styling
      const style = document.createElement("style");
      style.setAttribute("data-performance-optimization", "true");
      style.textContent = `
        :root {
          --animation-duration: ${animationSettings.duration}s;
          --animation-ease: ${
            Array.isArray(animationSettings.ease)
              ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : animationSettings.ease
          };
          --disable-complex-animations: ${
            animationSettings.disableComplex ? "none" : "auto"
          };
        }

        ${
          animationSettings.disableComplex
            ? `
          .float, .morph, .pulse-glow, .shimmer, .particle,
          .animated-gradient, .animated-gradient-slow {
            animation: none !important;
          }
          
          .card-hover:hover {
            transform: none !important;
            box-shadow: none !important;
          }
        `
            : ""
        }

        ${
          prefersReduced
            ? `
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        `
            : ""
        }

        ${
          isLowPower
            ? `
          * {
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
          }
          
          .hero-video {
            display: none !important;
          }
        `
            : ""
        }
      `;

      document.head.appendChild(style);
    };

    // Monitor performance metrics (simplified)
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

    // Start performance monitoring
    monitorPerformance();

    // Re-apply optimizations on resize
    const handleResize = () => {
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
      // Clean up any added styles
      const existingStyles = document.querySelectorAll(
        "style[data-performance-optimization]"
      );
      existingStyles.forEach((style) => style.remove());
    };
  }, []);

  // This component doesn't render anything
  return null;
}

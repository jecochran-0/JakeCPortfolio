"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

export default function DynamicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMouseInViewport, setIsMouseInViewport] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        window.innerWidth <= 768 ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const updateMousePosition = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });

    // Check if mouse is within viewport boundaries
    const isInViewport =
      e.clientX >= 0 &&
      e.clientX <= window.innerWidth &&
      e.clientY >= 0 &&
      e.clientY <= window.innerHeight;
    setIsMouseInViewport(isInViewport);
  }, []);

  // Brutalist theme variants using CSS variables
  const cursorVariants = useMemo(
    () => ({
      default: {
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        width: 16,
        height: 16,
        backgroundColor: "var(--color-primary)",
        border: "3px solid var(--color-black)",
        borderRadius: 0,
        scale: 1,
        opacity: isMouseInViewport ? 1 : 0,
      },
      hover: {
        x: mousePosition.x - 18,
        y: mousePosition.y - 18,
        width: 36,
        height: 36,
        backgroundColor: "var(--color-primary)",
        border: "3px solid var(--color-black)",
        borderRadius: "50%",
        scale: 1,
        opacity: isMouseInViewport ? 1 : 0,
      },
      click: {
        scale: 0.9,
        opacity: isMouseInViewport ? 1 : 0,
      },
    }),
    [mousePosition.x, mousePosition.y, isMouseInViewport]
  );

  useEffect(() => {
    if (isMobile) return;

    // Comprehensive cursor hiding system
    const hideCursorEverywhere = () => {
      // Add global CSS to hide default cursor on all elements
      const existingStyle = document.getElementById("cursor-hide-styles");
      if (existingStyle) existingStyle.remove();

      const style = document.createElement("style");
      style.id = "cursor-hide-styles";
      style.textContent = `
        *, *::before, *::after {
          cursor: none !important;
        }
        
        html, body {
          cursor: none !important;
        }
        
        a, button, input, textarea, select, video, audio, canvas,
        [role="button"], [tabindex], [onclick], [onmouseover],
        .btn-brutal, .clickable, .hover\\:cursor-pointer,
        *:hover, *:focus, *:active, *:visited {
          cursor: none !important;
        }
        
        /* Specific overrides for common cursor-setting elements */
        iframe, embed, object, applet {
          cursor: none !important;
        }
        
        /* Override any inline cursor styles */
        [style*="cursor"] {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);

      // Force cursor none on document body
      document.body.style.cursor = "none";
      document.documentElement.style.cursor = "none";
    };

    // Mutation observer to handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Force cursor none on new elements
            if (node.style) {
              node.style.cursor = "none";
            }
            // Also handle children
            const children =
              node.querySelectorAll && node.querySelectorAll("*");
            if (children) {
              children.forEach((child) => {
                if (child.style) {
                  child.style.cursor = "none";
                }
              });
            }
          }
        });
      });
    });

    // Periodic cursor check to ensure it stays hidden
    const cursorMonitor = setInterval(() => {
      // Re-apply cursor hiding if needed
      if (document.body.style.cursor !== "none") {
        document.body.style.cursor = "none";
      }
      if (document.documentElement.style.cursor !== "none") {
        document.documentElement.style.cursor = "none";
      }

      // Check all elements and force cursor none if needed
      const elementsWithCursor = document.querySelectorAll(
        '[style*="cursor"]:not([style*="cursor: none"])'
      );
      elementsWithCursor.forEach((el) => {
        el.style.cursor = "none";
      });
    }, 100); // Check every 100ms

    // Initialize cursor hiding
    hideCursorEverywhere();

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    let ticking = false;
    let rafId = null;

    const handleMouseMove = (e) => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          updateMousePosition(e);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Handle mouse entering/leaving the viewport
    const handleMouseEnterViewport = () => {
      setIsMouseInViewport(true);
    };

    const handleMouseLeaveViewport = () => {
      setIsMouseInViewport(false);
      setIsHovering(false);
      setIsClicking(false);
    };

    // Enhanced hover detection
    const handleMouseEnter = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest(".btn-brutal") ||
        target.closest("input[type='button']") ||
        target.closest("input[type='submit']") ||
        target.closest("input[type='reset']") ||
        target.closest("[onclick]") ||
        target.closest(".clickable") ||
        target.closest("video") ||
        target.closest("audio")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Add viewport entry/exit detection
    document.addEventListener("mouseenter", handleMouseEnterViewport, {
      passive: true,
    });
    document.addEventListener("mouseleave", handleMouseLeaveViewport, {
      passive: true,
    });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    window.addEventListener("mouseover", handleMouseEnter, { passive: true });
    window.addEventListener("mouseout", handleMouseLeave, { passive: true });

    return () => {
      // Clean up
      const style = document.getElementById("cursor-hide-styles");
      if (style) style.remove();
      observer.disconnect();
      clearInterval(cursorMonitor);
      document.removeEventListener("mouseenter", handleMouseEnterViewport);
      document.removeEventListener("mouseleave", handleMouseLeaveViewport);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [updateMousePosition, isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor - brutalist square with black shadow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[80]"
        style={{
          willChange:
            "transform, width, height, backgroundColor, border-radius, opacity",
          boxShadow: isHovering
            ? "6px 6px 0 rgba(0,0,0,0.9)"
            : "4px 4px 0 rgba(0,0,0,0.9)",
          transition: "box-shadow 0.2s ease, opacity 0.1s ease",
        }}
        variants={cursorVariants}
        animate={isClicking ? "click" : isHovering ? "hover" : "default"}
        transition={{ type: "spring", mass: 0.3, stiffness: 350, damping: 20 }}
      />

      {/* Click ripple effect - orange and square */}
      {isClicking && isMouseInViewport && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[78]"
          initial={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            width: 32,
            height: 32,
            scale: 0,
            opacity: 1,
            backgroundColor: "rgba(255,107,53,0.25)",
            border: "2px solid var(--color-black)",
            borderRadius: isHovering ? "50%" : 0,
          }}
          animate={{ scale: 1.6, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
        />
      )}
    </>
  );
}

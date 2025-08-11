"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

export default function DynamicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
      },
      click: {
        scale: 0.9,
      },
    }),
    [mousePosition.x, mousePosition.y]
  );

  useEffect(() => {
    if (isMobile) return;

    // Add global CSS to hide default cursor on all clickable elements
    const style = document.createElement("style");
    style.textContent = `
      a, button, [role="button"], .btn-brutal,
      input[type="button"], input[type="submit"], input[type="reset"],
      select, [onclick], .clickable {
        cursor: none !important;
      }
      
      a *, button *, [role="button"] *, .btn-brutal * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

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
        target.closest(".clickable")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    window.addEventListener("mouseover", handleMouseEnter, { passive: true });
    window.addEventListener("mouseout", handleMouseLeave, { passive: true });

    return () => {
      // Clean up the injected style
      document.head.removeChild(style);
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
            "transform, width, height, backgroundColor, border-radius",
          boxShadow: isHovering
            ? "6px 6px 0 rgba(0,0,0,0.9)"
            : "4px 4px 0 rgba(0,0,0,0.9)",
          transition: "box-shadow 0.2s ease",
        }}
        variants={cursorVariants}
        animate={isClicking ? "click" : isHovering ? "hover" : "default"}
        transition={{ type: "spring", mass: 0.3, stiffness: 350, damping: 20 }}
      />

      {/* Click ripple effect - orange and square */}
      {isClicking && (
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

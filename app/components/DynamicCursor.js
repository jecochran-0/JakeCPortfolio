"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

export default function DynamicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
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

  // Optimized mouse position update with RAF throttling
  const updateMousePosition = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  // Memoized cursor variants for better performance
  const cursorVariants = useMemo(
    () => ({
      default: {
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        width: 16,
        height: 16,
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        border: "2px solid rgba(59, 130, 246, 0.5)",
        scale: 1,
      },
      hover: {
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        width: 32,
        height: 32,
        backgroundColor: "rgba(124, 58, 237, 0.2)",
        border: "2px solid rgba(124, 58, 237, 0.6)",
        scale: 1,
      },
      click: {
        scale: 0.8,
      },
    }),
    [mousePosition.x, mousePosition.y]
  );

  useEffect(() => {
    // Don't set up mouse events on mobile
    if (isMobile) return;

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

    // Optimized hover detection with event delegation
    const handleMouseEnter = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest('[data-cursor="hover"]')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Use passive listeners for better performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    window.addEventListener("mouseover", handleMouseEnter, { passive: true });
    window.addEventListener("mouseout", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [updateMousePosition, isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[80] rounded-full mix-blend-difference"
        variants={cursorVariants}
        animate={isClicking ? "click" : isHovering ? "hover" : "default"}
        transition={{
          type: "spring",
          mass: 0.3,
          stiffness: 300,
          damping: 25,
        }}
        style={{
          willChange: "transform", // Optimize for animations
        }}
      />

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[78] rounded-full bg-blue-500/20"
          initial={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            width: 24,
            height: 24,
            scale: 0,
            opacity: 1,
          }}
          animate={{
            scale: 1.5,
            opacity: 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          style={{
            willChange: "transform, opacity", // Optimize for animations
          }}
        />
      )}
    </>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function DynamicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Throttled mouse position update
  const updateMousePosition = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateMousePosition(e);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Track navigation elements
    const handleMouseEnter = (e) => {
      if (
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [updateMousePosition]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[80] rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          width: isHovering ? 32 : 16,
          height: isHovering ? 32 : 16,
          backgroundColor: isHovering
            ? "rgba(124, 58, 237, 0.2)"
            : "rgba(59, 130, 246, 0.3)",
          border: isHovering
            ? "2px solid rgba(124, 58, 237, 0.6)"
            : "2px solid rgba(59, 130, 246, 0.5)",
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.3,
          stiffness: 300,
          damping: 25,
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
        />
      )}
    </>
  );
}

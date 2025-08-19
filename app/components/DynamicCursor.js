"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function DynamicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Mark as mounted to prevent SSR issues
    setIsMounted(true);

    // Early return if mobile - don't run any cursor logic
    const checkMobile = () => {
      if (typeof window === "undefined") return;
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) return; // Exit early on mobile
    };

    checkMobile();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMobile, { passive: true });
    }

    // Don't proceed with cursor setup on mobile
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      return () => {
        if (typeof window !== "undefined") {
          window.removeEventListener("resize", checkMobile);
        }
      };
    }

    let ticking = false;

    const handleMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateMousePosition(e);
          updateHoverState(e);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Ensure hover state resets when leaving the document
    const handleMouseLeave = () => {
      if (isHovering) {
        setIsHovering(false);
      }
    };

    // Simple hover detection - check if current element is clickable
    const updateHoverState = (e) => {
      const target = e.target;
      const isClickable =
        target.closest(
          'button, a, [role="button"], .cursor-pointer, [class*="btn"], [class*="card-brutal"]'
        ) !== null;

      // Simple state update
      setIsHovering(isClickable);
    };

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    // Add event listeners
    if (typeof document !== "undefined") {
      document.addEventListener("mousemove", handleMouseMove, {
        passive: true,
      });
      document.addEventListener("mouseleave", handleMouseLeave, {
        passive: true,
      });
    }

    return () => {
      // Cleanup
      if (typeof document !== "undefined") {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkMobile);
      }
    };
  }, []);

  // Don't render anything on mobile or during SSR
  if (isMobile || !isMounted) {
    return null;
  }

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        willChange: "transform",
        transform: "translateZ(0)",
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.15,
        ease: "easeOut",
      }}
    >
      {/* Minimal brutalist cursor */}
      <motion.div
        className="w-4 h-4 border-2 border-black"
        style={{
          backgroundColor: isHovering ? "#ec4899" : "#fb923c", // pink-500 when hovering, orange-400 normally
          boxShadow: isHovering
            ? "3px 3px 0px rgba(0, 0, 0, 0.9)"
            : "2px 2px 0px rgba(0, 0, 0, 0.9)",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 15 : 0, // tilt 15 degrees when hovering
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
}

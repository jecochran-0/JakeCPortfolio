"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function DynamicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
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

    // Enhanced hover detection - activate on clickable elements and homepage columns
    const updateHoverState = (e) => {
      const target = e.target;

      // Check for actual clickable elements that navigate somewhere
      const clickableElement = target.closest(
        'button, a[href], [role="button"], .cursor-pointer, [class*="btn-brutal"], [class*="btn-card"], .nav-item-hover, [class*="w-1/4"]'
      );

      const isClickable = clickableElement !== null;

      // Additional check: ensure it's not just a decorative element
      const isNavigationElement =
        target.closest(
          "a[href], button, [role='button'], .nav-item-hover, [class*='w-1/4']"
        ) !== null;

      // Only activate cursor on actual navigation elements
      setIsHovering(isClickable && isNavigationElement);

      // Check background color - look for sections with dark backgrounds
      const section = target.closest("section");
      if (section) {
        const styles = window.getComputedStyle(section);
        const bgColor = styles.backgroundColor;

        // Check if background is dark (black or very dark)
        // Also check for class-based dark backgrounds
        const hasBlackBg =
          section.classList.contains("bg-black") ||
          section.classList.contains("bg-gray-800") ||
          section.classList.contains("bg-gray-900") ||
          bgColor === "rgb(0, 0, 0)" ||
          bgColor === "rgba(0, 0, 0, 1)";

        setIsDarkBackground(hasBlackBg);
      }
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
  }, [isHovering]);

  // Don't render anything on mobile or during SSR
  if (isMobile || !isMounted) {
    return null;
  }

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: mousePosition.x - 12, // Center the 24px circle (w-6 h-6)
        y: mousePosition.y - 12,
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
      {/* Dynamic colored cursor based on background */}
      <motion.div
        className={`w-6 h-6 rounded-full border-2 ${
          isDarkBackground ? "border-white" : "border-black"
        }`}
        style={{
          backgroundColor: "transparent",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderWidth: isHovering ? "3px" : "2px",
        }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </motion.div>
  );
}

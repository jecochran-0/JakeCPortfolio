"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function DynamicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const cursorRef = useRef(null);
  const observerRef = useRef(null);
  const rafIdRef = useRef(null);

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

    const hideCursorEverywhere = () => {
      if (typeof document === "undefined") return;
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

    // Optimized cursor monitoring - only check when needed
    let cursorCheckTimeout = null;
    const checkCursorVisibility = () => {
      if (typeof document === "undefined") return;
      if (cursorCheckTimeout) clearTimeout(cursorCheckTimeout);
      cursorCheckTimeout = setTimeout(() => {
        // Only check if cursor is visible
        if (document.body.style.cursor !== "none") {
          document.body.style.cursor = "none";
        }
        if (document.documentElement.style.cursor !== "none") {
          document.documentElement.style.cursor = "none";
        }
      }, 1000); // Check every 1 second instead of 100ms
    };

    // Initial cursor check
    checkCursorVisibility();

    // Initialize cursor hiding
    hideCursorEverywhere();

    // Start observing
    if (typeof document !== "undefined") {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["style", "class"],
      });
    }

    let ticking = false;

    const handleMouseMove = (e) => {
      if (!ticking) {
        rafIdRef.current = requestAnimationFrame(() => {
          updateMousePosition(e);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    // Add event listeners
    if (typeof document !== "undefined") {
      document.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.addEventListener("mousedown", handleMouseDown, { passive: true });
      document.addEventListener("mouseup", handleMouseUp, { passive: true });
    }

    // Store references for cleanup
    observerRef.current = observer;

    return () => {
      // Cleanup
      if (typeof document !== "undefined") {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
      }
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkMobile);
      }
      
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (cursorCheckTimeout) {
        clearTimeout(cursorCheckTimeout);
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
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        willChange: "transform",
        transform: "translateZ(0)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.1,
        ease: "easeOut",
      }}
    >
      {/* Cursor dot */}
      <div className="w-full h-full bg-white rounded-full shadow-lg" />
      
      {/* Click animation */}
      {isClicking && (
        <motion.div
          className="absolute inset-0 bg-white rounded-full"
          initial={{ scale: 1.5, opacity: 0.8 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      )}
    </motion.div>
  );
}

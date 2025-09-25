"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function SmoothPageTransition({ children, pathname }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();
  const timeoutRef = useRef(null);

  // Handle navigation with transition
  const handleNavigation = (href) => {
    if (href === pathname) return; // Don't transition to same page

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Start transition immediately
    setIsTransitioning(true);

    // Navigate only after curtain fully covers the screen
    timeoutRef.current = setTimeout(() => {
      router.push(href);
    }, 800); // Wait for full screen coverage before navigating
  };

  // Reset transition state when pathname changes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1200); // Total transition duration (800ms coverage + 400ms reveal)

      return () => clearTimeout(timer);
    }
  }, [pathname, isTransitioning]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Page Transition Overlay */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="page-transition"
            initial={{
              y: "-100%",
            }}
            animate={{
              y: "0%",
              transition: {
                duration: 0.8,
                ease: [0.4, 0.0, 0.2, 1], // Cubic easing for dramatic effect
              },
            }}
            exit={{
              y: "100%",
              transition: {
                duration: 0.4,
                ease: [0.4, 0.0, 0.2, 1], // Cubic easing for smooth exit
              },
            }}
            className="fixed inset-0 z-[9999] pointer-events-none page-transition-overlay"
            style={{
              backgroundColor: "#CD535A",
              borderRadius: "24px",
            }}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Handler */}
      <div
        onClick={(e) => {
          const link = e.target.closest("a[href]");
          if (link) {
            const href = link.getAttribute("href");
            // Only handle internal navigation
            if (href && href.startsWith("/") && !href.startsWith("#")) {
              e.preventDefault();
              handleNavigation(href);
            }
          }
        }}
        className="contents"
      >
        {children}
      </div>
    </>
  );
}

"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Memoized motion variants for better performance - must be called before any conditionals
  const containerVariants = useMemo(
    () => ({
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    }),
    []
  );

  // Calculate scroll percentage safely - must be called before any conditionals
  const scrollPercentage = useMemo(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return 0;

    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return 0;

    return Math.min((scrollTop / docHeight) * 100, 100);
  }, [scrollY]);

  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      setScrollY(window.scrollY);
    }
  }, []);

  useEffect(() => {
    // Mark as mounted to prevent SSR issues
    setIsMounted(true);

    // Early return if mobile - don't run any scroll monitoring
    const checkMobile = () => {
      if (typeof window === "undefined") return;
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) return; // Exit early on mobile
    };

    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });

    // Don't proceed with scroll setup on mobile
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      return () => window.removeEventListener("resize", checkMobile);
    }

    // Only run on client side
    if (typeof window === "undefined") return;

    let ticking = false;
    let rafId = null;

    const throttledScrollHandler = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          handleScroll();
          calculateScrollPercentage();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Calculate initial scroll percentage
    calculateScrollPercentage();

    // Add event listeners with passive option for better performance
    window.addEventListener("scroll", throttledScrollHandler, {
      passive: true,
    });
    window.addEventListener("resize", calculateScrollPercentage, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      window.removeEventListener("resize", calculateScrollPercentage);
      window.removeEventListener("resize", checkMobile);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [handleScroll]);

  // Don't render anything on mobile or during SSR
  if (isMobile || !isMounted) {
    return null;
  }

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 pointer-events-none"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {/* Scroll Progress Circle */}
      <div className="relative w-16 h-16">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="2"
            strokeDasharray="100"
            strokeDashoffset={100 - scrollPercentage}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.1s ease-out",
              willChange: "stroke-dashoffset",
              transform: "translateZ(0)",
            }}
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs text-white/80 font-medium">
            {Math.round(scrollPercentage)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Helper function to calculate scroll percentage
function calculateScrollPercentage() {
  // This function is only called on desktop, so we can safely access window
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (docHeight <= 0) return;

  const scrollPercent = (scrollTop / docHeight) * 100;

  // Update CSS custom property for potential use elsewhere
  document.documentElement.style.setProperty(
    "--scroll-percentage",
    `${scrollPercent}%`
  );
}

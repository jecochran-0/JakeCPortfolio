"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Memoized scroll percentage calculation
  const calculateScrollPercentage = useCallback(() => {
    if (typeof document !== "undefined" && typeof window !== "undefined") {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const maxScroll = scrollHeight - clientHeight;

      if (maxScroll > 0) {
        const percentage = Math.min((scrollY / maxScroll) * 100, 100);
        setScrollPercentage(percentage);
      } else {
        setScrollPercentage(0);
      }
    }
  }, [scrollY]);

  // Optimized scroll handler with RAF throttling
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
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
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [handleScroll, calculateScrollPercentage]);

  // Memoized motion variants for better performance
  const containerVariants = useMemo(
    () => ({
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    }),
    []
  );

  return (
    <motion.div
      className={`fixed z-50 ${
        isMobile ? "bottom-4 right-4" : "bottom-8 right-8"
      }`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5, delay: 0.5 }}
      style={{
        willChange: "transform, opacity", // Optimize for animations
      }}
    >
      <div className={`relative ${isMobile ? "w-12 h-12" : "w-16 h-16"}`}>
        {/* Circular progress indicator */}
        <svg
          className={`transform -rotate-90 ${
            isMobile ? "w-12 h-12" : "w-16 h-16"
          }`}
          viewBox="0 0 36 36"
        >
          <path
            className="text-gray-200"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-gray-400 transition-all duration-300 ease-out"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={`${scrollPercentage}, 100`}
            fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            style={{
              willChange: "stroke-dasharray", // Optimize for animations
            }}
          />
        </svg>

        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`font-bold text-gray-500 ${
              isMobile ? "text-xs" : "text-xs"
            }`}
          >
            {Math.round(scrollPercentage)}%
          </span>
        </div>
      </div>

      {/* Scroll hint - only show on desktop */}
      {!isMobile && (
        <div className="mt-2 text-center">
          <div className="text-xs text-gray-500 mb-1">Scroll</div>
          <div className="w-0.5 h-4 bg-gray-300 mx-auto animate-pulse"></div>
        </div>
      )}
    </motion.div>
  );
}

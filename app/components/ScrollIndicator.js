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
    >
      <div className={`relative ${isMobile ? "w-12 h-12" : "w-16 h-16"}`}>
        {/* Brutalist background */}
        <div className="absolute inset-0 bg-white border-4 border-black rounded-full" />

        {/* Circular progress indicator */}
        <svg
          className={`transform -rotate-90 ${
            isMobile ? "w-12 h-12" : "w-16 h-16"
          } relative z-10`}
          viewBox="0 0 36 36"
        >
          <path
            className="text-gray-300"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-primary transition-all duration-300 ease-out"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${scrollPercentage}, 100`}
            fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>

        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <span
            className={`font-bold text-black ${
              isMobile ? "text-xs" : "text-sm"
            }`}
          >
            {Math.round(scrollPercentage)}%
          </span>
        </div>
      </div>

      {/* Scroll hint - only show on desktop */}
      {!isMobile && (
        <motion.div
          className="mt-3 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="text-xs text-black/70 mb-1 font-bold uppercase tracking-wide">
            Scroll
          </div>
          <motion.div
            className="w-1 h-6 bg-black mx-auto"
            animate={{
              scaleY: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}

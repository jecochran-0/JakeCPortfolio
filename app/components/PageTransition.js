"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Check if in browser environment
const isBrowser = typeof window !== "undefined";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);

  // Check device capabilities
  useEffect(() => {
    const checkDeviceCapabilities = () => {
      const width = window.innerWidth;
      const isMobileDevice = width <= 768;
      const isLowPowerDevice =
        width <= 480 ||
        navigator.hardwareConcurrency <= 4 ||
        /Android|iPhone|iPad|iPod/.test(navigator.userAgent);

      setIsMobile(isMobileDevice);
      setIsLowPower(isLowPowerDevice);
    };

    checkDeviceCapabilities();
    window.addEventListener("resize", checkDeviceCapabilities);

    return () => window.removeEventListener("resize", checkDeviceCapabilities);
  }, []);

  // Smooth page transition handling
  useEffect(() => {
    if (!isBrowser) return;

    setIsTransitioning(true);

    // Optimized timing based on device capabilities
    const transitionDuration = isLowPower ? 300 : isMobile ? 250 : 200;

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, transitionDuration);

    return () => clearTimeout(timer);
  }, [pathname, isMobile, isLowPower]);

  // Optimized animation variants based on research
  const pageVariants = useMemo(
    () => ({
      initial: {
        opacity: 0,
        y: 0, // No vertical movement to prevent layout shift
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: isLowPower ? 0.4 : isMobile ? 0.3 : 0.25,
          ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for natural feel
          staggerChildren: 0.05,
          delayChildren: 0.1,
        },
      },
      exit: {
        opacity: 0,
        y: 0,
        transition: {
          duration: isLowPower ? 0.2 : isMobile ? 0.15 : 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    }),
    [isMobile, isLowPower]
  );

  const overlayVariants = useMemo(
    () => ({
      initial: {
        opacity: 0,
        scale: 1.05,
      },
      animate: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: isLowPower ? 0.3 : isMobile ? 0.25 : 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
      exit: {
        opacity: 0,
        scale: 0.95,
        transition: {
          duration: isLowPower ? 0.2 : isMobile ? 0.15 : 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    }),
    [isMobile, isLowPower]
  );

  return (
    <>
      {/* Smooth page content transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="min-h-screen"
          style={{
            willChange: "opacity, transform",
            transform: "translateZ(0)", // Hardware acceleration
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Subtle transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-white/60 backdrop-blur-sm z-40 pointer-events-none"
            style={{
              willChange: "opacity, transform",
              transform: "translateZ(0)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname);

  // Page-specific themes
  const pageThemes = {
    "/": {
      primary: "#000000",
      secondary: "#3B82F6",
      accent: "#8B5CF6",
      pattern:
        "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
    },
    "/ux-ui": {
      primary: "#7C3AED",
      secondary: "#A855F7",
      accent: "#EC4899",
      pattern:
        "radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)",
    },
    "/dev": {
      primary: "#059669",
      secondary: "#10B981",
      accent: "#3B82F6",
      pattern:
        "radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.1) 0%, transparent 50%)",
    },
    "/about": {
      primary: "#DC2626",
      secondary: "#EF4444",
      accent: "#F59E0B",
      pattern:
        "radial-gradient(circle at 20% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)",
    },
  };

  const currentTheme = pageThemes[pathname] || pageThemes["/"];

  useEffect(() => {
    if (pathname !== currentPath) {
      setIsTransitioning(true);
      setCurrentPath(pathname);

      // Simulate transition delay
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  }, [pathname, currentPath]);

  return (
    <>
      {/* Page transition overlay */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="transition-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
            }}
          >
            {/* Loading animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content with entrance animation */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.3,
          delay: isTransitioning ? 0.15 : 0,
          ease: "easeOut",
        }}
        className="relative"
      >
        {/* Subtle background pattern */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: currentTheme.pattern,
            backgroundSize: "800px 800px",
            opacity: 0.2,
          }}
        />

        {children}
      </motion.div>
    </>
  );
}

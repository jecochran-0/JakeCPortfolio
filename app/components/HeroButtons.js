"use client";

import { motion } from "framer-motion";
import { memo, useMemo, useCallback } from "react";

export default memo(function HeroButtons() {
  // Memoized animation variants for performance
  const animationVariants = useMemo(
    () => ({
      button: {
        whileHover: {
          scale: 1.03, // Subtle scale for premium feel
          y: -6, // Enhanced upward float
          transition: {
            type: "spring",
            stiffness: 300, // Slower, more elegant
            damping: 20, // More bounce for premium feel
            duration: 0.2, // Fast in
          },
        },
        whileTap: {
          scale: 0.97, // Subtle scale
          y: 0,
          transition: {
            type: "spring",
            stiffness: 800, // Quick response
            damping: 50, // No bounce on tap
            duration: 0.1, // Very fast
          },
        },
        transition: {
          type: "spring",
          stiffness: 300, // Slower, more elegant
          damping: 20, // More bounce for premium feel
          duration: 0.4, // Slower out for premium feel
        },
      },
    }),
    []
  );

  // Optimized navigation handlers
  const handleViewWork = useCallback(() => {
    window.location.href = "/ux-ui";
  }, []);

  const handleGetInTouch = useCallback(() => {
    window.open("mailto:jake.e.cochran@gmail.com", "_blank");
  }, []);

  return (
    <div
      className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 xl:gap-8 justify-center lg:justify-start items-center hero-buttons w-full max-w-md sm:max-w-none mx-auto lg:mx-0"
      style={{
        willChange: "contents",
        transform: "translateZ(0)",
      }}
    >
      <motion.button
        className="btn-brutal btn-brutal-interactive w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 min-h-[48px] font-bold"
        {...animationVariants.button}
        onClick={handleViewWork}
        style={{
          willChange: "transform, box-shadow",
          transform: "translateZ(0)",
          boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.85)",
          transition: "box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
        onHoverStart={(e) => {
          e.target.style.boxShadow = "12px 12px 0px rgba(0, 0, 0, 0.9)";
        }}
        onHoverEnd={(e) => {
          e.target.style.boxShadow = "8px 8px 0px rgba(0, 0, 0, 0.85)";
        }}
      >
        View My Work
      </motion.button>

      <motion.button
        className="btn-brutal btn-brutal-interactive w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 min-h-[48px] font-bold"
        style={{
          background: "var(--color-white)",
          color: "var(--color-black)",
          willChange: "transform, box-shadow",
          transform: "translateZ(0)",
          boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.85)",
          transition: "box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
        {...animationVariants.button}
        onClick={handleGetInTouch}
        onHoverStart={(e) => {
          e.target.style.boxShadow = "12px 12px 0px rgba(0, 0, 0, 0.9)";
        }}
        onHoverEnd={(e) => {
          e.target.style.boxShadow = "8px 8px 0px rgba(0, 0, 0, 0.85)";
        }}
      >
        Get In Touch
      </motion.button>
    </div>
  );
});

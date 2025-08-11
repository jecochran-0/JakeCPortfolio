"use client";

import { motion } from "framer-motion";
import { memo, useMemo, useCallback } from "react";

export default memo(function HeroButtons() {
  // Memoized animation variants for performance
  const animationVariants = useMemo(
    () => ({
      button: {
        whileHover: {
          scale: 1.03, // Reduced scale for better performance
          y: -3, // Reduced movement
        },
        whileTap: {
          scale: 0.97, // Reduced scale
          y: 0,
        },
        transition: {
          type: "spring",
          stiffness: 500, // Higher for faster response
          damping: 30, // Higher for less bounce
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
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        View My Work
      </motion.button>

      <motion.button
        className="btn-brutal btn-brutal-interactive w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 min-h-[48px] font-bold"
        style={{
          background: "var(--color-white)",
          color: "var(--color-black)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        {...animationVariants.button}
        onClick={handleGetInTouch}
      >
        Get In Touch
      </motion.button>
    </div>
  );
});

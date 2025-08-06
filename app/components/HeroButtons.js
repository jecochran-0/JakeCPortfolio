"use client";

import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <>
      <motion.button
        className="btn-brutal btn-brutal-interactive text-sm sm:text-base lg:text-lg px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4"
        whileHover={{
          scale: 1.05,
          y: -4,
        }}
        whileTap={{
          scale: 0.95,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        onClick={() => (window.location.href = "/ux-ui")}
      >
        View My Work
      </motion.button>

      <motion.button
        className="btn-brutal btn-brutal-interactive text-sm sm:text-base lg:text-lg px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4"
        style={{
          background: "var(--color-white)",
          color: "var(--color-black)",
        }}
        whileHover={{
          scale: 1.05,
          y: -4,
        }}
        whileTap={{
          scale: 0.95,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        onClick={() => window.open("mailto:jake.e.cochran@gmail.com", "_blank")}
      >
        Get In Touch
      </motion.button>
    </>
  );
}

"use client";

import { useDeviceOrientation } from "../hooks/useDeviceOrientation";
import { motion } from "framer-motion";

const MobileParallaxBackground = ({ children }) => {
  const { orientation, isSupported, isActive, isMobile } =
    useDeviceOrientation();

  // Don't render on desktop or if not supported
  if (!isMobile || !isSupported) {
    return <>{children}</>;
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Parallax Background Layers */}
      {isActive && (
        <>
          {/* Layer 1: Far Background - Subtle Movement */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(circle at 30% 20%, rgba(251, 146, 60, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(78, 205, 196, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(69, 183, 209, 0.05) 0%, transparent 50%)
              `,
              willChange: "transform",
              transform: "translateZ(0)",
            }}
            animate={{
              x: orientation.x * 20, // 0.1x movement intensity
              y: orientation.y * 20,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              duration: 0.1,
            }}
          />

          {/* Layer 2: Mid Background - Medium Movement */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(45deg, transparent 40%, rgba(0, 0, 0, 0.02) 50%, transparent 60%),
                linear-gradient(-45deg, transparent 30%, rgba(251, 146, 60, 0.03) 50%, transparent 70%)
              `,
              willChange: "transform",
              transform: "translateZ(0)",
            }}
            animate={{
              x: orientation.x * 40, // 0.3x movement intensity
              y: orientation.y * 40,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 25,
              duration: 0.1,
            }}
          />

          {/* Layer 3: Near Background - Pronounced Movement */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(circle at 20% 30%, rgba(0, 0, 0, 0.03) 0%, transparent 30%),
                radial-gradient(circle at 80% 70%, rgba(251, 146, 60, 0.04) 0%, transparent 30%),
                radial-gradient(circle at 60% 40%, rgba(78, 205, 196, 0.03) 0%, transparent 25%)
              `,
              willChange: "transform",
              transform: "translateZ(0)",
            }}
            animate={{
              x: orientation.x * 60, // 0.6x movement intensity
              y: orientation.y * 60,
            }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 20,
              duration: 0.1,
            }}
          />

          {/* Layer 4: Geometric Shapes - Most Interactive */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              willChange: "transform",
              transform: "translateZ(0)",
            }}
            animate={{
              x: orientation.x * 80, // 0.8x movement intensity
              y: orientation.y * 80,
            }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 15,
              duration: 0.1,
            }}
          >
            {/* Top-left geometric shape */}
            <div className="absolute top-20 left-10 w-16 h-16 border-2 border-orange-400/20 rotate-45" />
            <div className="absolute top-24 left-16 w-8 h-8 bg-orange-400/10 border border-orange-400/30" />

            {/* Top-right geometric shape */}
            <div className="absolute top-16 right-16 w-12 h-12 border-2 border-cyan-400/20 -rotate-12" />
            <div className="absolute top-20 right-20 w-6 h-6 bg-cyan-400/10 border border-cyan-400/30" />

            {/* Bottom-left geometric shape */}
            <div className="absolute bottom-24 left-20 w-10 h-10 border-2 border-blue-400/20 rotate-30" />
            <div className="absolute bottom-28 left-24 w-5 h-5 bg-blue-400/10 border border-blue-400/30" />

            {/* Bottom-right geometric shape */}
            <div className="absolute bottom-20 right-12 w-14 h-14 border-2 border-green-400/20 -rotate-45" />
            <div className="absolute bottom-24 right-16 w-7 h-7 bg-green-400/10 border border-green-400/30" />
          </motion.div>
        </>
      )}

      {/* Content Layer - No Parallax */}
      <div className="relative z-10">{children}</div>

      {/* Performance Monitor (Development Only) */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed top-4 left-4 z-50 bg-black/80 text-white p-2 rounded text-xs font-mono">
          <div>Mobile: {isMobile ? "Yes" : "No"}</div>
          <div>Supported: {isSupported ? "Yes" : "No"}</div>
          <div>Active: {isActive ? "Yes" : "No"}</div>
          <div>X: {orientation.x.toFixed(3)}</div>
          <div>Y: {orientation.y.toFixed(3)}</div>
        </div>
      )}
    </div>
  );
};

export default MobileParallaxBackground;

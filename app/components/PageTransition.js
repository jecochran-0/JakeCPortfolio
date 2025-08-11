"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle initial page load - optimized timing
  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsLoading(false);
      },
      isMobile ? 1500 : 2000
    ); // Slightly longer for personality

    return () => clearTimeout(timer);
  }, [isMobile]);

  // Handle route changes - optimized timing
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(
      () => {
        setIsNavigating(false);
      },
      isMobile ? 1000 : 1400
    ); // Balanced timing

    return () => clearTimeout(timer);
  }, [pathname, isMobile]);

  return (
    <>
      {/* Initial Load Transition - Award-Winning Design */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.3 : isMobile ? 0.8 : 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Animated Background Grid - Subtle personality */}
            {!shouldReduceMotion && (
              <div className="absolute inset-0 opacity-10">
                {[...Array(isMobile ? 6 : 12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute border-l border-orange-500/20"
                    style={{
                      left: `${(i + 1) * (100 / (isMobile ? 6 : 12))}%`,
                      height: "100%",
                    }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.05,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>
            )}

            <motion.div
              className="text-center relative z-10 px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : isMobile ? 0.8 : 1.0,
                delay: shouldReduceMotion ? 0 : isMobile ? 0.3 : 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Neo-Brutalist Logo Container - Enhanced */}
              <motion.div
                className="relative mb-8 sm:mb-12 flex justify-center"
                initial={{ rotateY: -90 }}
                animate={{ rotateY: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : isMobile ? 0.8 : 1.2,
                  delay: shouldReduceMotion ? 0 : isMobile ? 0.4 : 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Main Logo Card Container */}
                <div className="relative">
                  {/* Background Shadow Layers - Improved Alignment */}
                  <motion.div
                    className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-orange-500 rounded-xl sm:rounded-2xl"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: 6, y: 6 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : isMobile ? 0.6 : 0.8,
                      delay: shouldReduceMotion ? 0 : isMobile ? 0.7 : 0.9,
                      ease: "easeOut",
                    }}
                  />
                  <motion.div
                    className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-red-500 rounded-xl sm:rounded-2xl"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: 3, y: 3 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : isMobile ? 0.6 : 0.8,
                      delay: shouldReduceMotion ? 0 : isMobile ? 0.8 : 1.0,
                      ease: "easeOut",
                    }}
                  />

                  {/* Main Logo - Perfect Centering */}
                  <motion.div
                    className="relative bg-white border-4 border-black rounded-xl sm:rounded-2xl w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center shadow-2xl"
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.05,
                            rotate: 2,
                            transition: { duration: 0.2 },
                          }
                    }
                  >
                    <motion.span
                      className="text-black font-black text-xl sm:text-2xl md:text-4xl tracking-wider"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: shouldReduceMotion ? 0 : isMobile ? 0.8 : 1.1,
                        duration: shouldReduceMotion ? 0.3 : 0.5,
                        ease: "backOut",
                      }}
                    >
                      JC
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Staggered Text Animation - Mobile Optimized */}
              <motion.div
                className="space-y-4 sm:space-y-6 max-w-lg mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : isMobile ? 0.6 : 0.8,
                  duration: 0.6,
                }}
              >
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-wide px-2"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 0.8,
                    delay: shouldReduceMotion ? 0 : isMobile ? 0.7 : 0.9,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  JAKE COCHRAN
                </motion.h1>

                <motion.p
                  className="text-orange-400 font-bold text-lg sm:text-xl tracking-wider px-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 0.6,
                    delay: shouldReduceMotion ? 0 : isMobile ? 0.9 : 1.1,
                  }}
                >
                  UX/UI DESIGNER & DEVELOPER
                </motion.p>
              </motion.div>

              {/* Dynamic Loading Progress - Mobile Optimized */}
              {!shouldReduceMotion && (
                <motion.div
                  className="mt-8 sm:mt-12 relative max-w-sm mx-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: isMobile ? 1.0 : 1.2,
                    duration: 0.5,
                  }}
                >
                  {/* Progress Container - Responsive Width */}
                  <div className="relative w-full max-w-64 h-2 bg-gray-800 mx-auto rounded-full overflow-hidden border-2 border-gray-700">
                    <motion.div
                      className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-full"
                      initial={{ width: "0%", x: "-100%" }}
                      animate={{ width: "100%", x: "0%" }}
                      transition={{
                        width: {
                          duration: isMobile ? 1.2 : 1.8,
                          delay: isMobile ? 1.1 : 1.3,
                          ease: "easeOut",
                        },
                        x: {
                          duration: 0.3,
                          delay: isMobile ? 2.3 : 3.1,
                          ease: "easeInOut",
                        },
                      }}
                    />

                    {/* Progress Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300/50 to-transparent rounded-full"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 1.5,
                        delay: isMobile ? 1.1 : 1.3,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Loading Text */}
                  <motion.div
                    className="mt-4 text-white/60 text-sm font-mono tracking-widest"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: isMobile ? 1.4 : 2.0,
                      delay: isMobile ? 1.1 : 1.3,
                      times: [0, 0.1, 0.9, 1],
                    }}
                  >
                    LOADING...
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Navigation Transition - Award-Winning Personality */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            className="fixed inset-0 z-[9998] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.4 }}
          >
            {/* Sliding Panel Transition */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
              initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              exit={{
                clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
              }}
              transition={{
                duration: shouldReduceMotion ? 0.1 : isMobile ? 0.6 : 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />

            {/* Geometric Pattern Overlay - Fixed Alignment */}
            {!shouldReduceMotion && (
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <motion.div
                  className="relative flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.5, rotate: 45 }}
                  transition={{
                    duration: isMobile ? 0.5 : 0.7,
                    delay: 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {/* Central Navigation Icon Container - Fixed Sizing */}
                  <div className="relative">
                    {/* Background Shadow Layer */}
                    <motion.div
                      className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-orange-500 rounded-2xl"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{
                        duration: isMobile ? 0.6 : 0.8,
                        delay: 0.2,
                        ease: "easeOut",
                      }}
                    />

                    {/* Main Icon Card - Perfect Centering */}
                    <motion.div
                      className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white rounded-2xl border-4 border-black shadow-2xl"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: isMobile ? 0.4 : 0.6,
                        delay: 0.4,
                        ease: "backOut",
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <motion.div
                          className="text-black font-black text-xl sm:text-2xl md:text-3xl tracking-wider"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.6,
                          }}
                        >
                          JC
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Orbiting Elements - Fixed Positioning */}
                    {[...Array(isMobile ? 3 : 4)].map((_, i) => {
                      const totalElements = isMobile ? 3 : 4;
                      const angle = (i * 360) / totalElements;
                      const radius = isMobile ? 50 : 60; // Fixed radius in pixels

                      return (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full shadow-lg"
                          style={{
                            top: "50%",
                            left: "50%",
                            transformOrigin: "50% 50%",
                          }}
                          initial={{
                            x:
                              Math.cos((angle * Math.PI) / 180) * radius -
                              (isMobile ? 6 : 8),
                            y:
                              Math.sin((angle * Math.PI) / 180) * radius -
                              (isMobile ? 6 : 8),
                            opacity: 0,
                            scale: 0,
                          }}
                          animate={{
                            x:
                              Math.cos(((angle + 360) * Math.PI) / 180) *
                                radius -
                              (isMobile ? 6 : 8),
                            y:
                              Math.sin(((angle + 360) * Math.PI) / 180) *
                                radius -
                              (isMobile ? 6 : 8),
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            duration: isMobile ? 1.0 : 1.5,
                            delay: 0.3 + i * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      );
                    })}

                    {/* Additional Visual Enhancement - Pulse Ring */}
                    <motion.div
                      className="absolute inset-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 border-2 border-orange-300/30 rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{
                        scale: [0.8, 1.1, 1],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.8,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            )}

            {/* Loading Text - Mobile Optimized Positioning */}
            <motion.div
              className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-8 sm:right-12 md:right-16"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.1 : isMobile ? 0.4 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="bg-black border-4 border-white shadow-[8px_8px_0_rgba(255,255,255,0.9)] px-4 py-2 sm:px-6 sm:py-3">
                <motion.p
                  className="text-white font-black text-xs sm:text-sm tracking-widest uppercase"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  NAVIGATING
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content - Enhanced Entry */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0.1 : isMobile ? 0.6 : 0.8,
          delay: shouldReduceMotion ? 0 : isMobile ? 0.4 : 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="relative"
      >
        {children}
      </motion.div>
    </>
  );
}

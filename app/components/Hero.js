"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const { scrollY } = useScroll();

  // Handle mounting to prevent hydration issues
  useEffect(() => {
    setMounted(true);

    // Mobile detection
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const texts = useMemo(
    () => ["CREATIVE DEVELOPER", "UX DESIGNER", "PROBLEM SOLVER", "INNOVATOR"],
    []
  );

  const backgrounds = useMemo(
    () => [
      "linear-gradient(135deg, #e55a2b 0%, #ff6b35 50%, #ffa726 100%)",
      "linear-gradient(135deg, #3db8a8 0%, #4ecdc4 50%, #81c784 100%)",
      "linear-gradient(135deg, #2e86ab 0%, #45b7d1 50%, #66bb6a 100%)",
      "linear-gradient(135deg, #d84315 0%, #fc5c65 50%, #ef5350 100%)",
    ],
    []
  );

  const fullText = texts[currentText];
  const typingSpeed = 80; // Slightly faster for better performance
  const deletingSpeed = 40; // Slightly faster for better performance

  // Optimized transform values with hardware acceleration
  const backgroundScale = useTransform(
    scrollY,
    [0, 500],
    [1, isMobile ? 1.05 : 1.1]
  ); // Reduced scale for mobile
  const backgroundOpacity = useTransform(
    scrollY,
    [0, 300],
    [1, isMobile ? 0.6 : 0.4]
  ); // Less dramatic change on mobile
  const textY = useTransform(scrollY, [0, 300], [0, isMobile ? -25 : -50]); // Reduced movement on mobile
  const textScale = useTransform(scrollY, [0, 300], [1, isMobile ? 0.95 : 0.9]); // Less dramatic scale on mobile

  // Optimized typing animation with useCallback
  const updateTypingAnimation = useCallback(() => {
    if (!mounted) return;

    if (isTyping) {
      if (displayText.length < fullText.length) {
        animationRef.current = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        animationRef.current = setTimeout(() => {
          setIsTyping(false);
        }, 1500); // Reduced pause time
      }
    } else {
      if (displayText.length > 0) {
        animationRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        animationRef.current = setTimeout(() => {
          setCurrentText((prev) => (prev + 1) % texts.length);
          setIsTyping(true);
        }, 300); // Reduced pause time
      }
    }
  }, [
    displayText,
    isTyping,
    fullText,
    texts.length,
    mounted,
    typingSpeed,
    deletingSpeed,
  ]);

  useEffect(() => {
    updateTypingAnimation();
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [updateTypingAnimation]);

  // Memoized loading state for performance
  const loadingState = useMemo(() => {
    if (!mounted) {
      return (
        <div className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-display mb-4">
                <span
                  className="text-black"
                  style={{
                    WebkitTextFillColor: "black",
                    color: "black",
                    background: "none",
                    WebkitBackgroundClip: "initial",
                    backgroundClip: "initial",
                  }}
                >
                  JAKE
                </span>
                <br />
                <span
                  className="text-black"
                  style={{
                    WebkitTextFillColor: "black",
                    color: "black",
                    background: "none",
                    WebkitBackgroundClip: "initial",
                    backgroundClip: "initial",
                  }}
                >
                  COCHRAN
                </span>
              </h1>
              <div className="card-brutal inline-block px-8 py-4">
                <h2 className="text-title text-black">CREATIVE DEVELOPER</h2>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }, [mounted]);

  if (!mounted) {
    return loadingState;
  }

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Optimized Dynamic Background Layers */}
      <div className="absolute inset-0">
        {/* Base Background with hardware acceleration */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: backgrounds[currentText],
            scale: backgroundScale,
            opacity: backgroundOpacity,
            willChange: "transform, opacity",
            transform: "translateZ(0)", // Force hardware acceleration
          }}
          transition={{
            duration: 1.2, // Slightly faster
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />

        {/* Enhanced Brutalist Pattern Overlay with sophisticated layering */}
        <div className="absolute inset-0 opacity-15 brutalist-pattern-overlay">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(isMobile ? 3 : 6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute ${
                  i % 4 === 0
                    ? "bg-white/25"
                    : i % 4 === 1
                    ? "bg-white/45"
                    : i % 4 === 2
                    ? "bg-white/15"
                    : "bg-white/35"
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 100 + 30}px`,
                  height: `${Math.random() * 100 + 30}px`,
                  transform: `rotate(${Math.random() * 360}deg) translateZ(0)`,
                  willChange: "transform, opacity",
                  zIndex:
                    i % 4 === 0 ? 1 : i % 4 === 1 ? 2 : i % 4 === 2 ? 3 : 4, // Four-layer depth system
                }}
                animate={{
                  rotate: [0, 180, 360], // Full rotation
                  scale: [1, 1.15, 1], // Enhanced scale
                  opacity: [0.2, 0.7, 0.2], // Enhanced opacity range
                  x: [0, Math.random() * 20 - 10, 0], // Add horizontal drift
                  y: [0, Math.random() * 15 - 7.5, 0], // Add vertical drift for organic movement
                }}
                transition={{
                  duration: isMobile
                    ? Math.random() * 6 + 8
                    : Math.random() * 12 + 10, // Faster on mobile
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 3, // Varied delays
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hero Content - Mobile Optimized Layout with Performance */}
      <div className="absolute inset-0 flex items-center justify-center z-10 py-8 sm:py-12 lg:py-16 xl:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-6 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center hero-grid w-full">
            {/* Left Column - Main Content - Grid Aligned */}
            <motion.div
              className="lg:col-span-7 text-center lg:text-left hero-left-column"
              style={{
                y: textY,
                scale: textScale,
                willChange: "transform",
                transform: "translateZ(0)",
              }}
            >
              {/* Main Title block with precise grid alignment */}
              <div className="relative inline-block w-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-16 sm:mb-20 lg:mb-24 xl:mb-28 hero-spacing mt-8 sm:mt-12 lg:mt-16 xl:mt-20"
                >
                  <h1
                    className="hero-name text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[11rem] leading-tight tracking-wide"
                    style={{ letterSpacing: "0.04em" }}
                  >
                    <span
                      className="text-black block sm:inline text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9rem]"
                      style={{
                        WebkitTextFillColor: "black",
                        color: "black",
                        background: "none",
                        WebkitBackgroundClip: "initial",
                        backgroundClip: "initial",
                      }}
                    >
                      JAKE
                    </span>
                    <br className="hidden sm:block" />
                    <span
                      className="text-black block sm:inline"
                      style={{
                        WebkitTextFillColor: "black",
                        color: "black",
                        background: "none",
                        WebkitBackgroundClip: "initial",
                        backgroundClip: "initial",
                      }}
                    >
                      COCHRAN
                    </span>
                  </h1>
                  {/* Accent underline with precise positioning */}
                  <div
                    className="h-2 sm:h-3 bg-orange-500 w-32 sm:w-48 lg:w-64 mt-2 lg:mt-4 shadow-brutal"
                    style={{ boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.9)" }}
                  />
                </motion.div>

                {/* Role card with fixed width and precise alignment */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="hero-spacing md:absolute md:-bottom-8 md:left-0 ml-0"
                >
                  <div
                    className="card-brutal inline-block px-3 sm:px-4 lg:px-6 xl:px-8 py-2 sm:py-2 lg:py-3 xl:py-4 min-w-[280px] sm:min-w-[320px] lg:min-w-[360px]"
                    style={{ boxShadow: "12px 12px 0px rgba(0, 0, 0, 0.9)" }}
                  >
                    <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-title text-black font-black tracking-wide">
                      {displayText}
                      {mounted && <span className="animate-pulse">|</span>}
                    </h2>
                  </div>
                </motion.div>
              </div>

              {/* Description with consistent grid spacing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-20 sm:mb-24 lg:mb-28 xl:mb-32 max-w-2xl hero-spacing mx-auto lg:mx-0 ml-0"
              >
                <div
                  className="glass-card hero-glass-card p-4 sm:p-6 lg:p-8"
                  style={{
                    boxShadow:
                      "0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <p
                    className="text-sm sm:text-base lg:text-lg xl:text-subtitle leading-relaxed"
                    style={{
                      color: "white",
                      textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                      fontWeight: "500",
                    }}
                  >
                    Crafting exceptional digital experiences through innovative
                    design and cutting-edge development. Specializing in
                    user-centered solutions that bridge creativity with
                    functionality.
                  </p>
                </div>
              </motion.div>

              {/* CTA Buttons with consistent grid spacing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-20 sm:mb-24 lg:mb-28 hero-spacing ml-0"
              >
                <HeroButtons />
              </motion.div>
            </motion.div>

            {/* Right Column - Quote Section with precise alignment */}
            <motion.div
              className="lg:col-span-5 hero-right-column relative order-first lg:order-last flex items-center justify-center"
              style={{
                opacity: backgroundOpacity,
                willChange: "opacity",
                transform: "translateZ(0)",
              }}
            >
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] flex items-center justify-center p-4 sm:p-6 lg:p-8 w-full">
                {/* Quote Card with enhanced visual hierarchy */}
                <motion.div
                  className="w-full max-w-lg mx-auto relative z-10 lg:ml-12"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {/* Quote with lighter visual weight */}
                  <blockquote
                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed mb-4 sm:mb-6 hero-quote px-2 sm:px-4 lg:px-6 font-normal italic"
                    style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)" }}
                  >
                    If I had an hour to solve a problem I&apos;d spend 55
                    minutes thinking about the problem and 5 minutes thinking
                    about solutions.
                  </blockquote>

                  <div className="text-right">
                    <cite
                      className="text-xs sm:text-sm text-white/80 font-medium not-italic hero-attribution"
                      style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)" }}
                    >
                      — Albert Einstein
                    </cite>
                  </div>
                </motion.div>

                {/* Enhanced Floating Elements with sophisticated layering */}
                <div className="floating-process-elements absolute inset-0 pointer-events-none hidden lg:block">
                  {[...Array(isMobile ? 4 : 6)].map(
                    (
                      _,
                      i // Increased for better balance
                    ) => (
                      <motion.div
                        key={i}
                        className={`absolute rounded-lg ${
                          i % 4 === 0
                            ? "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-orange-500/8"
                            : i % 4 === 1
                            ? "w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-orange-500/20"
                            : i % 4 === 2
                            ? "w-4 h-4 sm:w-6 sm:h-6 lg:w-10 lg:h-10 bg-orange-500/15"
                            : "w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-orange-500/12"
                        }`}
                        style={{
                          left: `${Math.random() * 80 + 10}%`,
                          top: `${Math.random() * 80 + 10}%`,
                          willChange: "transform, opacity",
                          transform: "translateZ(0)",
                          zIndex: i % 3 === 0 ? 1 : i % 3 === 1 ? 2 : 3, // Three-layer depth system
                        }}
                        animate={{
                          y: [0, -25, 0], // Enhanced movement
                          x: [0, Math.random() * 15 - 7.5, 0], // Enhanced horizontal drift
                          rotate: [0, 180, 360], // Full rotation
                          scale: [1, 1.1, 1], // Enhanced scale
                          opacity: [0.1, 0.3, 0.1], // Organic opacity variation
                        }}
                        transition={{
                          duration: isMobile
                            ? Math.random() * 3 + 4
                            : Math.random() * 6 + 8, // Faster on mobile
                          repeat: Infinity,
                          delay: Math.random() * 2, // Varied delays for organic feel
                          ease: "easeInOut",
                        }}
                      />
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements with sophisticated layering and motion */}
      <div className="absolute inset-0 pointer-events-none floating-elements">
        {[...Array(isMobile ? 3 : 5)].map(
          (
            _,
            i // Increased for better balance
          ) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 4 === 0
                  ? "w-4 h-4 sm:w-5 sm:h-5 bg-white/50"
                  : i % 4 === 1
                  ? "w-2 h-2 sm:w-3 sm:h-3 bg-white/70"
                  : i % 4 === 2
                  ? "w-5 h-5 sm:w-6 sm:h-6 bg-white/30"
                  : "w-3 h-3 sm:w-4 sm:h-4 bg-white/40"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                willChange: "transform, opacity",
                transform: "translateZ(0)",
                zIndex: i % 3 === 0 ? 1 : i % 3 === 1 ? 2 : 3, // Three-layer depth system
              }}
              animate={{
                y: [0, -30, 0], // Enhanced movement
                x: [0, Math.random() * 20 - 10, 0], // Enhanced horizontal drift
                opacity: [0.2, 0.9, 0.2], // Enhanced opacity range
                scale: [1, 1.4, 1], // Enhanced scale
                rotate: [0, 180, 360], // Add rotation for more organic movement
              }}
              transition={{
                duration: isMobile
                  ? Math.random() * 2 + 2
                  : Math.random() * 5 + 4, // Faster on mobile
                repeat: Infinity,
                delay: Math.random() * 1.5, // Varied delays
                ease: "easeInOut", // Smoother transitions
              }}
            />
          )
        )}
      </div>

      {/* Optimized Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }} // Faster
        className="absolute bottom-4 lg:bottom-6 xl:bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator"
        style={{
          willChange: "transform",
          transform: "translateZ(0) translateX(-50%)",
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-caption text-white/60 mb-2 lg:mb-3">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }} // Reduced movement
            transition={{ duration: 1.5, repeat: Infinity }} // Faster
            className="w-6 h-8 sm:w-7 sm:h-10 lg:w-8 lg:h-12 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }} // Reduced movement
              transition={{ duration: 1.5, repeat: Infinity }} // Faster
              className="w-1 h-2 sm:h-3 lg:h-4 bg-white/60 rounded-full mt-2 lg:mt-3"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

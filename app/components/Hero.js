"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const { scrollY } = useScroll();

  // Handle mounting to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const texts = useMemo(
    () => ["CREATIVE DEVELOPER", "UX DESIGNER", "PROBLEM SOLVER", "INNOVATOR"],
    []
  );

  const backgrounds = useMemo(
    () => [
      "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
      "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)",
      "linear-gradient(135deg, #45b7d1 0%, #96c93d 100%)",
      "linear-gradient(135deg, #fc5c65 0%, #eb4b4b 100%)",
    ],
    []
  );

  const fullText = texts[currentText];
  const typingSpeed = 80; // Slightly faster for better performance
  const deletingSpeed = 40; // Slightly faster for better performance

  // Optimized transform values with hardware acceleration
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 1.1]); // Reduced scale for performance
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, 0.4]); // Less dramatic change
  const textY = useTransform(scrollY, [0, 300], [0, -50]); // Reduced movement
  const textScale = useTransform(scrollY, [0, 300], [1, 0.9]); // Less dramatic scale

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

        {/* Optimized Brutalist Pattern Overlay - Reduced elements */}
        <div className="absolute inset-0 opacity-15 brutalist-pattern-overlay">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(8)].map(
              (
                _,
                i // Reduced from 15 to 8 elements
              ) => (
                <motion.div
                  key={i}
                  className="absolute bg-white"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 100 + 30}px`, // Smaller elements
                    height: `${Math.random() * 100 + 30}px`, // Smaller elements
                    transform: `rotate(${
                      Math.random() * 360
                    }deg) translateZ(0)`, // Hardware acceleration
                    willChange: "transform, opacity",
                  }}
                  animate={{
                    rotate: [0, 180], // Reduced rotation
                    scale: [1, 1.1, 1], // Reduced scale
                    opacity: [0.2, 0.6, 0.2], // Reduced opacity range
                  }}
                  transition={{
                    duration: Math.random() * 8 + 6, // Faster animation
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 3, // Reduced delay
                  }}
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Hero Content - Mobile Optimized Layout with Performance */}
      <div className="absolute inset-0 flex items-center justify-center z-10 py-8 sm:py-12 lg:py-16 xl:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-6 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center hero-grid w-full">
            {/* Left Column - Main Content - Performance Optimized */}
            <motion.div
              className="lg:col-span-7 text-center lg:text-left hero-left-column"
              style={{
                y: textY,
                scale: textScale,
                willChange: "transform",
                transform: "translateZ(0)",
              }}
            >
              {/* Main Title - Optimized */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} // Reduced movement
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }} // Faster
                className="mb-4 sm:mb-6 lg:mb-8 xl:mb-12 hero-spacing mt-2 sm:mt-4 lg:mt-6 xl:mt-8"
              >
                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-display mb-2 sm:mb-3 lg:mb-4 xl:mb-6 leading-tight">
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
              </motion.div>

              {/* Optimized Animated Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Reduced movement
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }} // Faster
                className="mb-4 sm:mb-6 lg:mb-8 xl:mb-12 hero-spacing"
              >
                <div className="card-brutal inline-block px-3 sm:px-4 lg:px-6 xl:px-8 py-2 sm:py-2 lg:py-3 xl:py-4">
                  <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-title text-black font-bold">
                    {displayText}
                    {mounted && <span className="animate-pulse">|</span>}
                  </h2>
                </div>
              </motion.div>

              {/* Description - Optimized */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Reduced movement
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }} // Faster
                className="mb-6 sm:mb-8 lg:mb-12 xl:mb-16 max-w-2xl hero-spacing mx-auto lg:mx-0"
              >
                <div className="glass-card hero-glass-card p-4 sm:p-6 lg:p-8">
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

              {/* CTA Buttons - Optimized */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Reduced movement
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }} // Faster
                className="mb-8 sm:mb-12 lg:mb-16 hero-spacing"
              >
                <HeroButtons />
              </motion.div>
            </motion.div>

            {/* Right Column - Quote Section - Performance Optimized */}
            <motion.div
              className="lg:col-span-5 hero-right-column relative order-first lg:order-last"
              style={{
                opacity: backgroundOpacity,
                willChange: "opacity",
                transform: "translateZ(0)",
              }}
            >
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                {/* Quote Card - Performance Optimized */}
                <motion.div
                  className="glass-card hero-glass-card w-full max-w-lg mx-auto relative z-10"
                  initial={{ opacity: 0, scale: 0.95, rotate: -2 }} // Reduced rotation
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }} // Faster
                  whileHover={{
                    scale: 1.01, // Reduced scale
                    rotate: 0.5, // Reduced rotation
                    transition: { duration: 0.2 }, // Faster
                  }}
                  style={{
                    willChange: "transform",
                    transform: "translateZ(0)",
                  }}
                >
                  {/* Quote content remains the same for visual consistency */}
                  <div className="absolute -top-2 sm:-top-3 md:-top-4 -left-2 sm:-left-3 md:-left-4 text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-orange-500 font-bold opacity-80 hero-quote-marks">
                    &ldquo;
                  </div>

                  <blockquote className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white leading-relaxed mb-4 sm:mb-6 hero-quote px-2 sm:px-4 lg:px-6">
                    The best designs are born from understanding people&apos;s
                    needs, not just following trends. Great user experience
                    happens when technology feels invisible.
                  </blockquote>

                  <div className="text-right">
                    <cite className="text-xs sm:text-sm text-orange-400 font-semibold not-italic hero-attribution">
                      — Jake Cochran
                    </cite>
                  </div>

                  <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 -right-2 sm:-right-3 md:-right-4 text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-orange-500 font-bold opacity-80 hero-quote-marks">
                    &rdquo;
                  </div>
                </motion.div>

                {/* Optimized Floating Elements - Reduced count */}
                <div className="floating-process-elements absolute inset-0 pointer-events-none hidden lg:block">
                  {[...Array(4)].map(
                    (
                      _,
                      i // Reduced from 6 to 4
                    ) => (
                      <motion.div
                        key={i}
                        className="absolute w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-orange-500/15 rounded-lg" // Reduced opacity
                        style={{
                          left: `${Math.random() * 80 + 10}%`,
                          top: `${Math.random() * 80 + 10}%`,
                          willChange: "transform",
                          transform: "translateZ(0)",
                        }}
                        animate={{
                          y: [0, -15, 0], // Reduced movement
                          rotate: [0, 90, 180], // Reduced rotation
                          scale: [1, 1.05, 1], // Reduced scale
                        }}
                        transition={{
                          duration: Math.random() * 2 + 3, // Faster
                          repeat: Infinity,
                          delay: Math.random() * 1, // Reduced delay
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

      {/* Optimized Floating Elements - Reduced count */}
      <div className="absolute inset-0 pointer-events-none floating-elements">
        {[...Array(5)].map(
          (
            _,
            i // Reduced from 8 to 5
          ) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full" // Smaller size
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
              animate={{
                y: [0, -20, 0], // Reduced movement
                opacity: [0.2, 0.8, 0.2], // Reduced opacity range
                scale: [1, 1.3, 1], // Reduced scale
              }}
              transition={{
                duration: Math.random() * 3 + 2, // Faster
                repeat: Infinity,
                delay: Math.random() * 1, // Reduced delay
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

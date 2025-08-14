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
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, 0.4]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);
  const textScale = useTransform(scrollY, [0, 300], [1, 0.9]);

  // Freeze transforms on mobile (no scroll-linked animation)
  const bgScaleValue = isMobile ? 1.02 : backgroundScale;
  const bgOpacityValue = isMobile ? 0.85 : backgroundOpacity;
  const textYValue = isMobile ? 0 : textY;
  const textScaleValue = isMobile ? 1 : textScale;

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

  // Memoize pattern shapes to avoid recomputation on every re-render
  const patternShapes = useMemo(() => {
    if (isMobile) return [];
    const count = 6;
    return Array.from({ length: count }).map((_, idx) => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const w = Math.random() * 100 + 30;
      const h = Math.random() * 100 + 30;
      const rotate = Math.random() * 360;
      const xDrift = Math.random() * 20 - 10;
      const yDrift = Math.random() * 15 - 7.5;
      const colorIdx = idx % 4;
      const colorClass =
        colorIdx === 0
          ? "bg-white/25"
          : colorIdx === 1
          ? "bg-white/45"
          : colorIdx === 2
          ? "bg-white/15"
          : "bg-white/35";
      return {
        id: `pat-${idx}-${left.toFixed(2)}-${top.toFixed(2)}`,
        left,
        top,
        w,
        h,
        rotate,
        xDrift,
        yDrift,
        colorClass,
      };
    });
  }, [isMobile]);

  if (!mounted) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-display mb-4">
              <span
                className="text-black"
                style={{ WebkitTextFillColor: "black", color: "black" }}
              >
                JAKE
              </span>
              <br />
              <span
                className="text-black"
                style={{ WebkitTextFillColor: "black", color: "black" }}
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

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Optimized Dynamic Background Layers */}
      <div className="absolute inset-0">
        {/* Base Background with hardware acceleration */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: backgrounds[currentText],
            scale: bgScaleValue,
            opacity: bgOpacityValue,
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
          transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Brutalist Pattern Overlay - desktop only and memoized */}
        {!isMobile && (
          <div className="absolute inset-0 opacity-15 brutalist-pattern-overlay">
            <div className="absolute top-0 left-0 w-full h-full">
              {patternShapes.map((shape) => (
                <motion.div
                  key={shape.id}
                  className={`absolute ${shape.colorClass}`}
                  style={{
                    left: `${shape.left}%`,
                    top: `${shape.top}%`,
                    width: `${shape.w}px`,
                    height: `${shape.h}px`,
                    transform: `rotate(${shape.rotate}deg) translateZ(0)`,
                    willChange: "transform, opacity",
                    zIndex: 1,
                  }}
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.08, 1],
                    opacity: [0.2, 0.6, 0.2],
                    x: [0, shape.xDrift, 0],
                    y: [0, shape.yDrift, 0],
                  }}
                  transition={{
                    duration: 12 + (parseFloat(shape.left) % 6),
                    repeat: Infinity,
                    ease: "linear",
                    delay: (parseFloat(shape.top) % 3) * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hero Content - Mobile Optimized Layout with Performance */}
      <div className="absolute inset-0 flex items-center justify-center z-10 py-8 sm:py-12 lg:py-16 xl:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-6 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center hero-grid w-full">
            {/* Left Column - Main Content */}
            <motion.div
              className="lg:col-span-7 text-center lg:text-left hero-left-column"
              style={{
                y: textYValue,
                scale: textScaleValue,
                willChange: "transform",
                transform: "translateZ(0)",
              }}
            >
              {/* Main Title */}
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
                      style={{ WebkitTextFillColor: "black", color: "black" }}
                    >
                      JAKE
                    </span>
                    <br className="hidden sm:block" />
                    <span
                      className="text-black block sm:inline"
                      style={{ WebkitTextFillColor: "black", color: "black" }}
                    >
                      COCHRAN
                    </span>
                  </h1>
                  {/* Accent underline */}
                  <div
                    className="h-2 sm:h-3 bg-orange-500 w-32 sm:w-48 lg:w-64 mt-2 lg:mt-4 shadow-brutal"
                    style={{ boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.9)" }}
                  />
                </motion.div>

                {/* Role card */}
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

              {/* Description */}
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
                    backdropFilter: isMobile ? "none" : undefined,
                    WebkitBackdropFilter: isMobile ? "none" : undefined,
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

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-20 sm:mb-24 lg:mb-28 hero-spacing ml-0"
              >
                <HeroButtons />
              </motion.div>
            </motion.div>

            {/* Right Column - Quote Section */}
            <motion.div
              className="lg:col-span-5 hero-right-column relative order-first lg:order-last flex items-center justify-center"
              style={{
                opacity: bgOpacityValue,
                willChange: "opacity",
                transform: "translateZ(0)",
              }}
            >
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] flex items-center justify-center p-4 sm:p-6 lg:p-8 w-full">
                <motion.div
                  className="w-full max-w-lg mx-auto relative z-10 lg:ml-12"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating elements - desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none floating-elements">
          {[...Array(5)].map((_, i) => (
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
                left: `${(i * 17) % 100}%`,
                top: `${(i * 29) % 100}%`,
                willChange: "transform, opacity",
                transform: "translateZ(0)",
                zIndex: (i % 3) + 1,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, (i % 5) - 2, 0],
                opacity: [0.2, 0.9, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Optimized Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
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
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-8 sm:w-7 sm:h-10 lg:w-8 lg:h-12 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 sm:h-3 lg:h-4 bg-white/60 rounded-full mt-2 lg:mt-3"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

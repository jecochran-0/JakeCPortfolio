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
      <div className="absolute inset-0 flex items-center justify-center z-10 py-4 sm:py-8 lg:py-16 xl:py-24">
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
              {/* Modern 2025 Mobile Hero - Neo-Brutalist Redesign */}
              {isMobile ? (
                <div className="relative w-full min-h-screen flex flex-col">
                  {/* Modern Gradient Background with Geometric Patterns */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900" />
                  
                  {/* Geometric Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-orange-500" />
                    <div className="absolute top-0 right-0 w-24 h-24 border-r-4 border-t-4 border-orange-500" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-l-4 border-b-4 border-orange-500" />
                    <div className="absolute bottom-0 right-0 w-28 h-28 border-r-4 border-b-4 border-orange-500" />
                  </div>

                  {/* Floating Geometric Elements */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={`geo-${i}`}
                        className={`absolute ${
                          i % 2 === 0 ? 'bg-orange-500/30' : 'bg-white/10'
                        }`}
                        style={{
                          left: `${10 + (i * 15) % 80}%`,
                          top: `${15 + (i * 20) % 70}%`,
                          width: `${12 + (i % 3) * 8}px`,
                          height: `${12 + (i % 3) * 8}px`,
                          transform: `rotate(${i * 45}deg)`,
                          willChange: "transform, opacity",
                          zIndex: 1,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          rotate: [i * 45, i * 45 + 180, i * 45 + 360],
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 12 + (i % 4) * 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>

                  {/* Main Content Container */}
                  <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-8">
                    {/* Hero Header Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-center mb-12"
                    >
                      {/* Modern Role Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-orange-500 border-2 border-black shadow-brutal mb-6">
                        <div className="w-3 h-3 bg-black mr-3 animate-pulse" />
                        <span className="text-sm font-black text-black tracking-wider uppercase">
                          {displayText}
                          {mounted && <span className="ml-1">|</span>}
                        </span>
                      </div>

                      {/* Name with Modern Typography */}
                      <h1 className="text-6xl sm:text-7xl font-black leading-none tracking-tight mb-6">
                        <span className="block text-white mb-2">JAKE</span>
                        <span className="block text-orange-500 relative">
                          COCHRAN
                          <div className="absolute -bottom-2 left-0 w-full h-1 bg-black" />
                        </span>
                      </h1>

                      {/* Modern Subtitle */}
                      <p className="text-lg sm:text-xl text-zinc-300 font-medium max-w-md mx-auto leading-relaxed">
                        Crafting digital experiences that bridge innovation with human-centered design
                      </p>
                    </motion.div>

                    {/* Profile Section - Modern Card Design */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="relative mb-12"
                    >
                      {/* Main Profile Card */}
                      <div className="relative">
                        {/* Background Card */}
                        <div className="absolute inset-0 bg-white border-4 border-black shadow-brutal transform translate-x-2 translate-y-2" />
                        
                        {/* Photo Container */}
                        <div className="relative bg-white border-4 border-black shadow-brutal p-2">
                          <div className="w-40 h-40 sm:w-48 sm:h-48 overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200">
                            <img
                              src="/Headshot3.png"
                              alt="Jake Cochran"
                              className="w-full h-full object-cover"
                              style={{
                                willChange: "transform",
                                transform: "translateZ(0)",
                              }}
                            />
                          </div>
                          
                          {/* Modern Corner Accents */}
                          <div className="absolute -top-2 -left-2 w-6 h-6 bg-orange-500 border-2 border-black" />
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-black border-2 border-orange-500" />
                          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-black border-2 border-orange-500" />
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-500 border-2 border-black" />
                        </div>
                      </div>

                      {/* Floating Stats */}
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                        <div className="bg-white border-2 border-black p-3 shadow-brutal">
                          <div className="text-center">
                            <div className="text-2xl font-black text-orange-500">5+</div>
                            <div className="text-xs font-bold text-black uppercase tracking-wider">Years</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Modern Description Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="w-full max-w-lg mb-12"
                    >
                      <div className="relative">
                        {/* Background Card */}
                        <div className="absolute inset-0 bg-zinc-800 border-2 border-orange-500 transform translate-x-1 translate-y-1" />
                        
                        {/* Content Card */}
                        <div className="relative bg-zinc-900 border-2 border-orange-500 p-6">
                          <div className="flex items-start space-x-3 mb-4">
                            <div className="w-2 h-2 bg-orange-500 mt-2" />
                            <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                              Specializing in user-centered solutions that bridge creativity with functionality. 
                              From concept to deployment, I transform ideas into exceptional digital experiences.
                            </p>
                          </div>
                          
                          {/* Modern Progress Bar */}
                          <div className="w-full bg-zinc-800 h-2 border border-zinc-700">
                            <motion.div
                              className="h-full bg-gradient-to-r from-orange-500 to-orange-400"
                              initial={{ width: 0 }}
                              animate={{ width: "85%" }}
                              transition={{ duration: 1.5, delay: 1 }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Modern CTA Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="w-full max-w-md"
                    >
                      <div className="grid grid-cols-1 gap-4">
                        {/* Primary CTA */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative group"
                        >
                          <div className="absolute inset-0 bg-orange-500 border-2 border-black transform translate-x-1 translate-y-1" />
                          <div className="relative bg-orange-500 border-2 border-black p-4 text-center transition-all duration-200 group-hover:translate-x-1 group-hover:translate-y-1">
                            <span className="text-black font-black text-lg tracking-wider uppercase">
                              View My Work
                            </span>
                          </div>
                        </motion.button>

                        {/* Secondary CTA */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative group"
                        >
                          <div className="absolute inset-0 bg-white border-2 border-black transform translate-x-1 translate-y-1" />
                          <div className="relative bg-white border-2 border-black p-4 text-center transition-all duration-200 group-hover:translate-x-1 group-hover:translate-y-1">
                            <span className="text-black font-black text-lg tracking-wider uppercase">
                              Get In Touch
                            </span>
                          </div>
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Modern Bottom Elements */}
                  <div className="relative z-10 px-6 pb-8">
                    {/* Bottom Navigation Dots */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="flex justify-center space-x-3"
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-3 h-3 rounded-full ${
                            i === 0 ? 'bg-orange-500' : 'bg-zinc-600'
                          }`}
                          animate={{
                            scale: i === 0 ? [1, 1.2, 1] : 1,
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Modern Scroll Indicator */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      className="absolute bottom-8 right-6"
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <span className="text-xs text-zinc-400 font-medium tracking-wider uppercase">
                          Scroll
                        </span>
                        <motion.div
                          className="w-0.5 h-8 bg-gradient-to-b from-orange-500 to-transparent"
                          animate={{
                            height: [32, 40, 32],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              ) : (
                /* Desktop Layout - Original Design */
                <>
                  {/* Main Title */}
                  <div className="relative inline-block w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="mb-6 sm:mb-8 lg:mb-24 xl:mb-28 hero-spacing mt-2 sm:mt-4 lg:mt-16 xl:mt-20"
                    >
                      <h1
                        className="hero-name text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] leading-tight tracking-wide"
                        style={{ letterSpacing: "0.04em" }}
                      >
                        <span
                          className="text-black block sm:inline text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem]"
                          style={{
                            WebkitTextFillColor: "black",
                            color: "black",
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
                          }}
                        >
                          COCHRAN
                        </span>
                      </h1>
                      {/* Accent underline */}
                      <div
                        className="h-2 sm:h-3 bg-orange-500 w-20 sm:w-24 lg:w-48 xl:w-64 mt-2 lg:mt-4 shadow-brutal mx-auto lg:mx-0"
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
                        className="card-brutal inline-block px-3 sm:px-4 lg:px-6 xl:px-8 py-2 sm:py-2 lg:py-3 xl:py-4 min-w-[200px] sm:min-w-[240px] lg:min-w-[360px]"
                        style={{
                          boxShadow: "12px 12px 0px rgba(0, 0, 0, 0.9)",
                        }}
                      >
                        <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black font-black tracking-wide">
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
                    className="mb-8 sm:mb-12 lg:mb-24 xl:mb-32 max-w-sm sm:max-w-xl lg:max-w-2xl hero-spacing mx-auto lg:mx-0 ml-0"
                  >
                    <div
                      className="glass-card hero-glass-card p-3 sm:p-4 lg:p-8"
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
                        Crafting exceptional digital experiences through
                        innovative design and cutting-edge development.
                        Specializing in user-centered solutions that bridge
                        creativity with functionality.
                      </p>
                    </div>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8 sm:mb-12 lg:mb-24 xl:mb-28 hero-spacing ml-0"
                  >
                    <HeroButtons />
                  </motion.div>
                </>
              )}
            </motion.div>

            {/* Right Column - Quote Section (Desktop Only) */}
            {!isMobile && (
              <motion.div
                className="lg:col-span-5 hero-right-column relative order-first lg:order-last flex items-center justify-center"
                style={{
                  opacity: bgOpacityValue,
                  willChange: "opacity",
                  transform: "translateZ(0)",
                }}
              >
                <div className="relative h-32 sm:h-48 md:h-64 lg:h-full min-h-[120px] sm:min-h-[200px] lg:min-h-[500px] xl:min-h-[600px] flex items-center justify-center p-2 sm:p-4 lg:p-8 w-full">
                  <motion.div
                    className="w-full max-w-sm sm:max-w-lg mx-auto relative z-10 lg:ml-12"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <blockquote
                      className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed mb-2 sm:mb-4 lg:mb-6 hero-quote px-1 sm:px-2 lg:px-6 font-normal italic"
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
            )}
          </div>
        </div>
      </div>

      {/* Mobile-specific animated elements for visual interest - positioned within safe bounds */}
      {isMobile && (
        <div className="absolute inset-0 pointer-events-none mobile-animated-elements">
          {/* Mobile floating shapes - positioned within safe mobile bounds */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`mobile-${i}`}
              className={`absolute rounded-full ${
                i % 3 === 0
                  ? "w-2 h-2 bg-white/60"
                  : i % 3 === 1
                  ? "w-1.5 h-1.5 bg-white/80"
                  : "w-3 h-3 bg-white/40"
              }`}
              style={{
                left: `${10 + ((i * 15) % 80)}%`,
                top: `${15 + ((i * 20) % 70)}%`,
                willChange: "transform, opacity",
                transform: "translateZ(0)",
                zIndex: (i % 2) + 1,
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, (i % 3) - 1, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8 + (i % 4),
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 2) * 0.5,
              }}
            />
          ))}

          {/* Mobile accent lines - positioned within safe mobile bounds */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`mobile-line-${i}`}
              className="absolute bg-white/30"
              style={{
                left: `${15 + ((i * 20) % 70)}%`,
                top: `${20 + (i % 3) * 15}%`,
                width: `${15 + (i % 2) * 8}px`,
                height: "1px",
                willChange: "transform, opacity",
                transform: "translateZ(0)",
                zIndex: 1,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scaleX: [0.8, 1.2, 0.8],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 6 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 2) * 0.8,
              }}
            />
          ))}

          {/* Mobile geometric accents - positioned within safe mobile bounds */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`mobile-geo-${i}`}
              className={`absolute border border-white/40 ${
                i % 2 === 0 ? "rounded-sm" : "rounded-full"
              }`}
              style={{
                left: `${20 + ((i * 25) % 60)}%`,
                top: `${25 + ((i * 20) % 55)}%`,
                width: `${8 + (i % 2) * 6}px`,
                height: `${8 + (i % 2) * 6}px`,
                willChange: "transform, opacity",
                transform: "translateZ(0)",
                zIndex: 1,
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [0.9, 1.1, 0.9],
                rotate: [0, 90, 180, 270],
              }}
              transition={{
                duration: 10 + (i % 4),
                repeat: Infinity,
                ease: "linear",
                delay: (i % 3) * 1.2,
              }}
            />
          ))}
        </div>
      )}

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
                duration: 12 + (i % 6),
                repeat: Infinity,
                ease: "easeInOut",
                delay: (parseFloat(i) % 3) * 0.2,
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

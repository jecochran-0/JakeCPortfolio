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
  const bgScaleValue = isMobile ? 1 : backgroundScale;
  const bgOpacityValue = isMobile ? 1 : backgroundOpacity;
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

  // Mobile gyroscope tilt effect for COCHRAN card
  const [mobileTilt, setMobileTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isMobile || typeof window === "undefined") return;

    console.log("Setting up mobile gyroscope tilt effect");

    const handleDeviceOrientation = (event) => {
      if (event.beta !== null && event.gamma !== null) {
        // Convert device orientation to tilt values
        const beta = event.beta; // -180 to 180 (front/back tilt)
        const gamma = event.gamma; // -90 to 90 (left/right tilt)

        console.log("Gyroscope data:", { beta, gamma });

        // Normalize and scale the tilt values
        const tiltX = Math.max(-15, Math.min(15, (beta - 45) * 0.5)); // Front/back tilt
        const tiltY = Math.max(-15, Math.min(15, gamma * 0.3)); // Left/right tilt

        console.log("Calculated tilt:", { tiltX, tiltY });

        setMobileTilt({ x: tiltX, y: tiltY });
      }
    };

    // Fallback tilt effect using touch events for devices without gyroscope
    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (touch.clientX - rect.left - centerX) / centerX;
      const deltaY = (touch.clientY - rect.top - centerY) / centerY;

      const tiltX = Math.max(-15, Math.min(15, deltaY * -15));
      const tiltY = Math.max(-15, Math.min(15, deltaX * 15));

      console.log("Touch tilt:", { tiltX, tiltY });
      setMobileTilt({ x: tiltX, y: tiltY });
    };

    const handleTouchEnd = () => {
      setMobileTilt({ x: 0, y: 0 });
    };

    // Request permission for device orientation (iOS)
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      console.log("Requesting device orientation permission...");
      DeviceOrientationEvent.requestPermission()
        .then((permission) => {
          if (permission === "granted") {
            console.log("Permission granted, adding event listener");
            window.addEventListener(
              "deviceorientation",
              handleDeviceOrientation
            );
          } else {
            console.log("Permission denied:", permission);
          }
        })
        .catch((error) => {
          console.error("Permission request failed:", error);
        });
    } else {
      // For devices that don't require permission
      console.log("No permission required, adding event listener directly");
      window.addEventListener("deviceorientation", handleDeviceOrientation);
    }

    // Add touch fallback for all mobile devices
    const cochranCard = document.querySelector(".card-brutal");
    if (cochranCard) {
      cochranCard.addEventListener("touchmove", handleTouchMove);
      cochranCard.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
      if (cochranCard) {
        cochranCard.removeEventListener("touchmove", handleTouchMove);
        cochranCard.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [isMobile]);

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

        {/* Mobile Background Enhancement */}
        {isMobile && (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)`,
              pointerEvents: "none",
            }}
          />
        )}

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
      {isMobile ? (
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4 py-4">
          {/* Floating Elements - Enhanced for Mobile */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Red dot - prominent accent */}
            <div className="absolute top-16 right-16 w-5 h-5 bg-red-500 rounded-full opacity-80" />

            {/* Enhanced floating shapes for mobile */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`mobile-shape-${i}`}
                className={`absolute ${
                  i % 3 === 0
                    ? "bg-white/60 w-3 h-3 rounded-full"
                    : i % 3 === 1
                    ? "bg-orange-300/50 w-2 h-2 rounded-sm"
                    : "bg-teal-300/40 w-4 h-4 rounded-full"
                }`}
                style={{
                  left: `${20 + ((i * 25) % 60)}%`,
                  top: `${25 + ((i * 20) % 50)}%`,
                }}
              />
            ))}
          </div>

          {/* Main Content - Elite Mobile Spacing */}
          <div className="text-center w-full max-w-sm space-y-6">
            {/* Hero Name Section - Diagonal Overlap */}
            <div className="relative space-y-4">
              {/* JAKE - Positioned to overlap COCHRAN diagonally */}
              <div className="relative z-20 -mb-4">
                <h1 className="text-7xl sm:text-8xl font-black text-white leading-none tracking-tight">
                  JAKE
                </h1>
              </div>

              {/* COCHRAN - Card positioned diagonally for overlap */}
              <div className="relative z-10 ml-6 -mt-8">
                <div
                  className="card-brutal inline-block border-3 border-black shadow-brutal"
                  style={{
                    boxShadow: "6px 6px 0px rgba(0, 0, 0, 0.9)",
                    transform: `rotate(1deg) perspective(800px) rotateX(${mobileTilt.x}deg) rotateY(${mobileTilt.y}deg)`,
                    background:
                      currentText === 0
                        ? "#1f2937"
                        : currentText === 1
                        ? "#1e40af"
                        : currentText === 2
                        ? "#dc2626"
                        : "#7c3aed",
                    minWidth: "240px",
                    borderRadius: "0",
                    transition: "transform 0.1s ease-out",
                    padding: "16px 24px",
                    border: "3px solid black",
                  }}
                >
                  <h1 className="text-5xl sm:text-6xl leading-none tracking-tight font-black text-white">
                    COCHRAN
                  </h1>
                </div>
              </div>
            </div>

            {/* Role Badge - Minimal Padding */}
            <div className="space-y-3">
              <div
                className="card-brutal inline-block min-w-[160px]"
                style={{
                  boxShadow: "12px 12px 0px rgba(0, 0, 0, 0.9)",
                  padding: "4px 8px",
                  border: "4px solid black",
                  background: "white",
                }}
              >
                <h2 className="text-sm font-black text-black tracking-wide">
                  {displayText}
                  {mounted && <span className="animate-pulse">|</span>}
                </h2>
              </div>
            </div>

            {/* CTA Buttons - Elite Mobile Spacing */}
            <div className="space-y-4">
              <button
                className="btn-brutal btn-brutal-interactive w-full text-base px-6 py-4 min-h-[52px] font-bold"
                style={{
                  willChange: "transform, box-shadow",
                  transform: "translateZ(0)",
                  boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.85)",
                  transition:
                    "box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = "12px 12px 0px rgba(0, 0, 0, 0.9)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = "8px 8px 0px rgba(0, 0, 0, 0.85)";
                }}
              >
                View My Work
              </button>

              <button
                className="btn-brutal btn-brutal-interactive w-full text-base px-6 py-4 min-h-[52px] font-bold"
                style={{
                  background: "var(--color-white)",
                  color: "var(--color-black)",
                  willChange: "transform, box-shadow",
                  transform: "translateZ(0)",
                  boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.85)",
                  transition:
                    "box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = "12px 12px 0px rgba(0, 0, 0, 0.9)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = "8px 8px 0px rgba(0, 0, 0, 0.85)";
                }}
              >
                Get In Touch
              </button>
            </div>

            {/* Quote Section - Elite Mobile Spacing */}
            <div className="text-center space-y-4 mt-8">
              {/* Accent Dot - Elite Spacing */}
              <div className="w-4 h-4 bg-red-500 rounded-full mx-auto" />

              {/* Quote - Elite Typography Spacing */}
              <blockquote className="text-white text-base leading-relaxed max-w-sm mx-auto font-medium">
                If I had an hour to solve a problem I&apos;d spend 55 minutes
                thinking about the problem and 5 minutes thinking about
                solutions.
              </blockquote>

              {/* Attribution - Elite Spacing */}
              <cite className="text-white/90 text-sm font-semibold block">
                — Albert Einstein
              </cite>
            </div>
          </div>
        </div>
      ) : (
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
                {/* Hero Content */}
                <div className="relative inline-block w-full">
                  {/* Overlapping Name Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1,
                      ease: [0.2, 0, 0, 1],
                    }}
                    className="mb-20 sm:mb-24 lg:mb-32 xl:mb-40 hero-spacing mt-2 sm:mt-4 lg:mt-8 xl:mt-10"
                  >
                    {/* JAKE - Primary Text */}
                    <motion.div
                      initial={{ opacity: 0, x: -30, rotate: -0.5 }}
                      animate={{ opacity: 1, x: 0, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: [0.2, 0, 0, 1],
                      }}
                      className="relative z-20 mb-0 pointer-events-none"
                    >
                      <h1
                        className="hero-name text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] leading-[0.9] tracking-tighter font-black text-white"
                        style={{
                          letterSpacing: "-0.02em",
                          fontFamily:
                            "'Inter', 'SF Pro Display', -apple-system, sans-serif",
                          textShadow: "2px 2px 0px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        JAKE
                      </h1>
                    </motion.div>

                    {/* COCHRAN - Card with Dynamic Background Color */}
                    <motion.div
                      initial={{ opacity: 0, x: 30, rotate: 0.5 }}
                      animate={{ opacity: 1, x: 0, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3,
                        ease: [0.2, 0, 0, 1],
                      }}
                      className="relative z-10 -mt-8 sm:-mt-10 lg:-mt-12 xl:-mt-16 ml-8 sm:ml-10 lg:ml-12 xl:ml-16"
                    >
                      <div
                        className="card-brutal cochran-card inline-block px-6 sm:px-8 lg:px-10 xl:px-12 py-4 sm:py-6 lg:py-8 xl:py-10 border-3 border-black shadow-brutal hover:scale-105 transition-all duration-300 ease-out relative"
                        style={{
                          boxShadow: "6px 6px 0px rgba(0, 0, 0, 0.9)",
                          transform:
                            "rotate(0.5deg) scale(var(--scale, 1)) perspective(800px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))",
                          background:
                            currentText === 0
                              ? "#1f2937"
                              : currentText === 1
                              ? "#1e40af"
                              : currentText === 2
                              ? "#dc2626"
                              : "#7c3aed",
                          "--scale": "1",
                          "--rotate-x": "0deg",
                          "--rotate-y": "0deg",
                          transition:
                            "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        }}
                        onMouseMove={(e) => {
                          if (!isMobile) {
                            const rect =
                              e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;

                            const centerX = rect.width / 2;
                            const centerY = rect.height / 2;

                            const deltaX = (x - centerX) / centerX;
                            const deltaY = (y - centerY) / centerY;

                            // Apply 3D transform with enhanced edge detection and smooth transitions
                            const edgeMultiplier = Math.max(
                              1,
                              Math.abs(deltaX) * 1.2
                            ); // Enhance edge sensitivity

                            // Use CSS custom properties for smooth transitions
                            e.currentTarget.style.setProperty(
                              "--rotate-x",
                              `${deltaY * -12}deg`
                            );
                            e.currentTarget.style.setProperty(
                              "--rotate-y",
                              `${deltaX * 12 * edgeMultiplier}deg`
                            );
                            e.currentTarget.style.setProperty(
                              "--scale",
                              "1.05"
                            );
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isMobile) {
                            // Reset to original state with smooth transition
                            e.currentTarget.style.setProperty(
                              "--rotate-x",
                              "0deg"
                            );
                            e.currentTarget.style.setProperty(
                              "--rotate-y",
                              "0deg"
                            );
                            e.currentTarget.style.setProperty("--scale", "1");
                          }
                        }}
                        onMouseEnter={(e) => {
                          if (!isMobile) {
                            // Ensure smooth transition by setting initial values if not already set
                            if (
                              !e.currentTarget.style.getPropertyValue(
                                "--rotate-x"
                              )
                            ) {
                              e.currentTarget.style.setProperty(
                                "--rotate-x",
                                "0deg"
                              );
                            }
                            if (
                              !e.currentTarget.style.getPropertyValue(
                                "--rotate-y"
                              )
                            ) {
                              e.currentTarget.style.setProperty(
                                "--rotate-y",
                                "0deg"
                              );
                            }
                            if (
                              !e.currentTarget.style.getPropertyValue("--scale")
                            ) {
                              e.currentTarget.style.setProperty("--scale", "1");
                            }
                          }
                        }}
                      >
                        {/* Invisible hover extension to ensure full coverage */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            width: "110%",
                            height: "110%",
                            left: "-5%",
                            top: "-5%",
                            zIndex: -1,
                          }}
                        />
                        <h1
                          className="hero-name text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] leading-[0.9] tracking-tighter font-black text-white relative z-10"
                          style={{
                            letterSpacing: "-0.02em",
                            fontFamily:
                              "'Inter', 'SF Pro Display', -apple-system, sans-serif",
                          }}
                        >
                          COCHRAN
                        </h1>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Role card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-spacing mb-16 sm:mb-20 lg:mb-24 xl:mb-28 ml-0"
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

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-20 sm:mb-24 lg:mb-32 xl:mb-40 hero-spacing ml-0"
                >
                  <HeroButtons />
                </motion.div>
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
                  <div className="relative h-32 sm:h-48 md:h-64 lg:h-full min-h-[120px] sm:min-h-[200px] lg:min-h-[400px] xl:min-h-[500px] flex items-center justify-center p-2 sm:p-4 lg:p-8 w-full">
                    <motion.div
                      className="w-full max-w-sm sm:max-w-lg mx-auto relative z-10 lg:ml-8 xl:ml-12"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <blockquote
                        className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed mb-2 sm:mb-4 lg:mb-6 hero-quote px-1 sm:px-2 lg:px-6 font-normal italic"
                        style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)" }}
                      >
                        If I had an hour to solve a problem I&apos;d spend 55
                        minutes thinking about the problem and 5 minutes
                        thinking about solutions.
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
      )}

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
    </div>
  );
}

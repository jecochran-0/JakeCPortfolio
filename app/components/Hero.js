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
      "linear-gradient(135deg, #c4622a 0%, #d97706 50%, #ea580c 100%)", // Matte Orange
      "linear-gradient(135deg, #2d7d77 0%, #0f766e 50%, #134e4a 100%)", // Matte Teal
      "linear-gradient(135deg, #1e5a8a 0%, #2563eb 50%, #1d4ed8 100%)", // Matte Blue
      "linear-gradient(135deg, #b91c1c 0%, #dc2626 50%, #ef4444 100%)", // Matte Red
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

  // Mobile parallax transform values
  const mobileParallaxFar = useTransform(scrollY, [0, 500], [0, -100]);
  const mobileParallaxMid = useTransform(scrollY, [0, 500], [0, -200]);
  const mobileParallaxNear = useTransform(scrollY, [0, 500], [0, -300]);

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
            willChange: "transform, opacity, background",
            transform: "translateZ(0)",
          }}
          transition={{
            duration: 1.0,
            ease: [0.25, 0.46, 0.45, 0.94],
            background: { duration: 0.8, ease: "easeInOut" },
          }}
          animate={{ background: backgrounds[currentText] }}
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

        {/* Mobile Scroll-Based Parallax Background */}
        {isMobile && (
          <>
            {/* Far Background Layer - Slowest Scroll Speed */}
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
                y: mobileParallaxFar,
              }}
            />

            {/* Mid Background Layer - Medium Scroll Speed */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(45deg, transparent 40%, rgba(0, 0, 0, 0.02) 50%, transparent 60%),
                  linear-gradient(-45deg, transparent 30%, rgba(251, 146, 60, 0.03) 50%, transparent 70%)
                `,
                willChange: "transform",
                transform: "translateZ(0)",
                y: mobileParallaxMid,
              }}
            />

            {/* Near Background Layer - Faster Scroll Speed */}
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
                y: mobileParallaxNear,
              }}
            />
          </>
        )}
      </div>

      {/* Hero Content - Mobile Optimized Layout with Performance */}
      {isMobile ? (
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4 py-4">
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
                  className="card-brutal inline-block border-3 border-black shadow-brutal relative overflow-hidden"
                  style={{
                    boxShadow: `20px 20px 12px rgba(0, 0, 0, 0.15), ${Math.round(
                      20 + mobileTilt.y * 1.2
                    )}px ${Math.round(20 + mobileTilt.x * 0.8)}px ${Math.max(
                      0,
                      12 +
                        Math.abs(mobileTilt.x) * 0.4 +
                        Math.abs(mobileTilt.y) * 0.4
                    )}px rgba(0, 0, 0, ${Math.min(
                      0.25,
                      0.15 +
                        Math.abs(mobileTilt.x) * 0.006 +
                        Math.abs(mobileTilt.y) * 0.006
                    )})`,
                    transform: `rotate(1deg) perspective(800px) rotateX(${mobileTilt.x}deg) rotateY(${mobileTilt.y}deg)`,
                    background:
                      currentText === 0
                        ? "#c4622a"
                        : currentText === 1
                        ? "#2d7d77"
                        : currentText === 2
                        ? "#1e5a8a"
                        : "#b91c1c",
                    minWidth: "240px",
                    borderRadius: "0",
                    transition:
                      "transform 0.1s ease-out, box-shadow 0.1s ease-out, background 0.6s ease-in-out",
                    padding: "16px 24px",
                    border: "3px solid black",
                  }}
                >
                  <h1 className="text-5xl sm:text-6xl leading-none tracking-tight font-black text-white relative z-10">
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
                    className="mb-16 sm:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 hero-spacing mt-2 sm:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10"
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
                        className="hero-name text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] leading-[0.85] tracking-tighter font-black text-white"
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
                      className="relative z-10 -mt-6 sm:-mt-8 lg:-mt-10 xl:-mt-12 2xl:-mt-14 ml-6 sm:ml-8 lg:ml-10 xl:ml-12 2xl:ml-14"
                    >
                      <div
                        className="card-brutal cochran-card inline-block px-6 sm:px-8 lg:px-10 xl:px-12 2xl:px-14 py-4 sm:py-6 lg:py-8 xl:py-10 2xl:py-12 border-3 border-black shadow-brutal hover:scale-105 transition-all duration-300 ease-out relative overflow-hidden"
                        style={{
                          boxShadow:
                            "var(--dynamic-shadow, 20px 20px 12px rgba(0, 0, 0, 0.15))",
                          transform:
                            "rotate(0.5deg) scale(var(--scale, 1)) perspective(800px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))",
                          background:
                            currentText === 0
                              ? "#c4622a"
                              : currentText === 1
                              ? "#2d7d77"
                              : currentText === 2
                              ? "#1e5a8a"
                              : "#b91c1c",
                          "--scale": "1",
                          "--rotate-x": "0deg",
                          "--rotate-y": "0deg",
                          "--dynamic-shadow":
                            "20px 20px 12px rgba(0, 0, 0, 0.15)",
                          "--cursor-glow-x": "50%",
                          "--cursor-glow-y": "50%",
                          "--glow-opacity": "0",
                          transition:
                            "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.6s ease-in-out",
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

                            const rotateX = deltaY * -12;
                            const rotateY = deltaX * 12 * edgeMultiplier;

                            // Use CSS custom properties for smooth transitions
                            e.currentTarget.style.setProperty(
                              "--rotate-x",
                              `${rotateX}deg`
                            );
                            e.currentTarget.style.setProperty(
                              "--rotate-y",
                              `${rotateY}deg`
                            );
                            e.currentTarget.style.setProperty(
                              "--scale",
                              "1.05"
                            );

                            // Calculate dynamic shadow based on tilt angle
                            const shadowX = Math.round(20 + rotateY * 1.2);
                            const shadowY = Math.round(20 + rotateX * 0.8);
                            const shadowBlur = Math.max(
                              0,
                              12 +
                                Math.abs(rotateX) * 0.4 +
                                Math.abs(rotateY) * 0.4
                            );
                            const shadowOpacity = Math.min(
                              0.25,
                              0.15 +
                                Math.abs(rotateX) * 0.006 +
                                Math.abs(rotateY) * 0.006
                            );

                            const dynamicShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowOpacity})`;
                            e.currentTarget.style.setProperty(
                              "--dynamic-shadow",
                              dynamicShadow
                            );

                            // Calculate cursor position for glow effect
                            const glowX = ((x / rect.width) * 100).toFixed(1);
                            const glowY = ((y / rect.height) * 100).toFixed(1);
                            e.currentTarget.style.setProperty(
                              "--cursor-glow-x",
                              `${glowX}%`
                            );
                            e.currentTarget.style.setProperty(
                              "--cursor-glow-y",
                              `${glowY}%`
                            );
                            e.currentTarget.style.setProperty(
                              "--glow-opacity",
                              "1"
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
                            e.currentTarget.style.setProperty(
                              "--dynamic-shadow",
                              "20px 20px 12px rgba(0, 0, 0, 0.15)"
                            );
                            e.currentTarget.style.setProperty(
                              "--glow-opacity",
                              "0"
                            );
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
                            if (
                              !e.currentTarget.style.getPropertyValue(
                                "--dynamic-shadow"
                              )
                            ) {
                              e.currentTarget.style.setProperty(
                                "--dynamic-shadow",
                                "20px 20px 12px rgba(0, 0, 0, 0.15)"
                              );
                            }
                            if (
                              !e.currentTarget.style.getPropertyValue(
                                "--glow-opacity"
                              )
                            ) {
                              e.currentTarget.style.setProperty(
                                "--glow-opacity",
                                "0"
                              );
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
                          className="hero-name text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-[0.85] tracking-tighter font-black text-white relative z-10"
                          style={{
                            letterSpacing: "-0.02em",
                            fontFamily:
                              "'Inter', 'SF Pro Display', -apple-system, sans-serif",
                          }}
                        >
                          COCHRAN
                        </h1>

                        {/* White Glow Effect */}
                        <div
                          className="absolute inset-0 pointer-events-none z-5"
                          style={{
                            background: `radial-gradient(circle at var(--cursor-glow-x) var(--cursor-glow-y), rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.25) 15%, transparent 30%)`,
                            opacity: "var(--glow-opacity, 0)",
                            transition:
                              "background 0.1s ease-out, opacity 0.2s ease-out",
                          }}
                        />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Role card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-spacing mb-12 sm:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28 ml-0"
                  >
                    <div
                      className="card-brutal inline-block px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-10 py-2 sm:py-2 lg:py-3 xl:py-4 2xl:py-5 min-w-[200px] sm:min-w-[240px] lg:min-w-[360px] xl:min-w-[400px] 2xl:min-w-[440px]"
                      style={{
                        boxShadow: "12px 12px 0px rgba(0, 0, 0, 0.9)",
                      }}
                    >
                      <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-black font-black tracking-wide">
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
                  className="mb-16 sm:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 hero-spacing ml-0"
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
                          style={{
                            textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                          }}
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
    </div>
  );
}

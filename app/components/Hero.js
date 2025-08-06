"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showSkipIndicator, setShowSkipIndicator] = useState(false);
  const [fastForwarding, setFastForwarding] = useState(false);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Handle mounting to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const texts = [
    "CREATIVE DEVELOPER",
    "UX DESIGNER",
    "PROBLEM SOLVER",
    "INNOVATOR",
  ];

  const backgrounds = [
    "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
    "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)",
    "linear-gradient(135deg, #45b7d1 0%, #96c93d 100%)",
    "linear-gradient(135deg, #fc5c65 0%, #eb4b4b 100%)",
  ];

  const fullText = texts[currentText];
  const typingSpeed = 100;
  const deletingSpeed = 50;

  // Transform values for scroll-based animations
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const textY = useTransform(scrollY, [0, 300], [0, -100]);
  const textScale = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Typing animation
  useEffect(() => {
    if (!mounted) return; // Don't start animations until mounted

    if (isTyping) {
      if (displayText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, typingSpeed);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);

        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, deletingSpeed);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => (prev + 1) % texts.length);
          setIsTyping(true);
        }, 500);

        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isTyping, fullText, texts.length, mounted]);

  // Video handling
  useEffect(() => {
    if (!mounted || !videoRef.current) return; // Don't handle video until mounted

    const video = videoRef.current;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      video
        .play()
        .then(() => {
          // Video started playing
        })
        .catch(() => {
          // Autoplay failed, show skip indicator
          setShowSkipIndicator(true);
        });
    };

    const handleTimeUpdate = () => {
      if (video.currentTime > 3 && !fastForwarding) {
        setFastForwarding(true);
        video.currentTime = video.duration - 1;
      }
    };

    const handleEnded = () => {
      setShowSkipIndicator(false);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [fastForwarding, mounted]);

  const skipVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.duration;
    }
  };

  // Prevent hydration mismatch by showing loading state
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

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background Layers */}
      <div className="absolute inset-0">
        {/* Base Video Background */}
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            className={`w-full h-full object-cover hero-video ${
              isVideoLoaded ? "opacity-100" : "opacity-0"
            } ${fastForwarding ? "fast-forwarding" : ""}`}
            muted
            playsInline
            preload="metadata"
          >
            <source src="/HeroScreen.mp4" type="video/mp4" />
          </video>

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/40 hero-video-overlay" />
        </div>

        {/* Animated Background Overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: mounted ? backgrounds[currentText] : backgrounds[0],
            scale: backgroundScale,
            opacity: backgroundOpacity,
          }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />

        {/* Brutalist Pattern Overlay */}
        <div className="absolute inset-0 opacity-20 brutalist-pattern-overlay">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 150 + 50}px`,
                  height: `${Math.random() * 150 + 50}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Skip Indicator */}
      <AnimatePresence>
        {showSkipIndicator && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={skipVideo}
            className="absolute bottom-8 right-8 btn-brutal z-20"
          >
            Skip Intro
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero Content - Unconventional Layout */}
      <div className="absolute inset-0 flex items-center justify-center z-10 py-12 lg:py-16 xl:py-24">
        <div className="container mx-auto px-4 lg:px-6 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center hero-grid w-full">
            {/* Left Column - Main Content */}
            <motion.div
              className="lg:col-span-7 text-center lg:text-left hero-left-column"
              style={{ y: textY, scale: textScale }}
            >
              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6 lg:mb-8 xl:mb-12 hero-spacing mt-4 lg:mt-6 xl:mt-8"
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-display mb-3 lg:mb-4 xl:mb-6">
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
              </motion.div>

              {/* Animated Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6 lg:mb-8 xl:mb-12 hero-spacing"
              >
                <div className="card-brutal inline-block px-4 py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-title text-black">
                    {mounted ? displayText : texts[0]}
                    {mounted && <span className="animate-pulse">|</span>}
                  </h2>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-8 lg:mb-12 xl:mb-16 max-w-2xl hero-spacing"
              >
                <div className="glass-card hero-glass-card">
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-8 justify-center lg:justify-start items-center hero-buttons mb-6 lg:mb-8 xl:mb-12"
              >
                <HeroButtons />
              </motion.div>
            </motion.div>

            {/* Right Column - Floating Elements */}
            <motion.div
              className="lg:col-span-5 relative h-64 sm:h-80 lg:h-96 xl:h-auto hero-right-column"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Design Philosophy Quote */}
              <div className="relative w-full h-full flex items-center justify-center hero-content">
                <motion.div
                  className="text-center max-w-sm sm:max-w-md lg:max-w-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <div className="relative">
                    {/* Quote Mark */}
                    <motion.div
                      className="absolute -top-4 -left-2 lg:-top-6 lg:-left-3 xl:-top-8 xl:-left-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white/20 font-serif hero-quote-marks"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      &ldquo;
                    </motion.div>

                    <blockquote className="text-base sm:text-lg lg:text-xl xl:text-2xl font-light text-white/90 mb-3 lg:mb-4 xl:mb-6 leading-relaxed relative z-10 hero-quote">
                      If I had an hour to solve a problem I&apos;d spend 55
                      minutes thinking about the problem and 5 minutes thinking
                      about solutions.
                    </blockquote>

                    {/* Closing Quote Mark */}
                    <motion.div
                      className="absolute -bottom-4 -right-2 lg:-bottom-6 lg:-right-3 xl:-bottom-8 xl:-right-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white/20 font-serif hero-quote-marks"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                    >
                      &rdquo;
                    </motion.div>
                  </div>

                  <motion.div
                    className="flex items-center justify-center space-x-2 lg:space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    <div className="w-4 h-px lg:w-6 xl:w-8 bg-white/40"></div>
                    <cite className="text-xs lg:text-sm text-white/60 font-medium tracking-wide uppercase hero-attribution">
                      Albert Einstein
                    </cite>
                    <div className="w-4 h-px lg:w-6 xl:w-8 bg-white/40"></div>
                  </motion.div>
                </motion.div>

                {/* Floating Design Elements */}
                <div className="absolute inset-0 pointer-events-none floating-process-elements">
                  {[
                    { name: "Research", delay: 1.4 },
                    { name: "Design", delay: 1.6 },
                    { name: "Build", delay: 1.8 },
                    { name: "Test", delay: 2.0 },
                    { name: "Iterate", delay: 2.2 },
                    { name: "Launch", delay: 2.4 },
                  ].map((element, i) => (
                    <motion.div
                      key={element.name}
                      className="absolute"
                      style={{
                        left: `${15 + ((i * 18) % 70)}%`,
                        top: `${25 + ((i * 15) % 50)}%`,
                      }}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{
                        opacity: [0, 0.8, 0.6, 0.8],
                        scale: [0, 1.1, 1, 1.05],
                        rotate: [-180, 0, 2, 0],
                        y: [0, -15, 0, -8],
                      }}
                      transition={{
                        duration: 4,
                        delay: element.delay,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    >
                      <div className="relative group">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/5 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/50 group-hover:scale-110">
                          <span className="text-xs sm:text-sm text-white/70 font-medium tracking-wider">
                            {element.name.charAt(0)}
                          </span>
                        </div>
                        <motion.div
                          className="absolute -bottom-4 lg:-bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white/50 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                          initial={{ y: 5 }}
                          animate={{ y: 0 }}
                        >
                          {element.name}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Sophisticated Background Pattern */}
                <div className="absolute inset-0 opacity-5 hero-background-pattern">
                  <div className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-white/30 rounded-full" />
                  <div className="absolute bottom-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/30 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border border-white/30 rounded-full" />
                  <div className="absolute top-1/3 right-1/3 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border border-white/20 rounded-full" />
                  <div className="absolute bottom-1/3 left-1/3 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border border-white/20 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none floating-elements">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-4 lg:bottom-6 xl:bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator"
      >
        <div className="flex flex-col items-center">
          <span className="text-caption text-white/60 mb-2 lg:mb-3">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-8 sm:w-7 sm:h-10 lg:w-8 lg:h-12 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 sm:h-3 lg:h-4 bg-white/60 rounded-full mt-2 lg:mt-3"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

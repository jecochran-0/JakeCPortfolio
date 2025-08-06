"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import DynamicTextAnimation from "./DynamicTextAnimation";

function Hero() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [contentVisible, setContentVisible] = useState(false);
  const [isFastForwarding, setIsFastForwarding] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [deviceType, setDeviceType] = useState("desktop");
  const [isLowPower, setIsLowPower] = useState(false);

  // Check for mobile device and performance capabilities
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkDevice = () => {
      const width = window.innerWidth;
      const isSmallMobile = width <= 375;
      const isMediumMobile = width <= 480;
      const isLargeMobile = width <= 768;

      // Check for low power devices
      const isLowPowerDevice =
        width <= 480 ||
        navigator.hardwareConcurrency <= 4 ||
        /Android|iPhone|iPad|iPod/.test(navigator.userAgent);

      setIsLowPower(isLowPowerDevice);

      if (isSmallMobile) {
        setDeviceType("small-mobile");
      } else if (isMediumMobile) {
        setDeviceType("medium-mobile");
      } else if (isLargeMobile) {
        setDeviceType("large-mobile");
      } else {
        setDeviceType("desktop");
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice, { passive: true });

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Handle video end event
  const handleVideoEnded = useCallback(() => {
    setContentVisible(true);
    setIsFastForwarding(false);

    if (videoRef.current) {
      videoRef.current.pause();
      try {
        videoRef.current.currentTime = videoRef.current.duration;
      } catch {
        // Ignore errors
      }
    }
  }, []);

  // Get object position based on device type
  const getObjectPosition = useCallback(() => {
    switch (deviceType) {
      case "small-mobile":
        return "52% center";
      case "medium-mobile":
        return "54% center";
      case "large-mobile":
        return "57% center";
      default:
        return "center";
    }
  }, [deviceType]);

  // Handle click on video to fast forward or skip
  const handleVideoClick = useCallback(() => {
    if (videoRef.current && !contentVisible && !isFastForwarding) {
      setIsFastForwarding(true);

      // For low power devices, skip video entirely
      if (isLowPower) {
        handleVideoEnded();
        return;
      }

      // Mobile-friendly approach - just skip to the end
      if (deviceType !== "desktop") {
        if (videoRef.current.duration) {
          videoRef.current.currentTime = videoRef.current.duration - 0.1;
        } else {
          handleVideoEnded();
        }
        return;
      }

      // For desktop, try to speed up first
      try {
        try {
          videoRef.current.playbackRate = 4.0;
        } catch {
          if (videoRef.current.duration) {
            videoRef.current.currentTime = videoRef.current.duration - 0.5;
          } else {
            handleVideoEnded();
          }
        }
      } catch {
        handleVideoEnded();
      }
    }
  }, [
    contentVisible,
    isFastForwarding,
    isLowPower,
    deviceType,
    handleVideoEnded,
  ]);

  // Handle video loaded data
  const handleVideoLoaded = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  // Handle time update to ensure fast-forwarding works on mobile
  const handleTimeUpdate = useCallback(() => {
    if (isFastForwarding && videoRef.current) {
      if (videoRef.current.currentTime >= videoRef.current.duration - 0.2) {
        handleVideoEnded();
      }
    }
  }, [isFastForwarding, handleVideoEnded]);

  // Start playing video when component mounts
  useEffect(() => {
    setContentVisible(false);

    // For low power devices, skip video entirely
    if (isLowPower) {
      setContentVisible(true);
      return;
    }

    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", handleVideoLoaded, {
        passive: true,
      });
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate, {
        passive: true,
      });

      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started successfully
          })
          .catch((error) => {
            console.log("Autoplay prevented:", error);
            setContentVisible(true);
          });
      }
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadeddata", handleVideoLoaded);
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        videoRef.current.pause();
      }
    };
  }, [isLowPower, handleVideoLoaded, handleTimeUpdate]);

  return (
    <div className="hero-video-container bg-white" ref={containerRef}>
      {/* Video background - only show if not low power device */}
      {!isLowPower && (
        <video
          ref={videoRef}
          className={`hero-video ${isFastForwarding ? "fast-forwarding" : ""} ${
            deviceType !== "desktop" ? `mobile-hero-video ${deviceType}` : ""
          }`}
          src="/HeroScreen.mp4"
          muted
          playsInline
          preload="auto"
          onClick={handleVideoClick}
          onEnded={handleVideoEnded}
          style={{
            objectFit: "cover",
            objectPosition: getObjectPosition(),
          }}
        />
      )}

      {/* Skip indicator - only shown during video playback and when video is loaded */}
      {!contentVisible && videoLoaded && !isLowPower && (
        <div
          className={`absolute right-4 bottom-8 bg-black/70 text-white text-xs px-3 py-1 rounded-full z-10 ${
            isFastForwarding ? "pulse-fast-forward" : "pulse-skip"
          }`}
        >
          {isFastForwarding ? "Playing at 4x speed..." : "Tap to fast forward"}
        </div>
      )}

      {/* Dynamic Content overlay - hidden until video ends */}
      <div
        className={`hero-content px-4 sm:px-6 md:px-8 ${
          contentVisible ? "fade-in-content" : "opacity-0 pointer-events-none"
        }`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center mobile-hero-content">
          {/* Dynamic Text Animation */}
          <DynamicTextAnimation />

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{
              duration: isLowPower ? 0.3 : 0.8,
              delay: isLowPower ? 0.1 : 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex flex-wrap gap-4 justify-center mt-12"
          >
            <motion.button
              whileHover={{
                scale: isLowPower ? 1 : 1.05,
                y: isLowPower ? 0 : -2,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "9999px",
                fontWeight: "600",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                letterSpacing: "0.025em",
                willChange: "transform",
              }}
              onClick={() => (window.location.href = "/ux-ui")}
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{
                scale: isLowPower ? 1 : 1.05,
                y: isLowPower ? 0 : -2,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                background: "white",
                color: "#374151",
                padding: "1rem 2rem",
                borderRadius: "9999px",
                fontWeight: "600",
                border: "2px solid #d1d5db",
                letterSpacing: "0.025em",
                willChange: "transform",
              }}
              onClick={() =>
                window.open("mailto:jake.e.cochran@gmail.com", "_blank")
              }
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

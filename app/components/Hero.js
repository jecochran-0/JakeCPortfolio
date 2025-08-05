"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import DynamicTextAnimation from "./DynamicTextAnimation";

function Hero() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [contentVisible, setContentVisible] = useState(false);
  const [isFastForwarding, setIsFastForwarding] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [deviceType, setDeviceType] = useState("desktop");

  // Check for mobile device on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkDevice = () => {
      const width = window.innerWidth;
      const isSmallMobile = width <= 375;
      const isMediumMobile = width <= 480;
      const isLargeMobile = width <= 768;

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

    // Initial check
    checkDevice();

    // Listen for resize events
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Handle video end event
  const handleVideoEnded = () => {
    // Show content when video ends
    setContentVisible(true);
    setIsFastForwarding(false);

    // Freeze on the last frame
    if (videoRef.current) {
      videoRef.current.pause();

      // Ensure video is fully stopped
      try {
        // Some browsers may need this to fully stop
        videoRef.current.currentTime = videoRef.current.duration;
      } catch {
        // Ignore errors
      }
    }
  };

  // Get object position based on device type
  const getObjectPosition = () => {
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
  };

  // Handle click on video to fast forward or skip
  const handleVideoClick = () => {
    if (videoRef.current && !contentVisible && !isFastForwarding) {
      setIsFastForwarding(true);

      // Mobile-friendly approach - just skip to the end
      if (deviceType !== "desktop") {
        // For mobile devices, just skip to near the end
        if (videoRef.current.duration) {
          videoRef.current.currentTime = videoRef.current.duration - 0.1;
        } else {
          // If duration isn't available, just show content directly
          handleVideoEnded();
        }
        return;
      }

      // For desktop, try to speed up first
      try {
        // Try to speed up the video by 4x
        try {
          videoRef.current.playbackRate = 4.0;
        } catch (error) {
          console.log("Error setting playback rate:", error);
          // Fallback: skip to near the end if playback rate change fails
          if (videoRef.current.duration) {
            videoRef.current.currentTime = videoRef.current.duration - 0.5;
          } else {
            // If duration isn't available, just show content
            handleVideoEnded();
          }
        }
      } catch (error) {
        console.log("Video interaction error:", error);
        // Final fallback - just show the content
        handleVideoEnded();
      }
    }
  };

  // Handle video loaded data
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  // Handle time update to ensure fast-forwarding works on mobile
  const handleTimeUpdate = () => {
    if (isFastForwarding && videoRef.current) {
      // If we're near the end of the video while fast-forwarding, end it
      if (videoRef.current.currentTime >= videoRef.current.duration - 0.2) {
        handleVideoEnded();
      }
    }
  };

  // Start playing video when component mounts
  useEffect(() => {
    // Start with content hidden
    setContentVisible(false);

    if (videoRef.current) {
      // Add event listeners
      videoRef.current.addEventListener("loadeddata", handleVideoLoaded);
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);

      // Play the video when it's available
      const playPromise = videoRef.current.play();

      // Handle play promise (required for some browsers)
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started successfully
            // Content should remain hidden until video ends
          })
          .catch((error) => {
            // Auto-play was prevented, show content instead
            console.log("Autoplay prevented:", error);
            setContentVisible(true);
          });
      }
    }

    // Clean up
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadeddata", handleVideoLoaded);
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        videoRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="hero-video-container bg-white" ref={containerRef}>
      {/* Video background */}
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

      {/* Skip indicator - only shown during video playback and when video is loaded */}
      {!contentVisible && videoLoaded && (
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
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "9999px",
                fontWeight: "600",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }}
              onClick={() => (window.location.href = "/ux-ui")}
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "white",
                color: "#374151",
                padding: "1rem 2rem",
                borderRadius: "9999px",
                fontWeight: "600",
                border: "2px solid #d1d5db",
                transition: "all 0.3s ease",
              }}
              onClick={() => (window.location.href = "/ux-ui")}
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

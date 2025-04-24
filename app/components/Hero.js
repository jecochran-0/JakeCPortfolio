"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

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

  // Start playing video when component mounts
  useEffect(() => {
    // Start with content hidden
    setContentVisible(false);

    if (videoRef.current) {
      // Add loaded data event listener
      videoRef.current.addEventListener("loadeddata", handleVideoLoaded);

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

      {/* Content overlay - hidden until video ends */}
      <div
        className={`hero-content px-4 sm:px-6 md:px-8 ${
          contentVisible ? "fade-in-content" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center max-w-3xl mx-auto text-center mobile-hero-content">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black mb-4">
            I&apos;m Jake Cochran
          </h1>

          <div className="flex items-center justify-center mb-8">
            <span className="text-2xl sm:text-3xl text-blue-500 font-medium">
              UX/UI Designer
            </span>
            <span className="mx-4 text-xl text-gray-500">|</span>
            <span className="text-2xl sm:text-3xl text-blue-500 font-medium">
              Software Developer
            </span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link
              href="/about"
              className="px-6 py-3 bg-white border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors duration-300"
            >
              About Me
            </Link>
            <Link
              href="mailto:jake.e.cochran@gmail.com"
              className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState({ x: 0, y: 0 });
  const [isSupported, setIsSupported] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const requestRef = useRef();
  const lastUpdateRef = useRef(0);
  const orientationRef = useRef({ x: 0, y: 0 });
  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchCenterRef = useRef({ x: 0, y: 0 });

  // Check if device orientation is supported
  const checkSupport = useCallback(() => {
    if (typeof window === "undefined") return false;

    const isMobileDevice = window.innerWidth <= 768;
    const hasOrientation = !!window.DeviceOrientationEvent;
    const hasTouch = "ontouchstart" in window;

    // Debug logging
    console.log("Device Orientation Check:", {
      isMobileDevice,
      hasOrientation,
      hasTouch,
      windowWidth: window.innerWidth,
      userAgent: navigator.userAgent,
    });

    setIsMobile(isMobileDevice);
    setIsSupported(hasOrientation || hasTouch);

    return isMobileDevice && (hasOrientation || hasTouch);
  }, []);

  // Handle device orientation events
  const handleOrientation = useCallback(
    (event) => {
      if (!isMobile || !isActive) return;

      const now = performance.now();
      if (now - lastUpdateRef.current < 16) return; // Throttle to ~60fps

      lastUpdateRef.current = now;

      // Normalize beta (front-to-back tilt) and gamma (left-to-right tilt)
      const beta = event.beta || 0;
      const gamma = event.gamma || 0;

      // Convert to -1 to 1 range with smoothing
      const x = Math.max(-1, Math.min(1, (gamma / 45) * 0.8));
      const y = Math.max(-1, Math.min(1, ((beta - 45) / 45) * 0.8));

      // Apply low-pass filter for smooth movement
      orientationRef.current.x = orientationRef.current.x * 0.7 + x * 0.3;
      orientationRef.current.y = orientationRef.current.y * 0.7 + y * 0.3;

      setOrientation({
        x: orientationRef.current.x,
        y: orientationRef.current.y,
      });
    },
    [isMobile, isActive]
  );

  // Handle touch movement as fallback
  const handleTouchStart = useCallback(
    (event) => {
      if (!isMobile || !isActive || !event.touches[0]) return;

      const touch = event.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };

      // Calculate screen center
      touchCenterRef.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
    },
    [isMobile, isActive]
  );

  const handleTouchMove = useCallback(
    (event) => {
      if (!isMobile || !isActive || !event.touches[0]) return;

      const touch = event.touches[0];
      const deltaX = touch.clientX - touchCenterRef.current.x;
      const deltaY = touch.clientY - touchCenterRef.current.y;

      // Normalize to -1 to 1 range
      const x = Math.max(
        -1,
        Math.min(1, (deltaX / (window.innerWidth / 2)) * 0.5)
      );
      const y = Math.max(
        -1,
        Math.min(1, (deltaY / (window.innerHeight / 2)) * 0.5)
      );

      // Apply smoothing
      orientationRef.current.x = orientationRef.current.x * 0.8 + x * 0.2;
      orientationRef.current.y = orientationRef.current.y * 0.8 + y * 0.2;

      setOrientation({
        x: orientationRef.current.x,
        y: orientationRef.current.y,
      });
    },
    [isMobile, isActive]
  );

  // Request device orientation permission
  const requestPermission = useCallback(async () => {
    if (typeof window === "undefined" || !window.DeviceOrientationEvent) return;

    try {
      // Request permission for iOS 13+
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        const permission = await DeviceOrientationEvent.requestPermission();
        if (permission === "granted") {
          setIsActive(true);
        }
      } else {
        // For devices that don't require permission
        setIsActive(true);
      }
    } catch (error) {
      console.log("Device orientation permission denied or not supported");
      // Fall back to touch-based movement
      setIsActive(true);
    }
  }, []);

  // Setup event listeners
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasSupport = checkSupport();
    if (!hasSupport) return;

    // Request permission and setup listeners
    requestPermission();

    // Add event listeners
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation, {
        passive: true,
      });
    }

    if ("ontouchstart" in window) {
      window.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
    }

    // Cleanup
    return () => {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
      if ("ontouchstart" in window) {
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [
    checkSupport,
    requestPermission,
    handleOrientation,
    handleTouchStart,
    handleTouchMove,
  ]);

  // Handle window resize
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const hasSupport = checkSupport();
      if (!hasSupport) {
        setIsActive(false);
        setOrientation({ x: 0, y: 0 });
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [checkSupport]);

  return {
    orientation,
    isSupported,
    isActive,
    isMobile,
    requestPermission,
  };
};

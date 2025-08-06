"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/**
 * A hook to throttle expensive calculations with improved memory management
 */
export function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastUpdated = useRef(Date.now());
  const timeoutRef = useRef(null);

  useEffect(() => {
    const now = Date.now();
    const shouldUpdate = now - lastUpdated.current >= delay;

    if (shouldUpdate) {
      setThrottledValue(value);
      lastUpdated.current = now;
    } else {
      // Clear existing timeout to prevent memory leaks
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setThrottledValue(value);
        lastUpdated.current = Date.now();
      }, delay - (now - lastUpdated.current));
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay]);

  return throttledValue;
}

/**
 * A hook for implementing Intersection Observer with performance optimizations
 */
export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef(null);
  const observerRef = useRef(null);

  const callback = useCallback(
    (entries) => {
      const [entry] = entries;
      setIsInView(entry.isIntersecting);

      if (entry.isIntersecting && !hasBeenInView) {
        setHasBeenInView(true);
      }
    },
    [hasBeenInView]
  );

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      // Clean up existing observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(callback, {
        root: options.root || null,
        rootMargin: options.rootMargin || "0px",
        threshold: options.threshold || 0.1,
      });

      observerRef.current.observe(currentRef);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [callback, options.root, options.rootMargin, options.threshold]);

  return { ref, isInView, hasBeenInView };
}

/**
 * A hook to dynamically load heavy resources only when needed
 */
export function useDynamicLoading(callback, dependencies = []) {
  const hasLoaded = useRef(false);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!hasLoaded.current && isMounted.current) {
      callback();
      hasLoaded.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return hasLoaded.current;
}

/**
 * Optimized animation variants for better performance
 */
export const optimizedAnimationVariants = {
  // Container variants for staggered animations
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, // Further reduced for better performance
        delayChildren: 0.03, // Further reduced for better performance
      },
    },
  },

  // Card/item variants
  item: {
    hidden: { opacity: 0, y: 12 }, // Reduced movement
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Further reduced duration
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Skill item variants
  skillItem: {
    hidden: { opacity: 0, x: -2 }, // Reduced movement
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2, // Further reduced duration
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Fade in variants
  fadeIn: {
    hidden: { opacity: 0, y: 8 }, // Reduced movement
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35, // Reduced duration
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
};

/**
 * Get optimized viewport settings for better performance
 */
export function getOptimizedViewport(deviceType = "desktop") {
  const isMobile = deviceType !== "desktop";

  return {
    once: true,
    margin: isMobile ? "-30px" : "-50px", // Reduced margin for better performance
    amount: isMobile ? 0.2 : 0.3, // Reduced amount for better performance
  };
}

/**
 * Split animations into chunks for better performance
 */
export function getStaggeredAnimationProps(
  index,
  baseDelay = 0.03, // Further reduced from 0.05
  staggerBy = 0.02 // Further reduced from 0.03
) {
  return {
    initial: { opacity: 0, y: 8 }, // Reduced movement
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.3, // Further reduced from 0.35
      delay: baseDelay + index * staggerBy,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
    // Use hardware acceleration for animations
    style: { willChange: "opacity, transform" },
  };
}

/**
 * Custom hook for progressive image loading with better memory management
 */
export function useProgressiveImage(lowQualitySrc, highQualitySrc) {
  const [src, setSrc] = useState(lowQualitySrc || highQualitySrc);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (highQualitySrc && isMounted.current) {
      const img = new Image();
      img.src = highQualitySrc;
      img.onload = () => {
        if (isMounted.current) {
          setSrc(highQualitySrc);
        }
      };
      img.onerror = () => {
        // Fallback to low quality if high quality fails
        if (isMounted.current && lowQualitySrc) {
          setSrc(lowQualitySrc);
        }
      };
    }
  }, [highQualitySrc, lowQualitySrc]);

  return src;
}

/**
 * Performance monitoring utilities
 */
export const performanceUtils = {
  // Check if device is low power
  isLowPowerDevice: () => {
    if (typeof window === "undefined") return false;

    return (
      window.innerWidth <= 480 ||
      navigator.hardwareConcurrency <= 4 ||
      /Android|iPhone|iPad|iPod/.test(navigator.userAgent)
    );
  },

  // Check if device supports reduced motion
  prefersReducedMotion: () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  },

  // Get optimized animation settings based on device capabilities
  getAnimationSettings: () => {
    const isLowPower = performanceUtils.isLowPowerDevice();
    const prefersReduced = performanceUtils.prefersReducedMotion();

    if (prefersReduced) {
      return {
        duration: 0.1,
        ease: "easeOut",
        disableComplex: true,
      };
    }

    if (isLowPower) {
      return {
        duration: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94],
        disableComplex: true,
      };
    }

    return {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
      disableComplex: false,
    };
  },
};

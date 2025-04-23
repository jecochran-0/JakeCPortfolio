"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/**
 * A hook to throttle expensive calculations
 */
export function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastUpdated = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();
    const shouldUpdate = now - lastUpdated.current >= delay;

    if (shouldUpdate) {
      setThrottledValue(value);
      lastUpdated.current = now;
    } else {
      const timerId = setTimeout(() => {
        setThrottledValue(value);
        lastUpdated.current = Date.now();
      }, delay - (now - lastUpdated.current));

      return () => clearTimeout(timerId);
    }
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
    const observer = new IntersectionObserver(callback, {
      root: options.root || null,
      rootMargin: options.rootMargin || "0px",
      threshold: options.threshold || 0.1,
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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

  useEffect(() => {
    if (!hasLoaded.current) {
      callback();
      hasLoaded.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return hasLoaded.current;
}

/**
 * Custom hook for progressive image loading
 */
export function useProgressiveImage(lowQualitySrc, highQualitySrc) {
  const [src, setSrc] = useState(lowQualitySrc || highQualitySrc);

  useEffect(() => {
    if (highQualitySrc) {
      const img = new Image();
      img.src = highQualitySrc;
      img.onload = () => {
        setSrc(highQualitySrc);
      };
    }
  }, [highQualitySrc]);

  return src;
}

/**
 * Memoize expensive calculations
 */
export function memoizeCalculation(calculation) {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = calculation(...args);
    cache.set(key, result);
    return result;
  };
}

/**
 * Deferred operations until browser is idle
 */
export function scheduleIdleTask(task, timeout = 2000) {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(
        () => {
          const result = task();
          resolve(result);
        },
        { timeout }
      );
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(() => {
        const result = task();
        resolve(result);
      }, 1);
    }
  });
}

/**
 * Split animations into chunks for better performance
 */
export function getStaggeredAnimationProps(
  index,
  baseDelay = 0.1,
  staggerBy = 0.05
) {
  return {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.4,
      delay: baseDelay + index * staggerBy,
      ease: [0.25, 0.1, 0.25, 1], // Custom easing for better performance
    },
    // Use hardware acceleration for animations
    style: { willChange: "opacity, transform" },
  };
}

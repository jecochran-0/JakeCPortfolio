// Mobile-specific optimization utilities

// Device capability detection
export const getDeviceCapabilities = () => {
  if (typeof window === "undefined") {
    return {
      isMobile: false,
      isLowPower: false,
      isTouchDevice: false,
      hasReducedMotion: false,
      screenSize: "desktop",
    };
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const isMobileDevice = width <= 768;
  const isLowPowerDevice =
    width <= 480 ||
    height <= 600 ||
    navigator.hardwareConcurrency <= 4 ||
    /Android|iPhone|iPad|iPod/.test(navigator.userAgent);
  const hasReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let screenSize = "desktop";
  if (width <= 480) screenSize = "small-mobile";
  else if (width <= 768) screenSize = "mobile";
  else if (width <= 1024) screenSize = "tablet";

  return {
    isMobile: isMobileDevice,
    isLowPower: isLowPowerDevice,
    isTouchDevice,
    hasReducedMotion,
    screenSize,
    width,
    height,
    hardwareConcurrency: navigator.hardwareConcurrency || 4,
  };
};

// Mobile-optimized animation variants
export const getMobileAnimationVariants = (capabilities) => {
  const { isMobile, isLowPower, hasReducedMotion } = capabilities;

  // Base timing for different device types
  const getTiming = () => {
    if (hasReducedMotion) return { duration: 0.1, ease: "easeOut" };
    if (isLowPower) return { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] };
    if (isMobile) return { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] };
    return { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] };
  };

  const timing = getTiming();

  return {
    // Fade in/out variants
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: timing },
      exit: {
        opacity: 0,
        transition: { ...timing, duration: timing.duration * 0.5 },
      },
    },

    // Slide up variants
    slideUp: {
      initial: { opacity: 0, y: isLowPower ? 10 : isMobile ? 8 : 5 },
      animate: { opacity: 1, y: 0, transition: timing },
      exit: {
        opacity: 0,
        y: isLowPower ? -10 : isMobile ? -8 : -5,
        transition: { ...timing, duration: timing.duration * 0.5 },
      },
    },

    // Scale variants
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1, transition: timing },
      exit: {
        opacity: 0,
        scale: 0.95,
        transition: { ...timing, duration: timing.duration * 0.5 },
      },
    },

    // Hover variants
    hover: {
      hover: {
        scale: hasReducedMotion
          ? 1
          : isLowPower
          ? 1.02
          : isMobile
          ? 1.05
          : 1.08,
        transition: { duration: timing.duration * 0.5, ease: timing.ease },
      },
      tap: {
        scale: hasReducedMotion
          ? 1
          : isLowPower
          ? 0.98
          : isMobile
          ? 0.95
          : 0.92,
        transition: { duration: timing.duration * 0.25, ease: timing.ease },
      },
    },

    // Stagger variants
    stagger: {
      container: {
        animate: {
          transition: {
            staggerChildren: hasReducedMotion
              ? 0
              : isLowPower
              ? 0.1
              : isMobile
              ? 0.05
              : 0.03,
            delayChildren: hasReducedMotion
              ? 0
              : isLowPower
              ? 0.1
              : isMobile
              ? 0.05
              : 0.02,
          },
        },
      },
      item: {
        initial: { opacity: 0, y: isLowPower ? 10 : isMobile ? 8 : 5 },
        animate: { opacity: 1, y: 0, transition: timing },
      },
    },
  };
};

// Mobile-optimized transition configurations
export const getMobileTransitionConfig = (capabilities) => {
  const { isMobile, isLowPower, hasReducedMotion } = capabilities;

  if (hasReducedMotion) {
    return {
      duration: 0.1,
      ease: "easeOut",
      type: "tween",
    };
  }

  if (isLowPower) {
    return {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "tween",
    };
  }

  if (isMobile) {
    return {
      duration: 0.25,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "tween",
    };
  }

  return {
    duration: 0.2,
    ease: [0.25, 0.46, 0.45, 0.94],
    type: "spring",
    stiffness: 400,
    damping: 25,
  };
};

// Mobile-specific style optimizations
export const getMobileStyles = (capabilities) => {
  const { isMobile, isLowPower, hasReducedMotion } = capabilities;

  const baseStyles = {
    willChange: "transform, opacity",
    transform: "translateZ(0)",
  };

  if (hasReducedMotion) {
    return {
      ...baseStyles,
      willChange: "opacity",
      transform: "none",
    };
  }

  if (isLowPower) {
    return {
      ...baseStyles,
      willChange: "opacity, transform",
    };
  }

  if (isMobile) {
    return {
      ...baseStyles,
      willChange: "transform, opacity",
    };
  }

  return baseStyles;
};

// Performance monitoring for mobile
export const monitorMobilePerformance = (capabilities) => {
  if (typeof window === "undefined" || !capabilities.isMobile) return;

  // Monitor frame rate
  let frameCount = 0;
  let lastTime = performance.now();

  const measureFrameRate = () => {
    frameCount++;
    const currentTime = performance.now();

    if (currentTime - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));

      if (fps < 30 && capabilities.isLowPower) {
        console.warn("Low frame rate detected on mobile device:", fps, "fps");
        // Could trigger additional optimizations here
      }

      frameCount = 0;
      lastTime = currentTime;
    }

    requestAnimationFrame(measureFrameRate);
  };

  requestAnimationFrame(measureFrameRate);

  // Monitor memory usage
  if ("memory" in performance) {
    setInterval(() => {
      const memory = performance.memory;
      const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
      const totalMB = Math.round(memory.totalJSHeapSize / 1048576);

      if (usedMB > totalMB * 0.8) {
        console.warn(
          "High memory usage detected:",
          usedMB,
          "MB /",
          totalMB,
          "MB"
        );
      }
    }, 5000);
  }
};

// Mobile-specific event optimizations
export const optimizeMobileEvents = (capabilities) => {
  if (typeof window === "undefined" || !capabilities.isMobile) return;

  // Optimize touch events
  const optimizeTouchEvents = () => {
    // Prevent double-tap zoom on mobile
    let lastTouchEnd = 0;
    document.addEventListener(
      "touchend",
      (event) => {
        const now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      },
      false
    );

    // Optimize scroll performance
    document.addEventListener(
      "touchmove",
      (event) => {
        if (event.scale !== 1) {
          event.preventDefault();
        }
      },
      { passive: false }
    );
  };

  // Optimize scroll events
  const optimizeScrollEvents = () => {
    let ticking = false;
    let rafId = null;

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          // Handle scroll optimizations here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  };

  optimizeTouchEvents();
  return optimizeScrollEvents();
};

// Mobile animation simplification
export const simplifyAnimationsForMobile = (capabilities) => {
  if (typeof document === "undefined") return;

  const { isMobile, isLowPower, hasReducedMotion } = capabilities;

  if (hasReducedMotion || isLowPower) {
    // Add CSS to disable complex animations
    const style = document.createElement("style");
    style.textContent = `
      * {
        animation-duration: 0.1s !important;
        transition-duration: 0.1s !important;
      }
      
      .float, .morph, .pulse-glow, .shimmer, .particle, 
      .animated-gradient, .animated-gradient-slow {
        animation: none !important;
      }
      
      .card-hover:hover, .nav-link:hover, .glass:hover {
        transform: none !important;
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(style);
  } else if (isMobile) {
    // Add mobile-specific optimizations
    const style = document.createElement("style");
    style.textContent = `
      * {
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000px;
      }
      
      .float, .morph, .pulse-glow, .shimmer, .particle {
        animation: none;
      }
      
      .animated-gradient, .animated-gradient-slow {
        animation: none;
      }
    `;
    document.head.appendChild(style);
  }
};

// Initialize mobile optimizations
export const initMobileOptimizations = () => {
  const capabilities = getDeviceCapabilities();

  // Monitor performance
  monitorMobilePerformance(capabilities);

  // Optimize events
  const cleanupScrollEvents = optimizeMobileEvents(capabilities);

  // Simplify animations
  simplifyAnimationsForMobile(capabilities);

  // Return cleanup function
  return () => {
    if (cleanupScrollEvents) {
      cleanupScrollEvents();
    }
  };
};

// Export device capabilities for use in components
export const useDeviceCapabilities = () => {
  if (typeof window === "undefined") {
    return getDeviceCapabilities();
  }

  // This would be used in a React component with useState and useEffect
  // For now, return the current capabilities
  return getDeviceCapabilities();
};

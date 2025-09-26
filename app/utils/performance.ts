// Performance optimization utilities

// Throttle function for scroll events
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): T => {
  let inThrottle: boolean;
  return ((...args: unknown[]) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }) as T;
};

// Debounce function for resize events
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): T => {
  let timeout: NodeJS.Timeout;
  return ((...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  }) as T;
};

// RAF throttling for smooth animations
export const rafThrottle = <T extends (...args: unknown[]) => unknown>(func: T): T => {
  let ticking = false;

  return ((...args: unknown[]) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        func.apply(this, args);
        ticking = false;
      });
      ticking = true;
    }
  }) as T;
};

// Optimized scroll handler
export const createOptimizedScrollHandler = (
  callback: (scrollY: number) => void
) => {
  return rafThrottle(() => {
    callback(window.scrollY);
  });
};

// Optimized resize handler
export const createOptimizedResizeHandler = (
  callback: (width: number, height: number) => void
) => {
  return debounce(() => {
    callback(window.innerWidth, window.innerHeight);
  }, 100);
};

// Check if element is in viewport
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Intersection Observer for performance
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Preload critical resources
export const preloadResource = (href: string, as: string) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Optimize images for performance
export const optimizeImage = (
  src: string,
  width: number,
  quality: number = 75
) => {
  // Add image optimization parameters
  const url = new URL(src, window.location.origin);
  url.searchParams.set("w", width.toString());
  url.searchParams.set("q", quality.toString());
  return url.toString();
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window !== "undefined" && "performance" in window) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start}ms`);
  } else {
    fn();
  }
};

// Memory optimization
export const cleanupEventListeners = (
  element: Element | Window,
  event: string,
  handler: EventListener
) => {
  element.removeEventListener(event, handler);
};

// Batch DOM updates
export const batchDOMUpdates = (updates: (() => void)[]) => {
  requestAnimationFrame(() => {
    updates.forEach((update) => update());
  });
};

// Optimize for mobile performance
export const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;

  return (
    window.innerWidth <= 768 ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  );
};

// Reduce motion preference
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Optimize animations based on device capabilities
export const shouldReduceAnimations = (): boolean => {
  return isMobileDevice() || prefersReducedMotion();
};

// Performance budget utilities
export const checkPerformanceBudget = (
  metric: string,
  value: number,
  budget: number
): boolean => {
  const isWithinBudget = value <= budget;

  if (!isWithinBudget) {
    console.warn(
      `Performance budget exceeded for ${metric}: ${value}ms (budget: ${budget}ms)`
    );
  }

  return isWithinBudget;
};

// Optimize CSS animations
export const optimizeAnimations = () => {
  if (shouldReduceAnimations()) {
    document.documentElement.style.setProperty("--animation-duration", "0.1s");
    document.documentElement.style.setProperty("--transition-duration", "0.1s");
  }
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  // Optimize animations based on device capabilities
  optimizeAnimations();

  // Preload critical resources
  if (typeof window !== "undefined") {
    preloadResource("/HeroScreen.mp4", "video");
  }

  // Add performance monitoring
  if (typeof window !== "undefined" && "performance" in window) {
    window.addEventListener("load", () => {
      const loadTime =
        performance.timing.loadEventEnd - performance.timing.navigationStart;
      checkPerformanceBudget("Page Load Time", loadTime, 3000);
    });
  }
};

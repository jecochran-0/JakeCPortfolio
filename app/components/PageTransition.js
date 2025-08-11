"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, createContext, useContext } from "react";

// Navigation Context for handling smooth transitions
const NavigationContext = createContext({
  isNavigating: false,
  navigate: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

export function NavigationProvider({ children }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const [pendingPath, setPendingPath] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const navigate = (path) => {
    if (path === pathname) return; // Don't navigate to same page

    setIsNavigating(true);
    setPendingPath(path);

    // Start navigation after transition overlay appears
    setTimeout(() => {
      router.push(path);
    }, 200); // Small delay to ensure overlay is visible
  };

  // Reset navigation state when route actually changes
  useEffect(() => {
    if (pendingPath && pathname === pendingPath) {
      const timer = setTimeout(() => {
        setIsNavigating(false);
        setPendingPath(null);
      }, 1200); // Keep transition visible long enough

      return () => clearTimeout(timer);
    }
  }, [pathname, pendingPath]);

  return (
    <NavigationContext.Provider value={{ isNavigating, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

// Custom Link component that uses our navigation system
export function SmoothLink({ href, children, className, ...props }) {
  const { navigate } = useNavigation();
  const pathname = usePathname();

  const handleClick = (e) => {
    e.preventDefault();

    // Handle hash links (same page anchors)
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // Handle external links
    if (
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    ) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    // Handle internal navigation
    if (href !== pathname) {
      navigate(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { isNavigating } = useNavigation();

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle initial page load - optimized timing
  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsLoading(false);
      },
      isMobile ? 1500 : 2000
    ); // Slightly longer for personality

    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <>
      {/* Initial Loading Screen - Neo-Brutalist */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            className="fixed inset-0 z-[80] bg-white flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.1 : isMobile ? 0.6 : 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Brutalist Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Grid Pattern */}
              <div className="absolute inset-0 bg-black/5">
                {[...Array(isMobile ? 8 : 16)].map((_, i) => (
                  <motion.div
                    key={`vertical-${i}`}
                    className="absolute h-full w-[2px] bg-black/10"
                    style={{
                      left: `${(i + 1) * (100 / (isMobile ? 8 : 16))}%`,
                    }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.05,
                      ease: "easeOut",
                    }}
                  />
                ))}
                {[...Array(isMobile ? 6 : 12)].map((_, i) => (
                  <motion.div
                    key={`horizontal-${i}`}
                    className="absolute w-full h-[2px] bg-black/10"
                    style={{ top: `${(i + 1) * (100 / (isMobile ? 6 : 12))}%` }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.07,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>

              {/* Floating Brutalist Elements */}
              {!shouldReduceMotion && (
                <>
                  <motion.div
                    className="absolute top-20 left-20 w-16 h-16 bg-orange-500 border-4 border-black shadow-brutal"
                    initial={{ x: -100, y: -100, rotate: 0 }}
                    animate={{ x: 0, y: 0, rotate: 360 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5,
                      ease: "easeOut",
                    }}
                  />
                  <motion.div
                    className="absolute top-40 right-32 w-12 h-12 bg-black border-4 border-orange-500 shadow-brutal"
                    initial={{ x: 100, y: -100, rotate: 0 }}
                    animate={{ x: 0, y: 0, rotate: -180 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.7,
                      ease: "easeOut",
                    }}
                  />
                  <motion.div
                    className="absolute bottom-32 left-40 w-20 h-8 bg-primary border-4 border-black shadow-brutal"
                    initial={{ x: -100, y: 100, rotate: 0 }}
                    animate={{ x: 0, y: 0, rotate: 45 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.9,
                      ease: "easeOut",
                    }}
                  />
                  <motion.div
                    className="absolute bottom-20 right-20 w-14 h-14 bg-secondary border-4 border-black shadow-brutal rounded-full"
                    initial={{ x: 100, y: 100, scale: 0 }}
                    animate={{ x: 0, y: 0, scale: 1 }}
                    transition={{
                      duration: 1.2,
                      delay: 1.1,
                      ease: "backOut",
                    }}
                  />
                </>
              )}
            </div>

            {/* Central Loading Card - Enhanced Brutalist */}
            <motion.div
              className="relative card-brutal p-8 sm:p-12 md:p-16 text-center max-w-lg mx-4"
              initial={{ scale: 0.8, y: 50, rotate: -5 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.9, y: -30, rotate: 5 }}
              transition={{
                duration: shouldReduceMotion ? 0.1 : isMobile ? 0.7 : 0.9,
                delay: shouldReduceMotion ? 0 : 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Logo/Brand - Brutalist Typography */}
              <motion.div
                className="mb-8 sm:mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0.1 : 0.6,
                  delay: shouldReduceMotion ? 0 : 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-black mb-4 tracking-tight uppercase leading-none">
                  JAKE
                </h1>
                <div className="w-20 h-2 bg-orange-500 mx-auto border-2 border-black shadow-brutal" />
              </motion.div>

              {/* Loading Animation - Brutalist Blocks */}
              <motion.div
                className="flex justify-center items-center space-x-3 sm:space-x-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0.1 : 0.4,
                  delay: shouldReduceMotion ? 0 : 0.8,
                }}
              >
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: [0, -20, 0],
                            transition: {
                              duration: 1.5,
                              repeat: Infinity,
                              delay: index * 0.2,
                              ease: "easeInOut",
                            },
                          }
                    }
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black border-4 border-orange-500 shadow-brutal" />
                    <motion.div
                      className="absolute inset-0 w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 border-4 border-black shadow-brutal"
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              scale: [1, 0.8, 1],
                              opacity: [1, 0.5, 1],
                              transition: {
                                duration: 1.5,
                                repeat: Infinity,
                                delay: index * 0.2,
                                ease: "easeInOut",
                              },
                            }
                      }
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Tagline - Brutalist Style */}
              <motion.p
                className="text-base sm:text-lg font-black text-black uppercase tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0.1 : 0.6,
                  delay: shouldReduceMotion ? 0 : 1.0,
                }}
              >
                Loading Experience
              </motion.p>
            </motion.div>

            {/* Loading Status Card - Bottom Right */}
            <motion.div
              className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-8 sm:right-12 md:right-16"
              initial={{ x: 100, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ x: 50, y: -50, opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.1 : isMobile ? 0.5 : 0.7,
                delay: shouldReduceMotion ? 0 : 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="card-brutal p-4 sm:p-6 bg-orange-500">
                <motion.p
                  className="text-black font-black text-xs sm:text-sm tracking-widest uppercase"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  LOADING
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Transition Screen - Neo-Brutalist */}
      <AnimatePresence mode="wait">
        {isNavigating && (
          <motion.div
            key="navigating"
            className="fixed inset-0 z-[80] bg-white flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.1 : 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Minimal Sliding Panel */}
            <motion.div
              className="absolute inset-0 bg-orange-500"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{
                duration: shouldReduceMotion ? 0.1 : 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />

            {/* Central Minimal Card */}
            <motion.div
              className="relative z-10 bg-white border-4 border-black shadow-brutal p-12 sm:p-16 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.1 : 0.4,
                delay: shouldReduceMotion ? 0 : 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Simple Geometric Animation */}
              <motion.div
                className="mb-8 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0.1 : 0.3,
                  delay: shouldReduceMotion ? 0 : 0.3,
                }}
              >
                <div className="relative w-16 h-16">
                  {/* Outer Square */}
                  <motion.div
                    className="absolute inset-0 border-4 border-black"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: shouldReduceMotion ? 0 : 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  {/* Inner Square */}
                  <motion.div
                    className="absolute inset-2 bg-orange-500 border-2 border-black"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: shouldReduceMotion ? 0 : -360 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  {/* Center Dot */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-black transform -translate-x-1/2 -translate-y-1/2"
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: [1, 1.5, 1],
                            transition: {
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut",
                            },
                          }
                    }
                  />
                </div>
              </motion.div>

              {/* Minimalist Typography */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0.1 : 0.4,
                  delay: shouldReduceMotion ? 0 : 0.4,
                }}
              >
                <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-wider mb-6">
                  Navigating
                </h2>

                {/* Simple Progress Indicator */}
                <div className="flex justify-center space-x-1">
                  {[0, 1, 2].map((index) => (
                    <motion.div
                      key={index}
                      className="w-2 h-8 bg-black"
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              scaleY: [0.3, 1, 0.3],
                              transition: {
                                duration: 0.8,
                                repeat: Infinity,
                                delay: index * 0.1,
                                ease: "easeInOut",
                              },
                            }
                      }
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Minimal Corner Accent */}
            <motion.div
              className="absolute bottom-8 right-8 w-4 h-4 bg-black border-2 border-orange-500"
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -45 }}
              transition={{
                duration: shouldReduceMotion ? 0.1 : 0.3,
                delay: shouldReduceMotion ? 0 : 0.5,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content - Enhanced Entry */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0.1 : isMobile ? 0.6 : 0.8,
          delay: shouldReduceMotion ? 0 : isMobile ? 0.4 : 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="relative"
      >
        {children}
      </motion.div>
    </>
  );
}

"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  useEffect,
  useState,
  createContext,
  useContext,
  useCallback,
  useMemo,
} from "react";

// Navigation Context for handling smooth transitions
const NavigationContext = createContext({
  isNavigating: false,
  navigate: () => {},
  transitionColor: null,
});

export const useNavigation = () => useContext(NavigationContext);

export function NavigationProvider({ children }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const [pendingPath, setPendingPath] = useState(null);
  const [transitionColor, setTransitionColor] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  // Dynamic color system using app's brand colors
  const brandColors = [
    {
      name: "primary",
      bg: "bg-orange-500", // #ff6b35
      shadow: "rgba(255, 107, 53, 0.7)",
      shadowSecondary: "rgba(255, 107, 53, 0.3)",
      shine: "via-orange-200",
      accent: "border-orange-500",
    },
    {
      name: "secondary",
      bg: "bg-teal-400", // #4ecdc4
      shadow: "rgba(78, 205, 196, 0.7)",
      shadowSecondary: "rgba(78, 205, 196, 0.3)",
      shine: "via-teal-200",
      accent: "border-teal-400",
    },
    {
      name: "accent",
      bg: "bg-blue-400", // #45b7d1
      shadow: "rgba(69, 183, 209, 0.7)",
      shadowSecondary: "rgba(69, 183, 209, 0.3)",
      shine: "via-blue-200",
      accent: "border-blue-400",
    },
    {
      name: "warning",
      bg: "bg-yellow-400", // #f7b731
      shadow: "rgba(247, 183, 49, 0.7)",
      shadowSecondary: "rgba(247, 183, 49, 0.3)",
      shine: "via-yellow-200",
      accent: "border-yellow-400",
    },
    {
      name: "success",
      bg: "bg-green-400", // #26de81
      shadow: "rgba(38, 222, 129, 0.7)",
      shadowSecondary: "rgba(38, 222, 129, 0.3)",
      shine: "via-green-200",
      accent: "border-green-400",
    },
    {
      name: "error",
      bg: "bg-red-400", // #fc5c65
      shadow: "rgba(252, 92, 101, 0.7)",
      shadowSecondary: "rgba(252, 92, 101, 0.3)",
      shine: "via-red-200",
      accent: "border-red-400",
    },
  ];

  // Get color for destination path
  const getColorForPath = (path) => {
    // Create a simple hash from path to ensure consistent color per route
    let hash = 0;
    for (let i = 0; i < path.length; i++) {
      const char = path.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return brandColors[Math.abs(hash) % brandColors.length];
  };

  const navigate = (path) => {
    if (path === pathname) return; // Don't navigate to same page

    // Determine color upfront for destination
    const destinationColor = getColorForPath(path);
    setTransitionColor(destinationColor);

    setIsNavigating(true);
    setPendingPath(path);

    // Optimal UX timing - under 1 second for flow maintenance
    setTimeout(() => {
      router.push(path);
    }, 600); // Give entrance animation time to complete
  };

  // Reset navigation state when route actually changes
  useEffect(() => {
    if (pendingPath && pathname === pendingPath) {
      const timer = setTimeout(() => {
        setIsNavigating(false);
        setPendingPath(null);
        setTransitionColor(null);
      }, 1200); // Give exit animation time to complete

      return () => clearTimeout(timer);
    }
  }, [pathname, pendingPath]);

  return (
    <NavigationContext.Provider
      value={{ isNavigating, navigate, transitionColor }}
    >
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
  const { isNavigating, transitionColor } = useNavigation();

  // Optimized mobile detection with memoization
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true }); // Passive for better performance
    return () => window.removeEventListener("resize", checkMobile);
  }, [checkMobile]);

  // Optimized initial page load timing
  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsLoading(false);
      },
      isMobile ? 600 : 800 // Faster loading times
    );

    return () => clearTimeout(timer);
  }, [isMobile]);

  // Memoized animation variants for performance
  const animationVariants = useMemo(
    () => ({
      loadingCard: {
        initial: { scale: 0.95, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 1.02, opacity: 0 },
        transition: {
          duration: shouldReduceMotion || isMobile ? 0.05 : 0.3,
          ease: "easeOut",
        },
      },
      loadingProgress: {
        initial: { scaleX: 0 },
        animate: { scaleX: 1 },
        transition: {
          duration: shouldReduceMotion || isMobile ? 0.05 : 0.4,
          delay: shouldReduceMotion || isMobile ? 0 : 0.2,
          ease: "easeOut",
        },
      },
      navigationOverlay: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: shouldReduceMotion || isMobile ? 0.05 : 0.15,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    }),
    [shouldReduceMotion, isMobile]
  );

  return (
    <>
      {/* Optimized Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            className="fixed inset-0 z-[80] bg-white flex items-center justify-center"
            {...animationVariants.navigationOverlay}
          >
            {/* Optimized Loading Card */}
            <motion.div
              className="bg-white border-4 border-black shadow-brutal p-8 sm:p-12 text-center"
              {...animationVariants.loadingCard}
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
            >
              {/* Simple Logo */}
              <motion.h1
                className="text-4xl sm:text-5xl font-black text-black mb-6 tracking-tight uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0.05 : 0.25,
                  delay: shouldReduceMotion ? 0 : 0.15,
                }}
              >
                JAKE
              </motion.h1>

              {/* Optimized Progress */}
              <motion.div
                className="w-16 h-1 bg-orange-500 mx-auto"
                {...animationVariants.loadingProgress}
                style={{
                  willChange: "transform",
                  transform: "translateZ(0)",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance-Optimized Navigation Transition */}
      <AnimatePresence mode="wait" onExitComplete={() => {}}>
        {isNavigating && (
          <motion.div
            key="navigating"
            className="fixed inset-0 z-[80] bg-white flex items-center justify-center overflow-hidden"
            {...animationVariants.navigationOverlay}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.05 : 0.3,
              ease: "easeInOut",
            }}
          >
            {/* Optimized Environmental Background */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.05 : 0.2,
                ease: "easeOut",
              }}
              style={{
                willChange: "opacity",
                transform: "translateZ(0)",
              }}
            >
              {/* Simplified Paper Texture */}
              <div
                className="absolute inset-0 opacity-[0.01]"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)`,
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Simplified Gradient Overlay */}
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  background: `radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,0,0,0.05) 0%, transparent 50%)`,
                }}
              />
            </motion.div>

            {/* Performance-Optimized Developer Side */}
            <motion.div
              className="absolute inset-0 bg-black flex items-center justify-center"
              style={{
                clipPath: "polygon(0 0, 0 100%, 100% 0)",
                boxShadow:
                  "20px 20px 0px rgba(0, 0, 0, 0.7), 40px 40px 0px rgba(0, 0, 0, 0.3)",
                willChange: "clip-path, opacity",
                transform: "translateZ(0)",
              }}
              initial={{
                clipPath: "polygon(50% 50%, 50% 50%, 50% 50%)",
                opacity: 0.9,
              }}
              animate={{
                clipPath: "polygon(0 0, 0 100%, 100% 0)",
                opacity: 1,
              }}
              exit={{
                clipPath: "polygon(50% 50%, 50% 50%, 50% 50%)",
                opacity: 0,
                transition: {
                  clipPath: {
                    duration: shouldReduceMotion ? 0.05 : 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                  opacity: {
                    duration: shouldReduceMotion ? 0.05 : 0.25,
                    ease: "easeIn",
                  },
                },
              }}
              transition={{
                clipPath: {
                  duration: shouldReduceMotion || isMobile ? 0.05 : 0.35,
                  delay: shouldReduceMotion ? 0 : 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                },
                opacity: {
                  duration: shouldReduceMotion || isMobile ? 0.05 : 0.15,
                  delay: shouldReduceMotion ? 0 : 0.05,
                  ease: "easeOut",
                },
              }}
            >
              {/* Developer Content - Performance Optimized */}
              <div className="absolute top-1/3 left-1/3 text-center transform -translate-x-1/2 -translate-y-1/2 px-4 sm:px-0">
                {/* Code Symbol - Optimized */}
                <motion.div
                  className={`bg-white p-4 sm:p-6 md:p-8 lg:p-10 mb-4 sm:mb-6 inline-block relative overflow-hidden`}
                  style={{
                    borderRadius: "2px",
                    boxShadow: `6px 6px 0px ${transitionColor?.shadow}, 12px 12px 0px ${transitionColor?.shadowSecondary}`,
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    rotate: -10,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    rotate: 5,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0.05 : 0.25,
                    delay: shouldReduceMotion ? 0 : 0.1,
                    ease: [0.34, 1.2, 0.64, 1],
                  }}
                >
                  {/* Optimized shine effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent ${transitionColor?.shine} to-transparent opacity-30`}
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.6,
                      delay: shouldReduceMotion ? 0 : 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    style={{
                      willChange: "transform",
                      transform: "translateZ(0)",
                    }}
                  />

                  <motion.div
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-black text-black relative z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.05 : 0.2,
                      delay: shouldReduceMotion ? 0 : 0.2,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    }}
                    style={{
                      willChange: "transform, opacity",
                      transform: "translateZ(0)",
                    }}
                  >
                    &lt;/&gt;
                  </motion.div>
                </motion.div>

                {/* Developer Label - Optimized */}
                <motion.div
                  className={`${transitionColor?.bg} px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 relative`}
                  style={{
                    borderRadius: "2px",
                    boxShadow: "5px 5px 0px rgba(0, 0, 0, 0.8)",
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                  }}
                  initial={{
                    opacity: 0,
                    y: 25,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0.05 : 0.25,
                    delay: shouldReduceMotion ? 0 : 0.25,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <motion.h3
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-black uppercase tracking-wide"
                    initial={{ letterSpacing: "0.3em", opacity: 0 }}
                    animate={{ letterSpacing: "0.2em", opacity: 1 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.05 : 0.2,
                      delay: shouldReduceMotion ? 0 : 0.3,
                      ease: "easeOut",
                    }}
                  >
                    Developer
                  </motion.h3>
                </motion.div>
              </div>
            </motion.div>

            {/* Performance-Optimized Designer Side */}
            <motion.div
              className={`absolute inset-0 ${transitionColor?.bg} flex items-center justify-center`}
              style={{
                clipPath: "polygon(100% 100%, 100% 0, 0 100%)",
                boxShadow: `-20px -20px 0px ${transitionColor?.shadow}, -40px -40px 0px ${transitionColor?.shadowSecondary}`,
                willChange: "clip-path, opacity",
                transform: "translateZ(0)",
              }}
              initial={{
                clipPath: "polygon(50% 50%, 50% 50%, 50% 50%)",
                opacity: 0.9,
              }}
              animate={{
                clipPath: "polygon(100% 100%, 100% 0, 0 100%)",
                opacity: 1,
              }}
              exit={{
                clipPath: "polygon(50% 50%, 50% 50%, 50% 50%)",
                opacity: 0,
                transition: {
                  clipPath: {
                    duration: shouldReduceMotion || isMobile ? 0.05 : 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                  opacity: {
                    duration: shouldReduceMotion || isMobile ? 0.05 : 0.25,
                    ease: "easeIn",
                  },
                },
              }}
              transition={{
                clipPath: {
                  duration: shouldReduceMotion || isMobile ? 0.05 : 0.35,
                  delay: shouldReduceMotion ? 0 : 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                },
                opacity: {
                  duration: shouldReduceMotion || isMobile ? 0.05 : 0.15,
                  delay: shouldReduceMotion ? 0 : 0.05,
                  ease: "easeOut",
                },
              }}
            >
              {/* Designer Content - Performance Optimized */}
              <div className="absolute bottom-1/3 right-1/3 text-center transform translate-x-1/2 translate-y-1/2 px-4 sm:px-0">
                {/* Design Symbol - Optimized */}
                <motion.div
                  className="bg-black p-4 sm:p-6 md:p-8 lg:p-10 mb-4 sm:mb-6 inline-block relative overflow-hidden"
                  style={{
                    borderRadius: "2px",
                    boxShadow:
                      "6px 6px 0px rgba(0, 0, 0, 0.8), 12px 12px 0px rgba(0, 0, 0, 0.4)",
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    rotate: 10,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    rotate: -5,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0.05 : 0.25,
                    delay: shouldReduceMotion ? 0 : 0.2,
                    ease: [0.34, 1.2, 0.64, 1],
                  }}
                >
                  {/* Optimized shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-25"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.6,
                      delay: shouldReduceMotion ? 0 : 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    style={{
                      willChange: "transform",
                      transform: "translateZ(0)",
                    }}
                  />

                  <motion.div
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white relative z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.05 : 0.2,
                      delay: shouldReduceMotion ? 0 : 0.3,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    }}
                    style={{
                      willChange: "transform, opacity",
                      transform: "translateZ(0)",
                    }}
                  >
                    ◆
                  </motion.div>
                </motion.div>

                {/* Designer Label - Optimized */}
                <motion.div
                  className="bg-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 relative"
                  style={{
                    borderRadius: "2px",
                    boxShadow: "5px 5px 0px rgba(0, 0, 0, 0.8)",
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                  }}
                  initial={{
                    opacity: 0,
                    y: 25,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0.05 : 0.25,
                    delay: shouldReduceMotion ? 0 : 0.35,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <motion.h3
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-black uppercase tracking-wide"
                    initial={{ letterSpacing: "0.3em", opacity: 0 }}
                    animate={{ letterSpacing: "0.2em", opacity: 1 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.05 : 0.2,
                      delay: shouldReduceMotion ? 0 : 0.4,
                      ease: "easeOut",
                    }}
                  >
                    Designer
                  </motion.h3>
                </motion.div>
              </div>
            </motion.div>

            {/* Optimized Corner Accents */}
            <motion.div
              className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 bg-black"
              style={{
                borderRadius: "2px",
                boxShadow: `3px 3px 0px ${transitionColor?.shadow}`,
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
              initial={{ scale: 0, rotate: 30, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: -30, opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.05 : 0.15,
                delay: shouldReduceMotion ? 0 : 0.4,
                ease: [0.68, -0.55, 0.265, 1.55],
              }}
            />

            <motion.div
              className={`absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 ${transitionColor?.bg}`}
              style={{
                borderRadius: "2px",
                boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.6)",
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
              initial={{ scale: 0, rotate: -30, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 30, opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.05 : 0.15,
                delay: shouldReduceMotion ? 0 : 0.45,
                ease: [0.68, -0.55, 0.265, 1.55],
              }}
            />

            {/* Optimized Progress Indicator */}
            <motion.div
              className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: shouldReduceMotion ? 0.05 : 0.15,
                delay: shouldReduceMotion ? 0 : 0.5,
                ease: "easeOut",
              }}
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0) translateX(-50%)",
              }}
            >
              <div className="flex space-x-2 sm:space-x-3">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-black"
                    style={{
                      borderRadius: "1px",
                      willChange: "transform, opacity",
                      transform: "translateZ(0)",
                    }}
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: [1, 1.2, 1],
                            opacity: [0.6, 1, 0.6],
                            transition: {
                              duration: 1.0,
                              repeat: Infinity,
                              delay: index * 0.1,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            },
                          }
                    }
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optimized Page Content */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0.05 : 0.25,
          delay: shouldReduceMotion ? 0 : 0.05,
          ease: "easeOut",
          exit: {
            duration: shouldReduceMotion ? 0.05 : 0.2,
            ease: "easeIn",
          },
        }}
        className="relative"
        style={{
          willChange: "opacity",
          transform: "translateZ(0)",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

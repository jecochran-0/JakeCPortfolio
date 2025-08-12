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
    }, 400); // Quick enough to maintain flow
  };

  // Reset navigation state when route actually changes
  useEffect(() => {
    if (pendingPath && pathname === pendingPath) {
      const timer = setTimeout(() => {
        setIsNavigating(false);
        setPendingPath(null);
        setTransitionColor(null);
      }, 800); // Under 1s threshold for seamless experience

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
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, [checkMobile]);

  // Optimized initial page load timing
  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsLoading(false);
      },
      isMobile ? 300 : 500 // Even faster on mobile
    );

    return () => clearTimeout(timer);
  }, [isMobile]);

  // Mobile-specific animation variants - optimized for zero flicker
  const animationVariants = useMemo(() => {
    const isMobileFast = isMobile || shouldReduceMotion;

    return {
      loadingCard: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: isMobileFast ? 0.1 : 0.2,
          ease: "easeOut",
        },
      },
      loadingProgress: {
        initial: { scaleX: 0 },
        animate: { scaleX: 1 },
        transition: {
          duration: isMobileFast ? 0.1 : 0.2,
          delay: isMobileFast ? 0 : 0.05,
          ease: "easeOut",
        },
      },
      navigationOverlay: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: isMobileFast ? 0.1 : 0.15,
          ease: "easeOut",
        },
      },
    };
  }, [isMobile, shouldReduceMotion]);

  return (
    <>
      {/* Simplified Loading Screen - Zero Flicker */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            className="fixed inset-0 z-[80] bg-white flex items-center justify-center"
            {...animationVariants.navigationOverlay}
            style={{
              willChange: "opacity",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
          >
            <motion.div
              className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 text-center"
              {...animationVariants.loadingCard}
              style={{
                willChange: "opacity",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl font-black text-black mb-4 tracking-tight uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: isMobile ? 0.1 : 0.15,
                  delay: isMobile ? 0 : 0.05,
                }}
                style={{
                  willChange: "opacity",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              >
                JAKE
              </motion.h1>

              <motion.div
                className="w-12 sm:w-16 h-1 bg-orange-500 mx-auto"
                {...animationVariants.loadingProgress}
                style={{
                  willChange: "transform",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile-Optimized Navigation Transition - Zero Flicker */}
      <AnimatePresence mode="wait">
        {isNavigating && (
          <>
            {isMobile ? (
              // Simple mobile transition - just fade, no complex animations
              <motion.div
                key="mobile-navigating"
                className="fixed inset-0 z-[80] bg-white flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.1,
                  ease: "easeOut",
                }}
                style={{
                  willChange: "opacity",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="text-center">
                  <div className="bg-white border-4 border-black shadow-brutal p-6 inline-block">
                    <h2 className="text-2xl font-black text-black uppercase tracking-wide mb-3">
                      {transitionColor?.name === "primary"
                        ? "Home"
                        : transitionColor?.name === "secondary"
                        ? "About"
                        : transitionColor?.name === "accent"
                        ? "Development"
                        : transitionColor?.name === "warning"
                        ? "UX/UI"
                        : "Loading"}
                    </h2>
                    <div
                      className="w-8 h-1 mx-auto"
                      style={{
                        backgroundColor:
                          transitionColor?.bg?.replace("bg-", "") || "#ff6b35",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              // Desktop transition - optimized for zero flicker
              <motion.div
                key="desktop-navigating"
                className="fixed inset-0 z-[80] bg-white flex items-center justify-center overflow-hidden"
                {...animationVariants.navigationOverlay}
                style={{
                  willChange: "opacity",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Minimal Environmental Background */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.15,
                    ease: "easeOut",
                  }}
                  style={{
                    willChange: "opacity",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.005]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)`,
                      backgroundSize: "32px 32px",
                    }}
                  />
                </motion.div>

                {/* Desktop Developer Side - Optimized */}
                <motion.div
                  className="absolute inset-0 bg-black flex items-center justify-center"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 0 100%)",
                    boxShadow: `12px 12px 0px ${transitionColor?.shadow}`,
                    willChange: "clip-path, opacity",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
                  initial={{
                    clipPath: "polygon(50% 50%, 50% 50%, 50% 50%)",
                    opacity: 0.95,
                  }}
                  animate={{
                    clipPath: "polygon(0 0, 100% 0, 0 100%)",
                    opacity: 1,
                  }}
                  exit={{
                    clipPath: "polygon(50% 50%, 50% 50%, 50% 50%)",
                    opacity: 0,
                  }}
                  transition={{
                    clipPath: {
                      duration: 0.25,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                    opacity: {
                      duration: 0.1,
                      ease: "easeOut",
                    },
                  }}
                >
                  <div className="absolute top-1/3 left-1/3 text-center transform -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      className="bg-white p-6 lg:p-8 mb-4 inline-block"
                      style={{
                        borderRadius: "2px",
                        boxShadow: `4px 4px 0px ${transitionColor?.shadow}`,
                        willChange: "transform, opacity",
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                      }}
                      initial={{ opacity: 0, scale: 0.9, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.15,
                        delay: 0.05,
                        ease: [0.34, 1.1, 0.64, 1],
                      }}
                    >
                      <div className="text-4xl lg:text-5xl font-mono font-black text-black">
                        &lt;/&gt;
                      </div>
                    </motion.div>

                    <motion.div
                      className={`${transitionColor?.bg} px-6 py-3 relative`}
                      style={{
                        borderRadius: "2px",
                        boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.8)",
                        willChange: "transform, opacity",
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{
                        duration: 0.15,
                        delay: 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <h3 className="text-xl lg:text-2xl font-black text-black uppercase tracking-wide">
                        Developer
                      </h3>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Desktop Designer Side - Optimized */}
                <motion.div
                  className={`absolute inset-0 ${transitionColor?.bg} flex items-center justify-center`}
                  style={{
                    clipPath: "polygon(100% 100%, 100% 0, 0 100%)",
                    boxShadow: "-12px -12px 0px rgba(0, 0, 0, 0.7)",
                    willChange: "clip-path, opacity",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
                  initial={{
                    clipPath: "polygon(50% 50%, 50% 50%, 50% 50%)",
                    opacity: 0.95,
                  }}
                  animate={{
                    clipPath: "polygon(100% 100%, 100% 0, 0 100%)",
                    opacity: 1,
                  }}
                  exit={{
                    clipPath: "polygon(50% 50%, 50% 50%, 50% 50%)",
                    opacity: 0,
                  }}
                  transition={{
                    clipPath: {
                      duration: 0.25,
                      delay: 0.02,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                    opacity: {
                      duration: 0.1,
                      delay: 0.02,
                      ease: "easeOut",
                    },
                  }}
                >
                  <div className="absolute bottom-1/3 right-1/3 text-center transform translate-x-1/2 translate-y-1/2">
                    <motion.div
                      className="bg-black p-6 lg:p-8 mb-4 inline-block"
                      style={{
                        borderRadius: "2px",
                        boxShadow: "4px 4px 0px rgba(0, 0, 0, 0.8)",
                        willChange: "transform, opacity",
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                      }}
                      initial={{ opacity: 0, scale: 0.9, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.15,
                        delay: 0.1,
                        ease: [0.34, 1.1, 0.64, 1],
                      }}
                    >
                      <div className="text-4xl lg:text-5xl font-black text-white">
                        ◆
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-white px-6 py-3 relative"
                      style={{
                        borderRadius: "2px",
                        boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.8)",
                        willChange: "transform, opacity",
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{
                        duration: 0.15,
                        delay: 0.15,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <h3 className="text-xl lg:text-2xl font-black text-black uppercase tracking-wide">
                        Designer
                      </h3>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Simple Corner Accents - Minimal */}
                <motion.div
                  className="absolute top-6 right-6 w-5 h-5 bg-black"
                  style={{
                    borderRadius: "2px",
                    boxShadow: `2px 2px 0px ${transitionColor?.shadow}`,
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.2,
                  }}
                />

                <motion.div
                  className={`absolute bottom-6 left-6 w-4 h-4 ${transitionColor?.bg}`}
                  style={{
                    borderRadius: "2px",
                    boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.6)",
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.25,
                  }}
                />
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>

      {/* Optimized Page Content - Zero Flicker */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: isMobile ? 0.1 : 0.15,
          delay: isMobile ? 0.02 : 0.05,
          ease: "easeOut",
        }}
        className="relative"
        style={{
          willChange: "opacity",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

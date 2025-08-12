"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { useNavigation } from "./PageTransition";
import {
  FaHome,
  FaUser,
  FaCode,
  FaPalette,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const navbarRef = useRef(null);
  const { scrollY } = useScroll();
  const { navigate } = useNavigation();

  // Optimized transform values with reduced computation
  const navbarHeight = useTransform(scrollY, [0, 100], [120, 80]);
  const navbarBlur = useTransform(scrollY, [0, 100], [0, 15]); // Reduced blur for performance

  // Memoized nav items for performance
  const navItems = useMemo(
    () => [
      { name: "home", path: "/", icon: FaHome, label: "Home" },
      { name: "about", path: "/about", icon: FaUser, label: "About" },
      { name: "dev", path: "/dev", icon: FaCode, label: "Development" },
      { name: "ux-ui", path: "/ux-ui", icon: FaPalette, label: "UX/UI" },
    ],
    []
  );

  // Handle mounting to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Optimized scroll detection with throttling
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  // Optimized navigation handler
  const handleNavigation = useCallback(
    (path) => {
      setIsOpen(false); // Close mobile menu
      navigate(path);
    },
    [navigate]
  );

  // Memoized animation variants for performance
  const animationVariants = useMemo(
    () => ({
      navbar: {
        initial: { y: -100 },
        animate: { y: 0 },
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }, // Faster
      },
      navItem: {
        whileHover: { scale: 1.03 }, // Reduced scale
        whileTap: { scale: 0.97 }, // Reduced scale
      },
      mobileButton: {
        whileHover: { scale: 1.03 }, // Reduced scale
        whileTap: { scale: 0.97 }, // Reduced scale
      },
      mobileOverlay: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 }, // Faster
      },
      mobileMenu: {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: {
          type: "spring",
          stiffness: 400, // Higher for faster animation
          damping: 35, // Higher for less bounce
        },
      },
      iconRotation: {
        initial: { rotate: 60, opacity: 0 }, // Reduced rotation
        animate: { rotate: 0, opacity: 1 },
        exit: { rotate: -60, opacity: 0 }, // Reduced rotation
        transition: { duration: 0.15 }, // Faster
      },
    }),
    []
  );

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      {/* Optimized Floating Navigation Bar */}
      <motion.nav
        ref={navbarRef}
        style={{
          height: navbarHeight,
          opacity: 1, // Always visible
          backdropFilter: `blur(${navbarBlur}px)`,
          background: isScrolled ? "rgba(0, 0, 0, 0.9)" : "transparent",
          willChange: "transform, opacity, backdrop-filter",
          transform: "translateZ(0)", // Hardware acceleration
        }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300"
        {...animationVariants.navbar}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-end">
          {/* Desktop Navigation - Performance Optimized */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.name}
                  className="relative"
                  {...animationVariants.navItem}
                  style={{
                    willChange: "transform",
                    transform: "translateZ(0)",
                  }}
                >
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`flex items-center space-x-2 xl:space-x-3 px-4 xl:px-6 py-2 xl:py-3 rounded-lg transition-all duration-300 font-bold nav-item-hover ${
                      isActive
                        ? "nav-active"
                        : "text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                    }`}
                    style={{
                      willChange: "transform",
                      transform: "translateZ(0)",
                    }}
                  >
                    <Icon className="text-base xl:text-lg" />
                    <span className="font-bold uppercase tracking-wide text-sm xl:text-base">
                      {item.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button - Performance Optimized */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-3 sm:p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
            {...animationVariants.mobileButton}
            style={{
              willChange: "transform",
              transform: "translateZ(0)",
            }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  {...animationVariants.iconRotation}
                  style={{
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                  }}
                >
                  <FaTimes className="text-lg sm:text-xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  {...animationVariants.iconRotation}
                  style={{
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                  }}
                >
                  <FaBars className="text-lg sm:text-xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Performance-Optimized Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            {...animationVariants.mobileOverlay}
            style={{
              willChange: "opacity",
              transform: "translateZ(0)",
            }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                willChange: "opacity",
                transform: "translateZ(0)",
              }}
            />

            {/* Mobile Menu Content - Performance Optimized */}
            <motion.div
              className="absolute top-0 right-0 w-full max-w-sm h-full bg-black/95 backdrop-blur-xl border-l border-white/10"
              {...animationVariants.mobileMenu}
              style={{
                willChange: "transform",
                transform: "translateZ(0)",
              }}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
                <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                  Navigation
                </h2>
              </div>

              {/* Mobile Navigation Items - Performance Optimized */}
              <nav className="flex flex-col p-4 sm:p-6 space-y-2">
                {navItems.map((item, index) => {
                  // Fix home path comparison - handle both "/" and exact pathname
                  const isActive =
                    item.path === "/"
                      ? pathname === "/" || pathname === ""
                      : pathname === item.path;
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }} // Reduced movement
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.08, // Faster stagger
                        duration: 0.25, // Faster
                        ease: "easeOut",
                      }}
                      style={{
                        willChange: "transform, opacity",
                        transform: "translateZ(0)",
                      }}
                    >
                      <button
                        onClick={() => handleNavigation(item.path)}
                        className={`w-full flex items-center space-x-4 p-4 sm:p-5 rounded-lg transition-all duration-300 text-left min-h-[60px] ${
                          isActive
                            ? "bg-orange-500 text-black font-bold shadow-brutal"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                        style={{
                          willChange: "transform",
                          transform: "translateZ(0)",
                        }}
                      >
                        <Icon className="text-xl sm:text-2xl flex-shrink-0" />
                        <span className="font-bold uppercase tracking-wide text-base sm:text-lg">
                          {item.label}
                        </span>
                      </button>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-white/10">
                <p className="text-white/60 text-xs sm:text-sm text-center">
                  Jake Cochran - Portfolio
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { usePathname } from "next/navigation";
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

  // Optimized transform values with reduced computation
  const navbarHeight = useTransform(scrollY, [0, 100], [120, 80]);
  const navbarBlur = useTransform(scrollY, [0, 100], [0, 15]); // Reduced blur for performance

  // Memoized nav items for performance - reordered as requested
  const navItems = useMemo(
    () => [
      { name: "home", path: "/", icon: FaHome, label: "Home" },
      { name: "ux-ui", path: "/ux-ui", icon: FaPalette, label: "UX/UI" },
      { name: "dev", path: "/dev", icon: FaCode, label: "Development" },
      { name: "about", path: "/about", icon: FaUser, label: "About" },
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
  const handleNavigation = useCallback((path) => {
    console.log("Navigation triggered:", path); // Debug log
    setIsOpen(false); // Close mobile menu
    // Direct navigation
    window.location.href = path;
  }, []);

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
        transition: { duration: 0.3, ease: "easeOut" }, // Smoother entry
      },
      mobileMenu: {
        initial: { x: "100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "100%", opacity: 0 },
        transition: {
          type: "spring",
          stiffness: 300, // Lower for smoother animation
          damping: 25, // Lower for more natural movement
          duration: 0.4,
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
                        : pathname === "/"
                        ? "text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                        : "bg-white text-black border-2 border-black hover:bg-gray-100 shadow-brutal"
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

          {/* Mobile Menu Button - Fixed visibility and brutalist styling */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-3 sm:p-4 rounded-none bg-black border-4 border-white text-white min-h-[44px] min-w-[44px] flex items-center justify-center shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-hover transition-all duration-200 mobile-nav-button"
            {...animationVariants.mobileButton}
            style={{
              willChange: "transform",
              transform: "translateZ(0)",
            }}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
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
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                willChange: "opacity",
                transform: "translateZ(0)",
              }}
            />

            {/* Mobile Menu Content - Brutalist design - Full screen */}
            <motion.div
              id="mobile-navigation-menu"
              className="absolute top-0 right-0 w-full h-full"
              {...animationVariants.mobileMenu}
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                contain: "layout paint",
              }}
            >
              {/* Brutalist inner design - Full width */}
              <div className="h-full bg-white border-l-4 border-black shadow-brutal mobile-menu-content w-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b-4 border-black bg-orange-400 mobile-menu-header">
                  <h2 className="text-lg sm:text-xl font-black text-black uppercase tracking-widest">
                    Navigation
                  </h2>
                  <div className="w-8 h-8 bg-black rounded-sm shadow-brutal decorative-square"></div>
                </div>

                {/* Mobile Navigation Items - Brutalist styling */}
                <nav className="flex flex-col p-4 sm:p-6 space-y-3">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.path;
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 50, scale: 0.95 }} // Enhanced initial state
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                          delay: index * 0.1, // Slightly slower stagger for smoother effect
                          duration: 0.4, // Longer duration for smoother animation
                          ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for natural feel
                        }}
                        style={{
                          willChange: "transform, opacity",
                          transform: "translateZ(0)",
                        }}
                      >
                        <button
                          onClick={() => handleNavigation(item.path)}
                          className={`w-full flex items-center space-x-4 p-4 sm:p-5 rounded-none transition-all duration-300 text-left min-h-[60px] border-4 border-black shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-hover mobile-nav-item ${
                            isActive
                              ? "bg-orange-400 text-black font-black shadow-brutal-large active"
                              : "bg-white text-black hover:bg-gray-50"
                          }`}
                          style={{
                            willChange: "transform",
                            transform: "translateZ(0)",
                          }}
                          aria-label={`Navigate to ${item.label}`}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              handleNavigation(item.path);
                            }
                          }}
                        >
                          <div
                            className={`icon-container ${
                              isActive ? "bg-black" : "bg-white"
                            }`}
                          >
                            <Icon
                              className={`text-xl sm:text-2xl flex-shrink-0 ${
                                isActive ? "text-white" : "text-black"
                              }`}
                            />
                          </div>
                          <span className="font-black uppercase tracking-widest text-base sm:text-lg">
                            {item.label}
                          </span>
                        </button>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t-4 border-black bg-gray-100 mobile-menu-footer">
                  <div className="flex items-center justify-between">
                    <p className="text-black font-black text-xs sm:text-sm uppercase tracking-widest">
                      Jake Cochran
                    </p>
                    <div className="w-6 h-6 bg-black rounded-sm shadow-brutal decorative-square"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

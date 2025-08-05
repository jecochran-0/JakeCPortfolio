"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Check if in browser environment
const isBrowser = typeof window !== "undefined";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check device capabilities
  useEffect(() => {
    const checkDeviceCapabilities = () => {
      const width = window.innerWidth;
      const isMobileDevice = width <= 768;
      const isLowPowerDevice =
        width <= 480 ||
        navigator.hardwareConcurrency <= 4 ||
        /Android|iPhone|iPad|iPod/.test(navigator.userAgent);

      setIsMobile(isMobileDevice);
      setIsLowPower(isLowPowerDevice);
    };

    checkDeviceCapabilities();
    window.addEventListener("resize", checkDeviceCapabilities);

    return () => window.removeEventListener("resize", checkDeviceCapabilities);
  }, []);

  // Optimized scroll handler
  useEffect(() => {
    if (!isBrowser) return;

    let ticking = false;
    let rafId = null;

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
          }
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
  }, [scrolled]);

  // Efficient navigation handler
  const handleNavClick = useCallback(
    (e, href) => {
      if (href === pathname) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      setIsMobileMenuOpen(false);

      // Let the PageTransition component handle the transition
      router.push(href);
    },
    [pathname, router]
  );

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/ux-ui", label: "UX/UI" },
    { href: "/dev", label: "Dev" },
    { href: "/about", label: "About" },
  ];

  // Efficient animation variants
  const navVariants = useMemo(
    () => ({
      initial: {
        y: -10,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: isLowPower ? 0.3 : isMobile ? 0.25 : 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    }),
    [isMobile, isLowPower]
  );

  const itemVariants = useMemo(
    () => ({
      hover: {
        y: -1,
        transition: {
          duration: 0.15,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    }),
    []
  );

  const mobileMenuVariants = useMemo(
    () => ({
      closed: {
        opacity: 0,
        y: -10,
        transition: {
          duration: 0.15,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
      open: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          staggerChildren: 0.03,
        },
      },
    }),
    []
  );

  return (
    <motion.nav
      initial="initial"
      animate="animate"
      variants={navVariants}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${
        isMobile ? "w-[calc(100%-2rem)] max-w-sm" : "w-auto"
      }`}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {/* Sleek Navbar Container */}
      <div
        className={`relative ${
          isMobile
            ? "bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/30 p-3"
            : "bg-white/90 backdrop-blur-md rounded-full shadow-xl border border-gray-200/40 p-2"
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              variants={itemVariants}
              whileHover="hover"
              className="relative"
            >
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative flex items-center px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-150 ${
                  pathname === item.href
                    ? "bg-gray-900 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80"
                }`}
                style={{
                  fontWeight: 500,
                  letterSpacing: "0.025em",
                }}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center px-3 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 transition-colors duration-150"
          >
            <span className="mr-2">Menu</span>
            <svg
              className={`w-4 h-4 transition-transform duration-150 ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Active Page Indicator */}
          <div className="flex items-center px-3 py-2 rounded-xl text-sm font-medium bg-gray-900 text-white shadow-sm">
            <span>
              {navItems.find((item) => item.href === pathname)?.label || "Home"}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/30 overflow-hidden z-30"
            style={{
              top: "calc(100% + 4rem)",
              left: "0",
              right: "0",
              marginTop: "1rem",
            }}
          >
            <div className="py-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.03,
                    duration: 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center px-4 py-3 mx-2 rounded-xl text-sm font-medium transition-colors duration-150 ${
                      pathname === item.href
                        ? "bg-gray-900 text-white shadow-sm"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80"
                    }`}
                    style={{
                      fontWeight: 500,
                      letterSpacing: "0.025em",
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

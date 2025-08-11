"use client";

import { useState, useEffect, useRef } from "react";
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

  // Transform values for scroll-based animations
  const navbarHeight = useTransform(scrollY, [0, 100], [120, 80]);
  const navbarBlur = useTransform(scrollY, [0, 100], [0, 20]);

  const navItems = [
    { name: "home", path: "/", icon: FaHome, label: "Home" },
    { name: "about", path: "/about", icon: FaUser, label: "About" },
    { name: "dev", path: "/dev", icon: FaCode, label: "Development" },
    { name: "ux-ui", path: "/ux-ui", icon: FaPalette, label: "UX/UI" },
  ];

  // Handle mounting to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    setIsOpen(false); // Close mobile menu
    navigate(path);
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      {/* Floating Navigation Bar */}
      <motion.nav
        ref={navbarRef}
        style={{
          height: navbarHeight,
          opacity: 1, // Always visible
          backdropFilter: `blur(${navbarBlur}px)`,
          background: isScrolled ? "rgba(0, 0, 0, 0.9)" : "transparent",
        }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-end">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.name}
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`flex items-center space-x-3 px-6 py-3 rounded-lg transition-all duration-300 font-bold nav-item-hover ${
                      isActive
                        ? "nav-active"
                        : "text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span className="font-bold uppercase tracking-wide">
                      {item.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="text-xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="text-xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col justify-center items-center px-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {/* Mobile Navigation Items */}
              <div className="w-full max-w-sm space-y-4">
                <motion.div
                  className="text-center mb-12"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-black text-white mb-2 tracking-wide">
                    Navigation
                  </h2>
                  <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
                </motion.div>

                {navItems.map((item, index) => {
                  const isActive = pathname === item.path;
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + index * 0.1,
                      }}
                    >
                      <button
                        onClick={() => handleNavigation(item.path)}
                        className={`w-full flex items-center justify-between p-6 rounded-lg transition-all duration-300 ${
                          isActive
                            ? "bg-orange-500 text-black shadow-lg"
                            : "bg-white/10 text-white hover:bg-white/20"
                        } backdrop-blur-sm border border-white/20`}
                      >
                        <div className="flex items-center space-x-4">
                          <Icon className="text-xl" />
                          <span className="text-lg font-bold tracking-wide">
                            {item.label}
                          </span>
                        </div>
                        {isActive && (
                          <motion.div
                            className="w-2 h-2 bg-black rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                          />
                        )}
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

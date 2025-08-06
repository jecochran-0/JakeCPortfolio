"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
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

  // Transform values for scroll-based animations
  const navbarHeight = useTransform(scrollY, [0, 100], [120, 80]);
  const navbarOpacity = useTransform(scrollY, [0, 50], [0, 1]);
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
          opacity: isScrolled ? navbarOpacity : 1,
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
                  <Link
                    href={item.path}
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
                  </Link>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white border-4 border-black rounded-lg -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden card-brutal p-3 text-black btn-brutal-interactive"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
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
                  <FaTimes size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
            >
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-black mb-2">
                    Navigation
                  </h2>
                  <p className="text-gray-600">Choose your destination</p>
                </div>

                <div className="space-y-4">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.path;
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${
                            isActive
                              ? "card-brutal text-black shadow-lg"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <Icon className="text-xl" />
                          <span className="font-semibold">{item.label}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Contact Info */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 card-brutal p-6"
                >
                  <h3 className="font-semibold text-black mb-2">
                    Get in Touch
                  </h3>
                  <a
                    href="mailto:jake.e.cochran@gmail.com"
                    className="text-primary hover:underline"
                  >
                    jake.e.cochran@gmail.com
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

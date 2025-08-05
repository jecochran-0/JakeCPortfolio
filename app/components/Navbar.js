"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Check if in browser environment
const isBrowser = typeof window !== "undefined";

// Page-specific color themes
const pageThemes = {
  "/": { primary: "#000000", secondary: "#3B82F6", accent: "#8B5CF6" },
  "/ux-ui": { primary: "#7C3AED", secondary: "#A855F7", accent: "#EC4899" },
  "/dev": { primary: "#059669", secondary: "#10B981", accent: "#3B82F6" },
  "/about": { primary: "#DC2626", secondary: "#EF4444", accent: "#F59E0B" },
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const currentTheme = pageThemes[pathname] || pageThemes["/"];

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll effect with throttling
  useEffect(() => {
    if (!isBrowser) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Preload critical pages
  useEffect(() => {
    if (!isBrowser) return;

    const preloadPages = async () => {
      const routes = ["/", "/ux-ui", "/dev", "/about"];
      routes.forEach((route) => {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = route;
        document.head.appendChild(link);
      });
    };

    preloadPages();
  }, []);

  const handleNavClick = (e, href) => {
    if (href === pathname) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    setIsNavigating(true);

    // Simplified transition
    setTimeout(() => {
      router.push(href);
      setTimeout(() => {
        setIsNavigating(false);
      }, 200);
    }, 100);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/ux-ui", label: "UX/UI" },
    { href: "/dev", label: "Development" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      {/* Navigation loading overlay */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={`fixed top-4 inset-x-0 z-50 mx-auto w-fit rounded-full 
                   bg-white/95 backdrop-blur-md
                   shadow-lg border border-gray-200/50
                   transition-all duration-200 ${
                     scrolled ? "scale-95" : "scale-100"
                   }`}
        style={{
          willChange: "transform, opacity", // Optimize for animations
        }}
      >
        <div
          className={`flex items-center rounded-full p-1 ${
            isMobile ? "px-1" : "px-1"
          }`}
        >
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            const isHovered = hoveredItem === item.href;

            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                onHoverStart={() => !isMobile && setHoveredItem(item.href)}
                onHoverEnd={() => !isMobile && setHoveredItem(null)}
                className="relative"
              >
                <Link
                  href={item.href}
                  prefetch={true}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <motion.div
                    className={`relative rounded-full transition-all duration-200 cursor-pointer
                               ${isMobile ? "py-2 px-3" : "py-2.5 px-5"}
                               ${
                                 isActive
                                   ? "text-white"
                                   : "text-gray-700 hover:text-gray-900"
                               }`}
                    whileHover={{ scale: isMobile ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    style={{
                      willChange: "transform", // Optimize for animations
                    }}
                  >
                    {/* Active background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeBackground"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                        }}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.4,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      />
                    )}

                    {/* Hover background - only on desktop */}
                    {isHovered && !isActive && !isMobile && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.15,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="absolute inset-0 rounded-full bg-gray-100"
                      />
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      <span
                        className={`font-medium tracking-wide ${
                          isMobile ? "text-xs" : "text-sm"
                        }`}
                        style={{
                          fontWeight: isActive ? 600 : 500,
                          letterSpacing: "0.025em",
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}

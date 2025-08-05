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

  const currentTheme = pageThemes[pathname] || pageThemes["/"];

  // Handle scroll effect
  useEffect(() => {
    if (!isBrowser) return;

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
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
        transition={{ duration: 0.4 }}
        className={`fixed top-4 inset-x-0 z-50 mx-auto w-fit rounded-full 
                   bg-white/95 backdrop-blur-md
                   shadow-lg border border-gray-200/50
                   transition-all duration-200 ${
                     scrolled ? "scale-95" : "scale-100"
                   }`}
      >
        <div className="flex items-center rounded-full p-1">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            const isHovered = hoveredItem === item.href;

            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onHoverStart={() => setHoveredItem(item.href)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative"
              >
                <Link
                  href={item.href}
                  prefetch={true}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <motion.div
                    className={`relative py-2.5 px-5 rounded-full transition-all duration-200 cursor-pointer
                               ${
                                 isActive
                                   ? "text-white"
                                   : "text-gray-700 hover:text-gray-900"
                               }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
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
                        }}
                      />
                    )}

                    {/* Hover background */}
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 rounded-full bg-gray-100"
                        transition={{ duration: 0.15 }}
                      />
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      <span className="font-medium text-sm">{item.label}</span>
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

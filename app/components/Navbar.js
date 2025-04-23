"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // Handle scroll effect
  useEffect(() => {
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
    const preloadPages = async () => {
      // Preload important routes in the background
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
    // Don't navigate if already on the same page
    if (href === pathname) {
      e.preventDefault();
      return;
    }

    // Enhanced navigation with transition state
    e.preventDefault();
    setIsNavigating(true);

    // Give the browser a small time to show loading state
    setTimeout(() => {
      router.push(href);

      // Reset navigation state after a short delay
      setTimeout(() => {
        setIsNavigating(false);
      }, 300);
    }, 10);
  };

  return (
    <>
      {isNavigating && (
        <div className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 inset-x-0 z-50 mx-auto w-fit rounded-full 
                   bg-white/90 backdrop-blur-sm
                   shadow-lg border border-gray-200/30`}
      >
        <div className="flex items-center rounded-full">
          <Link
            href="/"
            prefetch={true}
            onClick={(e) => handleNavClick(e, "/")}
          >
            <div
              className={`relative py-2 px-5 sm:px-8 rounded-full transition-colors duration-300 ${
                pathname === "/"
                  ? "bg-black text-white"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              Home
            </div>
          </Link>

          <Link
            href="/ux-ui"
            prefetch={true}
            onClick={(e) => handleNavClick(e, "/ux-ui")}
          >
            <div
              className={`relative py-2 px-5 sm:px-8 rounded-full transition-colors duration-300 ${
                pathname === "/ux-ui"
                  ? "bg-black text-white"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              UX/UI
            </div>
          </Link>

          <Link
            href="/dev"
            prefetch={true}
            onClick={(e) => handleNavClick(e, "/dev")}
          >
            <div
              className={`relative py-2 px-5 sm:px-8 rounded-full transition-colors duration-300 ${
                pathname === "/dev"
                  ? "bg-black text-white"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              Development
            </div>
          </Link>

          <Link
            href="/about"
            prefetch={true}
            onClick={(e) => handleNavClick(e, "/about")}
          >
            <div
              className={`relative py-2 px-5 sm:px-8 rounded-full transition-colors duration-300 ${
                pathname === "/about"
                  ? "bg-black text-white"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              About
            </div>
          </Link>
        </div>
      </motion.nav>
    </>
  );
}

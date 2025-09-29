"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function SmoothPageTransition({ children, pathname }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTarget, setTransitionTarget] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const timeoutRef = useRef(null);

  // Handle navigation with transition
  const handleNavigation = (href) => {
    if (href === pathname) return; // Don't transition to same page

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // On mobile, navigate immediately without transition
    if (isMobile) {
      router.push(href);
      return;
    }

    // Desktop: Use page transition
    // Set the target page name for display
    const pageName = getPageName(href);
    setTransitionTarget(pageName);

    // Start transition immediately
    setIsTransitioning(true);

    // Determine navigation delay based on page complexity
    const getNavigationDelay = (href) => {
      // Homepage is simpler, so faster navigation
      if (href === "/") {
        return 500;
      }
      // Other pages need more time to load properly
      return 700;
    };

    // Navigate only after curtain fully covers the screen
    timeoutRef.current = setTimeout(() => {
      router.push(href);
    }, getNavigationDelay(href));
  };

  // Function to get page name from href
  const getPageName = (href) => {
    if (href === "/") return "HOME";
    if (href === "/about") return "ABOUT";
    if (href === "/skills") return "SKILLS";
    if (href === "/dev") return "PROJECTS";
    if (href === "/dev?tab=development") return "DEVELOPMENT";
    if (href === "/dev?tab=ux") return "UX DESIGN";
    if (href === "/contact") return "CONTACT";
    if (href === "/ux-ui") return "UX/UI";
    if (href === "/ux-ui/spotify") return "SPOTIFY";
    if (href === "/ux-ui/grammarlygo") return "GRAMMARLY GO";
    return href
      .toUpperCase()
      .replace(/[\/\-_?=&]/g, " ")
      .trim();
  };

  // Mobile detection - detect immediately on mount
  useEffect(() => {
    // Set mobile state immediately based on window width
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle initial load animation
  useEffect(() => {
    if (isInitialLoad) {
      // On mobile, skip initial load animation
      if (isMobile) {
        setIsInitialLoad(false);
        return;
      }

      // Desktop: Show initial load animation
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isInitialLoad, isMobile]);

  // Reset transition state when pathname changes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setTransitionTarget(""); // Clear the target page name
      }, 1400); // Desktop-only timing

      return () => clearTimeout(timer);
    }
  }, [pathname, isTransitioning]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Page Transition Overlay */}
      <AnimatePresence mode="wait">
        {(isTransitioning || isInitialLoad) && !isMobile && (
          <motion.div
            key={isInitialLoad ? "initial-load" : "page-transition"}
            initial={{
              y: isInitialLoad ? "0%" : "-100%",
            }}
            animate={{
              y: "0%",
              transition: {
                duration: isInitialLoad ? 0 : 0.8,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            exit={{
              y: "100%",
              transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
            className="fixed z-[9999] pointer-events-none page-transition-overlay"
            style={{
              backgroundColor: "#CD535A",
              top: "-10%",
              left: "0",
              right: "0",
              height: "120%",
              borderRadius: "0",
              clipPath: "ellipse(100% 110% at 50% 50%)",
            }}
          >
            {/* Page Name Display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    delay: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
                className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wider px-4"
                style={{ fontFamily: "Bungee, cursive" }}
              >
                {isInitialLoad ? "HELLO" : transitionTarget}
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Handler */}
      <div
        onClick={(e) => {
          const link = e.target.closest("a[href]");
          if (link) {
            const href = link.getAttribute("href");
            // Only handle internal navigation
            if (href && href.startsWith("/") && !href.startsWith("#")) {
              e.preventDefault();
              handleNavigation(href);
            }
          }
        }}
        className="contents"
      >
        {children}
      </div>
    </>
  );
}

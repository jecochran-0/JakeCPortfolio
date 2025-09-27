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

    // Set the target page name for display
    const pageName = getPageName(href);
    setTransitionTarget(pageName);

    // Start transition immediately
    setIsTransitioning(true);

    // Navigate only after curtain fully covers the screen
    timeoutRef.current = setTimeout(
      () => {
        router.push(href);
      },
      isMobile ? 500 : 600
    ); // Faster on mobile
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

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle initial load animation
  useEffect(() => {
    if (isInitialLoad) {
      const timer = setTimeout(
        () => {
          setIsInitialLoad(false);
        },
        isMobile ? 800 : 1000
      ); // Faster on mobile

      return () => clearTimeout(timer);
    }
  }, [isInitialLoad, isMobile]);

  // Reset transition state when pathname changes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(
        () => {
          setIsTransitioning(false);
          setTransitionTarget(""); // Clear the target page name
        },
        isMobile ? 1000 : 1200
      ); // Faster on mobile

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
        {(isTransitioning || isInitialLoad) && (
          <motion.div
            key={isInitialLoad ? "initial-load" : "page-transition"}
            initial={{
              y: isInitialLoad ? "0%" : "-100%",
            }}
            animate={{
              y: "0%",
              transition: {
                duration: isInitialLoad ? 0 : isMobile ? 0.6 : 0.7,
                ease: [0.4, 0, 0.2, 1], // Slower beginning
              },
            }}
            exit={{
              y: "100%",
              transition: {
                duration: isMobile ? 0.4 : 0.5,
                ease: [0.25, 0.46, 0.45, 0.94], // Smoother, more eased ending
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
                  opacity: isInitialLoad ? [0, 1, 1] : [0, 0, 1, 1],
                  transition: {
                    duration: isInitialLoad
                      ? isMobile
                        ? 0.8
                        : 1.0
                      : isMobile
                      ? 1.0
                      : 1.2,
                    times: isInitialLoad ? [0, 0.3, 1] : [0, 0.5, 0.65, 1],
                    ease: [0.4, 0, 0.2, 1], // Slower beginning to match curtain
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
        onTouchStart={(e) => {
          // Optimize touch handling for mobile
          if (isMobile) {
            const link = e.target.closest("a[href]");
            if (link) {
              const href = link.getAttribute("href");
              if (href && href.startsWith("/") && !href.startsWith("#")) {
                e.preventDefault();
                handleNavigation(href);
              }
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

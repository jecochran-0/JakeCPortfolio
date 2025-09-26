"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function SmoothPageTransition({ children, pathname }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTarget, setTransitionTarget] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true);
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
    timeoutRef.current = setTimeout(() => {
      router.push(href);
    }, 600); // Wait for full screen coverage before navigating
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

  // Handle initial load animation
  useEffect(() => {
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 1000); // Show "Hello" for 1 second then reveal

      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  // Reset transition state when pathname changes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setTransitionTarget(""); // Clear the target page name
      }, 1200); // Total transition duration (600ms coverage + 500ms reveal)

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
                duration: isInitialLoad ? 0 : 0.7,
                ease: [0.4, 0, 0.2, 1], // Slower beginning
              },
            }}
            exit={{
              y: "100%",
              transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94], // Smoother, more eased ending
              },
            }}
            className="fixed z-[9999] pointer-events-none page-transition-overlay"
            style={{
              backgroundColor: "#CD535A",
              top: "-15%",
              left: "0",
              right: "0",
              height: "130%",
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
                    duration: isInitialLoad ? 1.0 : 1.2,
                    times: isInitialLoad ? [0, 0.3, 1] : [0, 0.5, 0.65, 1],
                    ease: [0.4, 0, 0.2, 1], // Slower beginning to match curtain
                  },
                }}
                className="text-white text-6xl md:text-8xl font-bold tracking-wider"
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
        style={{
          transform: isTransitioning ? "translateY(100vh)" : "translateY(0)",
          transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {children}
      </div>
    </>
  );
}

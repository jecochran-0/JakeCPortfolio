"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronRight, FaHome, FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function BreadcrumbNav() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Skip breadcrumb for home page
  if (pathname === "/") return null;

  const generateBreadcrumbs = () => {
    const segments = pathname.split("/").filter(Boolean);
    const breadcrumbs = [{ name: "Home", path: "/", icon: FaHome }];

    let currentPath = "";
    segments.forEach((segment) => {
      currentPath += `/${segment}`;
      const name = segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({
        name: name,
        path: currentPath,
        icon: null,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Page-specific themes
  const pageThemes = {
    "/ux-ui": { primary: "#7C3AED", secondary: "#A855F7" },
    "/dev": { primary: "#059669", secondary: "#10B981" },
    "/about": { primary: "#DC2626", secondary: "#EF4444" },
  };

  const currentTheme = pageThemes[pathname] || {
    primary: "#3B82F6",
    secondary: "#8B5CF6",
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`fixed z-40 flex items-center space-x-2 ${
        isMobile ? "top-24 left-2 right-2 justify-center" : "top-20 left-4"
      }`}
      style={{
        willChange: "transform, opacity", // Optimize for animations
      }}
    >
      {/* Back button */}
      <motion.div
        whileHover={{ scale: isMobile ? 1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="group"
      >
        <Link
          href="/"
          className={`flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-200 ${
            isMobile ? "w-8 h-8" : "w-10 h-10"
          }`}
          title="Back to Home"
        >
          <FaArrowLeft
            className={`text-gray-600 group-hover:text-gray-900 transition-colors duration-200 ${
              isMobile ? "text-xs" : "text-sm"
            }`}
          />
        </Link>
      </motion.div>

      {/* Breadcrumb path */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={`bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 ${
          isMobile ? "px-3 py-1.5" : "px-4 py-2"
        }`}
        style={{
          boxShadow: `0 4px 20px rgba(${
            currentTheme.primary === "#7C3AED"
              ? "124,58,237"
              : currentTheme.primary === "#059669"
              ? "5,150,105"
              : "220,38,38"
          }, 0.08)`,
          willChange: "transform, opacity", // Optimize for animations
        }}
      >
        <div className="flex items-center space-x-2">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.path} className="flex items-center">
              {index > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: 0.5 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="mx-2"
                >
                  <FaChevronRight
                    className={`text-gray-400 ${
                      isMobile ? "text-xs" : "text-xs"
                    }`}
                    style={{ color: currentTheme.primary }}
                  />
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative"
              >
                <Link
                  href={breadcrumb.path}
                  className={`flex items-center space-x-1.5 rounded-full transition-all duration-200 font-medium tracking-wide
                             ${
                               isMobile
                                 ? "px-2 py-0.5 text-xs"
                                 : "px-2.5 py-1 text-sm"
                             }
                             ${
                               pathname === breadcrumb.path
                                 ? "text-white"
                                 : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                             }`}
                  title={
                    index === 0 ? "Go to Home" : `Go to ${breadcrumb.name}`
                  }
                  style={{
                    fontWeight: pathname === breadcrumb.path ? 600 : 500,
                    letterSpacing: "0.025em",
                  }}
                >
                  {breadcrumb.icon && (
                    <motion.div
                      whileHover={{
                        scale: isMobile ? 1 : 1.1,
                        rotate: isMobile ? 0 : -5,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <breadcrumb.icon
                        className={isMobile ? "text-xs" : "text-sm"}
                      />
                    </motion.div>
                  )}
                  <span>{breadcrumb.name}</span>
                </Link>

                {/* Active indicator */}
                {pathname === breadcrumb.path && (
                  <motion.div
                    layoutId="breadcrumb-active"
                    className="absolute inset-0 rounded-full -z-10"
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
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

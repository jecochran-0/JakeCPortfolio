"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronRight, FaHome, FaArrowLeft } from "react-icons/fa";

export default function BreadcrumbNav() {
  const pathname = usePathname();

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
      transition={{ duration: 0.4, delay: 0.3 }}
      className="fixed top-20 left-4 z-40 flex items-center space-x-2"
    >
      {/* Back button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group"
      >
        <Link
          href="/"
          className="flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-200"
          title="Back to Home"
        >
          <FaArrowLeft className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200" />
        </Link>
      </motion.div>

      {/* Breadcrumb path */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-200/50"
        style={{
          boxShadow: `0 4px 20px rgba(${
            currentTheme.primary === "#7C3AED"
              ? "124,58,237"
              : currentTheme.primary === "#059669"
              ? "5,150,105"
              : "220,38,38"
          }, 0.08)`,
        }}
      >
        <div className="flex items-center space-x-2">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.path} className="flex items-center">
              {index > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
                  className="mx-2"
                >
                  <FaChevronRight
                    className="text-gray-400 text-xs"
                    style={{ color: currentTheme.primary }}
                  />
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="relative"
              >
                <Link
                  href={breadcrumb.path}
                  className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full transition-all duration-200 text-sm font-medium
                             ${
                               pathname === breadcrumb.path
                                 ? "text-white"
                                 : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                             }`}
                  title={
                    index === 0 ? "Go to Home" : `Go to ${breadcrumb.name}`
                  }
                >
                  {breadcrumb.icon && (
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <breadcrumb.icon className="text-sm" />
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
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 inset-x-0 z-50 mx-auto w-fit rounded-full 
                 bg-white/90 backdrop-blur-sm
                 shadow-lg border border-gray-200/30`}
    >
      <div className="flex items-center rounded-full">
        <Link href="/" prefetch={true}>
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

        <Link href="/ux-ui" prefetch={true}>
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

        <Link href="/dev" prefetch={true}>
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

        <Link href="/about" prefetch={true}>
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
  );
}

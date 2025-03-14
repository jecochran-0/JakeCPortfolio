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
                 bg-neutral-800/90 backdrop-blur-sm
                 shadow-lg border border-neutral-700/30`}
    >
      <div className="flex items-center rounded-full">
        <Link href="/">
          <div
            className={`relative py-2 px-8 rounded-full transition-colors duration-300 ${
              pathname === "/"
                ? "bg-white text-black"
                : "text-white hover:text-white/80"
            }`}
          >
            Home
          </div>
        </Link>

        <Link href="/about">
          <div
            className={`relative py-2 px-8 rounded-full transition-colors duration-300 ${
              pathname === "/about"
                ? "bg-white text-black"
                : "text-white hover:text-white/80"
            }`}
          >
            About
          </div>
        </Link>
      </div>
    </motion.nav>
  );
}

"use client";

import { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./components/ScrollIndicator";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const Skills = lazy(() => import("./components/Skills"));
const SoftSkills = lazy(() => import("./components/SoftSkills"));

export default function Home() {
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

  return (
    <div className="relative min-h-screen">
      {/* Hero Video Section with Dynamic Content */}
      <section className="relative">
        <Suspense
          fallback={<div className="skeleton h-screen rounded-xl"></div>}
        >
          <Hero />
        </Suspense>
      </section>

      {/* Seamless Content Flow */}
      <div className="relative">
        {/* Skills Section - Seamlessly integrated */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: isMobile ? 0.4 : 0.6, // Reduced from 0.5/0.8
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-50px" }} // Reduced from -100px
              className="text-center mb-20"
              style={{
                willChange: "transform, opacity",
              }}
            >
              <h2 className="text-title mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Expertise
              </h2>
              <p className="text-subtitle text-gray-600 max-w-3xl mx-auto">
                A comprehensive toolkit for creating exceptional digital
                experiences
              </p>
            </motion.div>

            <Suspense
              fallback={<div className="skeleton h-96 rounded-xl"></div>}
            >
              <Skills />
            </Suspense>
          </div>
        </section>

        {/* Soft Skills Section - Seamlessly integrated */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: isMobile ? 0.4 : 0.6, // Reduced from 0.5/0.8
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-50px" }} // Reduced from -100px
              className="text-center mb-20"
              style={{
                willChange: "transform, opacity",
              }}
            >
              <h2 className="text-title mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Soft Skills & Leadership
              </h2>
              <p className="text-subtitle text-gray-600 max-w-3xl mx-auto">
                Beyond technical expertise, I bring strong communication,
                collaboration, and problem-solving skills to every project
              </p>
            </motion.div>

            <Suspense
              fallback={<div className="skeleton h-96 rounded-xl"></div>}
            >
              <SoftSkills />
            </Suspense>
          </div>
        </section>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
}

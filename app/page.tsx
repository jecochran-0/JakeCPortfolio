"use client";

import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./components/ScrollIndicator";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const Skills = lazy(() => import("./components/Skills"));
const SoftSkills = lazy(() => import("./components/SoftSkills"));

export default function Home() {
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Professional Skills
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The human side of design and development
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

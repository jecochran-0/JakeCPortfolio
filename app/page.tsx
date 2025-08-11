"use client";

import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./components/ScrollIndicator";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const Skills = lazy(() => import("./components/Skills"));
const SoftSkills = lazy(() => import("./components/SoftSkills"));
const Footer = lazy(() => import("./components/Footer"));

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Hero Section */}
      <section id="hero" className="relative">
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              <div className="card-brutal p-8 text-center">
                <div className="skeleton w-32 h-32 rounded-full mx-auto mb-4"></div>
                <div className="skeleton h-8 w-64 rounded-lg mx-auto mb-2"></div>
                <div className="skeleton h-6 w-48 rounded-lg mx-auto"></div>
              </div>
            </div>
          }
        >
          <Hero />
        </Suspense>
      </section>

      {/* Skills Section - Vertical Stacked Layout */}
      <section id="skills" className="relative bg-white overflow-hidden">
        {/* Diagonal Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-primary/10 to-transparent transform skew-x-12 origin-top-right" />

        <div className="container mx-auto px-4 py-40">
          {/* Title Section - Top */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="card-brutal card-brutal-large relative overflow-hidden">
              <div className="relative z-10 text-center">
                <h2 className="text-title mb-8 text-black">
                  Technical Expertise
                </h2>
                <p className="text-subtitle text-black">
                  A comprehensive toolkit for creating exceptional digital
                  experiences with cutting-edge technologies and modern design
                  principles
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-primary/20 rounded-lg transform rotate-12" />
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-secondary/30 rounded-full" />
            </div>
          </motion.div>

          {/* Skills Grid - Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="card-brutal p-8">
                      <div className="skeleton h-8 w-32 rounded-lg mb-4"></div>
                      <div className="space-y-3">
                        {[...Array(4)].map((_, j) => (
                          <div
                            key={j}
                            className="skeleton h-4 w-full rounded"
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              }
            >
              <Skills />
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* Soft Skills Section - Vertical Stacked Layout */}
      <section id="soft-skills" className="relative bg-gray-50 overflow-hidden">
        {/* Diagonal Background Element */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-bl from-secondary/10 to-transparent transform -skew-x-12 origin-top-left" />

        <div className="container mx-auto px-4 py-40">
          {/* Title Section - Top */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="card-brutal card-brutal-large relative overflow-hidden">
              <div className="relative z-10 text-center">
                <h2 className="text-title mb-8 text-black">
                  Soft Skills & Mindset
                </h2>
                <p className="text-subtitle text-black">
                  Beyond technical expertise, I bring a collaborative mindset,
                  creative problem-solving, and a passion for continuous
                  learning to every project
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-secondary/20 rounded-lg transform -rotate-12" />
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-primary/30 rounded-full" />
            </div>
          </motion.div>

          {/* Skills Grid - Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="card-brutal p-8">
                      <div className="skeleton h-8 w-32 rounded-lg mb-4"></div>
                      <div className="space-y-3">
                        {[...Array(4)].map((_, j) => (
                          <div
                            key={j}
                            className="skeleton h-4 w-full rounded"
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              }
            >
              <SoftSkills />
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Suspense
        fallback={
          <div className="bg-black/90 py-12">
            <div className="container mx-auto px-4">
              <div className="skeleton h-8 w-64 rounded-lg mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="skeleton h-32 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        }
      >
        <Footer />
      </Suspense>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
}

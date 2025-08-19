"use client";

import { Suspense, lazy } from "react";
import { motion, MotionConfig } from "framer-motion";
import ScrollIndicator from "./components/ScrollIndicator";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const Skills = lazy(() => import("./components/Skills"));
const SoftSkills = lazy(() => import("./components/SoftSkills"));
const Footer = lazy(() => import("./components/Footer"));

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div
        className="relative min-h-screen bg-black"
        style={{ contain: "content" }}
      >
        {/* Hero Section - Mobile Optimized */}
        <section id="hero" className="relative">
          <Suspense
            fallback={
              <div className="h-screen flex items-center justify-center px-4">
                <div className="card-brutal p-6 sm:p-8 text-center max-w-sm w-full">
                  <div className="skeleton w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4"></div>
                  <div className="skeleton h-6 sm:h-8 w-48 sm:w-64 rounded-lg mx-auto mb-2"></div>
                  <div className="skeleton h-4 sm:h-6 w-32 sm:w-48 rounded-lg mx-auto"></div>
                </div>
              </div>
            }
          >
            <Hero />
          </Suspense>
        </section>

        {/* Skills Section - Mobile Optimized Vertical Layout */}
        <section id="skills" className="relative bg-white overflow-hidden">
          {/* Technical Expertise Section */}
          <div className="py-8 sm:py-12 lg:py-16 xl:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.26,
                  ease: [0.2, 0, 0, 1],
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-center mb-8 sm:mb-12 lg:mb-16"
                style={{
                  willChange: "transform, opacity",
                  transform: "translateZ(0)",
                }}
              >
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black uppercase tracking-tight mb-4 sm:mb-6"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "tween",
                    duration: 0.24,
                    ease: [0.2, 0, 0, 1],
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                  }}
                >
                  Technical
                  <br />
                  <span className="text-orange-400">Expertise</span>
                </motion.h2>
                <motion.p
                  className="text-subtitle max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed px-4"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.24,
                    ease: [0.2, 0, 0, 1],
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                  }}
                >
                  A comprehensive toolkit for creating exceptional digital
                  experiences with cutting-edge technologies and modern design
                  principles.
                </motion.p>
              </motion.div>

              {/* Technical Skills Grid - Mobile Responsive */}
              <Suspense
                fallback={
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="card-brutal p-4 sm:p-6 min-h-[280px]"
                      >
                        <div className="skeleton w-full h-4 sm:h-6 rounded mb-4"></div>
                        <div className="space-y-3">
                          {[...Array(4)].map((_, j) => (
                            <div
                              key={j}
                              className="skeleton w-full h-3 sm:h-4 rounded"
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
            </div>
          </div>

          {/* Soft Skills Section - Mobile Optimized */}
          <div className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.26,
                  ease: [0.2, 0, 0, 1],
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-center mb-8 sm:mb-12 lg:mb-16"
                style={{
                  willChange: "transform, opacity",
                  transform: "translateZ(0)",
                }}
              >
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black uppercase tracking-tight mb-4 sm:mb-6"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "tween",
                    duration: 0.24,
                    ease: [0.2, 0, 0, 1],
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                  }}
                >
                  Professional
                  <br />
                  <span className="text-orange-400">Skills</span>
                </motion.h2>
                <motion.p
                  className="text-subtitle max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed px-4"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.24,
                    ease: [0.2, 0, 0, 1],
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                  }}
                >
                  Essential professional competencies that drive successful
                  collaboration, innovative problem-solving, and exceptional
                  project delivery.
                </motion.p>
              </motion.div>

              {/* Soft Skills Grid - Mobile Responsive */}
              <Suspense
                fallback={
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="card-brutal p-4 sm:p-6 min-h-[280px]"
                      >
                        <div className="skeleton w-full h-4 sm:h-6 rounded mb-4"></div>
                        <div className="space-y-3">
                          {[...Array(4)].map((_, j) => (
                            <div
                              key={j}
                              className="skeleton w-full h-3 sm:h-4 rounded"
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
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <Suspense
          fallback={
            <div className="bg-black h-64 sm:h-80 flex items-center justify-center">
              <div className="skeleton w-48 sm:w-64 h-6 sm:h-8 rounded bg-white/10"></div>
            </div>
          }
        >
          <Footer />
        </Suspense>

        {/* Mobile Performance Monitor - Hidden on Desktop */}
        <div className="lg:hidden">
          <ScrollIndicator />
        </div>
      </div>
    </MotionConfig>
  );
}

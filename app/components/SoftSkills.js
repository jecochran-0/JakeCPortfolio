"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaLayerGroup, FaSyncAlt } from "react-icons/fa";

const SoftSkills = () => {
  return (
    <section id="soft-skills-section" className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          Bridging UX and Engineering
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg max-w-4xl mx-auto"
        >
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            With a background in software engineering, I don&apos;t just hand
            off designs—I collaborate with developers using a shared language. I
            understand component-based frameworks, responsive behavior, and
            technical constraints, which means fewer miscommunications, faster
            iterations, and design decisions that are realistic from day one.
          </p>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Whether it&apos;s naming layers for dev-readiness in Figma, thinking
            in terms of state logic, or discussing layout behavior in Flexbox or
            Grid, I help streamline the feedback loop between design and
            development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-start"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FaCode className="text-xl text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Shared Technical Language
                </h3>
                <p className="text-gray-700">
                  I communicate effectively with engineers using terminology
                  that bridges both worlds.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-start"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FaLaptopCode className="text-xl text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Technical Understanding
                </h3>
                <p className="text-gray-700">
                  My knowledge of component-based frameworks and responsive
                  design creates realistic implementations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-start"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FaLayerGroup className="text-xl text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Development-Ready Designs
                </h3>
                <p className="text-gray-700">
                  I create properly structured Figma files with appropriate
                  naming and organization for developers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-start"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FaSyncAlt className="text-xl text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Streamlined Feedback Loop
                </h3>
                <p className="text-gray-700">
                  I help reduce iterations by understanding technical
                  constraints and designing accordingly.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkills;

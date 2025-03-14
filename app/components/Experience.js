"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");

  const experiences = {
    work: [
      {
        company: "79 Consulting",
        location: "Plato, Texas (Remote)",
        position: "Intern, Software Development",
        duration: "June 2024 - August 2024",
        description:
          "Identified and resolved UX flaws, coded backend and frontend solutions for Portals Pro, a new project management app.",
        achievements: [
          "Developed and optimized new pages and features using SuiteScript, JavaScript, HTML5, and CSS3, improving efficiency by ~20%",
          "Implemented 4 new pages and 2 redesigns, improving usability and introducing streamlined user workflows",
          "Created an in-depth style guide for future developers after recognizing UX flaws in SkyDoc application",
        ],
      },
      {
        company: "RecWell at Nielsen Stadium, University of Wisconsin",
        location: "Madison, Wisconsin",
        position: "Student Tennis Instructor",
        duration: "February 2023 - February 2024",
        description:
          "Taught basic-intermediate skills and match strategy to 30+ children and adults in both private and group lessons.",
        achievements: [
          "Prepared an 11-year-old intermediate player for a United States Tennis Association tournament",
          "Balanced work responsibilities while maintaining full-time student status",
        ],
      },
    ],
  };

  return (
    <section className="w-full py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Simple tab navigation */}
          <div className="flex justify-center mb-16" id="work-experience">
            <div className="flex border-b border-neutral-800">
              <button
                onClick={() => setActiveTab("work")}
                className={`px-6 py-2 text-sm font-light transition-colors duration-300 ${
                  activeTab === "work"
                    ? "text-white border-b border-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Work Experience
              </button>
            </div>
          </div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences[activeTab].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12"
              >
                <div className="mb-2">
                  {activeTab === "work" ? (
                    <>
                      <h3 className="text-xl font-normal text-white">
                        {item.position}
                      </h3>
                      <p className="text-gray-400 mt-1">
                        {item.company} | {item.location}
                      </p>
                    </>
                  ) : (
                    <h3 className="text-xl font-normal text-white">
                      {item.title}
                    </h3>
                  )}
                  {item.duration && (
                    <p className="text-gray-500 text-sm mt-2">
                      {item.duration}
                    </p>
                  )}
                </div>

                <p className="text-gray-300 my-4">{item.description}</p>

                <ul className="space-y-2 list-inside text-gray-400">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm">
                      • {achievement}
                    </li>
                  ))}
                </ul>

                {activeTab === "projects" && item.technologies && (
                  <p className="text-gray-500 text-sm mt-4">
                    <span className="italic">Technologies:</span>{" "}
                    {item.technologies}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

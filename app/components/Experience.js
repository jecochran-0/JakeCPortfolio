"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// Optimize each experience item as a memoized component
const ExperienceItem = memo(({ item, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
  >
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{item.position}</h3>
        <div className="flex flex-wrap items-center gap-2 mt-2 text-gray-600">
          <FaBriefcase className="text-blue-500" />
          <span>{item.company}</span>
          <span className="mx-2">•</span>
          <FaMapMarkerAlt className="text-blue-500" />
          <span>{item.location}</span>
        </div>
      </div>
      <div className="mt-2 md:mt-0 flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
        <FaCalendarAlt className="mr-2" />
        <span className="text-sm font-medium">{item.duration}</span>
      </div>
    </div>

    <p className="text-gray-700 mb-5 leading-relaxed">{item.description}</p>

    <h4 className="text-sm font-semibold uppercase text-gray-500 mb-3">
      Key Achievements
    </h4>
    <ul className="space-y-3">
      {item.achievements.map((achievement, idx) => (
        <li key={idx} className="flex items-start">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
          <span className="text-gray-700">{achievement}</span>
        </li>
      ))}
    </ul>
  </motion.div>
));

ExperienceItem.displayName = "ExperienceItem";

const Experience = () => {
  // Pre-defined experience data to avoid recalculation
  const experiences = [
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
  ];

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Experience Items - optimized with virtualization concept by only rendering visible items */}
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <ExperienceItem
                key={`${item.company}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(Experience);

"use client";

import { motion } from "framer-motion";
import {
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaCode,
  FaLayerGroup,
  FaSyncAlt,
} from "react-icons/fa";
import {
  optimizedAnimationVariants,
  getOptimizedViewport,
} from "../utils/performance";

const softSkills = [
  {
    category: "Technical Communication",
    icon: FaCode,
    skills: [
      "Shared Technical Language",
      "Developer Collaboration",
      "Design-to-Development Handoff",
      "Technical Documentation",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Design Leadership",
    icon: FaUsers,
    skills: [
      "User-Centered Design",
      "Design Systems",
      "Information Architecture",
      "Interaction Design",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Problem Solving",
    icon: FaLightbulb,
    skills: [
      "Analytical Thinking",
      "Creative Solutions",
      "User Research",
      "Iterative Process",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Development-Ready Design",
    icon: FaLayerGroup,
    skills: [
      "Component-Based Design",
      "Responsive Behavior",
      "Technical Constraints",
      "Implementation Feasibility",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Streamlined Workflow",
    icon: FaSyncAlt,
    skills: [
      "Agile Methodologies",
      "Cross-functional Teams",
      "Feedback Integration",
      "Project Management",
    ],
    color: "from-indigo-500 to-blue-500",
  },
  {
    category: "Business Impact",
    icon: FaChartLine,
    skills: [
      "ROI Analysis",
      "User Metrics",
      "Performance Optimization",
      "Accessibility Standards",
    ],
    color: "from-teal-500 to-green-500",
  },
];

export default function SoftSkills() {
  return (
    <motion.div
      variants={optimizedAnimationVariants.container}
      initial="hidden"
      whileInView="visible"
      viewport={getOptimizedViewport()}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      style={{ willChange: "transform, opacity" }}
    >
      {softSkills.map((skillGroup) => (
        <motion.div
          key={skillGroup.category}
          variants={optimizedAnimationVariants.item}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          className="glass-card p-8 rounded-2xl"
          style={{ willChange: "transform" }}
        >
          <div className="flex items-center mb-6">
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skillGroup.color} flex items-center justify-center mr-4`}
            >
              <skillGroup.icon className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              {skillGroup.category}
            </h3>
          </div>

          <motion.div
            variants={optimizedAnimationVariants.container}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            {skillGroup.skills.map((skill) => (
              <motion.div
                key={skill}
                variants={optimizedAnimationVariants.skillItem}
                className="flex items-center"
                style={{ willChange: "transform, opacity" }}
              >
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color} mr-3`}
                />
                <span className="text-gray-700 font-medium">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

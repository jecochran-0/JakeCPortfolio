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
    color: "#ff6b35",
    iconColor: "#61DAFB",
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
    color: "#4ecdc4",
    iconColor: "#00D4AA",
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
    color: "#45b7d1",
    iconColor: "#FFD700",
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
    color: "#f7b731",
    iconColor: "#FF6B35",
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
    color: "#26de81",
    iconColor: "#06B6D4",
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
    color: "#fc5c65",
    iconColor: "#10B981",
  },
];

export default function SoftSkills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 max-w-none">
      {softSkills.map((skillGroup, index) => (
        <motion.div
          key={skillGroup.category}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.02,
            y: -8,
            transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
          }}
          className="card-brutal group cursor-pointer relative overflow-hidden w-full"
        >
          {/* Brutalist accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-2"
            style={{ background: skillGroup.color }}
          />

          {/* Icon and Title */}
          <div className="flex items-center mb-6">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 border-4 border-black flex-shrink-0"
              style={{ background: skillGroup.color }}
            >
              <skillGroup.icon
                className="text-white text-xl"
                style={{ color: "#ffffff" }}
              />
            </div>
            <h3 className="text-lg font-bold text-black leading-tight">
              {skillGroup.category}
            </h3>
          </div>

          {/* Skills List */}
          <div className="space-y-3">
            {skillGroup.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: skillIndex * 0.1,
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
                className="flex items-center group/item"
              >
                <div
                  className="w-3 h-3 mr-3 flex-shrink-0 border-2 border-black"
                  style={{ background: skillGroup.color }}
                />
                <span className="text-gray-900 font-semibold text-sm group-hover/item:text-black transition-colors duration-200">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
        </motion.div>
      ))}
    </div>
  );
}

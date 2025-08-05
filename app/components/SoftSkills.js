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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {softSkills.map((skillGroup, index) => (
        <motion.div
          key={skillGroup.category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          className="glass-card p-8 rounded-2xl"
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

          <div className="space-y-3">
            {skillGroup.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + skillIndex * 0.05,
                }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color} mr-3`}
                />
                <span className="text-gray-700 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

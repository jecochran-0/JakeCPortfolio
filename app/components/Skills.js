"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaMobile, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    category: "Frontend Development",
    icon: FaReact,
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "TypeScript", "Redux"],
    color: "#ff6b35",
    iconColor: "#61DAFB",
  },
  {
    category: "Design & Prototyping",
    icon: FaFigma,
    skills: [
      "Figma",
      "UI Design",
      "UX Design",
      "Wireframing",
      "Prototyping",
      "User Research",
    ],
    color: "#4ecdc4",
    iconColor: "#F24E1E",
  },
  {
    category: "Backend & APIs",
    icon: FaNodeJs,
    skills: [
      "Node.js",
      "RESTful APIs",
      "Express",
      "Database Design",
      "API Integration",
    ],
    color: "#45b7d1",
    iconColor: "#68A063",
  },
  {
    category: "Styling & Frameworks",
    icon: SiTailwindcss,
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "CSS Grid",
      "Flexbox",
    ],
    color: "#f7b731",
    iconColor: "#06B6D4",
  },
  {
    category: "Version Control & Tools",
    icon: FaGitAlt,
    skills: ["Git", "GitHub", "Agile", "Jira", "Project Management"],
    color: "#26de81",
    iconColor: "#F05032",
  },
  {
    category: "Additional Skills",
    icon: FaMobile,
    skills: [
      "Mobile-First Design",
      "Performance Optimization",
      "Cross-browser Testing",
      "Accessibility",
    ],
    color: "#fc5c65",
    iconColor: "#00D4AA",
  },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skillGroup, index) => (
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
          className="card-brutal group cursor-pointer relative overflow-hidden"
        >
          {/* Brutalist accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-2"
            style={{ background: skillGroup.color }}
          />

          {/* Icon and Title */}
          <div className="flex items-center mb-6">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 border-4 border-black"
              style={{ background: skillGroup.color }}
            >
              <skillGroup.icon
                className="text-white text-xl"
                style={{ color: "#ffffff" }}
              />
            </div>
            <h3 className="text-lg font-bold text-black">
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
                <span className="text-black font-semibold text-sm group-hover/item:text-gray-700 transition-colors duration-200">
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

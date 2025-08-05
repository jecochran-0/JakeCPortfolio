"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaMobile, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    category: "Frontend Development",
    icon: FaReact,
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "TypeScript", "Redux"],
    color: "from-blue-500 to-cyan-500",
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
    color: "from-purple-500 to-pink-500",
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
    color: "from-green-500 to-emerald-500",
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
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Version Control & Tools",
    icon: FaGitAlt,
    skills: ["Git", "GitHub", "Agile", "Jira", "Project Management"],
    color: "from-indigo-500 to-blue-500",
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
    color: "from-teal-500 to-green-500",
  },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skillGroup, index) => (
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

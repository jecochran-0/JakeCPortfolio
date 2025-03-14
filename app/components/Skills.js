"use client";

import React, { useState } from "react";
// Import icons individually to reduce bundle size
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { TbBrandOpenai } from "react-icons/tb";
import { BsDatabaseCheck } from "react-icons/bs";

// Simple rating component without memo or animations
const SkillRating = ({ level }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`${i < level ? "text-white" : "text-neutral-700"} text-sm`}
        />
      ))}
    </div>
  );
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skillsData = [
    {
      name: "JavaScript",
      icon: <FaJsSquare />,
      category: "frontend",
      level: 5,
    },
    {
      name: "React.js",
      icon: <FaReact />,
      category: "frontend",
      level: 5,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      category: "frontend",
      level: 5,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      category: "frontend",
      level: 4,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      category: "frontend",
      level: 3,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      category: "backend",
      level: 3,
    },
    {
      name: "Java",
      icon: <FaJava />,
      category: "backend",
      level: 3,
    },
    {
      name: "SQL",
      icon: <BsDatabaseCheck />,
      category: "backend",
      level: 2,
    },
    {
      name: "RESTful APIs",
      icon: <BiCodeAlt />,
      category: "backend",
      level: 4,
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      category: "frontend",
      level: 2,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      category: "frontend",
      level: 3,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      category: "frontend",
      level: 4,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      category: "tools",
      level: 5,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      category: "tools",
      level: 5,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      category: "tools",
      level: 5,
    },
    {
      name: "UI/UX",
      icon: <MdDesignServices />,
      category: "tools",
      level: 4,
    },
    {
      name: "AI Prompting",
      icon: <TbBrandOpenai />,
      category: "tools",
      level: 5,
    },
    {
      name: "Agile",
      icon: <BiCodeAlt />,
      category: "tools",
      level: 3,
    },
    {
      name: "Jira",
      icon: <SiJira />,
      category: "tools",
      level: 3,
    },
  ];

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools & Methods" },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills-section" className="py-16 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-neutral-800 p-1 rounded-lg shadow-md">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedCategory === category.id
                    ? "bg-white text-neutral-900"
                    : "text-gray-300 hover:bg-neutral-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 shadow-md hover:shadow-white/5 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="text-2xl text-white mr-3">{skill.icon}</div>
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                </div>
                <SkillRating level={skill.level} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

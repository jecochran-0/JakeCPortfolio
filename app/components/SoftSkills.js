"use client";

import React, { useState } from "react";
// Import icons for soft skills
import { FaUsers } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { GiMountainClimbing } from "react-icons/gi";
import { GiThink } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";

// Simple rating component
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

const SoftSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skillsData = [
    {
      name: "Communication",
      icon: <BiMessageDetail />,
      category: "interpersonal",
      level: 5,
    },
    {
      name: "Team Leadership",
      icon: <RiTeamFill />,
      category: "interpersonal",
      level: 4,
    },
    {
      name: "Collaboration",
      icon: <FaUsers />,
      category: "interpersonal",
      level: 5,
    },
    {
      name: "Adaptability",
      icon: <GiMountainClimbing />,
      category: "personal",
      level: 4,
    },
    {
      name: "Problem Solving",
      icon: <FaBrain />,
      category: "cognitive",
      level: 5,
    },
    {
      name: "Critical Thinking",
      icon: <GiThink />,
      category: "cognitive",
      level: 4,
    },
    {
      name: "Creativity",
      icon: <FaRegLightbulb />,
      category: "cognitive",
      level: 5,
    },
    {
      name: "Time Management",
      icon: <FaRegClock />,
      category: "personal",
      level: 4,
    },
    {
      name: "Presentation Skills",
      icon: <FaChalkboardTeacher />,
      category: "interpersonal",
      level: 4,
    },
    {
      name: "Self-Motivation",
      icon: <IoIosRocket />,
      category: "personal",
      level: 5,
    },
    {
      name: "Negotiation",
      icon: <FaRegHandshake />,
      category: "interpersonal",
      level: 3,
    },
    {
      name: "Spanish (Conversational)",
      icon: <FaLanguage />,
      category: "language",
      level: 3,
    },
    {
      name: "Self-Improvement",
      icon: <MdOutlineSelfImprovement />,
      category: "personal",
      level: 5,
    },
  ];

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "interpersonal", name: "Interpersonal" },
    { id: "cognitive", name: "Cognitive" },
    { id: "personal", name: "Personal" },
    { id: "language", name: "Languages" },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="soft-skills-section"
      className="py-16 bg-neutral-900 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Soft Skills</h2>

        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="inline-flex bg-neutral-800 p-1 rounded-lg shadow-md">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
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
              {/* Brief description for soft skills */}
              <p className="text-sm text-gray-400">
                {getSkillDescription(skill.name)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Function to get descriptions for each soft skill
function getSkillDescription(skillName) {
  const descriptions = {
    Communication: "I can make complex ideas accessible to a wide audience",
    "Team Leadership":
      "Guide team members to achieve project goals efficiently",
    Collaboration: "Work seamlessly with diverse groups to deliver results",
    Adaptability: "Quickly adjust to new challenges and requirements",
    "Problem Solving": "Identify issues and develop effective solutions",
    "Critical Thinking":
      "Analyze situations objectively to make sound decisions",
    Creativity:
      "I know how to introduce fun and creativity to logical problems",
    "Time Management": "Prioritize tasks effectively to meet deadlines",
    "Self-Motivation": "Drive projects forward independently with enthusiasm",
    Negotiation: "Find mutually beneficial solutions in collaborative settings",
    "Spanish (Conversational)": "Communicate effectively with Spanish speakers",
    "Analytical Thinking":
      "Break down complex problems into manageable components",
    "Self-Improvement": "Continuously seek growth and learning opportunities",
  };

  return (
    descriptions[skillName] || "Demonstrated expertise in professional settings"
  );
}

export default SoftSkills;

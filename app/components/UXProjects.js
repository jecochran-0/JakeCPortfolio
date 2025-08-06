"use client";

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

// Enhanced UX project card with advanced hover effects
const UXProjectCard = ({ project, index }) => {
  // Calculate the grid span based on featured projects
  let gridClasses = "";

  // First project (Spotify) takes up more space
  if (index === 0) {
    gridClasses = "col-span-12 md:col-span-12 row-span-2";
  } else {
    // Other projects (for future)
    gridClasses = "col-span-12 md:col-span-6 row-span-1";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className={`group relative overflow-hidden rounded-xl bg-neutral-800/90 border border-neutral-700
        hover:border-white/30 transition-all duration-300
        shadow-lg hover:shadow-xl hover:scale-[1.02] hover:z-10 ${gridClasses}`}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Project Image - Replace img with Next.js Image component */}
      <div className="absolute inset-0 bg-neutral-800 z-0 overflow-hidden">
        <div className="w-full h-full relative">
          {project.image ? (
            // Use a div with background-image instead of <img>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-40 transition-opacity duration-300"
              style={{
                backgroundImage: `url(${project.image})`,
                willChange: "opacity",
              }}
            />
          ) : (
            <div
              className="absolute inset-0 bg-neutral-900 flex items-center justify-center opacity-70 group-hover:opacity-40 transition-opacity duration-300"
              style={{ willChange: "opacity" }}
            >
              <span className="text-white text-xl font-bold">
                {project.title}
              </span>
            </div>
          )}
        </div>
        {/* Simple overlay for better performance */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>

      {/* Accent line - simplified */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>

      {/* Base Content - always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-neutral-700/70 rounded-full text-white/80"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 bg-neutral-700/70 rounded-full text-white/80">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Expanded Content - Optimized for performance and button visibility */}
      <div
        className="absolute inset-0 p-4 bg-neutral-900/90
                   flex flex-col opacity-0 group-hover:opacity-100
                   transition-opacity duration-300 ease-out z-20"
        style={{ willChange: "opacity" }}
      >
        <div className="flex-1 overflow-auto scrollbar-hide">
          <h3 className="text-xl font-bold mb-2 text-green-400">
            {project.title}
          </h3>
          <p className="text-neutral-300 mb-4 text-sm md:text-base">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-white/80 border border-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Fixed positioning for buttons to ensure visibility */}
        <div className="flex gap-3 pt-2 mt-auto">
          <Link
            href={project.links.caseStudy}
            className="flex items-center gap-2 text-white bg-green-600 hover:bg-green-500
                     px-3 py-1.5 rounded-lg transition-colors duration-200 text-sm"
          >
            <FiFileText size={12} /> View Case Study
          </Link>
          {project.links.external && (
            <a
              href={project.links.external}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-neutral-800 hover:bg-neutral-700
                       px-3 py-1.5 rounded-lg border border-neutral-700 transition-colors duration-200 text-sm"
            >
              <FaExternalLinkAlt size={12} /> External Link
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const UXProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Spotify UX Redesign",
      description:
        "A comprehensive redesign of Spotify's mobile and desktop interfaces, focusing on improving navigation, content discovery, and user engagement. This case study explores the UX research, wireframing, prototyping, and visual design stages of the project.",
      image: "/SpotifyThumbnail.png", // We'll create this thumbnail
      tags: [
        "UX Research",
        "UI Design",
        "Prototyping",
        "Usability Testing",
        "Design Systems",
      ],
      links: {
        caseStudy: "/ux-ui/spotify",
        external: "https://spotify.com",
      },
      featured: true,
    },
  ];

  return (
    <section
      id="ux-projects-section"
      className="py-16 bg-neutral-900 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">
          UX Projects
        </h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
          In-depth case studies showcasing my approach to user experience
          design, from research and wireframing to high-fidelity prototypes and
          implementation.
        </p>

        <div className="grid grid-cols-12 auto-rows-[min(300px,_25vw)] gap-5">
          {projects.map((project, index) => (
            <UXProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UXProjects;

"use client";

import React, { useState, useEffect, memo } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// Memoize the project card component to prevent unnecessary re-renders
const ProjectCard = memo(({ project, index, isVisible, placeholderImage }) => {
  // Calculate the grid span based on whether the project is featured
  let gridClasses = "";

  // Featured projects take up more space
  if (project.featured) {
    if (index === 0) {
      gridClasses = "col-span-12 md:col-span-8 row-span-2";
    } else {
      gridClasses = "col-span-12 md:col-span-4 row-span-2";
    }
  } else {
    // Non-featured projects
    gridClasses = "col-span-12 md:col-span-4 row-span-1";
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-neutral-800 border border-neutral-700 hover:border-white/20 transition-all duration-300 ${gridClasses}`}
      style={{
        animationDelay: isVisible ? `${Math.min(index * 0.05, 0.4)}s` : "0s",
        animation: isVisible
          ? `fadeIn 0.3s ease forwards ${Math.min(index * 0.05, 0.4)}s`
          : "none",
        opacity: 0,
        willChange: "opacity, transform",
      }}
    >
      {/* Project Image */}
      <div className="absolute inset-0 bg-neutral-800 z-0">
        <img
          src={project.image || placeholderImage}
          alt={project.title}
          loading="lazy"
          width="400"
          height="300"
          className="w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-opacity duration-300"
        />
      </div>

      {/* Overlay Content (always visible) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-10">
        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-neutral-700 rounded-full text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Expanded Content (visible on hover) */}
      <div className="absolute inset-0 p-4 bg-neutral-900/90 flex flex-col justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-neutral-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-neutral-300 transition-colors"
          >
            <FaExternalLinkAlt size={14} /> Live Demo
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-neutral-300 transition-colors"
          >
            <FaGithub size={14} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
});

// Add display name for the memo component
ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("projects-section");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
          // Remove scroll listener once visible to improve performance
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    // Use passive event listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Pizza E-Commerce Store",
      description:
        "A fully functional e-commerce prototype featuring a dynamic menu API, shopping cart system, and Redux state management.",
      image: "/images/placeholder-1.jpg", // Replace with your actual image path
      tags: ["React.js", "Tailwind", "Redux"],
      links: {
        live: "https://example.com/pizza-store",
        github: "https://github.com/yourusername/pizza-store",
      },
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects and skills as a software engineer and UI/UX designer.",
      image: "/images/placeholder-2.jpg", // Replace with your actual image path
      tags: ["React.js", "Tailwind", "JavaScript"],
      links: {
        live: "https://example.com",
        github: "https://github.com/yourusername/portfolio",
      },
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides real-time weather data and forecasts using a weather API.",
      image: "/images/placeholder-3.jpg", // Replace with your actual image path
      tags: ["JavaScript", "API", "CSS"],
      links: {
        live: "https://example.com/weather",
        github: "https://github.com/yourusername/weather-app",
      },
      featured: false,
    },
    {
      id: 4,
      title: "Clicker Quest",
      description:
        "A browser-based incremental game that dynamically generates unique pixel-art heroes and backstories using OpenAI's API.",
      image: "/images/placeholder-4.jpg", // Replace with your actual image path
      tags: ["HTML", "CSS", "JavaScript", "OpenAI"],
      links: {
        live: "https://example.com/clicker-quest",
        github: "https://github.com/yourusername/clicker-quest",
      },
      featured: false,
    },
    {
      id: 5,
      title: "Task Management App",
      description:
        "A full-stack task management application with user authentication, task prioritization, and deadline tracking.",
      image: "/images/placeholder-5.jpg", // Replace with your actual image path
      tags: ["React.js", "Node.js", "MongoDB"],
      links: {
        live: "https://example.com/task-app",
        github: "https://github.com/yourusername/task-app",
      },
      featured: false,
    },
  ];

  // Function to generate placeholder image URLs with specified dimensions
  const getPlaceholderImage = (id) => {
    return `/api/placeholder/400/300?text=Project+${id}`;
  };

  return (
    <section id="projects-section" className="py-8 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        <div
          className={`grid grid-cols-12 auto-rows-[180px] gap-4 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
              placeholderImage={getPlaceholderImage(project.id)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

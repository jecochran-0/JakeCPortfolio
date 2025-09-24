"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// Custom Cursor Component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isOverProject, setIsOverProject] = useState(false);
  const [projectType, setProjectType] = useState<'ux' | 'dev' | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsOverProject(false);
      setProjectType(null);
    };

    // Check if mouse is over project images (both UX and Dev projects)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const projectContainer = target.closest(".project-image-container");
      if (projectContainer) {
        const projectElement = projectContainer.closest("[data-project-type]");
        if (projectElement) {
          const type = projectElement.getAttribute("data-project-type") as 'ux' | 'dev';
          setIsOverProject(true);
          setProjectType(type);
        } else {
          setIsOverProject(false);
          setProjectType(null);
        }
      } else {
        setIsOverProject(false);
        setProjectType(null);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        scale: isVisible ? (isOverProject ? 1.5 : 1) : 0,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 0.8,
      }}
    >
      <div
        className={`rounded-full flex items-center justify-center ${
          isOverProject ? "w-24 h-24" : "w-8 h-8"
        }`}
        style={{
          backgroundColor: isOverProject ? "#3B82F6" : "#F5F5DC",
        }}
      >
        {isOverProject && (
          <span
            className="text-white font-bold text-sm"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {projectType === 'ux' ? 'VIEW' : 'GO LIVE'}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default function DevPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [showCursor, setShowCursor] = useState(true);
  const searchParams = useSearchParams();



  useEffect(() => {
    setMounted(true);
    // Check URL params to set initial state
    const initialTab = searchParams.get("tab");
    if (initialTab === "ux" || initialTab === "design") {
      setActiveTab("ux");
    } else if (initialTab === "development" || initialTab === "dev") {
      setActiveTab("development");
    } else {
      setActiveTab("all");
    }

    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = "smooth";

    // Cleanup function to remove smooth scrolling
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, [searchParams]);

  // Typing cursor animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);


  const developmentProjects = [
    {
      title: "Pizza E-Commerce Store",
      description:
        "A fully functional e-commerce prototype featuring a dynamic menu API, shopping cart system, and Redux state management.",
      technologies: ["React.js", "Tailwind", "Redux"],
      image: "/PizzaStore.png",
      emoji: "🍕",
      githubUrl: "https://github.com/jecochran-0/React-Pizza-Store",
      liveUrl: "https://react-pizza-store-omega.vercel.app/",
    },
    {
      title: "BentoBox",
      description:
        "A modern web application that uses AI to create beautiful, responsive Bento grid layouts from your photos.",
      technologies: ["JavaScript", "API", "CSS"],
      image: "/BentoBoxPreview.png",
      emoji: "📦",
      githubUrl: "https://github.com/jecochran-0/BentoBox/tree/main",
      liveUrl: "https://jecochran-0.github.io/BentoBox/",
    },
    {
      title: "Pixel Character Creator",
      description:
        "A browser-based application that dynamically generates unique pixel-art heroes using OpenAI's API.",
      technologies: ["HTML", "CSS", "JavaScript", "OpenAI"],
      image: "/PixelCharacterGenerator.png",
      emoji: "🎮",
      githubUrl: "https://github.com/jecochran-0/pixelCharacterGenerator",
      liveUrl: "https://pixel-character-generator.vercel.app/",
    },
    {
      title: "Algorithm Visualizer",
      description:
        "A full-stack task management application with user authentication, task prioritization, and deadline tracking.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      image: "/AlgorithmVisualizer_Preview.png",
      emoji: "📊",
      githubUrl: "https://github.com/jecochran-0/algorithm_visualizer",
      liveUrl: "https://jecochran-0.github.io/algorithm_visualizer/",
    },
  ];

  const featuredProject = {
    title: "Wizards Chess",
    description:
      "A chess game with integrated spells to drastically change the game. Built with React, CSS, and JavaScript.",
    technologies: ["React.js", "Tailwind", "JavaScript"],
    image: "/WizardChessPreview.png",
    emoji: "♟️",
    githubUrl: "https://github.com/jecochran-0/React-Wizard-Chess",
    liveUrl: "https://react-wizard-chess.vercel.app/",
  };

  const uxProjects = [
    {
      title: "Spotify Redesign • Design Focus",
      description:
        "Redesigned the Spotify mobile app to improve discoverability and user engagement through better visual hierarchy and intuitive navigation.",
      technologies: ["Figma", "Prototyping", "User Research", "Wireframing"],
      image: "/HeroScreen.mp4",
      emoji: "🎵",
    },
    {
      title: "Grammarly Go • Research Process",
      description:
        "Designed an AI-powered writing assistant that helps users improve their communication with intelligent suggestions and real-time feedback.",
      technologies: ["UI Design", "UX Research", "Figma", "Prototyping"],
      image: "/Grammarly-Go.png",
      emoji: "✍️",
    },
  ];

  const allProjects = [...developmentProjects, ...uxProjects];
  const currentProjects =
    activeTab === "all"
      ? allProjects
      : activeTab === "development"
      ? developmentProjects
      : uxProjects;

  if (!mounted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#171717" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-12 h-12 border-2 border-gray-300 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white font-light">Loading...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <CustomCursor />
      <main
        className="relative font-sans scroll-smooth"
        style={{
          backgroundColor: "#171717",
          scrollBehavior: "smooth",
          cursor: "none",
        }}
        role="main"
        aria-label="Development - Jake Cochran Portfolio"
      >
        {/* Top Left Branding */}
        <motion.div
          className="absolute top-8 left-8 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/">
            <motion.div
              className="px-4 py-2 rounded-lg cursor-pointer"
              style={{ backgroundColor: "#B4323B" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span
                className="text-white font-black text-lg tracking-wider uppercase"
                style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
              >
                Jake Cochran
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Top Navigation */}
        <motion.div
          className="absolute top-8 right-8 z-20 flex items-center space-x-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a
            href="/"
            className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to homepage"
          >
            HOME
          </motion.a>
          <motion.a
            href="/about"
            className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to about page"
          >
            ABOUT
          </motion.a>
          <motion.a
            href="/skills"
            className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to skills page"
          >
            SKILLS
          </motion.a>
          <motion.a
            href="/contact"
            className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to contact page"
          >
            WORK
          </motion.a>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          className="relative flex items-start justify-start px-16 pt-60 pb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="max-w-none mx-auto">
            {/* Main Hero Text */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1
                className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-tight tracking-tight mb-8"
                style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
              >
                BRIDGING UX AND DEVELOPMENT
                <span
                  className="inline-block w-1 h-20 bg-white ml-2"
                  style={{
                    opacity: showCursor ? 1 : 0,
                    transition: "opacity 0.1s ease-in-out",
                  }}
                ></span>
              </h1>
            </motion.div>

            {/* Tab Filter Buttons */}
            <motion.div
              className="flex justify-start gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button
                onClick={() => setActiveTab("all")}
                className={`px-16 py-8 text-2xl font-medium transition-all duration-300 border-2 ${
                  activeTab === "all"
                    ? "border-transparent text-white"
                    : "border-white text-white hover:bg-white hover:text-black"
                }`}
                style={{
                  backgroundColor:
                    activeTab === "all" ? "#CD535A" : "transparent",
                  borderRadius: "50px",
                }}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("development")}
                className={`px-16 py-8 text-2xl font-medium transition-all duration-300 border-2 ${
                  activeTab === "development"
                    ? "border-transparent text-white"
                    : "border-white text-white hover:bg-white hover:text-black"
                }`}
                style={{
                  backgroundColor:
                    activeTab === "development" ? "#CD535A" : "transparent",
                  borderRadius: "50px",
                }}
              >
                Dev
              </button>
              <button
                onClick={() => setActiveTab("ux")}
                className={`px-16 py-8 text-2xl font-medium transition-all duration-300 border-2 ${
                  activeTab === "ux"
                    ? "border-transparent text-white"
                    : "border-white text-white hover:bg-white hover:text-black"
                }`}
                style={{
                  backgroundColor:
                    activeTab === "ux" ? "#CD535A" : "transparent",
                  borderRadius: "50px",
                }}
              >
                UX/UI
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="py-40 px-16 relative z-20"
          style={{ backgroundColor: "#171717" }}
        >
          <div className="max-w-none mx-auto">
            {/* Featured Project (Development tab only) */}
            {activeTab === "development" && (
              <motion.div
                className="mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                data-project-type="development"
              >
                {/* Featured Project Image */}
                <div className="relative overflow-hidden mb-16 rounded-lg project-image-container cursor-pointer">
                  <motion.a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      width={1200}
                      height={600}
                      className="w-full object-cover h-80 md:h-96"
                    />
                  </motion.a>
                </div>

                {/* Featured Project Content */}
                <div className="text-left space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-4 py-2 text-sm font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: "#CD535A",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      Featured Project
                    </span>
                  </div>
                  <h3
                    className="text-4xl md:text-5xl font-bold text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {featuredProject.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-2xl max-w-4xl">
                    {featuredProject.description}
                  </p>
                  
                  {/* Live and GitHub buttons for featured project */}
                  <div className="flex gap-6 mt-8">
                    <motion.a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-lg hover:bg-gray-300 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Live
                    </motion.a>
                    <motion.a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Projects Grid */}
            <div
              className={
                activeTab === "ux"
                  ? "space-y-32"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
              }
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className=""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  data-project-type={activeTab}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden mb-16 rounded-lg project-image-container cursor-pointer">
                    <motion.a
                      href={
                        project.title === "Spotify Redesign • Design Focus"
                          ? "/ux-ui/spotify"
                          : project.title === "Grammarly Go • Research Process"
                          ? "/ux-ui/grammarlygo"
                          : activeTab === "development" && 'liveUrl' in project
                          ? project.liveUrl as string
                          : "#"
                      }
                      target={activeTab === "development" && 'liveUrl' in project ? "_blank" : undefined}
                      rel={activeTab === "development" && 'liveUrl' in project ? "noopener noreferrer" : undefined}
                      className="block"
                      whileHover={{ scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      {project.image.endsWith(".mp4") ? (
                        <video
                          src={project.image}
                          muted
                          loop
                          className={`w-full object-cover ${
                            activeTab === "ux"
                              ? "h-[500px] md:h-[600px]"
                              : "h-80 md:h-96"
                          }`}
                          onMouseEnter={(e) => {
                            try {
                              (e.target as HTMLVideoElement).play();
                            } catch (error) {
                              console.log("Video play failed:", error);
                            }
                          }}
                          onMouseLeave={(e) => {
                            try {
                              (e.target as HTMLVideoElement).pause();
                            } catch (error) {
                              console.log("Video pause failed:", error);
                            }
                          }}
                          onError={(e) => {
                            console.log("Video error:", e);
                            // Fallback to a placeholder or hide the video
                            (e.target as HTMLVideoElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={1200}
                          height={activeTab === "ux" ? 800 : 600}
                          className={`w-full object-cover ${
                            activeTab === "ux"
                              ? "h-[500px] md:h-[600px]"
                              : "h-80 md:h-96"
                          }`}
                        />
                      )}
                    </motion.a>
                  </div>

                  {/* Project Content */}
                  <div className="text-left space-y-4">
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg max-w-2xl">
                      {project.description}
                    </p>
                    
                    {/* Live and GitHub buttons for development projects */}
                    {activeTab === "development" && 'githubUrl' in project && 'liveUrl' in project && (
                      <div className="flex gap-4 mt-6">
                        <motion.a
                          href={project.liveUrl as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold text-sm hover:bg-gray-300 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          Live
                        </motion.a>
                        <motion.a
                          href={project.githubUrl as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-black transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          GitHub
                        </motion.a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              className="text-center mt-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/contact"
                className="inline-block text-white px-16 py-6 text-xl font-black tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105 border-2 border-white rounded-lg"
                style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
                whileHover={{
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
} from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaRocket,
  FaCog,
} from "react-icons/fa";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

// Custom Cursor Component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isOverProject, setIsOverProject] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsOverProject(false);
    };

    // Check if mouse is over project images
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".project-image-container")) {
        setIsOverProject(true);
      } else {
        setIsOverProject(false);
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
            VIEW
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default function DevPage() {
  const { scrollY, scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [showCursor, setShowCursor] = useState(true);
  const searchParams = useSearchParams();

  // Professional scroll tracking with physics
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Smooth scroll progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
  });

  // Reduced parallax and scroll effects for smoother scrolling
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -50]);
  const heroParallax = useTransform(scrollY, [0, 800], [0, -20]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.01]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.9]);

  // Reduced section scroll effects
  const sectionOneY = useTransform(scrollY, [200, 800], [10, -10]);
  const sectionTwoY = useTransform(scrollY, [400, 1200], [5, -5]);
  const sectionThreeY = useTransform(scrollY, [600, 1400], [5, -5]);

  // Velocity-based background effect
  const velocityBackground = useTransform(
    smoothVelocity,
    [-1000, 0, 1000],
    [
      "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.01) 0%, transparent 50%)",
      "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, transparent 50%)",
      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.01) 0%, transparent 50%)",
    ]
  );

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

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/jakecochran", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/jakecochran",
      label: "LinkedIn",
    },
    { icon: FaEnvelope, href: "mailto:jakecochran@gmail.com", label: "Email" },
  ];

  const developmentProjects = [
    {
      title: "Pizza E-Commerce Store",
      description:
        "A fully functional e-commerce prototype featuring a dynamic menu API, shopping cart system, and Redux state management.",
      technologies: ["React.js", "Tailwind", "Redux"],
      image: "/PizzaStore.png",
      emoji: "🍕",
    },
    {
      title: "Wizards Chess",
      description:
        "A chess game with integrated spells to drastically change the game. Built with React, CSS, and JavaScript.",
      technologies: ["React.js", "Tailwind", "JavaScript"],
      image: "/WizardChessPreview.png",
      emoji: "♟️",
    },
    {
      title: "BentoBox",
      description:
        "A modern web application that uses AI to create beautiful, responsive Bento grid layouts from your photos.",
      technologies: ["JavaScript", "API", "CSS"],
      image: "/BentoBoxPreview.png",
      emoji: "📦",
    },
    {
      title: "Pixel Character Creator",
      description:
        "A browser-based application that dynamically generates unique pixel-art heroes using OpenAI's API.",
      technologies: ["HTML", "CSS", "JavaScript", "OpenAI"],
      image: "/PixelCharacterGenerator.png",
      emoji: "🎮",
    },
    {
      title: "Algorithm Visualizer",
      description:
        "A full-stack task management application with user authentication, task prioritization, and deadline tracking.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      image: "/AlgorithmVisualizer_Preview.png",
      emoji: "📊",
    },
  ];

  const uxProjects = [
    {
      title: "Spotify Redesign",
      description:
        "Redesigned the Spotify mobile app to improve discoverability and user engagement through better visual hierarchy and intuitive navigation.",
      technologies: ["Figma", "Prototyping", "User Research", "Wireframing"],
      image: "/HeroScreen.mp4",
      emoji: "🎵",
    },
    {
      title: "Grammarly Go",
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
        {/* Top Navigation */}
        <motion.div
          className="absolute top-8 right-8 z-20 flex items-center space-x-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a
            href="/"
            className="text-white hover:text-gray-300 transition-colors duration-300 font-light text-sm tracking-wider"
            whileHover={{ scale: 1.05 }}
            aria-label="Go to homepage"
          >
            HOME
          </motion.a>
          <motion.a
            href="/about"
            className="text-white hover:text-gray-300 transition-colors duration-300 font-light text-sm tracking-wider"
            whileHover={{ scale: 1.05 }}
            aria-label="Go to about page"
          >
            ABOUT
          </motion.a>
          <motion.a
            href="/ux-ui"
            className="text-white hover:text-gray-300 transition-colors duration-300 font-light text-sm tracking-wider"
            whileHover={{ scale: 1.05 }}
            aria-label="Go to UX/UI page"
          >
            SKILLS
          </motion.a>
          <motion.a
            href="/contact"
            className="text-white hover:text-gray-300 transition-colors duration-300 font-light text-sm tracking-wider"
            whileHover={{ scale: 1.05 }}
            aria-label="Go to contact page"
          >
            WORK
          </motion.a>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          className="relative flex items-start justify-start px-8 pt-52 pb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Main Hero Text */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight mb-6"
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
              className="flex justify-start gap-6"
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
          className="py-32 px-8 relative z-20"
          style={{ backgroundColor: "#171717" }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Projects Grid */}
            <div
              className={
                activeTab === "ux"
                  ? "space-y-24"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
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
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden mb-12 rounded-lg project-image-container cursor-pointer">
                    <motion.a
                      href={
                        project.title === "Spotify Redesign"
                          ? "/ux-ui/spotify"
                          : project.title === "Grammarly Go"
                          ? "/ux-ui/grammarlygo"
                          : "#"
                      }
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
                              e.target.play();
                            } catch (error) {
                              console.log("Video play failed:", error);
                            }
                          }}
                          onMouseLeave={(e) => {
                            try {
                              e.target.pause();
                            } catch (error) {
                              console.log("Video pause failed:", error);
                            }
                          }}
                          onError={(e) => {
                            console.log("Video error:", e);
                            // Fallback to a placeholder or hide the video
                            e.target.style.display = "none";
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

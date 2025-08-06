"use client";

import React, {
  useState,
  useEffect,
  useMemo,
  Suspense,
  lazy,
  useRef,
} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaUserCircle,
  FaBriefcase,
  FaGraduationCap,
  FaLightbulb,
} from "react-icons/fa";
import SafeHydrate from "../components/SafeHydrate";
import { getWindowDimensions } from "../utils/serverSafeWindow";

// Lazy load components
const Experience = lazy(() => import("../components/Experience"));
const Bio = lazy(() => import("../components/Bio"));

// Lazy load components used below the fold
const ExperienceLoading = () => (
  <div className="animate-pulse space-y-8">
    <div className="h-48 bg-gray-200 rounded-xl w-full"></div>
    <div className="h-48 bg-gray-200 rounded-xl w-full"></div>
  </div>
);

// Check if window is defined (client-side) or not (server-side)
const isBrowser = typeof window !== "undefined";

// Simple useInView hook implementation
const useInView = (
  options: {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number;
  } = {}
) => {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && !hasBeenInView) {
          setHasBeenInView(true);
        }
      },
      {
        root: options.root || null,
        rootMargin: options.rootMargin || "0px",
        threshold: options.threshold || 0.1,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.root, options.rootMargin, options.threshold, hasBeenInView]);

  return { ref, isInView, hasBeenInView };
};

// Wrap the entire component with SafeHydrate
function AboutContent() {
  const [activeTab, setActiveTab] = useState("professional");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // For the floating elements - throttled to improve performance
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only run on client side
    if (!isBrowser) return;

    let lastUpdate = 0;
    const THROTTLE_MS = 50; // Only update every 50ms

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastUpdate > THROTTLE_MS) {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
        lastUpdate = now;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Memoize calculation to avoid unnecessary rerenders
  const calculateMovement = useMemo(() => {
    return (factor) => {
      if (!isBrowser) return { x: 0, y: 0 }; // Safe default on server

      const { width, height } = getWindowDimensions();
      const xMovement = (mousePosition.x / width - 0.5) * factor;
      const yMovement = (mousePosition.y / height - 0.5) * factor;
      return { x: xMovement, y: yMovement };
    };
  }, [mousePosition.x, mousePosition.y]);

  // Reduce number of particles for better performance
  const floatingDots = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  }, []);

  // For sections below the fold, track when they come into view
  const experienceSection = useInView({ rootMargin: "200px" });
  const personalSection = useInView({ rootMargin: "200px" });
  const educationSection = useInView({ rootMargin: "200px" });

  return (
    <div className="pt-20 overflow-hidden">
      {/* Floating background shapes - reduced number and simplified animation */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <motion.div
          className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-blue-200 mix-blend-multiply blur-3xl will-change-transform"
          animate={{
            x: calculateMovement(30).x,
            y: calculateMovement(30).y,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 100 }}
        />
        <motion.div
          className="absolute top-[40%] right-[15%] w-72 h-72 rounded-full bg-purple-200 mix-blend-multiply blur-3xl will-change-transform"
          animate={{
            x: calculateMovement(-40).x,
            y: calculateMovement(-40).y,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 100 }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[30%] w-80 h-80 rounded-full bg-yellow-100 mix-blend-multiply blur-3xl will-change-transform"
          animate={{
            x: calculateMovement(20).x,
            y: calculateMovement(20).y,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 100 }}
        />
      </div>

      {/* Hero Section with parallax effect */}
      <motion.div
        className="relative h-[90vh] flex items-center justify-center overflow-hidden"
        style={{ opacity, scale, y, willChange: "transform, opacity" }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white opacity-90"></div>
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-6">
            {/* Reduce number of grid items and apply initial opacity to avoid animation flash */}
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="border-[0.5px] border-gray-200 opacity-30"
              />
            ))}
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-block relative">
              <motion.div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto relative z-10">
                <Suspense
                  fallback={
                    <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                  }
                >
                  <Bio />
                </Suspense>
              </motion.div>
              <motion.div
                className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full will-change-transform"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full will-change-transform"
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-transparent bg-clip-text"
          >
            Hey, I&apos;m Jake
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I&apos;m from both the worlds of UX/UI design and software
            development. I can lead the development of an app start to finish or
            be the bridge to connect two teams
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://linkedin.com/in/jake-cochran"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg font-medium"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/jecochran-0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg font-medium"
            >
              View GitHub
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bio Section with creative design */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="md:w-2/5 relative">
                {/* Background decoration */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-blue-400 opacity-50"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-blue-400 opacity-50"></div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="relative z-10 bg-white p-6 shadow-xl rounded-lg"
                >
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    My <span className="text-blue-500">Story</span>
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    I&apos;m a new grad from the University of Wisconsin Madison
                    with a unique perspective that bridges design and
                    development. My journey began when I wanted to build a
                    computer and have a sketchbook as a kid. I have an itch to
                    logically solve problems and the urge to create.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    What drives me is the reaction of user&apos;s enjoying an
                    end product.
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">
                      When I&apos;m not coding...
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                        Music Production
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">
                        Flag Football
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                        Chess
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                        Gaming
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="md:w-3/5">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-50 p-8 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500"></div>

                    <h2 className="text-2xl font-bold mb-6 text-gray-800">
                      What I Bring to the Table
                    </h2>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <FaLightbulb className="text-blue-500" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-gray-800 mb-1">
                            Design Sensibility
                          </h3>
                          <p className="text-gray-600">
                            I approach problems with a designer&apos;s eye,
                            focusing on user needs and creating intuitive
                            interfaces.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <FaUserCircle className="text-purple-500" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-gray-800 mb-1">
                            Developer Mindset
                          </h3>
                          <p className="text-gray-600">
                            I can communicate in the technical world, making my
                            UX process more efficient from the start, and I can
                            also be the one to develop my designs.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <FaBriefcase className="text-green-500" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-gray-800 mb-1">
                            Problem Solver
                          </h3>
                          <p className="text-gray-600">
                            I thrive on challenges and finding elegant solutions
                            to complex problems.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab navigation for different sections */}
      <section
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
        ref={experienceSection.ref}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center mb-12">
              <div className="bg-white p-1 rounded-full shadow-md">
                <button
                  onClick={() => setActiveTab("professional")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "professional"
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <FaBriefcase className="inline mr-1 mb-0.5" /> Professional
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "education"
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <FaGraduationCap className="inline mr-1 mb-0.5" /> Education
                </button>
                <button
                  onClick={() => setActiveTab("personal")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "personal"
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <FaUserCircle className="inline mr-1 mb-0.5" /> Personal
                </button>
              </div>
            </div>

            {/* Conditional rendering with lazy loading */}
            {experienceSection.isInView && (
              <>
                {/* Professional Journey */}
                {activeTab === "professional" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    id="work-experience"
                  >
                    <Suspense fallback={<ExperienceLoading />}>
                      <Experience />
                    </Suspense>
                  </motion.div>
                )}

                {/* Education Journey */}
                {activeTab === "education" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl p-8 shadow-lg"
                    ref={educationSection.ref}
                  >
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-5">
                        <FaGraduationCap className="text-blue-500 text-3xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          University of Wisconsin
                        </h3>
                        <p className="text-gray-600">
                          Bachelor&apos;s in Consumer Behavior and Marketplace
                          Studies. Minors in Computer Science and
                          Entrepreneurship
                        </p>
                        <p className="text-blue-600 font-medium">
                          Expected Graduation: May 2025
                        </p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="border-l-4 border-blue-500 pl-5 py-2">
                        <h4 className="font-medium text-gray-800">
                          Relevant Coursework
                        </h4>
                        <p className="text-gray-600">
                          Mobile Applications, User Interface Design, Data
                          Structures & Algorithms, Software Engineering,
                          Consumer Insights
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Personal Journey */}
                {activeTab === "personal" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 shadow-lg transform rotate-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                          Flag Football
                        </h3>
                        <p className="text-gray-600 mb-4">
                          I&apos;m a big football fan (go pats), and I also like
                          to play flag football and tennis.
                        </p>
                        <div className="hobby-image-container">
                          <img
                            src="/Tennis.jpg"
                            alt="Tennis Photo"
                            className="hobby-image"
                            loading="lazy"
                          />
                          <div className="hobby-image-overlay">
                            <p className="text-sm font-medium">
                              Tennis at University of Wisconsin
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 shadow-lg transform -rotate-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                          Chess
                        </h3>
                        <p className="text-gray-600 mb-4">
                          I pass the time with a chess match on chess.com
                        </p>
                        <div className="hobby-image-container">
                          <img
                            src="/Chess.jpg"
                            alt="Chess Game"
                            className="hobby-image"
                            loading="lazy"
                          />
                          <div className="hobby-image-overlay">
                            <p className="text-sm font-medium">
                              Chess matches are my favorite way to relax
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 shadow-lg transform -rotate-1 md:col-span-2">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                          Gaming & Game Design
                        </h3>
                        <p className="text-gray-600 mb-4">
                          I&apos;ve played video games since I was a kid,
                          I&apos;ve become familiar with game design interfaces
                          and principles. Maybe you&apos;ve seen me in the top
                          ranks of a game you&apos;ve played.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Animated call-to-action banner */}
      <motion.section
        ref={personalSection.ref}
        className="py-14 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Load floating dots only when section is in view */}
        {personalSection.isInView && (
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {floatingDots.map((dot) => (
              <motion.div
                key={dot.id}
                className="absolute w-2 h-2 rounded-full bg-white will-change-transform"
                style={{
                  top: dot.top,
                  left: dot.left,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: dot.duration,
                  repeat: Infinity,
                  delay: dot.delay,
                }}
              />
            ))}
          </div>
        )}

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Let&apos;s Build Something Amazing Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
          >
            I&apos;m always open to new opportunities and collaborations
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:jake.e.cochran@gmail.com"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-medium rounded-full shadow-lg transform transition-all duration-300 hover:shadow-xl"
          >
            Get In Touch
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}

// Export a wrapper component that uses SafeHydrate
export default function About() {
  return (
    <SafeHydrate
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <AboutContent />
    </SafeHydrate>
  );
}

"use client";

import { lazy, Suspense, useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";

// Lazy load the heavier components
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));

export default function Home() {
  const [visibleSections, setVisibleSections] = useState({
    skills: false,
    projects: false,
  });

  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    // Pre-load components right after initial render for smoother transitions later
    setTimeout(() => {
      import("./components/Skills");
      import("./components/Projects");
    }, 1000);

    // Set up intersection observer to detect when sections come into view
    const observerOptions = {
      rootMargin: "100px 0px", // Start loading before fully in view
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "skills-container") {
            setVisibleSections((prev) => ({ ...prev, skills: true }));
          } else if (entry.target.id === "projects-container") {
            setVisibleSections((prev) => ({ ...prev, projects: true }));
          }
          // Once visible, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Start observing the placeholder containers
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-neutral-900">
      {/* Hero Section with full viewport height to force scrolling */}
      <section className="min-h-screen flex flex-col justify-center items-center">
        <Hero />
      </section>

      {/* Spacer at the bottom of the section */}
      <div className="bg-neutral-800 h-1 w-full mt-24" />

      {/* Skills Section - starts below the viewport */}
      <section id="about-me" className="min-h-screen">
        <div
          id="skills-container"
          ref={skillsRef}
          className="container mx-auto px-4 pt-16"
        >
          <Suspense fallback={<div className="h-[500px] bg-neutral-900"></div>}>
            <div
              className={`transition-all duration-500 ease-out transform ${
                visibleSections.skills
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {<Skills />}
            </div>
          </Suspense>
        </div>
        {/* Spacer at the bottom of the section */}
        <div className="bg-neutral-800 h-1 w-full mt-24" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen">
        <div
          id="projects-container"
          ref={projectsRef}
          className="container mx-auto px-4 pt-16"
        >
          <Suspense fallback={<div className="h-[500px] bg-neutral-900"></div>}>
            <div
              className={`transition-all duration-500 ease-out transform ${
                visibleSections.projects
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {<Projects />}
            </div>
          </Suspense>
        </div>
        {/* Spacer at the bottom of the section */}
        <div className="bg-neutral-800 h-1 w-full mt-24" />
      </section>

      {/* Footer spacing */}
      <div className="h-20"></div>
    </main>
  );
}

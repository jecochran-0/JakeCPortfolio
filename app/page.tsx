"use client";

import { lazy, useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";

// Lazy load components
const Skills = lazy(() => import("./components/Skills"));
const SoftSkills = lazy(() => import("./components/SoftSkills"));
const Projects = lazy(() => import("./components/Projects"));

// Clean, simple reveal animation on scroll
const ScrollRevealSection = ({ children, id, delay = 0, className = "" }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`slide-in-section ${isVisible ? "visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Simple section component with clean styling
const Section = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`py-24 bg-neutral-900 ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
};

export default function Home() {
  const [loadedComponents, setLoadedComponents] = useState({
    skills: null,
    softSkills: null,
    projects: null,
  });
  const [visibleSections, setVisibleSections] = useState({
    skills: false,
    softSkills: false,
    projects: false,
  });

  // Load components and set up observers
  useEffect(() => {
    // Load all components immediately
    const loadComponents = async () => {
      const [SkillsModule, SoftSkillsModule, ProjectsModule] =
        await Promise.all([
          import("./components/Skills"),
          import("./components/SoftSkills"),
          import("./components/Projects"),
        ]);

      setLoadedComponents({
        skills: SkillsModule.default,
        softSkills: SoftSkillsModule.default,
        projects: ProjectsModule.default,
      });
    };

    loadComponents().catch(console.error);

    // Set up observer for section visibility
    const observerOptions = {
      rootMargin: "400px 0px",
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === "skills-section") {
            setVisibleSections((prev) => ({ ...prev, skills: true }));
          } else if (id === "soft-skills-section") {
            setVisibleSections((prev) => ({ ...prev, softSkills: true }));
          } else if (id === "projects-section") {
            setVisibleSections((prev) => ({ ...prev, projects: true }));
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll(
      "#skills-section, #soft-skills-section, #projects-section"
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Component renderer
  const renderComponent = (name) => {
    const Component = loadedComponents[name];
    const isVisible = visibleSections[name];

    if (!Component || !isVisible) {
      return <div className="min-h-[200px]"></div>;
    }

    return <Component />;
  };

  return (
    <main className="bg-neutral-900">
      {/* Hero Section */}
      <Section id="hero-section" className="min-h-screen flex items-center">
        <Hero />
      </Section>

      {/* Subtle section divider */}
      <div className="bg-neutral-800 h-px w-full max-w-5xl mx-auto" />

      {/* Skills Section */}
      <Section id="skills-section">
        <ScrollRevealSection>{renderComponent("skills")}</ScrollRevealSection>
      </Section>

      {/* Subtle section divider */}
      <div className="bg-neutral-800 h-px w-full max-w-5xl mx-auto" />

      {/* Soft Skills Section */}
      <Section id="soft-skills-section">
        <ScrollRevealSection delay={100}>
          {renderComponent("softSkills")}
        </ScrollRevealSection>
      </Section>

      {/* Subtle section divider */}
      <div className="bg-neutral-800 h-px w-full max-w-5xl mx-auto" />

      {/* Projects Section */}
      <Section id="projects-section">
        <ScrollRevealSection delay={200}>
          {renderComponent("projects")}
        </ScrollRevealSection>
      </Section>

      {/* Footer space */}
      <div className="h-20"></div>
    </main>
  );
}

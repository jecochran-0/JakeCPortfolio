"use client";

import React, {
  lazy,
  useState,
  useEffect,
  useRef,
  ReactNode,
  Suspense,
} from "react";

// Lazy load all components
const Hero = lazy(() => import("./components/Hero"));
// These are used through renderComponent, so disable the unused-vars rule
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Skills = lazy(() => import("./components/Skills"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SoftSkills = lazy(() => import("./components/SoftSkills"));

// Add TypeScript interfaces for the component props
interface ScrollRevealSectionProps {
  children: ReactNode;
  id?: string;
  delay?: number;
  className?: string;
}

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

// Clean, simple reveal animation on scroll
const ScrollRevealSection = ({
  children,
  id,
  delay = 0,
  className = "",
}: ScrollRevealSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
const Section = ({ children, id, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
};

export default function Home() {
  const [loadedComponents, setLoadedComponents] = useState({
    skills: null,
    softSkills: null,
  });
  const [visibleSections, setVisibleSections] = useState({
    skills: false,
    softSkills: false,
  });

  // Load components and set up observers
  useEffect(() => {
    // Load all components immediately
    const loadComponents = async () => {
      const [SkillsModule, SoftSkillsModule] = await Promise.all([
        import("./components/Skills"),
        import("./components/SoftSkills"),
      ]);

      setLoadedComponents({
        skills: SkillsModule.default,
        softSkills: SoftSkillsModule.default,
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
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll(
      "#skills-section, #soft-skills-section"
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Component renderer
  const renderComponent = (name: "skills" | "softSkills") => {
    const Component = loadedComponents[name];
    const isVisible = visibleSections[name];

    if (!Component || !isVisible) {
      return <div className="min-h-[200px]"></div>;
    }

    return <Component />;
  };

  return (
    <main className="bg-white">
      {/* Hero Section - Full width, no padding */}
      <div className="w-full">
        <Suspense
          fallback={
            <div className="min-h-[600px] flex items-center justify-center">
              <div className="animate-pulse text-gray-400">Loading...</div>
            </div>
          }
        >
          <Hero />
        </Suspense>
      </div>

      {/* Subtle section divider */}
      <div className="bg-gray-200 h-px w-full max-w-5xl mx-auto" />

      {/* Skills Section */}
      <Section id="skills-section">
        <ScrollRevealSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">My Skills</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore a snapshot of my skills below, or visit the dedicated{" "}
              <a href="/ux-ui" className="text-blue-500 hover:underline">
                UX/UI
              </a>{" "}
              and{" "}
              <a href="/dev" className="text-blue-500 hover:underline">
                Development
              </a>{" "}
              pages for a more detailed look.
            </p>
          </div>
          {renderComponent("skills")}
        </ScrollRevealSection>
      </Section>

      {/* Subtle section divider */}
      <div className="bg-gray-200 h-px w-full max-w-5xl mx-auto" />

      {/* Soft Skills Section */}
      <Section id="soft-skills-section">
        <ScrollRevealSection delay={100}>
          {renderComponent("softSkills")}
        </ScrollRevealSection>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-50">
        <ScrollRevealSection delay={200}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Interested in my work?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Check out my UX/UI designs and software development projects to
              see my skills in action.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/ux-ui"
                className="px-8 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-md"
              >
                UX/UI Work
              </a>
              <a
                href="/dev"
                className="px-8 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-md"
              >
                Development Projects
              </a>
            </div>
          </div>
        </ScrollRevealSection>
      </Section>

      {/* Footer space */}
      <div className="h-20"></div>
    </main>
  );
}

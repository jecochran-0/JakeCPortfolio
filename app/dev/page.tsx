"use client";

import React from "react";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function DevPage() {
  return (
    <div className="pt-20">
      {/* Software Development Skills Section */}
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Software Development
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 text-center">
            I build clean, efficient, and maintainable applications with a focus
            on user experience. My engineering approach prioritizes modular
            code, performance, and accessibility.
          </p>
        </div>

        {/* Include the Skills component - it will be filtered to show Dev skills */}
        <div className="hidden">
          {/* This div hides the "My Skills" heading from Skills component */}
        </div>
        <div className="mt-[-4rem]">
          <Skills showOnly="dev" />
        </div>

        {/* Development Approach section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              My Development Approach
            </h2>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-3">
                    Frontend Excellence
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Creating responsive, accessible, and performant user
                    interfaces with modern frameworks and best practices.
                  </p>
                  <ul className="text-gray-600 list-disc list-inside">
                    <li>Component-based architecture</li>
                    <li>Responsive design principles</li>
                    <li>Accessibility compliance</li>
                    <li>Modern JavaScript frameworks</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-3">
                    Clean Code Philosophy
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Writing maintainable, well-documented code that scales and
                    adapts to changing requirements.
                  </p>
                  <ul className="text-gray-600 list-disc list-inside">
                    <li>Modular architecture</li>
                    <li>Consistent code style</li>
                    <li>Thorough documentation</li>
                    <li>Test-driven development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Moved from homepage */}
        <Projects />
      </div>
    </div>
  );
}

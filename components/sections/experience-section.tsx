import { experience } from "@/constants/experience";
import { Code } from "lucide-react";
import React from "react";
import { ContributionGrid } from "../contribution-grid";
import { SectionDivider } from "../section-divider";

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionDivider
          title="Professional Experience"
          subtitle="A journey of growth, leadership, and technical excellence"
        />

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="rounded-xl p-8 shadow-lg transition-all bg-white border border-gray-200 hover:shadow-xl dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-green-900/20"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    {exp.company}
                  </a>
                </div>
                <span className="text-green-500 font-semibold mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <div className="mb-6 p-4 rounded-lg border bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800/50">
                <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-800 dark:text-green-300">
                  <Code className="w-4 h-4" />
                  Tech Stack
                </h4>
                <p className="text-green-700 dark:text-green-200">
                  {exp.techStack.join(", ")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                    <ContributionGrid />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1">
                          <div className="w-2 h-2 ml-1 mt-1 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="leading-relaxed text-gray-700 dark:text-gray-300">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                    <ContributionGrid />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1.5">
                          <div className="w-2 h-2 ml-1 mt-1 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="leading-relaxed font-medium text-gray-700 dark:text-gray-200">
                          {ach}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

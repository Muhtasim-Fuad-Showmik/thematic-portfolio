import { skills } from "@/constants/skills";
import { Box, Cloud, Code, Database, Settings } from "lucide-react";
import React from "react";
import { SectionDivider } from "../section-divider";

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionDivider
          title="Technical Expertise"
          subtitle="5+ years of experience building robust, scalable software solutions across diverse technologies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="rounded-xl p-6 shadow-lg transition-all transform hover:-translate-y-1 bg-white border border-gray-200 hover:shadow-xl dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-green-900/20"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                {category === "Languages" && (
                  <Code className="w-5 h-5 text-green-500" />
                )}
                {category === "Frameworks & Libraries" && (
                  <Box className="w-5 h-5 text-green-500" />
                )}
                {category === "Cloud & DevOps" && (
                  <Cloud className="w-5 h-5 text-green-500" />
                )}
                {category === "Databases" && (
                  <Database className="w-5 h-5 text-green-500" />
                )}
                {category === "Tools" && (
                  <Settings className="w-5 h-5 text-green-500" />
                )}
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-medium transition-all cursor-pointer bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-green-900/50 dark:hover:text-green-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

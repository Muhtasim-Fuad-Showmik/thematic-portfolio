import { projects, ProjectCategoryType, ProjectType } from "@/constants/projects";
import React, { useState } from "react";
import { SectionDivider } from "../section-divider";
import { ChevronRight } from "lucide-react";
import ProjectDetailsDialog from "../project-details-dialog";

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType>();
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionDivider
          title="Featured Projects"
          subtitle="Selected work showcasing technical depth and problem-solving capabilities"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl shadow-lg border overflow-hidden transition-all transform hover:-translate-y-2 cursor-pointer group bg-white border-gray-200 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-green-900/20"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-green-500 transition-colors text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.type === ProjectCategoryType.Personal && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                        Personal
                      </span>
                    )}
                    {project.type === ProjectCategoryType.Professional && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        Professional
                      </span>
                    )}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                </div>
                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-sm transition-colors bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-green-900/50 dark:hover:text-green-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center font-medium group-hover:text-green-600 transition-colors text-green-600 dark:text-green-400">
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectDetailsDialog
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </section>
  );
};

export default ProjectsSection;

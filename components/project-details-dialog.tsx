import { ProjectType } from "@/constants/projects";
import { Award, Code, ExternalLink, Github } from "lucide-react";
import React from "react";
import { AnimatedPixelGrid } from "./animated-pixel-grid";
import { Dialog, DialogContent } from "./ui/dialog";
import { ContributionGrid } from "./contribution-grid";

type Props = {
  selectedProject?: ProjectType;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<ProjectType | undefined>
  >;
};

const ProjectDetailsDialog: React.FC<Props> = ({
  selectedProject,
  setSelectedProject,
}) => {
  return (
    <Dialog
      open={selectedProject !== undefined}
      onOpenChange={(open: boolean) => {
        if (!open) {
          setSelectedProject(undefined);
        }
      }}
    >
      <DialogContent className="flex items-center justify-center bg-white dark:bg-gray-800">
        <div className="rounded-xl max-w-full w-full max-h-[90vh] overflow-y-auto shadow-2xl p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2
                className={`text-3xl font-bold mb-2 text-gray-900 dark:text-white`}
              >
                {selectedProject?.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {selectedProject?.details.imageUrl && (
            <div className="mb-8 ml-0 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
              <img
                src={selectedProject.details.imageUrl}
                alt={`${selectedProject.title} project screenshot`}
                className="w-full h-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
          )}
          <div className="prose max-w-[670px] mb-8">
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {selectedProject?.details.problem}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 rounded-lg border bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800/50">
              <h3 className="font-bold mb-4 text-lg flex items-center gap-2 text-green-800 dark:text-green-300">
                <Code className="w-5 h-5" />
                My Role & Contributions
              </h3>
              <p className="text-green-700 dark:text-green-200">
                {selectedProject?.details.role}
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800/50">
              <h3 className="font-bold mb-4 text-lg flex items-center gap-2 text-blue-800 dark:text-blue-300">
                <Award className="w-5 h-5" />
                Key Achievements
              </h3>
              <ul className="space-y-2 text-blue-700 dark:text-blue-200">
                {selectedProject?.details.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="min-w-2 min-h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <h3
              className={`font-bold mb-4 text-lg flex items-center gap-2 text-gray-900 dark:text-white`}
            >
              <ContributionGrid />
              Key Challenges
            </h3>
            <ul className="space-y-3">
              {selectedProject?.details.challenges.map((challenge, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50`}
                >
                  <div className="mt-1">
                    <AnimatedPixelGrid size={6} count={4} opacity={0.6} />
                  </div>
                  <span
                    className={`leading-relaxed text-gray-700 dark:text-gray-200`}
                  >
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-4">
            {selectedProject?.details.demoUrl && (
              <a
                href={selectedProject.details.demoUrl ?? "#"}
                target="_blank"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </div>
              </a>
            )}
            {selectedProject?.details.githubUrl && (
              <a
                href={selectedProject.details.githubUrl}
                target="_blank"
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub Repo
                </div>
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;

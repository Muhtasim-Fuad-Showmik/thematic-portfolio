import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { SectionDivider } from "../section-divider";

export const ContactSection: React.FC = ({}) => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionDivider
          title="Get In Touch"
          subtitle="Ready to collaborate on your next project? Let's connect."
        />

        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl p-8 shadow-xl bg-white border border-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all bg-gradient-to-r from-green-50 to-green-100 border-green-200 hover:from-green-100 hover:to-green-200 dark:bg-gradient-to-r dark:from-green-900/20 dark:to-green-800/20 dark:border-green-800/50 dark:hover:from-green-800/30 dark:hover:to-green-700/30">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </p>
                  <p className="text-green-700 dark:text-green-300">
                    muhtasimfuadshowmik@gmail.com
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 hover:from-gray-100 hover:to-gray-200 dark:bg-gradient-to-r dark:from-gray-800/30 dark:to-gray-700/30 dark:border-gray-700/50 dark:hover:from-gray-700/40 dark:hover:to-gray-600/40`}
              >
                <div className="bg-gray-800 p-3 rounded-lg">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className={`font-semibold text-gray-900 dark:text-white`}>
                    GitHub
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    github.com/Muhtasim-Fuad-Showmik
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 hover:from-blue-100 hover:to-blue-200 dark:bg-gradient-to-r dark:from-blue-900/20 dark:to-blue-800/20 dark:border-blue-800/50 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30`}
              >
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    LinkedIn
                  </p>
                  <p className="text-blue-700 dark:text-blue-300">
                    linkedin.com/in/muhtasim-fuad-showmik-8b3ab31aa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

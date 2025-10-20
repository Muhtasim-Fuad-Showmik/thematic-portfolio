import { socials } from "@/constants/socials";
import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { AnimatedPixelGrid } from "./animated-pixel-grid";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2025 Muhtasim Fuad Showmik. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href={socials.github}
              className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={socials.linkedin}
              className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={socials.email}
              className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <AnimatedPixelGrid size={6} count={16} opacity={0.4} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

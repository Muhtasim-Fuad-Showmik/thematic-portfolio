import { socials } from "@/constants/socials";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import { TbBrandLeetcode } from "react-icons/tb";
import { AnimatedPixelGrid } from "../animated-pixel-grid";
import ProfileImageReveal from "../profile-image-reveal";

const HeroSection = () => {
  return (
    <section id="hero" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="p-1 rounded-full bg-gradient-to-r from-green-500 to-green-600">
              <div className="rounded-full p-1 bg-white dark:bg-gray-900">
                <ProfileImageReveal imageSrc="/profile_picture_bw.jpeg" />
              </div>
            </div>
          </div>
          {/* TODO: Fix clipping text here */}
          <h1 className="text-xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Senior Software Engineer
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
            Building Scalable Systems & Elegant Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get in Touch
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>
            <div className="flex gap-4">
              <a
                href={socials.github}
                className="transition-colors transform hover:scale-110 text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={socials.linkedin}
                className="transition-colors transform hover:scale-110 text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={socials.leetcode}
                className="transition-colors transform hover:scale-110 text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              >
                <TbBrandLeetcode className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex justify-center">
          <AnimatedPixelGrid size={10} count={12} opacity={0.2} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

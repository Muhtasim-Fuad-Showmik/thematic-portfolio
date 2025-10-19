"use client";
import { navItems } from "@/constants/navItems";
import React, { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 transition-colors duration-300 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/80 dark:backdrop-blur-md dark:border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-xl bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Muhtasim Fuad
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-3 py-2 text-sm font-medium transition-colors relative group text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full bg-green-600 dark:bg-green-400"></span>
              </button>
            ))}
          </div>

          {/* Theme Toggle and Mobile menu button */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <div className="md:hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="focus:outline-none text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-sm border-t bg-white/95 border-gray-200 dark:bg-gray-900/95 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              "hero",
              "skills",
              "experience",
              "projects",
              "certificates",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block px-3 py-2 text-base font-medium w-full text-left relative group text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-3 w-0 h-0.5 transition-all group-hover:w-8 bg-green-600 dark:bg-green-400"></span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

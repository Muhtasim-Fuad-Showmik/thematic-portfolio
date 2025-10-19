"use client";

import { AnimatedBackgroundElements } from "@/components/animated-background-elements";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden min-h-screen transition-colors duration-300 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <AnimatedBackgroundElements />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ThemeToggle />
        <h1>Thematic Portfolio</h1>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>© 2025 Thematic Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

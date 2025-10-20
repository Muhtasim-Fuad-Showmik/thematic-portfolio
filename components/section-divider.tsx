import { FC } from "react";
import { AnimatedPixelGrid } from "./animated-pixel-grid";

type SectionDividerProps = {
  title: string;
  subtitle?: string;
};

export const SectionDivider: FC<SectionDividerProps> = ({
  title,
  subtitle,
}: SectionDividerProps) => (
  <div className="relative mb-16">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full border-t border-gray-200 dark:border-t dark:border-gray-700"></div>
    </div>
    <div className="relative flex items-center justify-center">
      <div className="mr-6">
        <AnimatedPixelGrid size={8} count={6} opacity={0.4} />
      </div>
      <div className="bg-white dark:bg-gray-900 px-6 py-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
        )}
      </div>
      <div className="ml-6">
        <AnimatedPixelGrid size={8} count={6} opacity={0.4} />
      </div>
    </div>
  </div>
);

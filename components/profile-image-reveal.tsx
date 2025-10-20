import { Code } from "lucide-react";
import React, { FC, MouseEventHandler, useRef, useState } from "react";

type ProfileImageRevealProps = {
  imageSrc?: string;
};

const ProfileImageReveal: FC<ProfileImageRevealProps> = ({ imageSrc }) => {
  const [mousePosition, setMousePosition] = useState<ScreenPositionType>({
    x: 0,
    y: 0,
  });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-32 h-32 rounded-full overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Default Code Icon */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900">
        <Code className="w-16 h-16 text-green-400" />
      </div>

      {/* Reveal Image on Hover */}
      {isHovering && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, white 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, white 0%, transparent 100%)`,
          }}
        />
      )}
    </div>
  );
};

export default ProfileImageReveal;

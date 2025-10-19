"use client";

import { useEffect, useState } from "react";

export function AnimatedBackgroundElements({
  className = "",
}: {
  className?: string;
}) {
  const [backgroundMousePosition, setBackgroundMousePosition] =
    useState<ScreenPositionType>({
      x: 0,
      y: 0,
    });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setBackgroundMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`fixed inset-0 pointer-events-none opacity-5 ${className}`}
      style={{
        background: `radial-gradient(circle at ${backgroundMousePosition.x}px ${backgroundMousePosition.y}px, var(--animated-background-radial-color) 0%, transparent 50%)`,
      }}
    />
  );
}

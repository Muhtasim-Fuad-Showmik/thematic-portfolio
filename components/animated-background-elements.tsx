"use client";

export function AnimatedBackgroundElements({
  className = "",
  backgroundMousePosition,
}: {
  className?: string;
  backgroundMousePosition: ScreenPositionType;
}) {
  return (
    <div
      className={`fixed inset-0 pointer-events-none opacity-5 ${className}`}
      style={{
        background: `radial-gradient(circle at ${backgroundMousePosition.x}px ${backgroundMousePosition.y}px, var(--animated-background-radial-color) 0%, transparent 50%)`,
      }}
    />
  );
}

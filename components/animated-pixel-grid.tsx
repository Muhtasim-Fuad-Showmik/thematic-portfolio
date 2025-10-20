export const AnimatedPixelGrid = ({
  size = 6,
  count = 8,
  opacity = 0.3,
  direction = "horizontal",
}) => {
  const pixels = [];

  for (let i = 0; i < count; i++) {
    pixels.push(
      <div
        key={i}
        className="rounded-sm animate-pulse bg-[#2ea44f] dark:bg-[#3fb950]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          opacity: opacity - i * 0.03,
          animationDelay: `${i * 0.1}s`,
        }}
      />
    );
  }

  return (
    <div
      className={`flex ${direction === "vertical" ? "flex-col" : "flex-row"}`}
      style={{
        gap: `${size / 2}px`,
      }}
    >
      {pixels}
    </div>
  );
};

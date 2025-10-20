export const ContributionGrid = () => {
  // Define different opacity levels to mimic GitHub's contribution chart
  const opacities = [0.2, 0.4, 0.6, 0.8];

  return (
    <div className="grid grid-cols-2 gap-1">
      {opacities.map((opacity, index) => (
        <div
          key={index}
          className="w-2 h-2 rounded-sm bg-[#2ea44f] dark:bg-[#3fb950]"
          style={{
            opacity: opacity,
          }}
        />
      ))}
    </div>
  );
};

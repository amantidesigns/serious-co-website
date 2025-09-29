import React from "react";

const StarField = ({ numberOfStars }: { numberOfStars: number }) => {
  const stars = Array.from({ length: numberOfStars }).map((_, index) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const animationDelay = Math.random() * 3; // Random delay 0-3 seconds
    const animationDuration = 3 + Math.random() * 7; // Random duration 3-10 seconds

    return (
      <div
        key={index}
        className="absolute size-px rounded-full bg-white animate-twinkle"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${animationDelay}s`,
          animationDuration: `${animationDuration}s`,
        }}
      />
    );
  });

  return (
    <div className="relative h-full w-full">
      {stars}
    </div>
  );
};

export default StarField;

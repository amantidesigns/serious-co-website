import React from "react";
import StarField from "./StarField";
import ShootingStar from "./ShootingStar";

interface ShootingStarBackgroundProps {
  numberOfStars?: number;
  className?: string;
}

export default function ShootingStarBackground({ 
  numberOfStars = 80, 
  className = "" 
}: ShootingStarBackgroundProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none select-none z-0 ${className}`}>
      <StarField numberOfStars={numberOfStars} />
      <ShootingStar />
    </div>
  );
}

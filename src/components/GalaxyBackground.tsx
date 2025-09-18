import React from "react";

interface GalaxyBackgroundProps {
  className?: string;
}

export default function GalaxyBackground({ className = "" }: GalaxyBackgroundProps) {
  return (
    <div className={`absolute -top-35 right-0 w-full z-10 ${className}`}>
      <img 
        src="/galaxy-ascii.png" 
        className="animate-fade-in animate-pulse rounded-2xl object-cover opacity-80" 
        alt="" 
      />
    </div>
  );
}

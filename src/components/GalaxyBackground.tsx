import React from "react";

interface GalaxyBackgroundProps {
  className?: string;
}

export default function GalaxyBackground({ className = "" }: GalaxyBackgroundProps) {
  return (
    <div className={`absolute inset-0 w-full h-full z-10 overflow-hidden ${className}`}>
      <img 
        src="/galaxy-ascii.png" 
        className="animate-fade-in animate-pulse rounded-2xl object-cover opacity-80 w-full h-full" 
        alt="" 
      />
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";

interface HamburgerIconProps {
  isOpen: boolean;
  className?: string;
}

export const HamburgerIcon = ({ isOpen, className }: HamburgerIconProps) => {
  return (
    <div className={cn("relative w-6 h-6", className)}>
      {/* Top line */}
      <span
        className={cn(
          "absolute top-0 left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out rounded-full",
          isOpen ? "rotate-45 translate-y-2.5" : "translate-y-0"
        )}
      />
      {/* Middle line */}
      <span
        className={cn(
          "absolute top-1/2 left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out -translate-y-1/2 rounded-full",
          isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
        )}
      />
      {/* Bottom line */}
      <span
        className={cn(
          "absolute bottom-0 left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out rounded-full",
          isOpen ? "-rotate-45 -translate-y-2.5" : "translate-y-0"
        )}
      />
    </div>
  );
};

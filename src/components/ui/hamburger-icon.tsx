"use client";

import { cn } from "@/lib/utils";

interface HamburgerIconProps {
  isOpen: boolean;
  className?: string;
}

export const HamburgerIcon = ({ isOpen, className }: HamburgerIconProps) => {
  return (
    <div className={cn("relative w-6 h-6 flex items-center justify-center", className)}>
      {/* Top line */}
      <span
        className={cn(
          "absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out rounded-full origin-center",
          isOpen ? "rotate-45" : "rotate-0 translate-y-[-6px]"
        )}
      />
      {/* Middle line */}
      <span
        className={cn(
          "absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out rounded-full origin-center",
          isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
        )}
      />
      {/* Bottom line */}
      <span
        className={cn(
          "absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out rounded-full origin-center",
          isOpen ? "-rotate-45" : "rotate-0 translate-y-[6px]"
        )}
      />
    </div>
  );
};

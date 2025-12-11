"use client";

import React from "react";
import { ChevronRight } from "lucide-react";


interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = "",
  target,
  rel,
  icon
}: CTAButtonProps) {
  const baseClasses = "group flex cursor-pointer active:scale-[0.98] items-center justify-center gap-2 font-medium rounded-full border transition-all duration-200";

  const sizeClasses = {
    sm: "px-3 py-2 text-xs h-8",
    md: "px-4 py-2 text-sm h-10",
    lg: "px-6 py-3 text-base h-12"
  };

  const variantClasses = {
    primary: "border-white bg-white text-black hover:bg-white/90",
    secondary: "border-white bg-transparent text-white hover:bg-white/10"
  };

  const iconSize = size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';
  const chevronSize = size === 'sm' ? 'size-3' : size === 'lg' ? 'size-5' : 'size-4';

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className={iconSize}>{icon}</span>}
      {children}
      <ChevronRight className={`${chevronSize} mt-1 transition-all ease-out group-hover:rotate-0`} />
    </a>
  );
}

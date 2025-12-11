"use client";

import React from "react";

interface FAQButtonProps {
  className?: string;
  variant?: 'floating-top-right' | 'section-bottom-right';
}

export default function FAQButton({ className = "", variant = 'section-bottom-right' }: FAQButtonProps) {
  const baseButtonClass = `text-xs sm:text-sm font-medium rounded-full border px-4 py-2 tracking-normal transition-all duration-200 whitespace-nowrap`;
  const isFloating = variant === 'floating-top-right';
  return (
    <div
      className={
        isFloating
          ? `hidden lg:block absolute right-4 sm:right-6 lg:right-8 z-20 ${className}`
          : `hidden lg:block absolute bottom-12 right-4 sm:right-6 lg:right-8 z-20 ${className}`
      }
      style={
        isFloating
          ? {
            top: 'calc(var(--nav-h, 64px) + 60px)',
          }
          : undefined
      }
    >
      <a
        href="/faq"
        className={`${baseButtonClass} text-white border-white bg-transparent hover:bg-[#F2F2F2] hover:text-[#0B3D91]`}
      >
        <span className="hidden sm:inline">Questions? We have answers.</span>
        <span className="sm:hidden">FAQ</span>
      </a>
    </div>
  );
}

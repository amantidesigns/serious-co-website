"use client";

import React from "react";
import { Mail, Linkedin } from "lucide-react";
import { theme } from "@/lib/theme";

interface PageFooterProps {
  className?: string;
}

export default function PageFooter({ className = "" }: PageFooterProps) {
  return (
    <div className={`relative z-10 ${className}`}>
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12">
        {/* Left side - About */}
        <div className="max-w-md w-full lg:w-auto">
          <p className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-white/90">
            Based in Minneapolis, Minnesota.
            <br />
            <br />
            Creating meaningful digital experiences that blend design, technology, and innovation.
          </p>
        </div>

        {/* Right side - Contact */}
        <div className="flex flex-col items-start lg:items-end max-w-md w-full lg:w-auto gap-4">
          <h2 className="text-left lg:text-right font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-tight text-white">
            Let's create something <em>together.</em>
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <a 
              href="mailto:amantimn@gmail.com?subject=Hello from your Portfolio&body=Hi Amanti,%0D%0A%0D%0AI came across your portfolio and would love to connect.%0D%0A%0D%0AThanks!"
              className="group flex-1 sm:flex-none h-12 px-6 flex cursor-pointer active:scale-[0.98] items-center justify-center gap-2 font-medium rounded-full border border-white bg-transparent text-white text-sm tracking-normal transition-all duration-200 hover:bg-white/10"
            >
              <Mail className="size-4" />
              Email
            </a>
            <a 
              href="https://linkedin.com/in/amantidesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 sm:flex-none h-12 px-6 flex cursor-pointer active:scale-[0.98] items-center justify-center gap-2 font-medium rounded-full border border-white bg-transparent text-white text-sm tracking-normal transition-all duration-200 hover:bg-white/10"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

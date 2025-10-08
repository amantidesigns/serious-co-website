"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { theme } from "@/lib/theme";

interface PageFooterProps {
  className?: string;
}

export default function PageFooter({ className = "" }: PageFooterProps) {
  return (
    <div className={`relative z-10 ${className}`}>
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12">
        {/* Left side - Company Description */}
        <div className="max-w-md w-full lg:w-auto">
          <p className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-white">
            A <em>Very</em> Serious Company is a modern creative studio built&nbsp;for the AI era.
            <br />
            <br />
            We create brands, websites, and creative content that move fast and scale beautifully.
          </p>
        </div>

        {/* Right side - Tagline and Contact */}
        <div className="flex flex-col items-start lg:items-end max-w-md w-full lg:w-auto">
          <h2 className="text-left lg:text-right font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter mb-6 leading-tight text-white">
            We&nbsp;take simple&nbsp;ideas <em>seriously.</em>
          </h2>
          <a 
            href="mailto:hello@averyseriouscompany.com?subject=Hello from A Very Serious Company Website&body=Hi there,%0D%0A%0D%0AI'm interested in learning more about your services.%0D%0A%0D%0AThanks!"
            className="group self-start lg:self-end mt-2 h-14 w-80 flex cursor-pointer active:scale-[0.98] items-center justify-center gap-2 font-medium rounded-full border border-white bg-transparent text-white px-4 py-2 text-xs sm:text-sm tracking-normal transition-all duration-200 hover:bg-white/10"
          >
            hello@averyseriouscompany.com
            <ChevronRight className="size-3 sm:size-4 mt-1 transition-all ease-out group-hover:rotate-0" />
          </a>
        </div>
      </div>
    </div>
  );
}

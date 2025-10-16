"use client";

import React from "react";
import CTAButton from "./ui/CTAButton";

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
          <div className="flex flex-col sm:flex-row gap-3 self-start lg:self-end mt-2">
            <CTAButton
              href="https://calendar.app.google/KKjjEffx5VEeuZ9Z7"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            >
              Book Call
            </CTAButton>
            <CTAButton
              href="mailto:hello@averyseriouscompany.com?subject=Hello from A Very Serious Company Website&body=Hi there,%0D%0A%0D%0AI'm interested in learning more about your services.%0D%0A%0D%0AThanks!"
              variant="secondary"
              size="md"
            >
              Email Us
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}

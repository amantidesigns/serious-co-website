"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageFooter from "../layout/PageFooter";
import { theme } from "@/lib/theme";

export default function FAQs() {
  return (
    <section className="pb-0" style={{ backgroundColor: theme.colors.primary.blue }}>
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 min-h-screen pt-[var(--nav-h,64px)]">
        {/* Background stars layer */}
        <div 
          className="fixed inset-0 w-screen h-screen pointer-events-none select-none z-0"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 15px 25px, ${theme.colors.star.opacity60}, transparent),
              radial-gradient(1px 1px at 45px 85px, ${theme.colors.star.opacity40}, transparent),
              radial-gradient(1px 1px at 75px 15px, ${theme.colors.star.opacity80}, transparent),
              radial-gradient(1px 1px at 105px 65px, ${theme.colors.star.opacity50}, transparent),
              radial-gradient(1px 1px at 135px 35px, ${theme.colors.star.opacity70}, transparent),
              radial-gradient(1px 1px at 165px 95px, ${theme.colors.star.opacity30}, transparent),
              radial-gradient(1px 1px at 195px 55px, ${theme.colors.star.opacity90}, transparent),
              radial-gradient(1px 1px at 225px 25px, ${theme.colors.star.opacity40}, transparent),
              radial-gradient(1px 1px at 255px 75px, ${theme.colors.star.opacity60}, transparent),
              radial-gradient(1px 1px at 285px 45px, ${theme.colors.star.opacity80}, transparent),
              radial-gradient(1px 1px at 315px 15px, ${theme.colors.star.opacity50}, transparent),
              radial-gradient(1px 1px at 345px 85px, ${theme.colors.star.opacity70}, transparent),
              radial-gradient(1px 1px at 375px 35px, ${theme.colors.star.opacity30}, transparent),
              radial-gradient(1px 1px at 405px 65px, ${theme.colors.star.opacity90}, transparent),
              radial-gradient(1px 1px at 435px 25px, ${theme.colors.star.opacity40}, transparent),
              radial-gradient(1px 1px at 465px 75px, ${theme.colors.star.opacity60}, transparent),
              radial-gradient(1px 1px at 495px 45px, ${theme.colors.star.opacity80}, transparent),
              radial-gradient(1px 1px at 525px 15px, ${theme.colors.star.opacity50}, transparent),
              radial-gradient(1px 1px at 555px 85px, ${theme.colors.star.opacity70}, transparent),
              radial-gradient(1px 1px at 585px 35px, ${theme.colors.star.opacity30}, transparent),
              radial-gradient(1px 1px at 615px 65px, ${theme.colors.star.opacity90}, transparent),
              radial-gradient(1px 1px at 645px 25px, ${theme.colors.star.opacity40}, transparent),
              radial-gradient(1px 1px at 675px 75px, ${theme.colors.star.opacity60}, transparent),
              radial-gradient(1px 1px at 705px 45px, ${theme.colors.star.opacity80}, transparent),
              radial-gradient(1px 1px at 735px 15px, ${theme.colors.star.opacity50}, transparent),
              radial-gradient(1px 1px at 765px 85px, ${theme.colors.star.opacity70}, transparent),
              radial-gradient(1px 1px at 795px 35px, ${theme.colors.star.opacity30}, transparent),
              radial-gradient(1px 1px at 825px 65px, ${theme.colors.star.opacity90}, transparent),
              radial-gradient(1px 1px at 855px 25px, ${theme.colors.star.opacity40}, transparent),
              radial-gradient(1px 1px at 885px 75px, ${theme.colors.star.opacity60}, transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '900px 100px',
            opacity: 0.6,
            animation: 'twinkle 4s ease-in-out infinite alternate'
          }}
          aria-hidden
        />

        {/* Bright pulsing stars layer */}
        <div 
          className="fixed inset-0 w-screen h-screen pointer-events-none select-none z-5"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 25px 35px, ${theme.colors.star.opacity90}, transparent),
              radial-gradient(1px 1px at 85px 75px, ${theme.colors.star.opacity80}, transparent),
              radial-gradient(1px 1px at 155px 25px, ${theme.colors.star.opacity90}, transparent),
              radial-gradient(1px 1px at 225px 85px, ${theme.colors.star.opacity70}, transparent),
              radial-gradient(1px 1px at 295px 45px, ${theme.colors.star.opacity90}, transparent),
              radial-gradient(1px 1px at 365px 15px, ${theme.colors.star.opacity80}, transparent),
              radial-gradient(1px 1px at 435px 65px, ${theme.colors.star.opacity90}, transparent),
              radial-gradient(1px 1px at 505px 35px, ${theme.colors.star.opacity70}, transparent),
              radial-gradient(1px 1px at 575px 85px, ${theme.colors.star.opacity90}, transparent),
              radial-gradient(1px 1px at 645px 25px, ${theme.colors.star.opacity80}, transparent),
              radial-gradient(1px 1px at 715px 55px, ${theme.colors.star.opacity90}, transparent),
              radial-gradient(1px 1px at 785px 15px, ${theme.colors.star.opacity70}, transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '800px 100px',
            opacity: 0.8,
            animation: 'twinkle 2s ease-in-out infinite alternate, pulse 2s ease-in-out infinite'
          }}
          aria-hidden
        />



        <h2 className="relative z-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight font-playfair mb-16 leading-tight pt-20 lg:pt-24" style={{ color: theme.colors.primary.white }}>The Questions People Actually Ask</h2>
        
        <div className="relative z-20 max-w-3xl space-y-8 text-sm sm:text-base leading-relaxed pb-32" style={{ color: theme.colors.primary.white }}>
          <p>
            <strong>People ask us what kind of work we do:</strong><br />
            Websites, advertisements, and whatever specific problems you bring us. We don't limit ourselves to categories.
          </p>

          <p>
            <strong>They want to know how much it costs:</strong><br />
            Depends on what you need. We'll give you a straight answer after we understand your project.
          </p>

          <p>
            <strong>They ask how long it takes:</strong><br />
            As long as it takes to do it right. We don't pad timelines, but we don't rush good work either.
          </p>

          <p>
            <strong>They want to know what makes us different:</strong><br />
            Most agencies either overcomplicate everything or oversimplify and miss the point. We take simple ideas <em>seriously.</em>
          </p>

          <p>
            <strong>They ask how to get started:</strong><br />
            Email us. Tell us what you need. We'll respond within 24 hours with our honest assessment.
          </p>
        </div>

        <PageFooter />
      </div>
    </section>
  );
}
"use client";

import { theme } from "@/lib/theme";

const Logos = () => {
  return (
    <section className={`${theme.spacing.padding.section} mx-auto pt-0`} style={{ backgroundColor: theme.colors.primary.blue, color: theme.colors.primary.white }}>
      <div className={`container mx-auto ${theme.spacing.space.xl} lg:${theme.spacing.space.xl} ${theme.sizing.maxWidth.lg}`}>
        <div className={`text-center ${theme.spacing.space.lg}`}>
          <h1 className={`${theme.spacing.margin.bottom} ${theme.typography.fontSize.xxxl} ${theme.typography.fontWeight.bold} text-balance md:${theme.typography.fontSize.huge} lg:${theme.typography.fontSize.massive}`} style={{ color: theme.colors.primary.white }}>
            A Very Serious Company
          </h1>
          
          <div className={`${theme.spacing.space.md} ${theme.typography.fontSize.md} md:${theme.typography.fontSize.lg} ${theme.typography.lineHeight.relaxed}`}>
            <p style={{ color: theme.colors.primary.white }}>
              A Very Serious Company is a creative agency.
              <br />
              We build websites, create advertisements, and solve specific business problems.
            </p>
            
            <p className={theme.typography.fontWeight.normal} style={{ color: theme.colors.primary.white }}>
              We take simple ideas seriously.
            </p>
          </div>
          
          <div className="pt-8">
            <a 
              href="mailto:hello@averyseriouscompany.com"
              className={`${theme.transition.colors} ${theme.transition.duration.normal} ${theme.typography.fontSize.md} underline underline-offset-4`}
              style={{ color: theme.colors.primary.white }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme.colors.primary.lightGray;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme.colors.primary.white;
              }}
            >
              hello@averyseriouscompany.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos };
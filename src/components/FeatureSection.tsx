import { PocketKnife } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { theme } from "@/lib/theme";

const DATA = [
  {
    title: "Website Development",
    description:
      "We create beautiful, functional websites that help your business grow and connect with customers effectively.",
    icon: "CircleHelp",
    image:
      "https://cdn.cosmos.so/410de9a7-1213-433a-93da-043b0e2e2a7b?format=jpeg",
  },
  {
    title: "Creative Advertising",
    description:
      "From concept to execution, we design advertisements that capture attention and drive results",
    icon: "Volume2",
    image:
      "https://cdn.cosmos.so/c32afa87-08ab-4e83-b768-7c1c7877e889?format=jpeg",
  },
  {
    title: "Business Solutions",
    description:
      "We solve specific business problems with creative thinking and strategic implementation tailored to your needs",
    icon: "Lightbulb",
    image:
      "https://cdn.cosmos.so/410de9a7-1213-433a-93da-043b0e2e2a7b?format=jpeg",
  },
];

const FeatureSection = () => {
  return (
    <section className={`${theme.spacing.padding.section} ${theme.sizing.maxWidth.xxl} mx-auto`} style={{ backgroundColor: theme.colors.primary.blue, color: theme.colors.primary.white }}>
      <div className={`border-y`} style={{ borderColor: theme.colors.border.white20 }}>
        <div className={`container flex flex-col ${theme.spacing.gap.md} border-x max-lg:border-x ${theme.spacing.padding.xl} lg:${theme.spacing.padding.xxl} ${theme.spacing.padding.md}`} style={{ borderColor: theme.colors.border.white20 }}>
          <h1 className={`${theme.typography.fontSize.xxl} ${theme.typography.lineHeight.tight} ${theme.typography.letterSpacing.tight} ${theme.typography.fontWeight.extralight} md:${theme.typography.fontSize.xxxl} lg:${theme.typography.fontSize.massive}`}>
            A Very Serious Company
          </h1>
          <div className={`max-w-[600px] ${theme.spacing.space.xs}`} style={{ letterSpacing: '-0.32px' }}>
            <p>A Very Serious Company is a creative agency.</p>
            <p>We create serious, high-end websites, graphics, and videos using next-gen AI.</p>
            <p className={theme.typography.fontWeight.normal}>We take simple ideas seriously.</p>
          </div>
          <div className={theme.spacing.margin.xs}>
            <a 
              href="mailto:hello@averyseriouscompany.com" 
              className={`${theme.colors.primary.white} hover:${theme.colors.primary.lightGray} ${theme.transition.colors} underline`}
              style={{ color: theme.colors.primary.white }}
            >
              hello@averyseriouscompany.com
            </a>
          </div>
        </div>
      </div>

      <div className="lg:px-0! container border-x" style={{ borderColor: theme.colors.border.white20 }}>
        <div className="items-center">
          <div className={`grid flex-1 max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:divide-x`} style={{ borderColor: theme.colors.border.white20 }}>
            {DATA.map((item, index) => (
              <div
                key={index}
                className={`relative isolate pt-5 text-start lg:pt-20`}
              >
                <h3 className={`mt-2 px-4 ${theme.typography.fontSize.md} ${theme.typography.letterSpacing.tight} lg:px-8`}>
                  {item.title}
                </h3>
                <p className={`pb-6 pt-2 lg:px-8`} style={{ color: theme.colors.primary.lightGray }}>
                  {item.description}
                </p>
                <div className="border-t" style={{ borderColor: theme.colors.border.white20 }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="bg-muted dark:invert"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${theme.sizing.height.sm} w-full border-y md:${theme.sizing.height.md} lg:${theme.sizing.height.lg}`} style={{ borderColor: theme.colors.border.white20 }}>
        <div className={`container ${theme.sizing.height.full} w-full border-x`} style={{ borderColor: theme.colors.border.white20 }}></div>
      </div>
    </section>
  );
};

export { FeatureSection };
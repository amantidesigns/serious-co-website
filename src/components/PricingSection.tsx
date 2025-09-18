import { Button } from "@/components/ui/button";
import Link from "next/link";
import { theme } from "@/lib/theme";

export default function PricingSection() {
  return (
    <section className={`${theme.spacing.padding.sectionSmall} md:${theme.spacing.padding.section} ${theme.sizing.height.xl} flex items-center`} style={{ backgroundColor: theme.colors.primary.blue, color: theme.colors.primary.white }}>
      <div className={`mx-auto ${theme.sizing.maxWidth.xl} ${theme.spacing.padding.sm} w-full`}>
        <div className={`mx-auto ${theme.sizing.maxWidth.sm} ${theme.spacing.space.md} text-center`}>
          <h1 className={`text-center ${theme.typography.fontSize.xxxl} lg:${theme.typography.fontSize.massive} ${theme.typography.fontWeight.light}`} style={{ color: theme.colors.primary.white }}>A Very Serious Company</h1>
          <div className={`${theme.spacing.space.xs} ${theme.typography.fontSize.md}`}>
            <p style={{ color: theme.colors.primary.white }}>
              A Very Serious Company is a creative agency.
            </p>
            <p style={{ color: theme.colors.primary.white }}>
              We build websites, create advertisements, and solve specific business problems.
            </p>
            <p className={theme.typography.fontWeight.normal} style={{ color: theme.colors.primary.white }}>
              We take simple ideas seriously.
            </p>
          </div>
        </div>

        <div className={`${theme.spacing.margin.xl} flex justify-center`}>
          <Button asChild variant="outline" className={`bg-transparent border-white transition-colors`} style={{ borderColor: theme.colors.primary.white, color: theme.colors.primary.white, backgroundColor: 'transparent' }}>
            <Link href="mailto:hello@averyseriouscompany.com" style={{ color: theme.colors.primary.white }}>hello@averyseriouscompany.com</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
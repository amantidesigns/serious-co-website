import ContentPageLayout from "@/components/ContentPageLayout";
import Link from "next/link";
import { theme } from "@/lib/theme";

export default function HealThriveRecoveryCaseStudy() {
  return (
    <ContentPageLayout title="Case Studies / HealThrive Recovery">
      <div className={`relative z-20 ${theme.sizing.maxWidth.lg} ${theme.typography.fontSize.md} ${theme.typography.lineHeight.relaxed} ${theme.spacing.space.lg} text-white`}>

        <div className={`${theme.spacing.space.md}`}>
          <div className={`${theme.spacing.space.sm}`}>
            <p className={`${theme.typography.fontSize.lg} ${theme.typography.lineHeight.relaxed} text-white/90 ${theme.sizing.maxWidth.lg}`}>
              We developed a compassionate website for this addiction treatment center that needed a trustworthy digital presence to help families find hope and healing. 
              The warm, professional design balances sensitivity with accessibility, making it easy for those seeking help to find the resources they need. 
              Our approach perfectly complemented their existing mission, emphasizing trust, empathy, and clear pathways to their comprehensive treatment services.
            </p>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-4 ${theme.spacing.gap.md}`}>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Cost</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>$5,000</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Turnaround</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>1 month</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Client came from</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Referral from previous client</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Design team</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Amanti & Robera</div>
            </div>
          </div>
        </div>

        <div className={`${theme.spacing.margin.lg}`}>
          <Link 
            href="/case-studies" 
            className={`inline-flex items-center text-white/70 hover:text-white ${theme.transition.colors}`}
          >
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    </ContentPageLayout>
  );
}

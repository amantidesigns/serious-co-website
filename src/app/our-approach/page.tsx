import ContentPageLayout from "@/components/ContentPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "Our approach is somewhat unconventional. We believe the best process is no process at all—just clear thinking applied consistently.",
  keywords: ["our approach", "process", "methodology", "clear thinking", "business approach", "creative process"],
  openGraph: {
    title: "Our Approach - A Very Serious Company",
    description: "Our approach is somewhat unconventional. We believe the best process is no process at all—just clear thinking applied consistently.",
    type: "article",
    url: "https://averyseriouscompany.com/our-approach",
    images: [
      {
        url: "/A Very Serious Company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company Approach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Approach - A Very Serious Company",
    description: "Our approach is somewhat unconventional. We believe the best process is no process at all—just clear thinking applied consistently.",
    images: ["/A Very Serious Company.jpeg"],
  },
  alternates: {
    canonical: "/our-approach",
  },
};

export default function OurApproachPage() {
  return (
    <ContentPageLayout title="Our Approach">
      <div className="relative z-20 text-base sm:text-lg leading-relaxed max-w-3xl space-y-4 sm:space-y-6 text-white">
        <p>We take simple ideas <em>seriously.</em></p>
        <p>Our approach is somewhat unconventional.</p>
        <p>Most teams present elaborate processes and proprietary frameworks.</p>
        <p>We believe the best process is no process at all—just clear thinking applied consistently.</p>
        <p>Take this website: we identified what visitors need to know, then said exactly that. Nothing more, nothing less.</p>
        <p>This is what we mean by taking simple ideas seriously: understand what matters, then execute it properly.</p>
        <p>Every project starts the same way. Just clear thinking applied consistently.</p>
      </div>
    </ContentPageLayout>
  );
}
import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";

export const metadata: Metadata = {
  title: "Our Approach - A Very Serious Company",
  description: "Discover our unconventional approach to creative work. We believe the best process is no process at all—just clear thinking applied consistently to deliver exceptional results.",
  openGraph: {
    title: "Our Approach - A Very Serious Company",
    description: "Discover our unconventional approach to creative work. We believe the best process is no process at all—just clear thinking applied consistently to deliver exceptional results.",
    images: [
      {
        url: "/A Very Serious Company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - Our Approach",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Approach - A Very Serious Company",
    description: "Discover our unconventional approach to creative work. We believe the best process is no process at all—just clear thinking applied consistently to deliver exceptional results.",
    images: ["/A Very Serious Company.jpeg"],
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
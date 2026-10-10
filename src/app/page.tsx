import type { Metadata } from "next";
import { HomePageLayout } from "@/components/layout/HomePageLayout";
import { SubscriptionSections } from "@/components/sections/SubscriptionSections";
import { homeStructuredData, safeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(homeStructuredData) }}
      />
      <HomePageLayout />
      <SubscriptionSections />
    </div>
  );
}

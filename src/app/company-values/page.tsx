import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";

export const metadata: Metadata = {
  title: "Company Values - A Very Serious Company",
  description: "We take simple ideas seriously. Learn about our philosophy of understanding simple ideas deeply, executing them properly, and respecting their power in business and design.",
  openGraph: {
    title: "Company Values - A Very Serious Company",
    description: "We take simple ideas seriously. Learn about our philosophy of understanding simple ideas deeply, executing them properly, and respecting their power in business and design.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - Our Values",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Values - A Very Serious Company",
    description: "We take simple ideas seriously. Learn about our philosophy of understanding simple ideas deeply, executing them properly, and respecting their power in business and design.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function CompanyValuesPage() {
  return (
    <ContentPageLayout title="Company Values">
      <div className="relative z-20 mt-8 sm:mt-12 max-w-3xl space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-white">
        <p>We take simple ideas <em>seriously.</em></p>

        <p>Simple ideas don't get the attention they deserve.</p>

        <blockquote className="border-l border-white/25 pl-5 italic text-white/90">
          Charlie Munger said: "There is an old two-part rule that often works wonders in business, science, and elsewhere: take a simple, basic idea and take it very seriously."
        </blockquote>

        <p>
          We do exactly that. We understand the simple idea deeply, execute it properly, and respect its power.
        </p>

        <p>That's why we exist.</p>
      </div>
    </ContentPageLayout>
  );
}
import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import { FAQSearch } from "@/components/FAQSearch";
import { faqs } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "FAQ - A Very Serious Company",
  description:
    "Common questions about our creative services. Straight answers about what we do, how we work, and why we build brands, websites, and creative content that actually work.",
  openGraph: {
    title: "FAQ - A Very Serious Company",
    description:
      "Common questions about our creative services. Straight answers about what we do, how we work, and why we build brands, websites, and creative content that actually work.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - FAQ",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - A Very Serious Company",
    description:
      "Frequently asked questions about our creative agency services. Get answers about our process, pricing, timeline, and how we take simple ideas seriously to deliver exceptional results.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

const topFaqs = faqs.slice(0, 5);

export default function FAQ() {
  return (
    <ContentPageLayout>
      <div className="relative z-20 space-y-24 text-white">
        <header className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
          <h1 className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-white/60">FAQ</h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
            The questions people actually ask.<br />Straight answers, <em>no fluff</em>.
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Skip the marketing speak. Here's what you really want to know about working with us.
          </p>
        </header>

        <section className="max-w-4xl mx-auto space-y-10">
          {topFaqs.map((faq) => (
            <div key={faq.id} className="space-y-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl sm:text-2xl font-light text-white">{faq.question}</h3>
              <p className="text-lg text-white/80 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </section>

        <div className="max-w-4xl mx-auto">
          <FAQSearch title="Still curious?" />
        </div>

        <div className="text-center space-y-4 pt-8 border-t border-white/10">
          <p className="text-lg sm:text-xl font-light leading-relaxed text-white/90 max-w-2xl mx-auto">
            Still have questions? We're here to help. Every project is unique, and we approach each one with fresh eyes and clear thinking.
          </p>
          <p className="text-base text-white/70">Ready to take your idea seriously? Let's talk.</p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </ContentPageLayout>
  );
}

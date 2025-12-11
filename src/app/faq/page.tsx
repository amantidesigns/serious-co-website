import type { Metadata } from "next";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import CSSBoxFAQ from "@/components/blocks/css-box-faq";

export const metadata: Metadata = {
  title: "FAQ - A Very Serious Company",
  description: "Common questions about our creative services. Straight answers about what we do, how we work, and why we build brands, websites, and creative content that actually work.",
  openGraph: {
    title: "FAQ - A Very Serious Company",
    description: "Common questions about our creative services. Straight answers about what we do, how we work, and why we build brands, websites, and creative content that actually work.",
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
    description: "Frequently asked questions about our creative agency services. Get answers about our process, pricing, timeline, and how we take simple ideas seriously to deliver exceptional results.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function FAQ() {
  return (
    <ContentPageLayout>
      <div className="relative z-20 space-y-32 text-white">
        
        {/* Hero Section with Eyebrow + Descriptive Subheading */}
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
          <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
            FAQ
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
            The questions people <span className="whitespace-nowrap">actually ask</span><br />Straight answers, <em>no fluff</em>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Skip the marketing speak. Here&apos;s what you really want to know about working with us.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* FAQ Item 1 */}
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-light text-white">What kind of work do you do?</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              Websites, advertisements, and whatever specific problems you bring us. We don&apos;t limit ourselves to categories.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-light text-white">How much does it cost?</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              Depends on what you need. We&apos;ll give you a straight answer after we understand your project.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-light text-white">How long does it take?</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              As long as it takes to do it right. We don&apos;t pad timelines, but we don&apos;t rush good work either.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-light text-white">What makes you different?</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              Most agencies either overcomplicate everything or oversimplify and miss the point. We take simple ideas <em>seriously.</em>
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-light text-white">How do I get started?</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              Email us. Tell us what you need. We&apos;ll respond within 24 hours with our honest assessment.
            </p>
          </div>

        </div>

        {/* CSS Box FAQ Component */}
        <div className="max-w-4xl mx-auto">
          <CSSBoxFAQ />
        </div>

        {/* Bottom Statement */}
        <div className="text-center space-y-4 pt-8 border-t border-white/10">
          <p className="text-lg sm:text-xl font-light leading-relaxed text-white/90 max-w-2xl mx-auto">
            Still have questions? We&apos;re here to help. Every project is unique, and we approach each one with fresh eyes and clear thinking.
          </p>
          <p className="text-base text-white/70">
            Ready to take your idea seriously? Let&apos;s talk.
          </p>
        </div>

      </div>
      
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What kind of work do you do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Websites, advertisements, and whatever specific problems you bring us. We don't limit ourselves to categories."
                }
              },
              {
                "@type": "Question", 
                "name": "How much does it cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Depends on what you need. We'll give you a straight answer after we understand your project."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "As long as it takes to do it right. We don't pad timelines, but we don't rush good work either."
                }
              },
              {
                "@type": "Question",
                "name": "What makes you different?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most agencies either overcomplicate everything or oversimplify and miss the point. We take simple ideas seriously."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get started?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Email us. Tell us what you need. We'll respond within 24 hours with our honest assessment."
                }
              }
            ]
          })
        }}
      />
    </ContentPageLayout>
  );
}
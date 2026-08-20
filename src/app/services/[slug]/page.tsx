import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import ServiceNavigation from "@/components/layout/ServiceNavigation";
import { services } from "@/content/services";
import { BOOK_CALL_EMAIL_URL } from "@/lib/booking";
import {
  absoluteUrl,
  organizationId,
  safeJsonLd,
  siteConfig,
} from "@/lib/seo";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const pageUrl = absoluteUrl(`/services/${service.slug}`);
  const title = service.seoTitle ?? `${service.title} | ${siteConfig.name}`;
  const description = service.seoDescription ?? service.description;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.image,
          width: 1200,
          height: 630,
          alt: `${service.title} — ${siteConfig.name}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.image],
    },
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const pageUrl = absoluteUrl(`/services/${service.slug}`);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.description,
        url: pageUrl,
        provider: {
          "@type": "Organization",
          "@id": organizationId,
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: absoluteUrl("/services"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <ContentPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(structuredData) }}
      />
      <div className="relative z-20 space-y-24 text-white">
        {/* Hero Section */}
        <div className="max-w-4xl space-y-8 pt-20 lg:pt-24">
          <div>
            <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-4">
              Service
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 font-light">
              {service.shortDescription}
            </p>
            {service.platforms && (
              <div className="flex flex-wrap gap-2 pt-6" aria-label="Platforms">
                {service.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-mono text-white/70"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4 border-t border-white/10 pt-8">
            <p className="text-lg text-white/80 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Category & Details */}
          <div className="space-y-4 bg-white/5 border border-white/10 rounded-lg p-6">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-white/60 mb-2">
                Category
              </p>
              <p className="text-lg text-white">{service.category}</p>
            </div>
          </div>
        </div>

        {service.outcomes && (
          <section aria-labelledby="outcomes-title" className="space-y-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                The work
              </p>
              <h2 id="outcomes-title" className="text-3xl font-light sm:text-4xl">
                One clear brand, everywhere people search.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
              {service.outcomes.map((outcome) => (
                <div key={outcome.title} className="space-y-3 bg-[#05060a] p-6 sm:p-8">
                  <h3 className="text-xl font-light">{outcome.title}</h3>
                  <p className="leading-relaxed text-white/65">{outcome.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {service.deliverables && (
          <section aria-labelledby="deliverables-title" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                Deliverables
              </p>
              <h2 id="deliverables-title" className="text-3xl font-light sm:text-4xl">
                Useful infrastructure, not keyword theater.
              </h2>
              <p className="max-w-md leading-relaxed text-white/65">
                AI helps us move faster. Every claim, field, and page still gets checked against approved source content before it goes live.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-white/75"
                >
                  <span className="mt-1 text-[#9AE6B4]" aria-hidden="true">●</span>
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {service.process && (
          <section aria-labelledby="process-title" className="space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                Process
              </p>
              <h2 id="process-title" className="text-3xl font-light sm:text-4xl">
                Audit. Build. Publish. Measure.
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step) => (
                <div key={step.title} className="space-y-3 border-t border-white/20 pt-5">
                  <h3 className="font-mono text-sm text-[#9AE6B4]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/65">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {service.faqs && (
          <section aria-labelledby="faq-title" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                Straight answers
              </p>
              <h2 id="faq-title" className="text-3xl font-light sm:text-4xl">
                No ranking guarantees. No magic tags.
              </h2>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg text-white/90">
                    {faq.question}
                    <span className="font-mono text-white/40 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-2xl pt-4 leading-relaxed text-white/65">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {service.outcomes && (
          <section className="rounded-2xl border border-white/15 bg-white/[0.04] p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl space-y-3">
                <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                  Start with the evidence
                </p>
                <h2 className="text-3xl font-light sm:text-4xl">
                  See what machines understand about your brand now.
                </h2>
              </div>
              <a
                href={BOOK_CALL_EMAIL_URL}
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-white/85"
              >
                Request an audit
              </a>
            </div>
          </section>
        )}

        {/* Service Navigation */}
        <ServiceNavigation currentSlug={slug} />
      </div>
    </ContentPageLayout>
  );
}

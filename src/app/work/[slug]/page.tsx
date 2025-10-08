import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPageLayout from "@/components/ContentPageLayout";
import ProjectTag from "@/components/ProjectTag";
import {
  findCaseStudyBySlug,
  getPublishedCaseStudies,
} from "@/lib/content/case-studies";

const SITE_URL = "https://avery-serious-company.com";

type PageParams = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getPublishedCaseStudies().map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: PageParams): Metadata {
  const study = findCaseStudyBySlug(params.slug);

  if (!study || study.status !== "published") {
    return {
      title: "Case Study - A Very Serious Company",
    };
  }

  const canonicalUrl = `${SITE_URL}/work/${study.slug}`;

  return {
    title: `${study.title} – Case Study | A Very Serious Company`,
    description: study.description,
    openGraph: {
      title: `${study.title} – Case Study | A Very Serious Company`,
      description: study.description,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: study.heroMedia.src,
          alt: study.heroMedia.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} – Case Study | A Very Serious Company`,
      description: study.description,
      images: [study.heroMedia.src],
    },
  };
}

function HeroMedia({
  type,
  src,
  alt,
}: {
  type: "image" | "video";
  src: string;
  alt: string;
}) {
  if (type === "video") {
    return (
      <video
        src={src}
        className="block h-auto max-h-[60svh] w-full rounded-xl border border-white/15 bg-black/20 object-contain"
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="block h-auto max-h-[60svh] w-full rounded-xl border border-white/15 bg-black/20 object-contain"
    />
  );
}

export default function CaseStudyPage({ params }: PageParams) {
  const study = findCaseStudyBySlug(params.slug);

  if (!study || study.status !== "published") {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/work/${study.slug}`;

  return (
    <ContentPageLayout title={`Case Studies / ${study.title}`} centerTitle={false}>
      <div className="relative z-20 space-y-16 text-white">
        <div className="space-y-8">
          <p className="text-lg text-white/80 sm:text-xl">{study.description}</p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <div
                key={`${metric.label}-${metric.value}`}
                className="rounded-xl border border-white/15 bg-white/5 p-4"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50">{metric.label}</p>
                <p className="mt-1 text-sm font-medium text-white">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <ProjectTag key={tag} variant="work-type">
                {tag}
              </ProjectTag>
            ))}
          </div>
        </div>

        <HeroMedia type={study.heroMedia.type} src={study.heroMedia.src} alt={study.heroMedia.alt} />

        <section className="space-y-10">
          <div>
            <h2 className="text-xl font-light text-white">Challenge</h2>
            <p className="mt-3 text-base text-white/80">{study.challenge}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-lg font-light text-white">Approach</h3>
              <ul className="space-y-2 text-sm text-white/80">
                {study.approach.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-light text-white">Outcomes</h3>
              <ul className="space-y-2 text-sm text-white/80">
                {study.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {study.testimonial && (
            <blockquote className="rounded-2xl border border-white/15 bg-white/5 p-6 text-sm text-white/80">
              <p className="text-lg font-light italic text-white/90">“{study.testimonial.quote}”</p>
              <footer className="mt-4 text-xs uppercase tracking-[0.3em] text-white/60">
                {study.testimonial.author}
                {study.testimonial.role ? ` — ${study.testimonial.role}` : ""}
              </footer>
            </blockquote>
          )}
        </section>

        <section className="space-y-4 text-sm text-white/70">
          <p>
            Interested in something similar? Start a project with us and we’ll map out what your version looks like in the first call.
          </p>
          <a
            href="/services#project-intake"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Open the project intake form →
          </a>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: study.title,
            description: study.description,
            url: canonicalUrl,
            image: `${SITE_URL}${study.heroMedia.src}`,
            creator: {
              "@type": "Organization",
              name: "A Very Serious Company",
              url: SITE_URL,
            },
            about: study.industry,
            genre: study.services,
          }),
        }}
      />
    </ContentPageLayout>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import ServiceNavigation from "@/components/layout/ServiceNavigation";
import { services } from "@/content/services";

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

  return {
    title: `${service.title} - A Very Serious Company`,
    description: service.description,
    openGraph: {
      title: `${service.title} - A Very Serious Company`,
      description: service.description,
      type: "website",
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

  return (
    <ContentPageLayout title={service.title} centerTitle={false}>
      <div className="relative z-20 space-y-12 text-white">
        {/* Hero Section */}
        <div className="max-w-3xl space-y-8">
          <div>
            <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-4">
              Service
            </p>
            <p className="text-xl sm:text-2xl text-white/70 font-light">
              {service.shortDescription}
            </p>
          </div>

          <div className="space-y-4 border-t border-white/10 pt-8">
            <p className="text-lg text-white/80 leading-relaxed">
              {service.description}
            </p>
          </div>

          {(service.deliverables?.length || service.outcomes?.length) && (
            <div className="grid gap-8 md:grid-cols-2">
              {service.deliverables?.length && (
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
                    Deliverables
                  </p>
                  <ul className="space-y-2 text-white/80 text-sm sm:text-base">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-white/40 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.outcomes?.length && (
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
                    Outcomes
                  </p>
                  <ul className="space-y-2 text-white/80 text-sm sm:text-base">
                    {service.outcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-white/40 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Category & Details */}
          <div className="space-y-6 bg-white/5 border border-white/10 rounded-lg p-6">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-white/60 mb-2">
                Category
              </p>
              <p className="text-lg text-white">{service.category}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {service.timeline && (
                <div>
                  <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-2">
                    Typical Timeline
                  </p>
                  <p className="text-sm sm:text-base text-white/80">
                    {service.timeline}
                  </p>
                </div>
              )}
              {service.idealFor?.length && (
                <div>
                  <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-2">
                    Ideal For
                  </p>
                  <ul className="space-y-2 text-white/80 text-sm sm:text-base">
                    {service.idealFor.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-white/40 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Service Navigation */}
        <ServiceNavigation currentSlug={slug} />
      </div>
    </ContentPageLayout>
  );
}

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 font-light">
              {service.shortDescription}
            </p>
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

        {/* Service Navigation */}
        <ServiceNavigation currentSlug={slug} />
      </div>
    </ContentPageLayout>
  );
}

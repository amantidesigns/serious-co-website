import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import { ProjectIntakeForm } from "@/components/ProjectIntakeForm";
import { FAQSearch } from "@/components/FAQSearch";
import { serviceGroups } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Our Services - A Very Serious Company",
  description:
    "We build brands, websites, and creative content that actually work. Using modern AI workflows, we deliver high-craft creative at speed. Simple ideas executed properly.",
  openGraph: {
    title: "Our Services - A Very Serious Company",
    description:
      "We build brands, websites, and creative content that actually work. Using modern AI workflows, we deliver high-craft creative at speed. Simple ideas executed properly.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - Our Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - A Very Serious Company",
    description:
      "We provide strategic creative services that transform simple ideas into exceptional digital experiences. From brand development to web design, we take your vision seriously.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function OurServicesPage() {
  return (
    <ContentPageLayout>
      <div className="relative z-20 space-y-20 text-white">
        <header className="space-y-8 pt-20 text-center lg:pt-24">
          <div className="mx-auto flex max-w-3xl flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">Our Services</p>
            <h1 className="text-3xl font-light sm:text-4xl lg:text-5xl">
              Brands, websites, and creative content. <span className="whitespace-nowrap">Built fast, built <em>right</em>.</span>
            </h1>
            <p className="text-lg text-white/80 sm:text-xl">
              We pair clear thinking with modern tooling. One team covers strategy, digital, and production so you get momentum without the agency maze.
            </p>
          </div>

          <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-3 text-xs">
            {serviceGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 uppercase tracking-[0.3em] text-white/70 transition hover:border-white/40 hover:text-white"
              >
                {group.title}
              </a>
            ))}
          </div>
        </header>

        <div className="space-y-24">
          {serviceGroups.map((group) => (
            <section key={group.id} id={group.id} className="space-y-8">
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">{group.eyebrow}</p>
                <h2 className="mt-2 text-2xl font-light sm:text-3xl">{group.title}</h2>
                <p className="mt-3 text-sm text-white/70 sm:text-base">{group.intro}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {group.services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.title}
                      className="flex h-full flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/30 hover:bg-white/[0.08]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-white">{service.title}</h3>
                          {service.highlight && (
                            <span className="text-xs uppercase tracking-[0.3em] text-white/50">{service.highlight}</span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-white/70">{service.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center">
                <a
                  href={group.cta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:bg-white/10"
                >
                  {group.cta.label}
                </a>
              </div>
            </section>
          ))}
        </div>

        <ProjectIntakeForm />

        <FAQSearch title="Before you book, read this" />
      </div>
    </ContentPageLayout>
  );
}

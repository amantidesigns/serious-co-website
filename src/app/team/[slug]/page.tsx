import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { teamMembers } from "@/content/team";
import Image from "next/image";
import Link from "next/link";

interface TeamMemberPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return {
      title: "Team Member Not Found",
    };
  }

  return {
    title: `${member.name} - ${member.title} | A Very Serious Company`,
    description: member.bio,
    openGraph: {
      title: `${member.name} - ${member.title}`,
      description: member.bio,
      images: [
        {
          url: member.image.color,
          width: 1200,
          height: 1200,
          alt: member.name,
        },
      ],
      type: "profile",
    },
  };
}

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export default async function TeamMemberPage({
  params,
}: TeamMemberPageProps) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  // Find the next and previous team members for navigation
  const currentIndex = teamMembers.findIndex((m) => m.slug === slug);
  const nextMember = teamMembers[(currentIndex + 1) % teamMembers.length];
  const prevMember =
    teamMembers[(currentIndex - 1 + teamMembers.length) % teamMembers.length];

  return (
    <ContentPageLayout title={member.name} centerTitle={false}>
      <div className="relative z-20 space-y-12 text-white">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={member.image.color}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-4">
                Team Member
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-white mb-2">
                {member.name}
              </h1>
              <p className="text-xl sm:text-2xl text-white/70 font-light">
                {member.title}
              </p>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-8">
              <p className="text-lg text-white/80 leading-relaxed">
                {member.bio}
              </p>
            </div>

            {/* Expertise */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium tracking-widest uppercase text-white/60">
                Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation to other team members */}
        <div className="border-t border-white/10 pt-16">
          <h3 className="text-sm font-medium tracking-widest uppercase text-white/60 mb-8">
            Meet the Rest of the Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href={`/team/${prevMember.slug}`}
              className="group p-6 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src={prevMember.image.color}
                    alt={prevMember.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide mb-1">
                    Previous
                  </p>
                  <p className="text-lg font-light text-white">
                    {prevMember.name}
                  </p>
                  <p className="text-sm text-white/60">{prevMember.title}</p>
                </div>
              </div>
            </Link>

            <Link
              href={`/team/${nextMember.slug}`}
              className="group p-6 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 md:text-right"
            >
              <div className="flex items-center gap-4 md:flex-row-reverse">
                <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src={nextMember.image.color}
                    alt={nextMember.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide mb-1">
                    Next
                  </p>
                  <p className="text-lg font-light text-white">
                    {nextMember.name}
                  </p>
                  <p className="text-sm text-white/60">{nextMember.title}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Back to team section */}
        <div className="border-t border-white/10 pt-8">
          <Link
            href="/why-us"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <span>←</span>
            <span>Back to Why Us</span>
          </Link>
        </div>
      </div>
    </ContentPageLayout>
  );
}

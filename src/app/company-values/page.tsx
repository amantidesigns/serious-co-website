import ContentPageLayout from "@/components/ContentPageLayout";

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
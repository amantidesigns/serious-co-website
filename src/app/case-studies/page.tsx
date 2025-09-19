import StarryPageLayout from "@/components/StarryPageLayout";

export default function CaseStudiesPage() {
  return (
    <StarryPageLayout title="Case Studies">
      <div className="relative z-20 max-w-3xl text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-6 text-white">
        <p>We take simple ideas <em>seriously.</em></p>
        <p>Our case studies will be available soon.</p>
        <p>In the meantime, let's talk about your project.</p>
      </div>
    </StarryPageLayout>
  );
}
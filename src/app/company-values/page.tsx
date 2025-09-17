import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CompanyValuesPage() {
  return (
    <section className="py-32 pb-0 bg-[#0B3D91]">
      <div className="relative container max-w-7xl mx-auto min-h-[100vh]">
        {/* Galaxy background layer (behind text, above blue bg) */}
        <div className="absolute -top-35 right-0 w-full">
          <img src="/galaxy-ascii.png" className="animate-fade-in animate-pulse rounded-2xl object-cover" alt="" />
        </div>

        {/* Bottom-left statement duplicated from landing hero */}
        <div className="absolute bottom-45 z-10 lg:max-w-2xl w-2xl">
          <p className="relative z-20 mt-8 max-w-2xl font-medium text-white leading-6">
            <span className="text-white pr-2">
              A Very Serious Company is a creative agency.
            </span>{" "}
            <br />
            We build websites, create advertisements, and solve <br />
            specific business problems.
          </p>
        </div>

        <h2 className="relative z-20 text-white text-5xl lg:text-7xl tracking-tight font-playfair mb-6">Company Values</h2>
        <div className="relative z-20 mt-12 max-w-3xl space-y-8 text-lg leading-relaxed text-white">
          <p>We take simple ideas seriously.</p>

          <p>Simple ideas don't get the attention they deserve.</p>

          <blockquote className="border-l border-white/25 pl-5 italic text-white/90">
            Charlie Munger said: "There is an old two-part rule that often works wonders in business, science, and elsewhere: take a simple, basic idea and take it very seriously."
          </blockquote>

          <p>
            We do exactly that. We understand the simple idea deeply, execute it properly, and respect its power.
          </p>

          <p>That's why we exist.</p>
        </div>

        {/* Right-corner block duplicated from landing hero (moved to be a sibling of content for correct positioning) */}
        <div className="absolute flex flex-col items-end bottom-20 z-10 max-w-xl lg:right-0 lg:bottom-45">
          <h2 className="relative z-20 text-white text-right font-playfair text-5xl tracking-tighter lg:text-7xl">
            We take simple ideas seriously.
          </h2>
          <div className="flex gap-2">
            <Button className="group self-end mt-10 h-14 w-80 flex cursor-pointer active:scale-[0.98] items-center justify-center gap-2 font-thin rounded-full border border-white bg-transparent text-white hover:bg-[#F2F2F2] hover:text-[#0B3D91] px-4 py-1 tracking-tight">
              hello@averyseriouscompany.com
              <ChevronRight className="size-4 mt-1 transition-all ease-out group-hover:rotate-0" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
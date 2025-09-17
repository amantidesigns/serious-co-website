import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OurApproachPage() {
  return (
    <section className="py-32 pb-0 bg-[#0B3D91]">
      <div className="relative container max-w-7xl mx-auto min-h-[100vh]">
        {/* Galaxy background layer (behind text, above blue bg) */}
        <div className="absolute -top-35 right-0 w-full">
          <img src="/galaxy-ascii.png" className="animate-fade-in animate-pulse rounded-2xl object-cover" alt="" />
        </div>

        {/* Bottom-left statement duplicated from landing hero */}
        <div className="absolute bottom-45 z-10 lg:max-w-2xl w-2xl">
          {/* Removed oversized heading to keep it only on the landing page */}

          <p className="relative z-20 mt-8 max-w-2xl font-medium text-white leading-6">
            <span className="text-white pr-2">
              A Very Serious Company is a creative agency.
            </span>{" "}
            <br />
            We build websites, create advertisements, and solve <br />
            specific business problems.
          </p>
        </div>

        <h2 className="relative z-20 text-white text-5xl lg:text-7xl tracking-tight font-playfair mb-6">Our Approach</h2>
        <div className="relative z-20 text-lg leading-relaxed max-w-2xl space-y-6 text-white">
          <p>We take simple ideas seriously.</p>
          <p>Our approach is somewhat unconventional.</p>
          <p>Most teams present elaborate processes and proprietary frameworks.</p>
          <p>We believe the best process is no process at all—just clear thinking applied consistently.</p>
          <p>Take this website: we identified what visitors need to know, then said exactly that. Nothing more, nothing less.</p>
          <p>This is what we mean by taking simple ideas seriously: understand what matters, then execute it properly.</p>
          <p>Every project starts the same way. Just clear thinking applied consistently.</p>
        </div>

        {/* Right-corner block duplicated from landing hero */}
        <div className="absolute flex flex-col items-end bottom-20 z-10 max-w-xl lg:right-0 lg:bottom-45">
          <h2 className="relative z-20 text-white text-right font-playfair text-5xl tracking-tighter lg:text-7xl">
            We take simple ideas seriously.
          </h2>
          <div className="flex gap-2">
            <Button className="group self-end mt-10 h-14 w-80 flex cursor-pointer active:scale-[0.98] items-center justify-center gap-2 font-thin rounded-full border border-white bg-transparent text-white hover:bg-transparent hover:text-white px-4 py-1 tracking-tight">
              hello@averyseriouscompany.com
              <ChevronRight className="size-4 mt-1 transition-all ease-out group-hover:rotate-0" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
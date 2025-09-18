import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CompanyValuesPage() {
  return (
    <section className="py-32 pb-0 bg-[#0B3D91] min-h-screen">
      <div className="relative container max-w-7xl mx-auto min-h-[100vh]">
        {/* Background stars layer */}
        <div 
          className="fixed inset-0 w-screen h-screen pointer-events-none select-none z-0"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 15px 25px, rgba(255,255,255,0.6), transparent),
              radial-gradient(1px 1px at 45px 85px, rgba(255,255,255,0.4), transparent),
              radial-gradient(1px 1px at 75px 15px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 105px 65px, rgba(255,255,255,0.5), transparent),
              radial-gradient(1px 1px at 135px 35px, rgba(255,255,255,0.7), transparent),
              radial-gradient(1px 1px at 165px 95px, rgba(255,255,255,0.3), transparent),
              radial-gradient(1px 1px at 195px 55px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 225px 25px, rgba(255,255,255,0.4), transparent),
              radial-gradient(1px 1px at 255px 75px, rgba(255,255,255,0.6), transparent),
              radial-gradient(1px 1px at 285px 45px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 315px 15px, rgba(255,255,255,0.5), transparent),
              radial-gradient(1px 1px at 345px 85px, rgba(255,255,255,0.7), transparent),
              radial-gradient(1px 1px at 375px 35px, rgba(255,255,255,0.3), transparent),
              radial-gradient(1px 1px at 405px 65px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 435px 25px, rgba(255,255,255,0.4), transparent),
              radial-gradient(1px 1px at 465px 75px, rgba(255,255,255,0.6), transparent),
              radial-gradient(1px 1px at 495px 45px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 525px 15px, rgba(255,255,255,0.5), transparent),
              radial-gradient(1px 1px at 555px 85px, rgba(255,255,255,0.7), transparent),
              radial-gradient(1px 1px at 585px 35px, rgba(255,255,255,0.3), transparent),
              radial-gradient(1px 1px at 615px 65px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 645px 25px, rgba(255,255,255,0.4), transparent),
              radial-gradient(1px 1px at 675px 75px, rgba(255,255,255,0.6), transparent),
              radial-gradient(1px 1px at 705px 45px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 735px 15px, rgba(255,255,255,0.5), transparent),
              radial-gradient(1px 1px at 765px 85px, rgba(255,255,255,0.7), transparent),
              radial-gradient(1px 1px at 795px 35px, rgba(255,255,255,0.3), transparent),
              radial-gradient(1px 1px at 825px 65px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 855px 25px, rgba(255,255,255,0.4), transparent),
              radial-gradient(1px 1px at 885px 75px, rgba(255,255,255,0.6), transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '900px 100px',
            opacity: 0.6,
            animation: 'twinkle 4s ease-in-out infinite alternate'
          }}
          aria-hidden
        />

        {/* Bright pulsing stars layer */}
        <div 
          className="fixed inset-0 w-screen h-screen pointer-events-none select-none z-5"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 25px 35px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 85px 75px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 155px 25px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 225px 85px, rgba(255,255,255,0.7), transparent),
              radial-gradient(1px 1px at 295px 45px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 365px 15px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 435px 65px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 505px 35px, rgba(255,255,255,0.7), transparent),
              radial-gradient(1px 1px at 575px 85px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 645px 25px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 715px 55px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 785px 15px, rgba(255,255,255,0.7), transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '800px 100px',
            opacity: 0.8,
            animation: 'twinkle 2s ease-in-out infinite alternate, pulse 2s ease-in-out infinite'
          }}
          aria-hidden
        />

        {/* Galaxy background layer (behind text, above blue bg) */}
        <div className="absolute -top-35 right-0 w-full z-10">
          <img src="/galaxy-ascii.png" className="animate-fade-in animate-pulse rounded-2xl object-cover opacity-80" alt="" />
        </div>

        {/* Bottom-left statement duplicated from landing hero */}
        <div className="absolute bottom-45 z-10 lg:max-w-2xl w-2xl">
          <p className="relative z-20 mt-8 max-w-2xl font-medium text-white leading-6">
            <span className="text-white pr-2">
              A <em>Very</em> Serious Company is a creative agency.
            </span>{" "}
            <br />
            We build websites, create advertisements, and solve <br />
            specific business problems.
          </p>
        </div>

        <h2 className="relative z-20 text-white text-5xl lg:text-7xl tracking-tight font-playfair mb-6">Company Values</h2>
        <div className="relative z-20 mt-12 max-w-3xl space-y-8 text-lg leading-relaxed text-white">
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

        {/* Right-corner block duplicated from landing hero (moved to be a sibling of content for correct positioning) */}
        <div className="absolute flex flex-col items-end bottom-20 z-10 max-w-xl lg:right-0 lg:bottom-45">
          <h2 className="relative z-20 text-white text-right font-playfair text-5xl tracking-tighter lg:text-7xl">
            We take simple ideas <em>seriously.</em>
          </h2>
          <div className="flex gap-2">
            <a 
              href="mailto:hello@averyseriouscompany.com?subject=Hello from A Very Serious Company Website&body=Hi there,%0D%0A%0D%0AI'm interested in learning more about your services.%0D%0A%0D%0AThanks!"
              className="group self-end mt-10 h-14 w-80 flex cursor-pointer active:scale-[0.98] items-center justify-center gap-2 font-thin rounded-full border border-white bg-transparent text-white hover:bg-[#F2F2F2] hover:text-[#0B3D91] px-4 py-1 tracking-tight transition-all duration-200"
            >
              hello@averyseriouscompany.com
              <ChevronRight className="size-4 mt-1 transition-all ease-out group-hover:rotate-0" />
            </a>
          </div>
        </div>

        {/* Questions? We have answers button */}
        <div className="absolute top-8 right-8 z-20">
          <a 
            href="/faq" 
            className="text-white text-sm font-thin rounded-full border border-white bg-transparent hover:bg-[#F2F2F2] hover:text-[#0B3D91] px-4 py-2 tracking-tight transition-all duration-200"
          >
            Questions? We have answers.
          </a>
        </div>
      </div>
    </section>
  );
}
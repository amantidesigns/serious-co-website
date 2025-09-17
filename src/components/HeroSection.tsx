import { ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-32 pb-0 bg-[#0B3D91]">
      <div className="relative container max-w-7xl mx-auto min-h-[100vh]">
        <div className="absolute bottom-45 z-10 lg:max-w-2xl w-2xl">
          <h2 className="absolute -top-110 z-0 text-left font-extralight text-5xl tracking-tight lg:text-7xl text-white">
            A Very Serious Company
          </h2>

          <p className="relative z-20 mt-8 max-w-2xl font-medium text-white leading-6">
            <span className="text-white pr-2">
              A Very Serious Company is a creative agency.
            </span>{" "}
            <br />
            We build websites, create advertisements, and solve <br /> 
            specific business problems.
          </p>
        </div>
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
        <div
          className="absolute inset-0 h-full z-0 pointer-events-none select-none rounded-2xl overflow-hidden"
          style={{
            backgroundImage: "url('/galaxy-ascii.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden
        >
          <Image
            src="/galaxy-ascii.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.02) 60%, transparent 100%)",
            }}
          />
          {/* noscript fallback to ensure image shows if JS or styles fail */}
          <noscript>
            <img src="/galaxy-ascii.png" alt="Galaxy backdrop" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </noscript>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
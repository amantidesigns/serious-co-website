import { PocketKnife } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";

const DATA = [
  {
    title: "Website Development",
    description:
      "We create beautiful, functional websites that help your business grow and connect with customers effectively.",
    icon: "CircleHelp",
    image:
      "https://cdn.cosmos.so/410de9a7-1213-433a-93da-043b0e2e2a7b?format=jpeg",
  },
  {
    title: "Creative Advertising",
    description:
      "From concept to execution, we design advertisements that capture attention and drive results",
    icon: "Volume2",
    image:
      "https://cdn.cosmos.so/c32afa87-08ab-4e83-b768-7c1c7877e889?format=jpeg",
  },
  {
    title: "Business Solutions",
    description:
      "We solve specific business problems with creative thinking and strategic implementation tailored to your needs",
    icon: "Lightbulb",
    image:
      "https://cdn.cosmos.so/410de9a7-1213-433a-93da-043b0e2e2a7b?format=jpeg",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-32 max-w-7xl mx-auto bg-[#0B3D91] text-white">
      <div className="border-y border-[#FFFFFF33]">
        <div className="container flex flex-col gap-6 border-x border-[#FFFFFF33] py-4 max-lg:border-x lg:py-8 px-7">
          <h1 className="text-3xl leading-tight tracking-tight font-extralight md:text-4xl lg:text-6xl">
            A Very Serious Company
          </h1>
          <div className="max-w-[600px] tracking-[-0.32px] space-y-4">
            <p>A Very Serious Company is a creative agency.</p>
            <p>We build websites, create advertisements, and solve specific business problems.</p>
            <p className="font-medium">We take simple ideas seriously.</p>
          </div>
          <div className="mt-4">
            <a 
              href="mailto:hello@averyseriouscompany.com" 
              className="text-white hover:text-[#F2F2F2] transition-colors underline"
            >
              hello@averyseriouscompany.com
            </a>
          </div>
        </div>
      </div>

      <div className="lg:px-0! container border-x border-[#FFFFFF33]">
        <div className="items-center">
          <div className="grid flex-1 max-lg:divide-y max-lg:divide-[#FFFFFF33] max-lg:border-x max-lg:border-[#FFFFFF33] lg:grid-cols-3 lg:divide-x lg:divide-[#FFFFFF33]">
            {DATA.map((item, index) => (
              <div
                key={index}
                className="relative isolate pt-5 text-start lg:pt-20"
              >
                <h3 className="mt-2 px-4 text-lg tracking-tight lg:px-8">
                  {item.title}
                </h3>
                <p className="text-[#F2F2F2] pb-6 pt-2 lg:px-8">
                  {item.description}
                </p>
                <div className="border-t border-[#FFFFFF33]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="bg-muted dark:invert"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-8 w-full border-y border-[#FFFFFF33] md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x border-[#FFFFFF33]"></div>
      </div>
    </section>
  );
};

export { FeatureSection };
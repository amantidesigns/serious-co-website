import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="py-16 md:py-32 bg-[#0B3D91] text-white min-h-screen flex items-center">
      <div className="mx-auto max-w-5xl px-6 w-full">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl lg:text-6xl font-light">A Very Serious Company</h1>
          <div className="space-y-4 text-lg">
            <p>
              A Very Serious Company is a creative agency.
            </p>
            <p>
              We build websites, create advertisements, and solve specific business problems.
            </p>
            <p className="font-medium">
              We take simple ideas seriously.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-[#F2F2F2] hover:text-[#0B3D91] transition-colors">
            <Link href="mailto:hello@averyseriouscompany.com">hello@averyseriouscompany.com</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
export default function FAQs() {
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32 bg-[#0B3D91] text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h1 className="mb-8 text-4xl md:text-6xl font-light">
            A Very Serious Company
          </h1>
          <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed">
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
          <div className="mt-12">
            <a 
              href="mailto:hello@averyseriouscompany.com"
              className="inline-block text-white hover:text-[#F2F2F2] transition-colors duration-200 text-lg underline underline-offset-4"
            >
              hello@averyseriouscompany.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
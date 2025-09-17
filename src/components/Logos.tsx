const Logos = () => {
  return (
    <section className="py-32 mx-auto pt-0 bg-[#0B3D91] text-white">
      <div className="container mx-auto space-y-10 lg:space-y-16 max-w-4xl">
        <div className="text-center space-y-8">
          <h1 className="mb-8 text-4xl font-bold text-balance md:text-5xl lg:text-6xl">
            A Very Serious Company
          </h1>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              A Very Serious Company is a creative agency.
              <br />
              We build websites, create advertisements, and solve specific business problems.
            </p>
            
            <p className="font-medium">
              We take simple ideas seriously.
            </p>
          </div>
          
          <div className="pt-8">
            <a 
              href="mailto:hello@averyseriouscompany.com"
              className="text-white hover:text-[#F2F2F2] transition-colors duration-200 text-lg underline underline-offset-4"
            >
              hello@averyseriouscompany.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos };
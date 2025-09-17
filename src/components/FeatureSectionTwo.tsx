import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface list {
  title: string;
  value: string;
  summary: string;
  image: {
    src: string;
    alt: string;
  };
}

const LIST: Array<list> = [
  {
    title: "Creative websites that make an impact.",
    value: "1",
    summary:
      "We design and develop custom websites that tell your story and drive results. From concept to launch, we handle every detail.",
    image: {
      src: "https://cdn.cosmos.so/a13978fa-5536-4e89-a976-5d24b239a389?format=jpeg",
      alt: "Website design illustration",
    },
  },
  {
    title: "Advertisements that get noticed and remembered.",
    value: "2",
    summary:
      "Our creative team crafts compelling campaigns across all channels. We turn simple ideas into memorable brand experiences.",
    image: {
      src: "https://cdn.cosmos.so/31a4b92a-1b71-47ee-87e2-7594ad90e52a?format=jpeg",
      alt: "Advertisement campaign dashboard",
    },
  },
  {
    title: "Business solutions tailored to your needs.",
    value: "3",
    summary:
      "We solve specific business problems with creative thinking and strategic execution. Every solution is crafted with care and precision.",
    image: {
      src: "https://cdn.cosmos.so/65975927-a67d-4024-9f78-cc6a3f6c737f?format=jpeg",
      alt: "Business solutions graphic",
    },
  },
];

const FeatureSectionTwo = () => {
  return (
    <section className="bg-[#0B3D91] text-white py-16">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-auto mb-8 flex flex-col items-start justify-between gap-6 md:mb-20">
          <h1 className="text-left text-5xl max-w-4xl lg:text-6xl font-bold">
            A Very Serious Company
          </h1>
          <div className="text-lg max-w-2xl leading-relaxed">
            <p className="mb-4">A Very Serious Company is a creative agency.</p>
            <p className="mb-4">We build websites, create advertisements, and solve specific business problems.</p>
            <p className="mb-8">We take simple ideas seriously.</p>
            <a 
              href="mailto:hello@averyseriouscompany.com" 
              className="text-white hover:text-[#F2F2F2] underline transition-colors"
            >
              hello@averyseriouscompany.com
            </a>
          </div>
        </div>
        <div>
          <Tabs defaultValue={LIST[0].value} className="gap-14 xl:flex-row">
            <TabsList className="h-fit w-fit flex-col gap-2.5 bg-transparent p-0">
              {LIST.map((item, i) => (
                <TabsTrigger
                  className="flex-col items-start rounded-none p-5 text-left shadow-none border border-[#FFFFFF33] whitespace-normal data-[state=active]:bg-[#FFFFFF33] data-[state=active]:outline cursor-pointer xl:max-w-[34.0625rem] text-white hover:bg-[#FFFFFF1A]"
                  key={`tab-trigger-${i}`}
                  value={item.value}
                >
                  <div className="leading-normal font-bold text-white">{item.title}</div>
                  <div className="leading-normal text-[#F2F2F2]">
                    {item.summary}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            {LIST.map((item, i) => (
              <TabsContent
                className="w-full"
                key={`tab-content-${i}`}
                value={item.value}
              >
                <AspectRatio
                  ratio={16 / 9}
                  className="overflow-hidden rounded-[0.75rem]"
                >
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="block size-full object-cover object-center"
                  />
                </AspectRatio>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { FeatureSectionTwo };
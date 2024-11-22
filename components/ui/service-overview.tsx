import Image from "next/image";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";

type ServiceOverviewProps = {
  title: string;
  description: string;
  bulletPoints: string[];
  imageSrc: string;
  imageAlt: string;
};

const ServiceOverview = ({
  title,
  description,
  bulletPoints,
  imageSrc,
  imageAlt,
}: ServiceOverviewProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-kmk-logoBlue">{title}</h1>
            <div className="prose max-w-none">
              <p>{description}</p>
              <ul className="space-y-2">
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-xl font-semibold mb-4">
                Talk to our friendly team:
              </p>
              <p className="text-2xl font-bold text-kmk-logoBlue">
                01582 123456
              </p>
            </div>

            {/* Navigation thumbnails */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mt-8">
              <a
                href="#expertise"
                className="w-full border border-gray-300 text-center py-2 px-4 rounded hover:bg-gray-200"
              >
                Our Expertise
              </a>
              <a
                href="#how-we-can-help"
                className="w-full border border-gray-300 text-center py-2 px-4 rounded hover:bg-gray-200"
              >
                How we can Help
              </a>
              <a
                href="#get-in-touch"
                className="w-full border border-gray-300 text-center py-2 px-4 rounded hover:bg-gray-200"
              >
                Get in Touch
              </a>
              <a
                href="#latest-news"
                className="w-full border border-gray-300 text-center py-2 px-4 rounded hover:bg-gray-200"
              >
                Latest News
              </a>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative h-[400px]">
            <ScrollMotionWrapper
              transitionX
              transitionOpacity
              customOpacity={{
                scrollProgress: [0, 0.15, 0.85, 1],
                values: [0, 1, 1, 0],
              }}
              className="relative h-full w-full rounded-lg overflow-hidden"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </ScrollMotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;

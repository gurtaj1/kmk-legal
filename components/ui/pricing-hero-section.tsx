import Image from "next/image";

interface PricingHeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const PricingHeroSection = ({
  imageSrc,
  imageAlt,
  title,
  description,
}: PricingHeroSectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column - Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>

          {/* Right column - Content */}
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-kmk-logoBlue">{title}</h1>
            <div className="prose max-w-none">
              <p className="text-lg">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHeroSection;

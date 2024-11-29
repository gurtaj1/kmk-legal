import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface PricingProcessProps {
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

const PricingProcess = ({
  title,
  subtitle,
  description,
  image,
}: PricingProcessProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-semibold mb-8 text-kmk-logoBlue">
          {title}
        </h2>

        <Card className="w-full">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-kmk-logoBlue">
                  {subtitle}
                </h3>
                <p className="text-lg">{description}</p>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingProcess;

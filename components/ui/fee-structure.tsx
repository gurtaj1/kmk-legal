import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { buttonVariants } from "@/app/globals/framer-variants";

interface FeeStructureProps {
  title: string;
  description: string;
  servicePage: string;
  image: {
    src: string;
    alt: string;
  };
}

const FeeStructure = ({
  title,
  description,
  servicePage,
  image,
}: FeeStructureProps) => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        {/* Full Width Title */}
        <h2 className="text-6xl font-semibold mb-8 text-kmk-logoBlue">
          {title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="md:col-span-2 space-y-8 h-full">
            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="space-y-4">
                  <p>{description}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <motion.div
              variants={buttonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <Link href={servicePage}>
                <Button className="w-full bg-kmk-logoBlue hover:bg-kmk-logoBlue/90">
                  Service Page
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <Link href="/contact">
                <Button className="w-full">Contact Us</Button>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <Link href="/quote-calculator">
                <Button
                  variant="outline"
                  className="w-full border-kmk-logoBlue text-kmk-logoBlue hover:bg-kmk-logoBlue hover:text-white"
                >
                  Request a Quote
                </Button>
              </Link>
            </motion.div>

            {/* Image Box */}
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeStructure;

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/app/globals/framer-variants";

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
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isLineVisible, setIsLineVisible] = useState(false);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-5xl font-bold text-kmk-logoBlue">{title}</h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: isLineVisible ? 1 : 0,
                  height: 2,
                  transition: {
                    duration: 0.7,
                    ease: "easeOut",
                  },
                }}
                onViewportEnter={() => setIsLineVisible(true)}
                onViewportLeave={() => setIsLineVisible(false)}
                className="w-1/4 border-b-2 border-kmk-emeraldGreen mt-2 origin-left"
              />
            </div>
            <div className="prose max-w-none">
              <p>{description}</p>
              <ul className="space-y-2">
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-xl text-kmk-logoBlue font-semibold mb-4">
                Talk to our friendly team:
              </p>
              <p className="text-2xl font-bold text-kmk-emeraldGreen">
                01582 123456
              </p>
            </div>

            {/* Navigation thumbnails */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mt-8">
              <motion.a
                href="#expertise"
                className="w-full border border-gray-300 text-center py-2 px-4 bg-kmk-gold rounded bg-kmk-blueberry text-white hover:bg-kmk-emeraldGreen/80 hover:text-black"
                variants={buttonVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                Our Expertise
              </motion.a>
              <motion.a
                href="#how-we-can-help"
                className="w-full border border-gray-300 text-center py-2 px-4 rounded bg-kmk-blueberry text-white hover:bg-kmk-emeraldGreen/80 hover:text-black"
                variants={buttonVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                How we can Help
              </motion.a>
              <motion.a
                href="#get-in-touch"
                className="w-full border border-gray-300 text-center py-2 px-4 rounded bg-kmk-blueberry text-white hover:bg-kmk-emeraldGreen/80 hover:text-black"
                variants={buttonVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#latest-news"
                className="w-full border border-gray-300 text-center py-2 px-4 rounded bg-kmk-blueberry text-white hover:bg-kmk-emeraldGreen/80 hover:text-black"
                variants={buttonVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                Latest News
              </motion.a>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative h-[400px]">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{
                opacity: isImageVisible ? 1 : 0.25,
                x: isImageVisible ? 0 : 16,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              onViewportEnter={() => setIsImageVisible(true)}
              onViewportLeave={() => setIsImageVisible(false)}
              className="relative h-full w-full rounded-lg overflow-hidden"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;

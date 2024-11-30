import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/app/globals/framer-variants";
import { useScrollToSection } from "@/app/globals/hooks/use-scroll-to-section";
import Link from "next/link";

type ServiceOverviewProps = {
  title: string;
  description: string;
  bulletPoints: string[];
  imageSrc: string;
  imageAlt: string;
  currentPath: string;
};

const ServiceOverview = ({
  title,
  description,
  bulletPoints,
  imageSrc,
  imageAlt,
  currentPath,
}: ServiceOverviewProps) => {
  const scrollToSection = useScrollToSection();
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isLineVisible, setIsLineVisible] = useState(false);

  return (
    <section className="py-8 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column - Text content */}
          <div className="space-y-4 sm:space-y-6">
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-kmk-logoBlue">
                {title}
              </h1>
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
            <div className="prose prose-sm sm:prose max-w-none">
              <p>{description}</p>
              <ul className="space-y-2">
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 sm:mt-8">
              <p className="text-lg sm:text-xl text-kmk-logoBlue font-semibold mb-2 sm:mb-4">
                Talk to our friendly team:
              </p>
              <p className="text-xl sm:text-2xl font-bold text-kmk-emeraldGreen">
                01582 123456
              </p>
            </div>

            {/* Navigation thumbnails */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
              <motion.div
                className="w-full border border-gray-300 rounded bg-kmk-blueberry text-white hover:bg-kmk-emeraldGreen/80 hover:text-black"
                variants={buttonVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <Link
                  href="#expertise"
                  onClick={(e) =>
                    scrollToSection({
                      sectionId: "expertise",
                      targetPath: currentPath,
                    })(e)
                  }
                  className="block w-full h-full py-2 px-4 text-center"
                >
                  Our Expertise
                </Link>
              </motion.div>
              <motion.div
                className="w-full border border-gray-300 rounded bg-kmk-blueberry text-white hover:bg-kmk-emeraldGreen/80 hover:text-black"
                variants={buttonVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <Link
                  href="#how-we-can-help"
                  onClick={(e) =>
                    scrollToSection({
                      sectionId: "how-we-can-help",
                      targetPath: currentPath,
                    })(e)
                  }
                  className="block w-full h-full py-2 px-4 text-center"
                >
                  How we can Help
                </Link>
              </motion.div>
              <motion.div
                className="w-full border border-gray-300 rounded bg-kmk-blueberry text-white hover:bg-kmk-emeraldGreen/80 hover:text-black"
                variants={buttonVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <Link
                  href="#get-in-touch"
                  onClick={(e) =>
                    scrollToSection({
                      sectionId: "get-in-touch",
                      targetPath: currentPath,
                    })(e)
                  }
                  className="block w-full h-full py-2 px-4 text-center"
                >
                  Get in Touch
                </Link>
              </motion.div>
              <motion.div
                className="w-full border border-gray-300 rounded bg-kmk-blueberry text-white hover:bg-kmk-emeraldGreen/80 hover:text-black"
                variants={buttonVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <Link
                  href="#latest-news"
                  onClick={(e) =>
                    scrollToSection({
                      sectionId: "latest-news",
                      targetPath: currentPath,
                    })(e)
                  }
                  className="block w-full h-full py-2 px-4 text-center"
                >
                  Latest News
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative h-[300px] sm:h-[400px]">
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

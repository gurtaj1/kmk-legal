import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/app/globals/framer-variants";

type ServicePath = {
  title: string;
  path: string;
};

type ServicePathsGridProps = {
  servicePaths: ServicePath[];
  pricingTitle?: string;
  pricingContent?: React.ReactNode;
};

const ServicePathsGrid = ({
  servicePaths,
  pricingTitle,
  pricingContent,
}: ServicePathsGridProps) => {
  return (
    <section
      className="py-16 scroll-mt-navbarMobile md:scroll-mt-navbar"
      id="how-we-can-help"
    >
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-kmk-logoBlue mb-6 text-center">
            What we can help you with
          </h2>

          <div className="grid grid-cols-2 gap-8 mb-8">
            {servicePaths.map((service, index) => (
              <Link key={index} href={service.path}>
                <motion.div
                  className="relative"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <div className="border-2 border-kmk-logoBlue p-4 rounded-lg">
                    {service.title}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {(pricingTitle || pricingContent) && (
            <div className="mt-8 border-t pt-4">
              {pricingTitle && (
                <h3 className="text-xl font-semibold mb-4">{pricingTitle}</h3>
              )}
              {pricingContent}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicePathsGrid;

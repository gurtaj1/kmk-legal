"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import ServiceCard from "@/components/ui/service-card";
import { buttonVariants } from "@/app/globals/framer-variants";

const serviceLinks = [
  {
    href: "/fees/pricing/conveyancing",
    title: "Conveyancing",
    image: "/residential-conveyancing.jpg",
    description:
      "View our transparent pricing for residential property transactions and remortgages",
  },
  {
    href: "/fees/pricing/commercial-property",
    title: "Commercial Property",
    image: "/commercial-conveyancing.jpg",
    description: "Commercial property transaction fees and pricing structure",
  },
  {
    href: "/fees/pricing/children",
    title: "Children Law",
    image: "/children-law.jpg",
    description:
      "Transparent pricing for children law proceedings and representation",
  },
  {
    href: "/fees/pricing/family",
    title: "Matrimonial & Family Law",
    image: "/family-law.jpg",
    description:
      "Clear fee structure for divorce, separation and other family matters",
  },
  {
    href: "/fees/pricing/estate-planning",
    title: "Estate Planning, Wills & Probate",
    image: "/estate-planning.jpg",
    description:
      "Pricing for wills, probate and estate administration services",
  },
  {
    href: "/fees/pricing/trusts",
    title: "Trusts",
    image: "/trust-law.jpg",
    description: "Fee information for trust creation and management services",
  },
];

const PricingPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-kmk-blueberry/10 to-kmk-blueberry/30">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-2/3">
                <h1 className="text-6xl font-bold text-center md:text-left mb-8 text-kmk-logoBlue">
                  Fees & Pricing
                </h1>

                <div className="prose max-w-none text-center md:text-left">
                  <p className="text-lg">
                    Under rule 7 of the SRA Transparency Rules we are required
                    to publish information on our prices for some of the
                    services we offer. Please click a link below to view our
                    pricing and service information.
                  </p>
                </div>
              </div>

              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
                className="md:w-1/3 relative h-[200px] md:h-auto"
              >
                <Link href="/quote-calculator">
                  <div
                    className="w-full h-full relative rounded-lg overflow-hidden cursor-pointer"
                    style={{
                      backgroundImage: "url('/quote-thumbnail.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-kmk-logoBlue/50 hover:bg-kmk-logoBlue/30 transition-all duration-300 flex items-center justify-center group">
                      <h2 className="text-4xl font-bold text-white group-hover:text-white">
                        Request a Quote
                      </h2>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {serviceLinks.map((service, index) => (
                <ServiceCard
                  key={index}
                  href={service.href}
                  title={service.title}
                  image={service.image}
                  description={service.description}
                />
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <Link href="/contact">
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-kmk-logoBlue">
                        Contact Us
                      </h3>
                      <p className="text-gray-600">
                        Get in touch with our team for more information
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <Link href="/quote-calculator">
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-kmk-logoBlue">
                        Quote Calculator
                      </h3>
                      <p className="text-gray-600">
                        Calculate an estimate for your legal services
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default PricingPage;

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";
import { buttonVariants } from "@/app/globals/framer-variants";

const ConveyancingPricingPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-kmk-blueberry/10 to-kmk-blueberry/30">
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left column - Image */}
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/pricing.jpg"
                    alt="Conveyancing Pricing"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right column - Pricing Information */}
                <div className="space-y-6">
                  <h1 className="text-6xl font-bold text-kmk-logoBlue">
                    Pricing and Service Information for Conveyancing
                  </h1>
                  <div className="prose max-w-none">
                    <p className="text-lg">
                      Our transparent pricing structure for residential property
                      transactions and remortgages. We believe in providing
                      clear, upfront costs with no hidden fees. lorem ipsum
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae, delectus dolorem. Ratione molestiae ad, totam
                      dignissimos quisquam necessitatibus similique corrupti aut
                      perferendis optio alias natus quibusdam vitae quae!
                      Dolore, ducimus. lorem ipsum Lorem ipsum dolor sit amet
                      consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollMotionWrapper>

        {/* Main Content Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              {/* Full Width Title */}
              <h2 className="text-6xl font-semibold mb-8 text-kmk-logoBlue">
                Our Fee Structure
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Main Content - 2 columns */}
                <div className="md:col-span-2 space-y-8 h-full">
                  <Card className="h-full">
                    <CardContent className="p-6 h-full">
                      <div className="space-y-4">
                        <p>
                          Detailed pricing information will be displayed here.
                          lorem ipsum Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Recusandae, delectus dolorem.
                          Ratione molestiae ad, totam dignissimos quisquam
                          necessitatibus similique corrupti aut perferendis
                          optio alias natus quibusdam vitae quae! Dolore,
                          ducimus. lorem ipsum Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Recusandae, delectus
                          dolorem. Ratione molestiae ad, totam dignissimos
                          quisquam necessitatibus similique corrupti aut
                          perferendis optio alias natus quibusdam vitae quae!
                          Dolore, ducimus. lorem ipsum Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Recusandae,
                          delectus dolorem. Ratione molestiae ad, totam
                          dignissimos quisquam necessitatibus similique corrupti
                          aut perferendis optio alias natus quibusdam vitae
                          quae! Dolore, ducimus. lorem ipsum Lorem ipsum dolor
                          sit amet consectetur adipisicing elit. Recusandae,
                          delectus dolorem. Ratione molestiae ad, totam
                          dignissimos quisquam necessitatibus similique corrupti
                          aut perferendis optio alias natus quibusdam vitae
                          quae! Dolore, ducimus.
                        </p>
                        {/* Add pricing details as needed */}
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
                    <Link href="/services/conveyancing">
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
                    <Link href="/#contact">
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
                      src="/residential-conveyancing.jpg"
                      alt="Conveyancing Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollMotionWrapper>

        {/* Service Process Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-6xl font-semibold mb-8 text-kmk-logoBlue">
                Our Process
              </h2>

              <Card className="w-full">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Process Description */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-kmk-logoBlue">
                        How We Work
                      </h3>
                      <p className="text-lg">
                        Our streamlined conveyancing process ensures a smooth
                        and efficient property transaction. We handle all
                        aspects of your case with attention to detail and
                        regular communication throughout each stage. lorem ipsum
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae, delectus dolorem. Ratione molestiae ad,
                        totam dignissimos quisquam necessitatibus similique
                        corrupti aut perferendis optio alias natus quibusdam
                        vitae quae! Dolore, ducimus. lorem ipsum Lorem ipsum
                        dolor sit amet consectetur adipisicing elit.
                      </p>
                      {/* Add more process details as needed */}
                    </div>

                    {/* Process Image/Flowchart */}
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                      <Image
                        src="/flowchart.jpg"
                        alt="Conveyancing Process Flowchart"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default ConveyancingPricingPage;

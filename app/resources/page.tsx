"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import { buttonVariants } from "@/app/globals/framer-variants";

const ResourcesPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-white text-[#333333] bg-gradient-to-br from-kmk-blueberry/10 to-kmk-blueberry/30">
        {/* Hero Image Section */}
        <section className="container mx-auto px-4 mt-8">
          <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
            <Image
              src="/legal-resources-hero.jpg"
              alt="Legal Resources"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl font-bold text-center mb-8 text-kmk-logoBlue">
              Legal Resources and News
            </h1>

            {/* Featured Content Box */}
            <motion.div
              variants={buttonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              className="mb-12"
            >
              <Card className="relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-4 text-kmk-logoBlue">
                      Latest Legal Updates
                    </h2>
                    <p className="text-lg mb-4">
                      Stay informed with our most recent legal news and
                      insights.
                    </p>
                  </div>
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "url('/legal-pattern.jpg')",
                      backgroundSize: "cover",
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Grid Layout */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column - News and Links */}
              <div className="md:col-span-2 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-kmk-logoBlue">
                    Links to Various Firm News
                  </h3>
                  <div className="grid gap-4">
                    {/* News items would be mapped here */}
                    {[1, 2, 3].map((item) => (
                      <motion.div
                        key={item}
                        variants={buttonVariants}
                        whileHover="whileHover"
                        whileTap="whileTap"
                      >
                        <Link href="#" className="block">
                          <Card>
                            <CardContent className="p-4">
                              <h4 className="font-semibold mb-2">
                                News Title {item}
                              </h4>
                              <p className="text-sm text-gray-600">
                                Brief description of the news item...
                              </p>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Resources and Contact */}
              <div className="space-y-8">
                {/* Recent News Section */}
                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-4 text-kmk-logoBlue">
                      Recent News
                    </h3>
                    <ul className="space-y-2">
                      {[1, 2, 3, 4].map((item) => (
                        <li key={item}>
                          <Link
                            href="#"
                            className="text-sm hover:text-kmk-logoBlue"
                          >
                            News Article {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Legal Resources Section */}
                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-4 text-kmk-logoBlue">
                      Legal Resources
                    </h3>
                    <ul className="space-y-2">
                      {[1, 2, 3].map((item) => (
                        <li key={item}>
                          <Link
                            href="#"
                            className="text-sm hover:text-kmk-logoBlue"
                          >
                            Resource {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Process Flowcharts Section */}
                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-4 text-kmk-logoBlue">
                      Process Flowcharts
                    </h3>
                    <ul className="space-y-2">
                      {[1, 2, 3].map((item) => (
                        <li key={item}>
                          <Link
                            href="#"
                            className="text-sm hover:text-kmk-logoBlue"
                          >
                            Flowchart {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Contact Us Card */}
                <Card className="bg-kmk-logoBlue text-white">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="text-sm mb-4">
                      Need help understanding our resources? Get in touch with
                      our team.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-block bg-white text-kmk-logoBlue px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Get in Touch
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default ResourcesPage;

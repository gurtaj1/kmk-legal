"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import { buttonVariants } from "@/app/globals/framer-variants";

const variousNews = [
  {
    title: "News Title 1",
    description: "Brief description of the news item...",
    href: "/news/1",
  },
  {
    title: "News Title 2",
    description: "Brief description of the news item...",
    href: "/news/2",
  },
  {
    title: "News Title 3",
    description: "Brief description of the news item...",
    href: "/news/3",
  },
];

const recentNews = [
  {
    title: "News Title 1",
    href: "/news/1",
  },
  {
    title: "News Title 2",
    href: "/news/2",
  },
  {
    title: "News Title 3",
    href: "/news/3",
  },
];

const legalResources = [
  {
    title: "Resource Title 1",
    href: "/resource/1",
  },
  {
    title: "Resource Title 2",
    href: "/resource/2",
  },
  {
    title: "Resource Title 3",
    href: "/resource/3",
  },
];

const processFlowcharts = [
  {
    title: "Conveyancing Process",
    href: "/services/conveyancing/conveyancing-process",
  },
  {
    title: "Source of Funds",
    href: "/services/conveyancing/source-of-funds",
  },
];

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

            {/* Main Grid Layout */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column - News and Links */}
              <div className="md:col-span-2 space-y-8">
                {/* Featured Content Box */}
                <motion.div
                  variants={buttonVariants}
                  whileHover="whileHover"
                  whileTap="whileTap"
                  className="mb-12"
                >
                  <Card className="relative overflow-hidden">
                    <CardContent className="p-12 min-h-[300px] flex items-center">
                      <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4 text-kmk-logoBlue">
                          Main Headline
                        </h2>
                      </div>
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: "url('/headline.jpg')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          opacity: 0.15,
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-kmk-logoBlue">
                    Links to Various Firm News
                  </h3>
                  <div className="grid gap-4">
                    {/* News items would be mapped here */}
                    {variousNews.map((item, index) => (
                      <motion.div
                        key={`${item.title}-${index}`}
                        variants={buttonVariants}
                        whileHover="whileHover"
                        whileTap="whileTap"
                      >
                        <Link href={item.href} className="block">
                          <Card>
                            <CardContent className="p-4">
                              <h4 className="font-semibold mb-2">
                                {item.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {item.description}
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
                      {recentNews.map((item, index) => (
                        <li key={`${item.title}-${index}`}>
                          <Link
                            href={item.href}
                            className="text-sm hover:text-kmk-emeraldGreen"
                          >
                            {item.title}
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
                      {legalResources.map((item, index) => (
                        <li key={`${item.title}-${index}`}>
                          <Link
                            href={item.href}
                            className="text-sm hover:text-kmk-emeraldGreen"
                          >
                            {item.title}
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
                    <h4 className="text-kmk-logoBlue mb-2 underline">
                      Conveyancing
                    </h4>
                    <ul className="space-y-2 ml-4">
                      {processFlowcharts.map((item, index) => (
                        <li
                          key={`${item.title}-${index}`}
                          className="list-disc"
                        >
                          <Link
                            href={item.href}
                            className="text-sm hover:text-kmk-emeraldGreen"
                          >
                            {item.title}
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

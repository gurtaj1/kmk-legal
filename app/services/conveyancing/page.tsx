"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import SmartCarousel from "@/components/ui/smart-carousel";

import { buttonVariants, cardVariants } from "@/app/globals/framer-variants";

const testimonials = [
  {
    text: "Excellent conveyancing service, made the whole process smooth and stress-free.",
    author: "John D.",
    rating: 5,
  },
  {
    text: "Excellent conveyancing service, made the whole process smooth and stress-free.",
    author: "John D.",
    rating: 5,
  },
  {
    text: "Excellent conveyancing service, made the whole process smooth and stress-free.",
    author: "John D.",
    rating: 5,
  },
  // ... other testimonials
];

const ConveyancingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column - Text content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-kmk-logoBlue">
                Conveyancing Services
              </h1>
              <div className="prose max-w-none">
                <p>Expert legal support for all your property transactions.</p>
                <ul className="space-y-2">
                  <li>Residential property purchases and sales</li>
                  <li>Buy-to-let transactions</li>
                  <li>Remortgages</li>
                  <li>Transfer of equity</li>
                  <li>New build purchases</li>
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-xl font-semibold mb-4">
                  Talk to our friendly team:
                </p>
                <p className="text-2xl font-bold text-kmk-logoBlue">
                  01582 123456
                </p>
              </div>

              {/* Navigation thumbnails */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <a
                  href="#expertise"
                  className="w-full border border-gray-300 text-center py-2 px-4 rounded hover:bg-gray-200"
                >
                  Our Expertise
                </a>
                <a
                  href="#how-we-can-help"
                  className="w-full border border-gray-300 text-center py-2 px-4 rounded hover:bg-gray-200"
                >
                  How we can Help
                </a>
                <a
                  href="#get-in-touch"
                  className="w-full border border-gray-300 text-center py-2 px-4 rounded hover:bg-gray-200"
                >
                  Get in Touch
                </a>
                <a
                  href="#latest-news"
                  className="w-full border border-gray-300 text-center py-2 px-4 rounded hover:bg-gray-200"
                >
                  Latest News
                </a>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/residential-conveyancing.jpg"
                alt="Conveyancing Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise and Team Section */}
      <section
        className="py-16 bg-gray-50 scroll-mt-navbarMobile md:scroll-mt-navbar"
        id="expertise"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Expertise and Testimonials */}
            <div className="space-y-8">
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-kmk-logoBlue mb-6">
                  Our Conveyancing Expertise
                </h2>
                <p className="text-lg mb-4">
                  With decades of experience in property law, our expert
                  conveyancing team provides comprehensive legal support for all
                  types of property transactions. We understand that buying or
                  selling property is one of life&apos;s most significant
                  decisions, and we&apos;re here to make the process as smooth
                  as possible.
                </p>
                <p className="text-lg mb-4">
                  Our dedicated team specializes in:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Residential property sales and purchases</li>
                  <li>Buy-to-let transactions</li>
                  <li>New build purchases</li>
                  <li>Remortgages and transfers of equity</li>
                  <li>Lease extensions and freehold purchases</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-kmk-logoBlue mb-6">
                  What Our Clients Say
                </h3>
                <SmartCarousel
                  items={testimonials.map((testimonial, index) => (
                    <div
                      className="p-6 bg-white rounded-lg shadow"
                      key={`testimonial-slide-${index}`}
                    >
                      <p className="mb-4">{testimonial.text}</p>
                      <p className="font-semibold">{testimonial.author}</p>
                    </div>
                  ))}
                  slidesToShow={1}
                  autoplay={true}
                />
              </div>
            </div>

            {/* Right Column - Team Members */}
            <div>
              <h2 className="text-3xl font-bold text-kmk-logoBlue mb-6">
                Our Team
              </h2>
              <div className="grid gap-4">
                <motion.div
                  className="flex items-center gap-4 w-full rounded-lg"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <Link href="/team/jane-smith" className="w-full">
                    <Card className="hover:shadow-lg transition-shadow w-full">
                      <CardContent className="p-6 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden">
                            <Image
                              src="/headshot-placeholder.jpg"
                              alt="Jane Smith"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">
                              Jane Smith
                            </h3>
                            <p className="text-sm text-gray-600">
                              Head of Conveyancing
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
                {/* Add more team members following the same pattern */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price & Service Information Section */}
      <section
        className="py-16 bg-gray-50 scroll-mt-navbarMobile md:scroll-mt-navbar"
        id="how-we-can-help"
      >
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-kmk-logoBlue mb-6 text-center">
              What we can help you with
            </h2>

            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* First Row */}
              <Link href="/services/conveyancing/selling">
                <motion.div
                  className="relative"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <div className="border-2 border-kmk-logoBlue p-4 rounded-lg">
                    Selling your property
                  </div>
                </motion.div>
              </Link>

              <Link href="/services/conveyancing/path2">
                <motion.div
                  className="relative"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <div className="border-2 border-kmk-logoBlue p-4 rounded-lg">
                    Service Path 2
                  </div>
                </motion.div>
              </Link>

              {/* Second Row */}
              <Link href="/services/conveyancing/path3">
                <motion.div
                  className="relative"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <div className="border-2 border-kmk-logoBlue p-4 rounded-lg">
                    Service Path 3
                  </div>
                </motion.div>
              </Link>

              <Link href="/services/conveyancing/path4">
                <motion.div
                  className="relative"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <div className="border-2 border-kmk-logoBlue p-4 rounded-lg">
                    Service Path 4
                  </div>
                </motion.div>
              </Link>
            </div>

            <div className="mt-8 border-t pt-4">
              <h3 className="text-xl font-semibold mb-4">
                Price & Service Information for Conveyancing
              </h3>
              {/* Add specific pricing content here */}
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section
        className="py-16 scroll-mt-navbarMobile md:scroll-mt-navbar"
        id="get-in-touch"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-kmk-logoBlue mb-8">
            Get in Touch with Us
          </h2>
          <div className="flex gap-4 justify-center">
            <Link href="/contact/callback">
              <motion.div
                className="relative"
                variants={buttonVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <div className="border-2 border-kmk-logoBlue p-4 rounded-lg min-w-[200px] text-center">
                  Request a Callback
                </div>
              </motion.div>
            </Link>
            <Link href="/#contact">
              <motion.div
                className="relative"
                variants={buttonVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <div className="border-2 border-kmk-logoBlue p-4 rounded-lg min-w-[200px] text-center">
                  Make an Enquiry
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sector Specific News */}
      <section
        className="py-16 bg-gray-50 scroll-mt-navbarMobile md:scroll-mt-navbar"
        id="latest-news"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-kmk-logoBlue mb-8">
            Conveyancing News
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Latest News</h3>
                {/* Add news content */}
              </CardContent>
            </Card>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Upcoming Events
                  </h3>
                  {/* Add events content */}
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Additional Information
                  </h3>
                  {/* Add additional info */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConveyancingPage;

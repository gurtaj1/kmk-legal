"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/app/globals/framer-variants";
import { Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { cardVariants } from "@/app/globals/framer-variants";

const GetInTouch = () => {
  return (
    <section
      className="py-16 scroll-mt-navbarMobile md:scroll-mt-navbar relative overflow-hidden"
      id="get-in-touch"
    >
      {/* Background with diagonal gradient */}
      <div
        className="absolute inset-0 bg-muted"
        style={{
          clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0 95%)",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-kmk-logoBlue mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch with Us
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our team of legal experts is here to help you. Choose how you&apos;d
            like to connect with us.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            variants={cardVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl"
          >
            <a href="tel:01234567890" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Phone className="w-10 h-10 text-kmk-logoBlue mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-4">
                    Speak directly with our team
                  </p>
                  <p className="text-kmk-logoBlue font-semibold">
                    01234 567 890
                  </p>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl"
          >
            <a href="mailto:info@kmklegal.com" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Mail className="w-10 h-10 text-kmk-logoBlue mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">Send us your enquiry</p>
                  <p className="text-kmk-logoBlue font-semibold">
                    info@kmklegal.com
                  </p>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Clock className="w-10 h-10 text-kmk-logoBlue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
              <p className="text-gray-600 mb-2">Mon - Fri: 9am - 5pm</p>
              <p className="text-gray-600">Weekends: Closed</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
          <Link href="/#contact" className="flex-1">
            <motion.div
              className="relative w-full"
              variants={buttonVariants}
              initial="initial"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <div className="border-2 border-kmk-logoBlue bg-white p-6 rounded-lg text-center hover:bg-kmk-logoBlue hover:text-white transition-colors group">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                  Request a Callback
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/90">
                  We'll call you back at a time that suits you
                </p>
              </div>
            </motion.div>
          </Link>

          <Link href="/#contact" className="flex-1">
            <motion.div
              className="relative w-full"
              variants={buttonVariants}
              initial="initial"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <div className="border-2 border-kmk-logoBlue bg-kmk-logoBlue text-white p-6 rounded-lg text-center hover:bg-kmk-logoBlue/90 transition-colors">
                <h3 className="text-lg font-semibold mb-2">Make an Enquiry</h3>
                <p className="text-sm text-white/90">Send us a message now</p>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

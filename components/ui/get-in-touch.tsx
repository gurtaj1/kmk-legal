"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/app/globals/framer-variants";

const GetInTouch = () => {
  return (
    <section
      className="py-16 scroll-mt-navbarMobile md:scroll-mt-navbar bg-gray-50"
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
  );
};

export default GetInTouch;

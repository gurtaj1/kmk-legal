"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cardVariants } from "@/app/globals/framer-variants";

type Feature = {
  title: string;
  image: string;
  description: string;
};

type ThreeStepGridProps = {
  title: string;
  features: Feature[];
};

const ThreeStepGrid = ({ title, features }: ThreeStepGridProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-kmk-logoBlue">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-xl bg-white border border-kmk-logoBlue overflow-hidden h-full"
              variants={cardVariants}
              initial="initial"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <Card className="h-full">
                <CardHeader className="p-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-lg font-bold mb-4 text-kmk-logoBlue">
                    {feature.title}
                  </CardTitle>
                  <p className="text-[#333333]">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepGrid;

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cardVariants } from "@/app/globals/framer-variants";

interface ServiceCardProps {
  href: string;
  title: string;
  image: string;
  description: string;
}

const ServiceCard = ({ href, title, image, description }: ServiceCardProps) => {
  return (
    <Link href={href} className="h-full">
      <motion.div
        className="rounded-xl h-full"
        variants={cardVariants}
        initial="initial"
        whileHover="whileHover"
        whileTap="whileTap"
      >
        <Card className="h-full bg-muted/80 hover:bg-kmk-blueberry/20 group border-2 hover:border-white">
          <CardContent className="p-6 flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2 text-kmk-logoBlue">
              {title}
            </h3>
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{
                scaleX: 1,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                  delay: 0.2,
                },
              }}
              viewport={{ once: false }}
              className="w-full h-0.5 bg-kmk-forestGreen group-hover:bg-kmk-blueberry origin-left mb-4"
            />
            <div className="rounded-xl overflow-hidden h-48 mb-4 group-hover:border-2 group-hover:border-white">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <p className="text-muted-foreground text-black group-hover:text-white">
              {description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;

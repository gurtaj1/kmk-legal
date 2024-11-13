import { useRef, useState } from "react";
import { useIntersectionObservers } from "@/app/hooks/intersection-observers";
import { motion } from "framer-motion";

const ParallaxWithScrollWrapper = ({
  scrollFactor = 0.6,
  children,
}: {
  scrollFactor?: number;
  children: React.ReactNode;
}) => {
  const parallaxWrapper = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useIntersectionObservers({
    parallaxTargets: [
      {
        ref: parallaxWrapper,
        onScroll: (offset) => setParallaxOffset(offset),
      },
    ],
  });

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: scrollFactor ? parallaxOffset * scrollFactor - 10 : 0,
      }}
      style={{ willChange: "transform" }}
      ref={parallaxWrapper}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxWithScrollWrapper;

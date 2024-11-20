import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

type ParallaxParameters = {
  scrollProgress: number[];
  values: number[];
};

type ScrollMotionWrapperProps = {
  transitionOpacity?: boolean;
  transitionScale?: boolean;
  transitionY?: boolean;
  customOpacity?: ParallaxParameters;
  customScale?: ParallaxParameters;
  customY?: ParallaxParameters;
  children: React.ReactNode;
};

const ScrollMotionWrapper = ({
  transitionOpacity = false,
  transitionScale = false,
  transitionY = false,
  customOpacity,
  customScale,
  customY,
  children,
}: ScrollMotionWrapperProps) => {
  const parallaxWrapper = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxWrapper,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    customOpacity?.scrollProgress ?? [0, 0.25, 0.75, 1],
    customOpacity?.values ?? [0.3, 1, 1, 0.3]
  );
  const scale = useTransform(
    scrollYProgress,
    customScale?.scrollProgress ?? [0, 0.3, 0.7, 1],
    customScale?.values ?? [0.97, 1, 1, 0.97]
  );
  const y = useTransform(
    scrollYProgress,
    customY?.scrollProgress ?? [0, 1],
    customY?.values ?? [15, -15]
  );

  const style = {
    opacity: transitionOpacity ? opacity : undefined,
    transform:
      transitionY && transitionScale
        ? useMotionTemplate`translateY(${y}px) scale(${scale})`
        : transitionY
        ? useMotionTemplate`translateY(${y}px)`
        : transitionScale
        ? useMotionTemplate`scale(${scale})`
        : undefined,
  };

  return (
    <motion.div ref={parallaxWrapper} style={style}>
      {children}
    </motion.div>
  );
};

export default ScrollMotionWrapper;

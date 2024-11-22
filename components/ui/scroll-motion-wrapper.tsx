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
  transitionX?: boolean;
  customOpacity?: ParallaxParameters;
  customScale?: ParallaxParameters;
  customY?: ParallaxParameters;
  customX?: ParallaxParameters;
  customOffset?: [
    (
      | "start end"
      | "end start"
      | "center center"
      | `${number}px ${number}px`
      | number
    ),
    (
      | "start end"
      | "end start"
      | "center center"
      | `${number}px ${number}px`
      | number
    )
  ];
  className?: string;
  children: React.ReactNode;
};

const ScrollMotionWrapper = ({
  transitionOpacity = false,
  transitionScale = false,
  transitionY = false,
  transitionX = false,
  customOpacity,
  customScale,
  customY,
  customX,
  customOffset,
  className,
  children,
}: ScrollMotionWrapperProps) => {
  const parallaxWrapper = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxWrapper,
    offset: customOffset ?? ["start end", "end start"],
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

  const x = useTransform(
    scrollYProgress,
    customX?.scrollProgress ?? [0, 0.2, 0.8, 1],
    customX?.values ?? [50, 0, 0, 50]
  );

  const style = {
    opacity: transitionOpacity ? opacity : undefined,
    transform:
      transitionX && transitionY && transitionScale
        ? useMotionTemplate`translateX(${x}px) translateY(${y}px) scale(${scale})`
        : transitionX && transitionY
        ? useMotionTemplate`translateX(${x}px) translateY(${y}px)`
        : transitionX && transitionScale
        ? useMotionTemplate`translateX(${x}px) scale(${scale})`
        : transitionY && transitionScale
        ? useMotionTemplate`translateY(${y}px) scale(${scale})`
        : transitionY
        ? useMotionTemplate`translateY(${y}px)`
        : transitionX
        ? useMotionTemplate`translateX(${x}px)`
        : transitionScale
        ? useMotionTemplate`scale(${scale})`
        : undefined,
  };

  return (
    <motion.div ref={parallaxWrapper} style={style} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollMotionWrapper;

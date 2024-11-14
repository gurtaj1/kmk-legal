import {
  useRef,
  // useState
} from "react";
// import { useIntersectionObservers } from "@/app/hooks/intersection-observers";
import { motion } from "framer-motion";

const OpacityGradientWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  //   const [scrollOffset, setScrollOffset] = useState(0);

  //   useIntersectionObservers({
  //     parallaxTargets: [
  //       {
  //         ref: wrapperRef,
  //         onScroll: (offset) => setScrollOffset(offset),
  //       },
  //     ],
  //   });

  const getGradientStyle = () => {
    // Calculate the distance from the element's center to the viewport's center
    const elementRect = wrapperRef.current?.getBoundingClientRect();
    const elementCenter = elementRect
      ? elementRect.top + elementRect.height / 2
      : 0;
    const viewportCenter = window.innerHeight / 2;
    const normalizedOffset =
      (elementCenter - viewportCenter) / (window.innerHeight / 2);

    // Create a smooth transition zone
    const transitionZone = 0.2; // Adjust this value to control the transition width
    const opacity = Math.abs(normalizedOffset);

    // Calculate blend factor for smooth transition
    const blend = Math.max(
      0,
      Math.min(
        1,
        (Math.abs(normalizedOffset) - (1 - transitionZone)) / transitionZone
      )
    );

    // Define base gradients
    const topGradient = `linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)`;
    const bottomGradient = `linear-gradient(to top, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)`;

    let linearGradient;

    if (Math.abs(normalizedOffset) < transitionZone) {
      // In transition zone - blend both gradients
      const topOpacity = normalizedOffset < 0 ? 1 - blend : blend;
      const bottomOpacity = normalizedOffset < 0 ? blend : 1 - blend;

      linearGradient = `linear-gradient(to bottom, 
        rgba(255,255,255,${0.8 * topOpacity}) 0%, 
        rgba(255,255,255,0) 50%),
        linear-gradient(to top, 
        rgba(255,255,255,${0.5 * bottomOpacity}) 0%, 
        rgba(255,255,255,0) 50%)`;
    } else {
      // Outside transition zone - use single gradient
      linearGradient = normalizedOffset < 0 ? topGradient : bottomGradient;
    }

    return {
      background: linearGradient,
      opacity: opacity,
    };
  };

  return (
    <motion.div ref={wrapperRef} className="relative">
      {children}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: getGradientStyle().background,
          opacity: getGradientStyle().opacity,
        }}
      />
    </motion.div>
  );
};

export default OpacityGradientWrapper;

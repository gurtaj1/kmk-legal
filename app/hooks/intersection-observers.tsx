import { useEffect } from "react";
import { RefObject } from "react";

interface IntersectionTarget {
  ref: RefObject<HTMLElement>;
  onIntersect: () => void;
}

interface ParallaxTarget {
  ref: RefObject<HTMLElement>;
  onScroll: (offset: number) => void;
}

interface UseIntersectionObserversProps {
  intersectionTargets?: IntersectionTarget[];
  parallaxTargets?: ParallaxTarget[];
  intersectionThreshold?: number;
  parallaxThreshold?: number[];
  parallaxFactor?: number;
}

export const useIntersectionObservers = ({
  intersectionTargets = [],
  parallaxTargets = [],
  intersectionThreshold = 0.01,
  parallaxThreshold = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  parallaxFactor = 0.05,
}: UseIntersectionObserversProps) => {
  useEffect(() => {
    // Intersection Observer for fade-in effects
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = intersectionTargets.find(
            (t) => t.ref.current === entry.target
          );

          if (target && entry.isIntersecting) {
            target.onIntersect();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: intersectionThreshold }
    );

    // Parallax Observer
    const parallaxObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parallaxTargets.find(
              (t) => t.ref.current === entry.target
            );

            if (target) {
              const calculateOffset = () => {
                const rect = entry.target.getBoundingClientRect();
                const scrolled = rect.top;
                target.onScroll(scrolled * parallaxFactor);
              };

              window.addEventListener("scroll", calculateOffset);
              calculateOffset(); // Initial calculation

              return () =>
                window.removeEventListener("scroll", calculateOffset);
            }
          }
        });
      },
      { threshold: parallaxThreshold }
    );

    // Start observing all targets
    intersectionTargets.forEach((target) => {
      if (target.ref.current) {
        observer.observe(target.ref.current);
      }
    });

    parallaxTargets.forEach((target) => {
      if (target.ref.current) {
        parallaxObserver.observe(target.ref.current);
      }
    });

    // Cleanup
    return () => {
      intersectionTargets.forEach((target) => {
        if (target.ref.current) {
          observer.unobserve(target.ref.current);
        }
      });

      parallaxTargets.forEach((target) => {
        if (target.ref.current) {
          parallaxObserver.unobserve(target.ref.current);
        }
      });
    };
  }, [
    intersectionTargets,
    parallaxTargets,
    intersectionThreshold,
    parallaxThreshold,
    parallaxFactor,
  ]);
};

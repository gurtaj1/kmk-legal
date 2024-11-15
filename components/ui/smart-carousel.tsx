"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SmartCarouselProps {
  items: (React.ReactNode | string)[];
  slidesToShow?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  boxShadowColor?: string;
  hideSideButtons?: boolean;
}

type CarouselOptions = {
  align: "start" | "center" | "end";
  containScroll: "trimSnaps" | "keepSnaps" | false;
  dragFree: boolean;
  loop: boolean;
  slidesToScroll: number;
};

const boxShadowVariables = {
  spread: "0 0 10px 0px",
};

// Add this utility function to convert Tailwind config colors to RGB
const getTailwindColor = (colorClass: string): string | null => {
  const colorMap: { [key: string]: string } = {
    "dental-primary": "26, 110, 164",
    "dental-secondary": "64, 163, 221",
    "dental-accent1": "173, 233, 238",
    "dental-accent2": "70, 219, 251",
    "dental-dark": "4, 78, 125",
    "dental-black": "4, 4, 4",
    "dental-navy": "20, 80, 112",
    "dental-teal": "56, 192, 188",
    "dental-gray": "84, 84, 84",
  };

  return colorMap[colorClass] || null;
};

const hexToRgb = (color: string): string => {
  // First check if it's a Tailwind class
  const tailwindColor = getTailwindColor(color);
  if (tailwindColor) {
    return tailwindColor;
  }

  // Check if it's an RGB format
  if (color.startsWith("rgb")) {
    const rgbMatch = color.match(/\(([^)]+)\)/);
    return rgbMatch ? rgbMatch[1] : "0, 0, 0";
  }

  // If not a Tailwind class or RGB, try as hex
  const hex = color.replace("#", "");
  const fullHex =
    hex.length === 3
      ? hex
          .split("")
          .map((char) => char + char)
          .join("")
      : hex;

  const r = parseInt(fullHex.substring(0, 2), 16);
  const g = parseInt(fullHex.substring(2, 4), 16);
  const b = parseInt(fullHex.substring(4, 6), 16);

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return "0, 0, 0";
  }

  return `${r}, ${g}, ${b}`;
};

export default function SmartCarousel({
  items,
  slidesToShow = 3,
  autoplay = false,
  autoplayInterval = 5000,
  boxShadowColor,
  hideSideButtons = false,
}: SmartCarouselProps) {
  const options: CarouselOptions = {
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    loop: true,
    slidesToScroll: 1,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [rgbColor, setRgbColor] = useState<string>("0, 0, 0");
  const [currentSlidesToShow, setCurrentSlidesToShow] = useState<number>(3);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (autoplay && emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayInterval, emblaApi]);

  useEffect(() => {
    if (boxShadowColor) {
      // Only run browser-specific color parsing in useEffect
      if (
        typeof window !== "undefined" &&
        !boxShadowColor.startsWith("#") &&
        !getTailwindColor(boxShadowColor)
      ) {
        const tempEl = document.createElement("div");
        tempEl.style.color = boxShadowColor;
        document.body.appendChild(tempEl);
        const rgbColor = window.getComputedStyle(tempEl).color;
        document.body.removeChild(tempEl);
        const rgbMatch = rgbColor.match(/\(([^)]+)\)/);
        setRgbColor(rgbMatch ? rgbMatch[1] : "0, 0, 0");
      } else {
        setRgbColor(hexToRgb(boxShadowColor));
      }
    }
  }, [boxShadowColor]);

  // Function to determine slides to show based on window size
  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    setCurrentSlidesToShow(width < 640 ? 1 : slidesToShow); // Show 1 slide on mobile, otherwise use slidesToShow
  };

  useEffect(() => {
    updateSlidesToShow(); // Initial check
    window.addEventListener("resize", updateSlidesToShow); // Update on resize
    return () => window.removeEventListener("resize", updateSlidesToShow); // Cleanup
  }, [slidesToShow]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_auto] min-w-0 pl-4 w-full sm:w-1/2 md:w-1/3"
              style={{
                flex: `0 0 ${100 / currentSlidesToShow}%`,
              }}
            >
              {typeof item === "string" ? (
                // Handle image slides
                <div className="relative w-full aspect-video rounded-lg">
                  <div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      boxShadow: boxShadowColor
                        ? `inset ${boxShadowVariables.spread} rgb(${rgbColor})`
                        : "none",
                    }}
                  />
                  <img
                    src={item}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ) : (
                // Handle content slides
                item
              )}
            </div>
          ))}
        </div>
      </div>
      {!hideSideButtons && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-12 -translate-y-1/2 rounded-lg bg-dental-teal/20 border-dental-teal hover:bg-dental-teal/40 hover:border-dental-teal"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-12 -translate-y-1/2 rounded-lg bg-dental-teal/20 border-dental-teal hover:bg-dental-teal/40 hover:border-dental-teal"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}
      <div className="flex justify-center mt-4">
        {scrollSnaps.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className={`w-2 h-2 mx-1 p-0 rounded-full ${
              index === selectedIndex ? "bg-primary" : "bg-secondary"
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

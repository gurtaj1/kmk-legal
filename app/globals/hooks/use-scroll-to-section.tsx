import { usePathname } from "next/navigation";

import { navbarHeightNumber } from "@/constants";
import { navbarMobileHeightNumber } from "@/constants";

interface ScrollToSectionProps {
  sectionId: string;
  navBarHeight?: number;
  targetPath?: string;
}

export const useScrollToSection = () => {
  const pathname = usePathname();

  const scrollToSection =
    ({ sectionId, targetPath = "/" }: ScrollToSectionProps) =>
    (e: React.MouseEvent) => {
      if (pathname === targetPath) {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        const elementPosition = element?.getBoundingClientRect().top || 0;

        const currentNavHeight =
          window.innerWidth <= 768
            ? navbarHeightNumber
            : navbarMobileHeightNumber;

        const offsetPosition =
          elementPosition + window.scrollY - currentNavHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

  return scrollToSection;
};

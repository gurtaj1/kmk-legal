"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import LogoWithTextColor from "@/components/svg/logo-with-text-color";

const Navbar = () => {
  return (
    <nav className="bg-white text-kmk-originalBlue p-4 md:sticky md:top-0 lg:relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <LogoWithTextColor className="w-20 h-10" />
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/property-law" className="hover:text-[#FFD700]">
            Property Law
          </Link>
          <Link href="/conveyancing-process" className="hover:text-[#FFD700]">
            Conveyancing Process
          </Link>
          <Link href="/quote-calculator" className="hover:text-[#FFD700]">
            Quote Calculator
          </Link>
          <Link href="/contact-us" className="hover:text-[#FFD700]">
            Contact Us
          </Link>
          <Link href="/about-us" className="hover:text-[#FFD700]">
            About Us
          </Link>
          <Link href="/news" className="hover:text-[#FFD700]">
            News
          </Link>
          <Link href="/remortgaging" className="hover:text-[#FFD700]">
            Remortgaging
          </Link>
          <Link href="/source-of-funds" className="hover:text-[#FFD700]">
            Source of Funds
          </Link>
          <Link href="/faqs" className="hover:text-[#FFD700]">
            FAQs
          </Link>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden text-white border-white hover:bg-[#013220] hover:text-white"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

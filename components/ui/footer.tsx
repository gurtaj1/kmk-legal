"use client";

import Link from "next/link";
import LogoWithTextColor from "@/components/svg/logo-with-text-color";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
  PoundSterling,
} from "lucide-react";

import { kmkColors } from "@/constants";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-kmk-logoBlue text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <LogoWithTextColor
            className="w-20 h-10"
            kFill="#fff"
            mFill={kmkColors.logoGrey}
          />
          <div className="flex gap-4 mt-5">
            <Link
              href="https://www.facebook.com/share/1KzcDWawZk/"
              className="text-white hover:text-[#FFD700]"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/KmkLegal86577?t=indWvXOr4yU86Xg1v9sdEA&s=08"
              className="text-white hover:text-[#FFD700]"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/kmk.legal/"
              className="text-white hover:text-[#FFD700]"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/kmk-legal/"
              className="text-white hover:text-[#FFD700]"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.tiktok.com/@infowad5pv?_t=ZG-8rq9mCzXm6b&_r=1"
              className="text-white hover:text-[#FFD700]"
            >
              <TikTokIcon className="h-5 w-5" />
            </Link>
          </div>
          <p className="mt-4">
            KMK Legal is authorised and regulated by the Solicitors Regulation
            Authority.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about#complaints" className="hover:text-[#FFD700]">
                Complaints
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-[#FFD700]">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Mail className="mr-2" /> info@kmklegal.co.uk
            </li>
            <li className="flex items-center">
              <Phone className="mr-2" /> +447389109307
            </li>
            <li className="flex items-center">
              <MapPin className="mr-2" /> Luton
            </li>
            <li className="flex items-center">
              <PoundSterling className="mr-2" />
              <Link href="/quote-calculator" className="hover:text-[#FFD700]">
                Get a free quote now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";

import { Phone, Mail, MapPin, PoundSterling } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image
            src="/placeholder.svg"
            alt="KMK Legal Logo"
            width={80}
            height={80}
          />
          <p className="mt-4">
            KMK Legal is authorised and regulated by the Solicitors Regulation
            Authority.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/have-a-concern" className="hover:text-[#FFD700]">
                Have a Concern
              </Link>
            </li>
            <li>
              <Link href="/complaints" className="hover:text-[#FFD700]">
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

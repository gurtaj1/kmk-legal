"use client";

import { Menu, ChevronDown, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoWithTextColor from "@/components/svg/logo-with-text-color";
import Search from "@/components/ui/search";

type LinkItem = {
  label: string;
  href: string;
};

type MenuItem = {
  title: string;
  headerText?: string;
  items: LinkItem[];
};

type MenuItems = {
  [key: string]: MenuItem;
};

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const menuItems: MenuItems = {
    about: {
      title: "About",
      items: [
        { label: "Meet our Team", href: "/about/team" },
        { label: "Our Ethos", href: "/about/ethos" },
        { label: "Commitment to Excellence", href: "/about/excellence" },
        { label: "Leave us a Review", href: "/about/review" },
        { label: "Complaints Procedure", href: "/about/complaints" },
      ],
    },
    services: {
      title: "Our Services",
      items: [
        { label: "Conveyancing", href: "/services/conveyancing" },
        { label: "Commercial Property", href: "/services/commercial-property" },
        { label: "Children Law", href: "/services/children-law" },
        { label: "Matrimonial & Family Law", href: "/services/family-law" },
        {
          label: "Estate Planning, Wills, & Probate",
          href: "/services/estate-planning",
        },
        { label: "Trusts", href: "/services/trusts" },
      ],
    },
    resources: {
      title: "Resources",
      headerText: "Free Legal Resources:",
      items: [
        { label: "Factsheets", href: "/resources/factsheets" },
        { label: "Publications", href: "/resources/publications" },
        { label: "Case Law Updates", href: "/resources/case-law" },
        { label: "News", href: "/resources/news" },
      ],
    },
    fees: {
      title: "Our Fees",
      items: [
        { label: "Fees & Pricing", href: "/fees/pricing" },
        { label: "Request a Quote", href: "/fees/quote" },
      ],
    },
  };

  const firstRowMenus = ["about", "services"];
  const secondRowMenus = ["resources", "fees"];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-kmk-charcoalGrey text-white p-4 z-50">
      <div className="container mx-auto">
        {/* Mobile view - logo and menu button */}
        <div className="flex justify-between items-center mb-2 md:hidden">
          <Link href="/" className="flex items-center">
            <LogoWithTextColor className="w-20 h-10" />
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="text-white border-white hover:bg-kmk-emeraldGreen hover:text-white"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Desktop navigation area */}
        <div className="hidden md:flex justify-between items-start">
          <div className="flex items-start gap-8 items-center">
            {/* Logo section */}
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                },
              }}
            >
              <Link href="/" className="flex items-center">
                <LogoWithTextColor className="w-24 h-16" />
              </Link>
            </motion.div>

            {/* Navigation links section */}
            <div className="flex flex-col space-y-1">
              {/* First row */}
              <div className="flex space-x-6">
                {firstRowMenus.map((key) => (
                  <div
                    key={key}
                    className="relative"
                    onMouseEnter={() => setHoveredMenu(key)}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <div className="flex items-center space-x-1 hover:text-kmk-blueberry py-1 w-full">
                      <span>{menuItems[key].title}</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <AnimatePresence>
                      {hoveredMenu === key && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                          className="absolute top-full left-0 bg-kmk-charcoalGrey border border-kmk-blueberry rounded-md py-2 min-w-[200px] shadow-lg z-10"
                        >
                          {menuItems[key].headerText && (
                            <div className="px-4 py-2 text-kmk-blueberry font-semibold">
                              {menuItems[key].headerText}
                            </div>
                          )}
                          {menuItems[key].items.map((item) => (
                            <motion.div
                              key={item.href}
                              whileHover={{
                                scale: 1.03,
                                transition: {
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 30,
                                },
                              }}
                            >
                              <Link
                                href={item.href}
                                className="block w-full px-4 py-2 hover:bg-kmk-emeraldGreen hover:text-white"
                              >
                                {item.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Second row */}
              <div className="flex space-x-6">
                {secondRowMenus.map((key) => (
                  <div
                    key={key}
                    className="relative"
                    onMouseEnter={() => setHoveredMenu(key)}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <div className="flex items-center space-x-1 hover:text-kmk-blueberry py-1 w-full">
                      <span>{menuItems[key].title}</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <AnimatePresence>
                      {hoveredMenu === key && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                          className="absolute top-full left-0 bg-kmk-charcoalGrey border border-kmk-blueberry rounded-md py-2 min-w-[200px] shadow-lg z-10"
                        >
                          {menuItems[key].headerText && (
                            <div className="px-4 py-2 text-kmk-blueberry font-semibold">
                              {menuItems[key].headerText}
                            </div>
                          )}
                          {menuItems[key].items.map((item) => (
                            <motion.div
                              key={item.href}
                              whileHover={{
                                scale: 1.03,
                                transition: {
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 30,
                                },
                              }}
                            >
                              <Link
                                href={item.href}
                                className="block w-full px-4 py-2 hover:bg-kmk-emeraldGreen hover:text-white"
                              >
                                {item.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="py-1 hover:text-kmk-blueberry block"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex flex-col space-y-1">
            <div className="flex space-x-4">
              <a
                href="mailto:info@example.com"
                className="hover:text-kmk-blueberry flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                info@example.com
              </a>
              <a
                href="tel:+441234567890"
                className="hover:text-kmk-blueberry flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                +44 (0) 123 456 7890
              </a>
            </div>
            <Search />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

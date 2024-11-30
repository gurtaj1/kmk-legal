"use client";

import { motion } from "framer-motion";

import ServiceOverview from "@/components/ui/service-overview";
import ExpertiseAndTeamSection from "@/components/ui/expertise-and-team-section";
import ServicePathsGrid from "@/components/ui/service-paths-grid";
import GetInTouch from "@/components/ui/get-in-touch";
import ServiceNews from "@/components/ui/service-news";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import Link from "next/link";

import { buttonVariants } from "@/app/globals/framer-variants";

const testimonials = [
  {
    text: "Excellent conveyancing service, made the whole process smooth and stress-free.",
    author: "John D.",
    rating: 5,
  },
  {
    text: "Excellent conveyancing service, made the whole process smooth and stress-free.",
    author: "John D.",
    rating: 5,
  },
  {
    text: "Excellent conveyancing service, made the whole process smooth and stress-free.",
    author: "John D.",
    rating: 5,
  },
  // ... other testimonials
];

const serviceOverviewProps = {
  title: "Conveyancing Services",
  description: "Expert legal support for all your property transactions.",
  bulletPoints: [
    "Residential property purchases and sales",
    "Buy-to-let transactions",
    "Remortgages",
    "Transfer of equity",
    "New build purchases",
  ],
  imageSrc: "/residential-conveyancing.jpg",
  imageAlt: "Conveyancing Services",
  currentPath: "/services/conveyancing",
};

const expertiseProps = {
  title: "Our Conveyancing Expertise",
  description:
    "With decades of experience in property law, our expert conveyancing team provides comprehensive legal support for all types of property transactions. We understand that buying or selling property is one of life's most significant decisions, and we're here to make the process as smooth as possible.",
  specialties: [
    "Residential property sales and purchases",
    "Buy-to-let transactions",
    "New build purchases",
    "Remortgages and transfers of equity",
    "Lease extensions and freehold purchases",
  ],
  testimonials: testimonials, // Your existing testimonials array
  teamMembers: [
    {
      name: "Jane Smith",
      role: "Head of Conveyancing",
      imageSrc: "/headshot-placeholder.jpg",
      profileUrl: "/team/jane-smith",
    },
    // Add more team members as needed
  ],
};

const newsData = {
  latestNews: [
    "New regulations affecting property transactions in 2024",
    "Updates to stamp duty calculations",
    "Changes in property search requirements",
  ],
  upcomingEvents: [
    "Property Law Seminar - March 2024",
    "First-Time Buyers Workshop - April 2024",
    "Legal Updates Conference - May 2024",
  ],
  additionalInformation: [
    "Download our conveyancing process guide",
    "View our pricing structure",
    "Read client testimonials",
  ],
};

const ConveyancingPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-kmk-blueberry/20 text-[#333333]">
        {/* Hero Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <ServiceOverview {...serviceOverviewProps} />
        </ScrollMotionWrapper>

        {/* Expertise and Team Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <ExpertiseAndTeamSection {...expertiseProps} />
        </ScrollMotionWrapper>

        {/* Price & Service Information Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <ServicePathsGrid serviceId="conveyancing" />
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-4xl mx-auto px-4 py-8">
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="whileHover"
              whileTap="whileTap"
              className="flex-1 max-w-md"
            >
              <Link
                href="/services/conveyancing/conveyancing-process"
                className="bg-kmk-emeraldGreen hover:bg-kmk-emeraldGreen/90 text-white px-8 py-6 rounded-full text-center text-lg font-medium transition-colors duration-200 flex items-center justify-center h-full"
              >
                <span>Learn About Our Conveyancing Process</span>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="whileHover"
              whileTap="whileTap"
              className="flex-1 max-w-md"
            >
              <Link
                href="/services/conveyancing/source-of-funds"
                className="bg-kmk-emeraldGreen hover:bg-kmk-emeraldGreen/90 text-white px-8 py-6 rounded-full text-center text-lg font-medium transition-colors duration-200 flex items-center justify-center h-full"
              >
                <span>Source of Funds Information</span>
              </Link>
            </motion.div>
          </div>
        </ScrollMotionWrapper>

        {/* Get in Touch Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <GetInTouch />
        </ScrollMotionWrapper>

        {/* Sector Specific News */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <ServiceNews
            title="Conveyancing News"
            latestNews={newsData.latestNews}
            upcomingEvents={newsData.upcomingEvents}
            additionalInformation={newsData.additionalInformation}
          />
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default ConveyancingPage;

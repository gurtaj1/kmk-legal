"use client";

import ServiceOverview from "@/components/ui/service-overview";

import ExpertiseAndTeamSection from "@/components/ui/expertise-and-team-section";
import ServicePathsGrid from "@/components/ui/service-paths-grid";
import GetInTouch from "@/components/ui/get-in-touch";
import ServiceNews from "@/components/ui/service-news";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";

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

const servicePaths = [
  {
    title: "Selling your property",
    path: "/services/conveyancing/selling",
  },
  {
    title: "Service Path 2",
    path: "/services/conveyancing/path2",
  },
  {
    title: "Service Path 3",
    path: "/services/conveyancing/path3",
  },
  {
    title: "Service Path 4",
    path: "/services/conveyancing/path4",
  },
];

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
        <ServicePathsGrid
          servicePaths={servicePaths}
          pricingTitle="Price & Service Information for Conveyancing"
          pricingContent={"Add your pricing content here."}
        />
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
  );
};

export default ConveyancingPage;

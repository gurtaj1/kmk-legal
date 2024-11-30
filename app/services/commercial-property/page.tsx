"use client";

import ServiceOverview from "@/components/ui/service-overview";
import ExpertiseAndTeamSection from "@/components/ui/expertise-and-team-section";
import ServicePathsGrid from "@/components/ui/service-paths-grid";
import GetInTouch from "@/components/ui/get-in-touch";
import ServiceNews from "@/components/ui/service-news";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const testimonials = [
  {
    text: "Outstanding commercial property service. The team's expertise was invaluable.",
    author: "Sarah M.",
    rating: 5,
  },
  {
    text: "Professional and thorough handling of our commercial lease negotiations.",
    author: "David P.",
    rating: 5,
  },
  {
    text: "Excellent support throughout our property acquisition process.",
    author: "Michael R.",
    rating: 5,
  },
];

const serviceOverviewProps = {
  title: "Commercial Property Services",
  description: "Expert legal support for all your commercial property needs.",
  bulletPoints: [
    "Commercial property purchases and sales",
    "Lease negotiations and agreements",
    "Property development projects",
    "Commercial mortgages",
    "Property portfolio management",
  ],
  imageSrc: "/commercial-conveyancing.jpg",
  imageAlt: "Commercial Property Services",
  currentPath: "/services/commercial-property",
};

const expertiseProps = {
  title: "Our Commercial Property Expertise",
  description:
    "With extensive experience in commercial property law, our expert team provides comprehensive legal support for businesses of all sizes. We understand the complexities of commercial property transactions and are committed to delivering practical, commercial solutions.",
  specialties: [
    "Commercial property acquisitions and disposals",
    "Commercial lease agreements",
    "Property development and construction",
    "Property portfolio management",
    "Commercial mortgage arrangements",
  ],
  testimonials: testimonials,
  teamMembers: [
    {
      name: "John Wilson",
      role: "Head of Commercial Property",
      imageSrc: "/headshot-placeholder.jpg",
      profileUrl: "/team/john-wilson",
    },
    // Add more team members as needed
  ],
};

const newsData = {
  latestNews: [
    "Commercial property market trends 2024",
    "Updates to commercial lease regulations",
    "Changes in commercial property financing",
  ],
  upcomingEvents: [
    "Commercial Property Investment Seminar - April 2024",
    "Property Development Workshop - May 2024",
    "Commercial Lease Updates - June 2024",
  ],
  additionalInformation: [
    "Download our commercial property guide",
    "View our pricing structure",
    "Read client testimonials",
  ],
};

const CommercialPropertyPage = () => {
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
          <ServicePathsGrid serviceId="commercial-property" />
        </ScrollMotionWrapper>

        {/* Get in Touch Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <GetInTouch />
        </ScrollMotionWrapper>

        {/* Sector Specific News */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <ServiceNews
            title="Commercial Property News"
            latestNews={newsData.latestNews}
            upcomingEvents={newsData.upcomingEvents}
            additionalInformation={newsData.additionalInformation}
          />
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default CommercialPropertyPage;

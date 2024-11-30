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
    text: "Excellent guidance in setting up our family trust. The team's expertise was invaluable.",
    author: "William P.",
    rating: 5,
  },
  {
    text: "Professional and thorough handling of our trust administration.",
    author: "Catherine H.",
    rating: 5,
  },
  {
    text: "Clear advice on trust structures and tax implications.",
    author: "Richard M.",
    rating: 5,
  },
];

const serviceOverviewProps = {
  title: "Trust Services",
  description: "Expert guidance for trust formation and management.",
  bulletPoints: [
    "Trust creation and structuring",
    "Trust administration",
    "Asset protection trusts",
    "Charitable trusts",
    "Tax-efficient trust planning",
  ],
  imageSrc: "/trust-law.jpg",
  imageAlt: "Trust Services",
  currentPath: "/services/trusts",
};

const expertiseProps = {
  title: "Our Trust Expertise",
  description:
    "Our specialist trust team provides comprehensive support for all aspects of trust creation, administration, and management. We help protect and manage your assets effectively through various trust structures.",
  specialties: [
    "Family trust formation",
    "Trust administration services",
    "Asset protection strategies",
    "Charitable trust establishment",
    "Trust tax planning",
  ],
  testimonials: testimonials,
  teamMembers: [
    {
      name: "Andrew Parker",
      role: "Head of Trust Services",
      imageSrc: "/headshot-placeholder.jpg",
      profileUrl: "/team/andrew-parker",
    },
    // Add more team members as needed
  ],
};

const newsData = {
  latestNews: [
    "Updates to trust taxation 2024",
    "New trust registration requirements",
    "Changes in trust administration rules",
  ],
  upcomingEvents: [
    "Trust Planning Seminar - July 2024",
    "Asset Protection Workshop - August 2024",
    "Trust Tax Updates - September 2024",
  ],
  additionalInformation: [
    "Download our trust services guide",
    "View our pricing structure",
    "Read client testimonials",
  ],
};

const TrustsPage = () => {
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
          <ServicePathsGrid serviceId="trusts" />
        </ScrollMotionWrapper>

        {/* Get in Touch Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <GetInTouch />
        </ScrollMotionWrapper>

        {/* Sector Specific News */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <ServiceNews
            title="Trust Services News"
            latestNews={newsData.latestNews}
            upcomingEvents={newsData.upcomingEvents}
            additionalInformation={newsData.additionalInformation}
          />
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default TrustsPage;

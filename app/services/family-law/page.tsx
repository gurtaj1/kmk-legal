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
    text: "Professional and empathetic support throughout my divorce proceedings.",
    author: "Linda K.",
    rating: 5,
  },
  {
    text: "Excellent guidance during a challenging time. The team was always there for me.",
    author: "Mark S.",
    rating: 5,
  },
  {
    text: "Clear advice and strong representation in my financial settlement case.",
    author: "Patricia B.",
    rating: 5,
  },
];

const serviceOverviewProps = {
  title: "Matrimonial & Family Law Services",
  description: "Expert legal support for all family matters and relationships.",
  bulletPoints: [
    "Divorce and separation proceedings",
    "Financial settlements",
    "Prenuptial agreements",
    "Cohabitation disputes",
    "Domestic violence protection",
  ],
  imageSrc: "/family-law.jpg",
  imageAlt: "Family Law Services",
  currentPath: "/services/family-law",
};

const expertiseProps = {
  title: "Our Family Law Expertise",
  description:
    "Our experienced family law team provides comprehensive support through all aspects of relationship breakdown and family disputes. We understand the sensitivity of these matters and work to achieve the best possible outcomes for our clients.",
  specialties: [
    "Divorce and separation",
    "Financial settlements and maintenance",
    "Prenuptial and postnuptial agreements",
    "Cohabitation agreements and disputes",
    "Domestic abuse and injunctions",
  ],
  testimonials: testimonials,
  teamMembers: [
    {
      name: "Rebecca Anderson",
      role: "Head of Family Law",
      imageSrc: "/headshot-placeholder.jpg",
      profileUrl: "/team/rebecca-anderson",
    },
    // Add more team members as needed
  ],
};

const newsData = {
  latestNews: [
    "No-fault divorce updates 2024",
    "Changes in financial settlement procedures",
    "New guidelines for international divorces",
  ],
  upcomingEvents: [
    "Family Law Seminar - May 2024",
    "Divorce Process Workshop - June 2024",
    "Financial Planning After Separation - July 2024",
  ],
  additionalInformation: [
    "Download our family law guide",
    "View our pricing structure",
    "Read client testimonials",
  ],
};

const FamilyLawPage = () => {
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
          <ServicePathsGrid serviceId="family-law" />
        </ScrollMotionWrapper>

        {/* Get in Touch Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <GetInTouch />
        </ScrollMotionWrapper>

        {/* Sector Specific News */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <ServiceNews
            title="Family Law News"
            latestNews={newsData.latestNews}
            upcomingEvents={newsData.upcomingEvents}
            additionalInformation={newsData.additionalInformation}
          />
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default FamilyLawPage;

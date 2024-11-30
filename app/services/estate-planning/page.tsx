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
    text: "Excellent guidance through the estate planning process. Made everything clear and straightforward.",
    author: "Robert M.",
    rating: 5,
  },
  {
    text: "Professional and thorough handling of my parents' probate case.",
    author: "Susan L.",
    rating: 5,
  },
  {
    text: "Very helpful in setting up our wills and lasting power of attorney.",
    author: "Thomas W.",
    rating: 5,
  },
];

const serviceOverviewProps = {
  title: "Estate Planning, Wills, & Probate",
  description: "Expert legal guidance for securing your family's future.",
  bulletPoints: [
    "Will writing and updates",
    "Estate planning and administration",
    "Probate services",
    "Lasting Powers of Attorney",
    "Trust creation and management",
  ],
  imageSrc: "/estate-planning.jpg",
  imageAlt: "Estate Planning Services",
  currentPath: "/services/estate-planning",
};

const expertiseProps = {
  title: "Our Estate Planning Expertise",
  description:
    "Our experienced estate planning team provides comprehensive support for all aspects of wills, probate, and estate administration. We help you plan for the future and ensure your wishes are carried out effectively.",
  specialties: [
    "Comprehensive will writing services",
    "Estate planning and tax efficiency",
    "Probate administration",
    "Lasting Powers of Attorney",
    "Inheritance tax planning",
  ],
  testimonials: testimonials,
  teamMembers: [
    {
      name: "Michael Roberts",
      role: "Head of Estate Planning",
      imageSrc: "/headshot-placeholder.jpg",
      profileUrl: "/team/michael-roberts",
    },
    // Add more team members as needed
  ],
};

const newsData = {
  latestNews: [
    "Changes to inheritance tax thresholds 2024",
    "New probate application procedures",
    "Updates to LPA registration process",
  ],
  upcomingEvents: [
    "Estate Planning Seminar - June 2024",
    "Will Writing Workshop - July 2024",
    "Inheritance Tax Planning - August 2024",
  ],
  additionalInformation: [
    "Download our estate planning guide",
    "View our pricing structure",
    "Read client testimonials",
  ],
};

const EstatePlanningPage = () => {
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
          <ServicePathsGrid serviceId="estate-planning" />
        </ScrollMotionWrapper>

        {/* Get in Touch Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <GetInTouch />
        </ScrollMotionWrapper>

        {/* Sector Specific News */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <ServiceNews
            title="Estate Planning News"
            latestNews={newsData.latestNews}
            upcomingEvents={newsData.upcomingEvents}
            additionalInformation={newsData.additionalInformation}
          />
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default EstatePlanningPage;

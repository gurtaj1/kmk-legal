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
    text: "Compassionate and professional support throughout our children law case.",
    author: "Emma T.",
    rating: 5,
  },
  {
    text: "Excellent guidance and representation in our custody proceedings.",
    author: "James H.",
    rating: 5,
  },
  {
    text: "Sensitive handling of our complex family situation.",
    author: "Rachel M.",
    rating: 5,
  },
];

const serviceOverviewProps = {
  title: "Children Law Services",
  description: "Expert legal support for all matters involving children.",
  bulletPoints: [
    "Child custody and access rights",
    "Child protection proceedings",
    "Adoption and special guardianship",
    "Care proceedings",
    "International child law matters",
  ],
  imageSrc: "/children-law.jpg",
  imageAlt: "Children Law Services",
  currentPath: "/services/children-law",
};

const expertiseProps = {
  title: "Our Children Law Expertise",
  description:
    "Our dedicated children law team provides sensitive and expert legal support for all matters involving children. We understand the emotional complexity of these cases and are committed to achieving the best possible outcomes for the children involved.",
  specialties: [
    "Child arrangement orders",
    "Parental responsibility matters",
    "Care proceedings and child protection",
    "International child abduction",
    "Special guardianship orders",
  ],
  testimonials: testimonials,
  teamMembers: [
    {
      name: "Sarah Thompson",
      role: "Head of Children Law",
      imageSrc: "/headshot-placeholder.jpg",
      profileUrl: "/team/sarah-thompson",
    },
    // Add more team members as needed
  ],
};

const newsData = {
  latestNews: [
    "Updates to children law legislation 2024",
    "Changes in child arrangement proceedings",
    "New guidelines for international cases",
  ],
  upcomingEvents: [
    "Children Law Seminar - April 2024",
    "Parental Rights Workshop - May 2024",
    "Family Court Updates - June 2024",
  ],
  additionalInformation: [
    "Download our children law guide",
    "View our pricing structure",
    "Read client testimonials",
  ],
};

const ChildrenLawPage = () => {
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
          <ServicePathsGrid serviceId="children-law" />
        </ScrollMotionWrapper>

        {/* Get in Touch Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <GetInTouch />
        </ScrollMotionWrapper>

        {/* Sector Specific News */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <ServiceNews
            title="Children Law News"
            latestNews={newsData.latestNews}
            upcomingEvents={newsData.upcomingEvents}
            additionalInformation={newsData.additionalInformation}
          />
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default ChildrenLawPage;

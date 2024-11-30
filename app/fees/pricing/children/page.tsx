"use client";

import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";
import PricingHeroSection from "@/components/ui/pricing-hero-section";
import FeeStructure from "@/components/ui/fee-structure";
import PricingProcess from "@/components/ui/pricing-process";

const ChildrenLawPricingPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-kmk-blueberry/10 to-kmk-blueberry/30">
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <PricingHeroSection
            imageSrc="/children-law.jpg"
            imageAlt="Children Law Pricing"
            title="Pricing and Service Information for Children Law"
            description="Our transparent pricing structure for children law proceedings and representation. We believe in providing clear, upfront costs with no hidden fees."
          />
        </ScrollMotionWrapper>

        {/* Fee Structure Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <FeeStructure
            title="Our Fee Structure"
            description="Detailed pricing information will be displayed here. Our fee structure is designed to be transparent and competitive, ensuring you receive excellent value for our comprehensive children law services."
            servicePage="/services/children-law"
            image={{
              src: "/children-law.jpg",
              alt: "Children Law Services",
            }}
          />
        </ScrollMotionWrapper>

        {/* Service Process Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <PricingProcess
            title="Our Process"
            subtitle="How We Work"
            description="Our dedicated approach to children law ensures thorough and sensitive handling of your case. We manage all aspects with the utmost care and maintain clear communication throughout each stage, always prioritizing the best interests of the children involved."
            image={{
              src: "/flowchart.jpg",
              alt: "Children Law Process Flowchart",
            }}
          />
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default ChildrenLawPricingPage;

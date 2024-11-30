"use client";

import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";
import PricingHeroSection from "@/components/ui/pricing-hero-section";
import FeeStructure from "@/components/ui/fee-structure";
import PricingProcess from "@/components/ui/pricing-process";

const EstatePlanningPricingPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-kmk-blueberry/10 to-kmk-blueberry/30">
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <PricingHeroSection
            imageSrc="/estate-planning.jpg"
            imageAlt="Estate Planning Pricing"
            title="Estate Planning, Wills & Probate Pricing"
            description="Our transparent pricing structure for wills, probate and estate administration services. We believe in providing clear, upfront costs with no hidden fees."
          />
        </ScrollMotionWrapper>

        {/* Fee Structure Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <FeeStructure
            title="Our Fee Structure"
            description="Detailed pricing information will be displayed here. Our fee structure is designed to be transparent and competitive, ensuring you receive excellent value for our comprehensive estate planning services."
            servicePage="/services/estate-planning"
            image={{
              src: "/estate-planning.jpg",
              alt: "Estate Planning Services",
            }}
          />
        </ScrollMotionWrapper>

        {/* Service Process Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <PricingProcess
            title="Our Process"
            subtitle="How We Work"
            description="Our dedicated approach to estate planning ensures thorough and careful handling of your affairs. We manage all aspects with attention to detail and maintain clear communication throughout each stage, helping you plan for the future with confidence."
            image={{
              src: "/flowchart.jpg",
              alt: "Estate Planning Process Flowchart",
            }}
          />
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default EstatePlanningPricingPage;

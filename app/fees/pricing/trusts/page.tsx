"use client";

import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";
import PricingHeroSection from "@/components/ui/pricing-hero-section";
import FeeStructure from "@/components/ui/fee-structure";
import PricingProcess from "@/components/ui/pricing-process";

const TrustsPricingPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-kmk-blueberry/10 to-kmk-blueberry/30">
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <PricingHeroSection
            imageSrc="/trust-law.jpg"
            imageAlt="Trusts Pricing"
            title="Trusts Pricing"
            description="Our transparent pricing structure for trust creation and management services. We believe in providing clear, upfront costs with no hidden fees."
          />
        </ScrollMotionWrapper>

        {/* Fee Structure Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <FeeStructure
            title="Our Fee Structure"
            description="Detailed pricing information will be displayed here. Our fee structure is designed to be transparent and competitive, ensuring you receive excellent value for our comprehensive trust services."
            servicePage="/services/trusts"
            image={{
              src: "/trust-law.jpg",
              alt: "Trust Services",
            }}
          />
        </ScrollMotionWrapper>

        {/* Service Process Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <PricingProcess
            title="Our Process"
            subtitle="How We Work"
            description="Our dedicated approach to trust services ensures thorough and professional handling of your trust arrangements. We manage all aspects with meticulous attention to detail and maintain clear communication throughout each stage, helping you establish and manage trusts effectively."
            image={{
              src: "/flowchart.jpg",
              alt: "Trusts Process Flowchart",
            }}
          />
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default TrustsPricingPage;

"use client";

import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";
import PricingHeroSection from "@/components/ui/pricing-hero-section";
import FeeStructure from "@/components/ui/fee-structure";
import PricingProcess from "@/components/ui/pricing-process";

const FamilyLawPricingPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-kmk-blueberry/10 to-kmk-blueberry/30">
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <PricingHeroSection
            imageSrc="/family-law.jpg"
            imageAlt="Family Law Pricing"
            title="Matrimonial & Family Law Pricing"
            description="Our transparent pricing structure for divorce, separation, and other family matters. We believe in providing clear, upfront costs with no hidden fees."
          />
        </ScrollMotionWrapper>

        {/* Fee Structure Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <FeeStructure
            title="Our Fee Structure"
            description="Detailed pricing information will be displayed here. Our fee structure is designed to be transparent and competitive, ensuring you receive excellent value for our comprehensive family law services."
            servicePage="/services/family-law"
            image={{
              src: "/family-law.jpg",
              alt: "Family Law Services",
            }}
          />
        </ScrollMotionWrapper>

        {/* Service Process Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <PricingProcess
            title="Our Process"
            subtitle="How We Work"
            description="Our dedicated approach to family law ensures sensitive and thorough handling of your case. We manage all aspects with care and maintain clear communication throughout each stage, helping you navigate through challenging family matters with confidence."
            image={{
              src: "/flowchart.jpg",
              alt: "Family Law Process Flowchart",
            }}
          />
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default FamilyLawPricingPage;

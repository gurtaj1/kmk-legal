"use client";

import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";
import PricingHeroSection from "@/components/ui/pricing-hero-section";
import FeeStructure from "@/components/ui/fee-structure";
import PricingProcess from "@/components/ui/pricing-process";

const CommercialPropertyPricingPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-kmk-blueberry/10 to-kmk-blueberry/30">
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <PricingHeroSection
            imageSrc="/commercial-conveyancing.jpg"
            imageAlt="Commercial Property Pricing"
            title="Pricing and Service Information for Commercial Property"
            description="Our transparent pricing structure for commercial property transactions. We believe in providing clear, upfront costs with no hidden fees."
          />
        </ScrollMotionWrapper>

        {/* Fee Structure Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <FeeStructure
            title="Our Fee Structure"
            description="Detailed pricing information will be displayed here. Our fee structure is designed to be transparent and competitive, ensuring you receive excellent value for our comprehensive commercial property services."
            servicePage="/services/commercial-property"
            image={{
              src: "/commercial-conveyancing.jpg",
              alt: "Commercial Property Services",
            }}
          />
        </ScrollMotionWrapper>

        {/* Service Process Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <PricingProcess
            title="Our Process"
            subtitle="How We Work"
            description="Our streamlined commercial property process ensures efficient and thorough handling of your business property transactions. We manage all aspects of your case with meticulous attention to detail and maintain regular communication throughout each stage."
            image={{
              src: "/flowchart.jpg",
              alt: "Commercial Property Process Flowchart",
            }}
          />
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default CommercialPropertyPricingPage;

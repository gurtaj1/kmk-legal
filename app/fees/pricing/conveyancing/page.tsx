"use client";

import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";
import PricingHeroSection from "@/components/ui/pricing-hero-section";
import FeeStructure from "@/components/ui/fee-structure";
import PricingProcess from "@/components/ui/pricing-process";

const ConveyancingPricingPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-kmk-blueberry/10 to-kmk-blueberry/30">
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <PricingHeroSection
            imageSrc="/pricing.jpg"
            imageAlt="Conveyancing Pricing"
            title="Pricing and Service Information for Conveyancing"
            description="Our transparent pricing structure for residential property transactions and remortgages. We believe in providing clear, upfront costs with no hidden fees."
          />
        </ScrollMotionWrapper>

        {/* Fee Structure Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <FeeStructure
            title="Our Fee Structure"
            description="Detailed pricing information will be displayed here. Our fee structure is designed to be transparent and competitive, ensuring you receive excellent value for our comprehensive conveyancing services."
            servicePage="/services/conveyancing"
            image={{
              src: "/residential-conveyancing.jpg",
              alt: "Conveyancing Services",
            }}
          />
        </ScrollMotionWrapper>

        {/* Service Process Section */}
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <PricingProcess
            title="Our Process"
            subtitle="How We Work"
            description="Our streamlined conveyancing process ensures a smooth and efficient property transaction. We handle all aspects of your case with attention to detail and regular communication throughout each stage. lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, delectus dolorem. Ratione molestiae ad, totam dignissimos quisquam necessitatibus similique corrupti aut perferendis optio alias natus quibusdam vitae quae! Dolore, ducimus. lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit."
            image={{
              src: "/flowchart.jpg",
              alt: "Conveyancing Process Flowchart",
            }}
          />
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default ConveyancingPricingPage;

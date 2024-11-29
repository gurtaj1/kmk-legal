"use client";

import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const CommercialPropertyPricingPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-kmk-blueberry/10 to-kmk-blueberry/30">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl font-bold text-center mb-8 text-kmk-logoBlue">
              Commercial Property Pricing
            </h1>
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Commercial property transaction fees and pricing structure
                information.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Fee Structure</h2>
                <p>Detailed pricing information will be displayed here.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default CommercialPropertyPricingPage;

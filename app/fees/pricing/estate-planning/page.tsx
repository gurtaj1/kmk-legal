"use client";

import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const EstatePlanningPricingPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-kmk-blueberry/10 to-kmk-blueberry/30">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl font-bold text-center mb-8 text-kmk-logoBlue">
              Estate Planning, Wills & Probate Pricing
            </h1>
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Pricing for wills, probate and estate administration services.
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

export default EstatePlanningPricingPage;

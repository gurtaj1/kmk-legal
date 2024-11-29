"use client";

import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const FamilyLawPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-white text-[#333333]">
        <section className="py-16">
          <div className="container mx-auto">
            <h1 className="text-6xl font-bold text-center mb-8 text-kmk-logoBlue">
              Matrimonial & Family Law
            </h1>
            <div className="prose max-w-none">
              <p className="mb-4">
                Comprehensive legal support for all family matters, including
                divorce, separation, and financial settlements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default FamilyLawPage;

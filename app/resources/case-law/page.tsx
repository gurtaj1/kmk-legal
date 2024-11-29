"use client";

import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const CaseLawPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-white text-[#333333]">
        <section className="py-16">
          <div className="container mx-auto">
            <h1 className="text-6xl font-bold text-center mb-8 text-kmk-logoBlue">
              Case Law Updates
            </h1>
            <div className="prose max-w-none">
              <p className="mb-4">
                Stay informed with the latest developments in case law and legal
                precedents.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default CaseLawPage;

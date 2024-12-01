"use client";

import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const PrivacyPolicyPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-kmk-blueberry/20 text-kmk-logoBlue">
        <section className="py-16">
          <div className="container mx-auto">
            <h1 className="text-6xl font-bold text-center mb-8 text-kmk-logoBlue">
              Privacy Policy
            </h1>
            <div className="prose max-w-none">
              <p className="mb-4">
                Information about how we collect, use, and protect your personal
                data. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default PrivacyPolicyPage;

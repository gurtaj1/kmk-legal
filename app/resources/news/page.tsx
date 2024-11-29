"use client";

import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const NewsPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-white text-[#333333]">
        <section className="py-16">
          <div className="container mx-auto">
            <h1 className="text-6xl font-bold text-center mb-8 text-kmk-logoBlue">
              Legal News
            </h1>
            <div className="prose max-w-none">
              <p className="mb-4">
                Keep up to date with the latest legal news and developments.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default NewsPage;

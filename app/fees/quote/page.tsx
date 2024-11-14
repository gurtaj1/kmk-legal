"use client";

const QuotePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <section className="py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-kmk-logoBlue">
            Request a Quote
          </h1>
          <div className="prose max-w-none">
            <p className="mb-4">
              Get a personalized quote for our legal services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage;

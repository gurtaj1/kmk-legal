"use client";

const QuoteCalculatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <section className="py-16">
        <div className="container mx-auto">
          <h1 className="text-6xl font-bold text-center mb-8 text-kmk-logoBlue">
            Quote Calculator
          </h1>
          <div className="prose max-w-none">
            <p className="mb-4">
              Calculate an estimate for your legal services needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuoteCalculatorPage;

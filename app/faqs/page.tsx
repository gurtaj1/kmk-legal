"use client";

const FAQsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-kmk-originalBlue">
              Frequently Asked Questions
            </h1>
            <div className="max-w-3xl mx-auto">{/* Add FAQ items here */}</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQsPage;

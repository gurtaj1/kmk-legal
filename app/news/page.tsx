"use client";

const NewsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-kmk-originalBlue">
              Latest News
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Add news articles here */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewsPage;

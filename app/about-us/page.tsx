"use client";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <section className="py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-kmk-logoBlue">
            About Us
          </h1>
          <div className="prose max-w-none">
            <p className="mb-4">
              Learn more about KMK Legal and our commitment to excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

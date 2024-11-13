import ThreeStepGrid from "@/components/ui/three-step-grid";

const features = [
  {
    title: "COMPETITIVE FEES",
    image: "/competitive-fees.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    title: "ONLINE PROCESS & MILESTONES UPDATES",
    image: "/milestones.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    title: "PERSONAL CONTACT",
    image: "/personal-contact.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

const PropertyLawPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-kmk-originalBlue">
              Property Law Services
            </h1>
            <div className="prose max-w-none">
              <p className="mb-4">
                Expert legal guidance for all your property law needs.
              </p>
            </div>
          </div>
        </section>
        <ThreeStepGrid features={features} />
      </main>
    </div>
  );
};

export default PropertyLawPage;

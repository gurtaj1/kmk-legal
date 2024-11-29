import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/app/globals/framer-variants";

const servicePaths = [
  {
    serviceId: "conveyancing",
    title: "Conveyancing",
    path: "/services/conveyancing",
    icon: "🏠",
    description: "Expert property law services",
  },
  {
    serviceId: "commercial-property",
    title: "Commercial Property",
    path: "/services/commercial-property",
    icon: "🏢",
    description: "Business property solutions",
  },
  {
    serviceId: "children-law",
    title: "Children Law",
    path: "/services/children-law",
    icon: "👨‍👩‍👧‍👦",
    description: "Child-focused legal support",
  },
  {
    serviceId: "family-law",
    title: "Matrimonial & Family Law",
    path: "/services/family-law",
    icon: "⚖️",
    description: "Family legal matters",
  },
  {
    serviceId: "estate-planning",
    title: "Estate Planning, Wills & Probate",
    path: "/services/estate-planning",
    icon: "📋",
    description: "Future planning services",
  },
  {
    serviceId: "trusts",
    title: "Trusts",
    path: "/services/trusts",
    icon: "🔒",
    description: "Trust formation & management",
  },
];

type ServicePathsGridProps = {
  serviceId: string;
  pricingTitle?: string;
  pricingContent?: React.ReactNode;
};

const ServicePathsGrid = ({
  serviceId,
  pricingTitle,
  pricingContent,
}: ServicePathsGridProps) => {
  return (
    <section
      className="py-16 scroll-mt-navbarMobile md:scroll-mt-navbar relative overflow-hidden"
      id="how-we-can-help"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23150958' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <motion.h2
            className="text-6xl font-bold text-kmk-logoBlue mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What we can help you with
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {servicePaths.map((service, index) => {
              if (service.serviceId === serviceId) return null;

              const isLastItem = index === servicePaths.length - 1;
              const remainingItems = servicePaths.filter(
                (s) => s.serviceId !== serviceId
              ).length;
              const shouldBeFullWidth = remainingItems === 5 && isLastItem;

              return (
                <Link
                  key={index}
                  href={service.path}
                  className={`${shouldBeFullWidth ? "md:col-span-2" : ""}`}
                >
                  <motion.div
                    className="relative h-full"
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="whileHover"
                    whileTap="whileTap"
                  >
                    <div className="border-2 border-kmk-logoBlue p-6 rounded-lg bg-white hover:bg-kmk-logoBlue group transition-all duration-300 h-full">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {service.icon}
                        </span>
                        <div>
                          <h3 className="font-semibold text-kmk-logoBlue group-hover:text-white transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {(pricingTitle || pricingContent) && (
            <motion.div
              className="mt-8 border-t pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {pricingTitle && (
                <h3 className="text-xl font-semibold mb-4">{pricingTitle}</h3>
              )}
              {pricingContent}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicePathsGrid;

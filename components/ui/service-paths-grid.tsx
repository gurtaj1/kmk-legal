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

const pricingLinks = [
  {
    serviceId: "conveyancing",
    href: "/fees/pricing/conveyancing",
    title: "Price & Service Information for Conveyancing",
    image: "/residential-conveyancing.jpg",
    description:
      "View our transparent pricing for residential property transactions and remortgages",
  },
  {
    serviceId: "commercial-property",
    href: "/fees/pricing/commercial-property",
    title: "Price & Service Information for Commercial Property",
    image: "/commercial-conveyancing.jpg",
    description: "Commercial property transaction fees and pricing structure",
  },
  {
    serviceId: "children-law",
    href: "/fees/pricing/children",
    title: "Price & Service Information for Children Law",
    image: "/children-law.jpg",
    description:
      "Transparent pricing for children law proceedings and representation",
  },
  {
    serviceId: "family-law",
    href: "/fees/pricing/family",
    title: "Price & Service Information for Matrimonial & Family Law",
    image: "/family-law.jpg",
    description:
      "Clear fee structure for divorce, separation and other family matters",
  },
  {
    serviceId: "estate-planning",
    href: "/fees/pricing/estate-planning",
    title: "Price & Service Information for Estate Planning, Wills & Probate",
    image: "/estate-planning.jpg",
    description:
      "Pricing for wills, probate and estate administration services",
  },
  {
    serviceId: "trusts",
    href: "/fees/pricing/trusts",
    title: "Price & Service Information for Trusts",
    image: "/trust-law.jpg",
    description: "Fee information for trust creation and management services",
  },
];

type ServicePathsGridProps = {
  serviceId: string;
};

const ServicePathsGrid = ({ serviceId }: ServicePathsGridProps) => {
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

          <>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-kmk-logoBlue/30 to-transparent my-8" />
            <div className="mt-8">
              {pricingLinks.map((link) => {
                if (link.serviceId === serviceId) {
                  return (
                    <Link href={link.href} key={link.serviceId}>
                      <motion.div
                        className="relative"
                        variants={buttonVariants}
                        initial="initial"
                        whileHover="whileHover"
                        whileTap="whileTap"
                      >
                        <div className="border-2 border-kmk-logoBlue p-6 rounded-lg bg-white hover:bg-kmk-logoBlue group transition-all duration-300">
                          <div className="flex items-center gap-4">
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                              <img
                                src={link.image}
                                alt=""
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold text-kmk-logoBlue group-hover:text-white transition-colors">
                                {link.title}
                              </h3>
                              <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                                {link.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                }
                return null;
              })}
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

export default ServicePathsGrid;

"use client";

import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";
import { motion } from "framer-motion";
import { floatingPillVariants } from "@/app/globals/framer-variants";

const processSteps = [
  {
    number: "1",
    title: "Offer Accepted",
    description: "Initial offer is accepted by the seller",
  },
  {
    number: "2",
    title: "Appoint Solicitors",
    description:
      "Both the buyer and seller must appoint a solicitor or conveyancer to act on their behalf",
  },
  {
    number: "3",
    title: "Client Care Pack",
    description:
      "The solicitor will send confirmation, proof of ID requirements and forms to be completed, signed & dated",
  },
  {
    number: "4",
    title: "Draft Contract Pack",
    description:
      "The seller's solicitor will begin drawing up the draft contract & sending this to the buyer's solicitor together with the title deeds & supporting paperwork",
  },
  {
    number: "5",
    title: "Searches",
    description:
      "The buyer's solicitor will apply for searches. The estimated time is usually 2-3 weeks depending on the relevant authorities",
  },
  {
    number: "6",
    title: "Enquiries",
    description:
      "If the buyer's solicitor has any questions or concerns, they will raise these with the seller's solicitor directly",
  },
  {
    number: "7",
    title: "Mortgage Offer",
    description:
      "This is sent by the lender to the buyer, their solicitor & the mortgage broker",
  },
  {
    number: "8",
    title: "Contracts Signed",
    description:
      "The solicitors will send the contracts to their respective clients to sign & send back with their report for signing",
  },
  {
    number: "9",
    title: "Completion Date Discussed",
    description:
      "A completion date needs to be agreed between the buyer & the seller prior to exchange of contracts",
  },
  {
    number: "10",
    title: "Exchange",
    description:
      "The solicitors take the signed contracts in order to make them legally binding & agree a completion date",
  },
  {
    number: "11",
    title: "Completion",
    description:
      "The buyer's solicitor transfer the money & once the seller's solicitors confirm receipt, the keys can be collected",
  },
];

const ConveyancingProcessPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-kmk-blueberry/10 to-kmk-blueberry/30">
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23150958' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-8 md:mb-16 text-kmk-logoBlue uppercase border-b-2 border-kmk-logoBlue pb-2 md:pb-4 px-2">
                Conveyancing Process
              </h1>

              <div className="max-w-4xl mx-auto relative">
                {processSteps.map((step, index) => {
                  return (
                    <motion.div
                      key={step.number}
                      variants={floatingPillVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="whileHover"
                      whileTap="whileTap"
                      custom={index}
                      className="relative mb-12 last:mb-0 flex group md:justify-start md:even:justify-end justify-center"
                      style={{
                        marginTop: index === 0 ? undefined : "-2rem",
                      }}
                    >
                      <div
                        className={`flex items-center gap-4 w-full md:w-[60%] relative ${
                          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                      >
                        {/* Content */}
                        <div className="flex-grow">
                          <div className="bg-kmk-logoBlue text-white rounded-full min-h-[8rem] md:h-32 flex items-center group-hover:bg-white group-hover:text-kmk-logoBlue transition-all duration-300">
                            {index % 2 === 0 ? (
                              // Left-aligned pill
                              <div className="pl-20 pr-6 md:pl-8 md:pr-32 py-4 md:py-0">
                                <h3 className="text-xl font-semibold">
                                  {step.title}
                                </h3>
                                <p className="text-sm text-white/90 group-hover:text-kmk-logoBlue transition-all duration-300">
                                  {step.description}
                                </p>
                              </div>
                            ) : (
                              // Right-aligned pill
                              <div className="pl-20 pr-6 md:pl-32 md:pr-8 py-4 md:py-0">
                                <h3 className="text-xl font-semibold md:text-right">
                                  {step.title}
                                </h3>
                                <p className="text-sm text-white/90 md:text-right group-hover:text-kmk-logoBlue transition-all duration-300">
                                  {step.description}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Circle Number */}
                        <div
                          className={`absolute ${
                            index % 2 === 0
                              ? "left-2 sm:left-2 md:left-auto md:right-1"
                              : "left-2 md:left-1"
                          } top-1/2 -translate-y-1/2 h-14 md:h-[calc(105%-16px)] aspect-square bg-white text-kmk-logoBlue rounded-full flex items-center justify-center font-bold text-xl border-2 border-kmk-logoBlue z-10 group-hover:bg-kmk-logoBlue group-hover:text-white transition-all duration-300`}
                        >
                          {step.number}
                        </div>

                        {/* Animated Line */}
                        <motion.div
                          className="hidden md:block absolute top-1/2 -translate-y-1/2 h-1 bg-kmk-logoBlue"
                          initial={{ width: 0 }}
                          viewport={{ once: false }}
                          whileInView={{ width: "calc(100% - 2rem)" }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          whileHover={{ scale: 1 }}
                          style={{
                            left:
                              index % 2 === 0 ? "calc(100% + 1rem)" : "auto",
                            right:
                              index % 2 !== 0 ? "calc(100% + 1rem)" : "auto",
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default ConveyancingProcessPage;

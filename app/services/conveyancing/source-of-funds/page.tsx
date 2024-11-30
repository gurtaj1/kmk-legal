"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";

interface SourceOfFunds {
  sideA: {
    title: string;
    content: string;
  };
  sideB: {
    title: string;
    content: string;
  };
  sideB2?: {
    title: string;
    content: string;
  };
}

const sourcesOfFunds = [
  {
    sideA: {
      title: "Gift",
      content:
        "Most of our clients use gifts from their family. We consider sums already transferred or to be transferred to be gifts. In this situation we would send you a Deed of Gift for your giftors to complete and sign. The letter confirms that the money is a gift and that your giftors have no rights over the property. Then the giftor continues as if he was one of the purchasing parties: they have to provide us with their certified documents, either by visiting our office or having them certified at a firm local to them. The source of funds check for them is exactly the same as for the purchaser, so please check what your giftor will have to provide below.",
    },
    sideB: {
      title: "What we need from you:",
      content:
        "One completed and signed copy of the Deed of Gift\n• Certified copies of giftors ID (1 photo ID document and 2 proofs of address)\n• All relevant documents showing your giftor's source of funds\n\nGiftors Living Abroad: If your giftors are not resident in England or Wales and they are not planning to visit during the transaction they will need to have their ID documents and proofs of address notarised by a Notary Public. Please note that should these documents be in a language other than English we would need them to be translated by a professional translator so we are able to read them. Please have these notarised copies posted to our offices.",
    },
    sideB2: {
      title: "Giftors Living Abroad",
      content:
        "If your giftors are not resident in England or Wales and they are not planning to visit during the transaction they will need to have their ID documents and proofs of address notarised by a Notary Public. Please note that should these documents be in a language other than English we would need them to be translated by a professional translator so we are able to read them. Please have these notarised copies posted to our offices",
    },
  },
  {
    sideA: {
      title: "Savings from earnings",
      content:
        "If your savings consist mainly of your regular salary or pension, then you will most likely only have to provide 6 months bank statements showing those regular transfers and your bank balance slowly growing, and, if you're using savings account, also 6 months statements from those savings accounts.",
    },
    sideB: {
      title: "What we need from you:",
      content:
        "• 6 months of bank statements showing regular income\n• Explanation of your income in an email\n• 6 months statements from all your active savings accounts",
    },
  },
  {
    sideA: {
      title: "Investments",
      content:
        "Some of our clients hold their funds in various investments e.g. NS&I bonds, stocks, online investments. We would not expect you to withdraw your funds from these until we are close to completion. Simply forward us the most up to date statement.",
    },
    sideB: {
      title: "What we need from you:",
      content:
        "• The most up to date statement for any and all investments you intend to withdraw from.\n• If any of these investments are not listed in GBP please let us know the value of them in GBP.",
    },
  },
  {
    sideA: {
      title: "Sale of Another Property",
      content:
        "Selling your property through another solicitor is fairly straight forward. We just need the completion statement and bank statement. If the completion statement is in a foreign language please have it translated by a certified translator",
    },
    sideB: {
      title: "What we need from you:",
      content:
        "• A completion statement from your solicitors\n• A bank statement showing the funds being received from the solicitors on completion",
    },
  },
  {
    sideA: {
      title: "Sale of Personal Assets",
      content:
        "The most common sale of an asset is a car. For this you would need to produce the bill of sale or sales tax form. Selling other assets is similar in that we require the appropriate receipt or document proving the sale. Please contact us if you have any doubts",
    },
    sideB: {
      title: "What we need from you:",
      content:
        "• A document showing the sale\n• A bank statement showing the funds being received from the sale",
    },
  },
  {
    sideA: {
      title: "Inheritance",
      content:
        "Should you have received an inheritance payment this usually would have been dealt with by a solicitor. Once again a completion statement should have been produced. Alternatively we will need confirmation from the executors of the estate.",
    },
    sideB: {
      title: "What we need from you:",
      content:
        "• A letter from the executors stating the amount being paid\n• A bank statement showing the funds being received from the solicitors/executor's bank account.",
    },
  },
  {
    sideA: {
      title: "Your Company",
      content:
        "Your SA302 should provide evidence of your income from your company. We would also need to know the name of the company or company registration number. Should the company be purchasing the property we would also require a board resolution.",
    },
    sideB: {
      title: "What we need from you:",
      content:
        "• SA302\n• Board resolution (if using company funds)\n• Further requirements will be specified by us depending on company structure",
    },
  },
  {
    sideA: {
      title: "Real Estate",
      content:
        "Should your income come from rental agreements or other real estate income we will require a list of the properties with the rental value per month of each property. We will also need to see your last annual tax return.",
    },
    sideB: {
      title: "What we need from you:",
      content:
        "• List of property portfolio with rental incomes for each property.\n• Latest tax return.",
    },
  },
  {
    sideA: {
      title: "Compensation Award",
      content:
        "A letter from a solicitor or court confirming your compensation settlement and a bank statement showing the funds being received from the third party.",
    },
    sideB: {
      title: "What we need from you:",
      content:
        "• Letter confirming settlement amount\n• Bank statement showing the transfer of the award",
    },
  },
  {
    sideA: {
      title: "Release of Pension",
      content:
        "Your pension manager will likely require you to forward our contact details to them to answer any queries they may have or to provide evidence for the transaction. If are receiving the funds into your account or already have, we will need to see that transfer on your bank statement",
    },
    sideB: {
      title: "What we need from you:",
      content:
        "• Contact details of pension provider\n• Bank statement showing receipt of funds",
    },
  },
];

const getCardStyles = (title: string, index: number) => {
  const baseStyles = "border-l-4 hover:shadow-lg transition-all duration-300";

  const styleMap: { [key: string]: string } = {
    Gift: "border-l-pink-500 hover:bg-pink-50 bg-pink-50/50 rounded-tr-3xl",
    "Savings from earnings":
      "border-l-green-500 hover:bg-green-50 bg-green-50/50 rounded-bl-3xl",
    Investments:
      "border-l-blue-500 bg-blue-50/50 rounded-tl-3xl rounded-br-3xl",
    "Sale of Another Property":
      "border-l-purple-500 bg-purple-50/50 rounded-[2rem_0_2rem_0]",
    "Sale of Personal Assets":
      "border-l-orange-500 bg-orange-50/50 rounded-[0_2rem_0_2rem]",
    Inheritance: "border-l-indigo-500 bg-indigo-50/50 rounded-[3rem_0_0_0]",
    "Your Company": "border-l-cyan-500 bg-cyan-50/50 rounded-[0_0_3rem_0]",
    "Real Estate":
      "border-l-emerald-500 bg-emerald-50/50 rounded-[2rem_2rem_0_0]",
    "Compensation Award":
      "border-l-rose-500 bg-rose-50/50 rounded-[0_0_2rem_2rem]",
    "Release of Pension":
      "border-l-amber-500 bg-amber-50/50 rounded-[1rem_3rem_1rem_3rem]",
  };

  const hoverEffects = [
    "hover:-rotate-1",
    "hover:rotate-1",
    "hover:scale-[1.02]",
    "hover:-translate-y-1",
    "hover:translate-x-1",
  ][index % 5];

  return `${baseStyles} ${
    styleMap[title] || "border-l-kmk-logoBlue"
  } ${hoverEffects}`;
};

const SourceOfFundsCard = ({
  source,
  index,
}: {
  source: SourceOfFunds;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`${getCardStyles(source.sideA.title, index)} 
          relative overflow-hidden cursor-pointer
          transition-all duration-300 ease-in-out
          ${
            isExpanded
              ? "md:absolute md:z-50 md:w-[200%] md:scale-100 !bg-white shadow-xl"
              : "scale-100"
          }`}
        style={{
          transformOrigin: index % 2 === 0 ? "top left" : "top right",
          left: index % 2 === 0 ? "0" : "auto",
          right: index % 2 === 1 ? "0" : "auto",
        }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {isExpanded && (
          <div
            className="absolute inset-0 opacity-95"
            style={{
              backgroundColor:
                source.sideA.title === "Gift"
                  ? "rgb(253 242 248)"
                  : source.sideA.title === "Savings from earnings"
                  ? "rgb(240 253 244)"
                  : "white",
            }}
          />
        )}
        <CardContent
          className={`relative z-10 p-6 ${
            index % 4 === 0
              ? "pr-12"
              : index % 4 === 1
              ? "pl-12"
              : index % 4 === 2
              ? "py-8"
              : "px-8"
          }`}
        >
          <h3
            className={`text-xl font-semibold mb-2 ${
              index % 2 === 0 ? "translate-x-0" : "translate-x-4"
            }`}
          >
            {source.sideA.title}
          </h3>
          <div className="relative">
            <p
              className={`text-gray-700 transition-all duration-300
              ${isExpanded ? "" : "line-clamp-4"}`}
            >
              {source.sideA.content}
            </p>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mt-4 border-t pt-4"
              >
                <h4 className="font-semibold mb-2">{source.sideB.title}</h4>
                <p className="whitespace-pre-line text-gray-800">
                  {source.sideB.content}
                </p>
                {source.sideB2 && (
                  <>
                    <h4 className="font-semibold mb-2 mt-2">
                      {source.sideB2.title}
                    </h4>
                    <p className="whitespace-pre-line text-gray-800">
                      {source.sideB2.content}
                    </p>
                  </>
                )}
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FloatingElement = ({
  color,
  size,
  position,
  delay = 0,
}: {
  color: string;
  size: "sm" | "md" | "lg";
  position: string;
  delay?: number;
}) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32",
  };

  return (
    <motion.div
      className={`absolute ${sizeClasses[size]} ${position} opacity-50`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.1, 0.2, 0.1],
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    >
      <div
        className="w-full h-full rounded-full blur-md"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

const SourceOfFundsPage = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Floating Elements Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement
          color="#ec489a"
          size="lg"
          position="top-[20%] left-[10%]"
        />
        <FloatingElement
          color="#22c55e"
          size="md"
          position="top-[40%] right-[10%]"
          delay={1}
        />
        <FloatingElement
          color="#3b82f6"
          size="sm"
          position="bottom-[20%] left-[20%]"
          delay={2}
        />
        <FloatingElement
          color="#a855f7"
          size="lg"
          position="bottom-[40%] right-[20%]"
          delay={1.5}
        />
        <FloatingElement
          color="#f59e0b"
          size="md"
          position="top-[60%] left-[30%]"
          delay={2.5}
        />
        <FloatingElement
          color="#14b8a6"
          size="sm"
          position="bottom-[60%] right-[15%]"
          delay={3}
        />
        <FloatingElement
          color="#6366f1"
          size="md"
          position="top-[15%] right-[25%]"
          delay={2.8}
        />
        <FloatingElement
          color="#ef4444"
          size="sm"
          position="bottom-[30%] left-[40%]"
          delay={1.8}
        />
        <FloatingElement
          color="#8b5cf6"
          size="lg"
          position="top-[45%] left-[15%]"
          delay={3.2}
        />
      </div>

      {/* Main content with all sections preserved */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Source of Funds Explained
          </h1>

          <div className="mb-8 text-gray-600 bg-white/80 backdrop-blur-sm inline-block px-4 py-2 rounded-lg shadow-sm border border-gray-100">
            <span className="inline-flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Hover/Tap on the source of funds that relates to you and learn
              what you will need to provide
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sourcesOfFunds.map((source, index) => (
              <SourceOfFundsCard
                key={source.sideA.title}
                source={source}
                index={index}
              />
            ))}
          </div>

          {/* Notes section */}
          <div className="mt-12 bg-yellow-50 p-6 rounded-lg space-y-4">
            <p className="text-sm">
              • Conveyancing has been identified as a high risk area with
              fraudulent behaviour and money laundering being at unnacceptable
              levels throughout the industry. As such we have to follow strict
              procedures as the front line against this criminal behaviour.
            </p>
            <p className="text-sm">
              • Please make sure that documents you provide us are clear, easy
              to read, and identify you on them. Electronic documents will
              suffice.
            </p>
            <p className="text-sm">
              • Please note that we need to satisfy our requirements as set out
              by The Money Laundering, Terrorist Financing and Transfer of Funds
              (Information on the Payer) Regulations 2017. As per these
              guidelines we need to trace funds back to a specific source.
              Unfortunately, due to the fact that this information must be
              easily audited, we must carry out this process in writing by
              email. Thank you for your co-operation in this regard. The
              information provided will be held on file for 6 years
            </p>
            <p className="text-sm">
              <span style={{ textDecoration: "underline" }}>
                Source of Funds documents from outside England and Wales
              </span>
              <br />
              If you are receiving money from abroad please note that we will
              need documents as similar to those mentioned in the appropriate
              section as possible. As we do not have knowledge of the regulatory
              or official bodies of other countries we will need a Notary Public
              to notarise these documents. Finally, if the documents are not in
              English we will need to have them professionally translated. We
              would suggest that the Notary Public notarises the translated
              would suggest that the Notary Public notarises the translated
              versions where possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceOfFundsPage;

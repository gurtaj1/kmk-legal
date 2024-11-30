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
        "• 6 months of bank statements showing regular income\n• Statements from any savings accounts used",
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
      content: "Recent investment portfolio statements required",
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
        "Required documents:\n• Completion statement from your solicitor\n• Bank statement showing receipt of funds",
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
      content: "Bill of sale or sales tax form needed",
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
      content: "Completion statement from your solicitor needed",
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
      content: "SA302 showing income from company",
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
        "Required documents:\n• List of properties with rental value per month\n• Last annual tax return",
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
        "Required documents:\n• Letter from solicitor or court confirming compensation\n• Bank statement showing funds received",
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
        "Required documents:\n• Pension manager contact details\n• Bank statement showing funds received",
    },
  },
];

const getCardStyles = (title: string, index: number) => {
  const baseStyles = "border-l-4 hover:shadow-lg transition-all duration-300";

  const styleMap: { [key: string]: string } = {
    Gift: "border-l-pink-500 bg-pink-50/50 rounded-tr-3xl",
    "Savings from earnings": "border-l-green-500 bg-green-50/50 rounded-bl-3xl",
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
  const [showSideB, setShowSideB] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`${getCardStyles(
          source.sideA.title,
          index
        )} relative overflow-hidden`}
        onMouseEnter={() => setShowSideB(true)}
        onMouseLeave={() => setShowSideB(false)}
      >
        <CardContent
          className={`p-6 ${
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
            {showSideB ? source.sideB.title : source.sideA.title}
          </h3>
          <div className="relative min-h-[100px]">
            <p
              className={`absolute w-full transition-all duration-300 ease-in-out ${
                showSideB
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              } ${index % 3 === 0 ? "text-gray-700" : "text-gray-600"} ${
                index % 2 === 0 ? "pl-0" : "pl-4"
              }`}
            >
              {source.sideA.content}
            </p>
            <p
              className={`absolute w-full transition-all duration-300 ease-in-out ${
                showSideB
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              } font-medium text-gray-800 whitespace-pre-line`}
            >
              {source.sideB.content}
            </p>
          </div>
          {/* {showSideB && source.sideB2 && (
            <p className="absolute w-full transition-all duration-300 ease-in-out opacity-100 translate-y-0 font-medium text-gray-800 whitespace-pre-line">
              <h3
                className={`text-xl font-semibold mb-2 ${
                  index % 2 === 0 ? "translate-x-0" : "translate-x-4"
                }`}
              >
                {source.sideB2.title}
              </h3>
              <div className="relative min-h-[100px]">
                <p
                  className={
                    "absolute w-full transition-all duration-300 ease-in-out opacity-100 translate-y-0 font-medium text-gray-800 whitespace-pre-line"
                  }
                >
                  {source.sideB2.content}
                </p>
              </div>
            </p>
          )} */}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Source of Funds Explained
          </h1>

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
              * Please note that additional documentation may be required
              depending on your specific circumstances.
            </p>
            <p className="text-sm">
              * All documents must be original or certified copies. We cannot
              accept photocopies or scanned documents.
            </p>
            <p className="text-sm">
              * Bank statements should cover at least the last 3 months and show
              the accumulation of funds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceOfFundsPage;

export const cardVariants = {
  initial: {
    scale: 1,
    boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
  },
  whileHover: {
    scale: 1.05,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: {
      scale: { type: "spring", stiffness: 300 },
      boxShadow: { type: "spring", stiffness: 300 },
    },
  },
  whileTap: {
    scale: 0.95,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: {
      scale: { type: "spring", stiffness: 300 },
      boxShadow: { type: "spring", stiffness: 300 },
    },
  },
};

export const buttonVariants = {
  whileHover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  whileTap: {
    scale: 0.98,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

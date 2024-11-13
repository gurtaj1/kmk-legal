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

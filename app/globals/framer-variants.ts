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

export const pulsingIconVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 1, 0], // Pulsing effect
    transition: {
      duration: 2, // Total duration for one pulse
      ease: "easeInOut",
      repeat: Infinity, // Indefinite looping
      repeatType: "loop" as const, // Ensures it loops continuously
    },
  },
};

export const floatingPillVariants = {
  initial: {
    x: 0,
  },
  animate: (index: number) => ({
    x: [0, index % 2 === 0 ? 2 : -2, 0],
    y: [0, index % 2 === 0 ? 2 : -2, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      delay: index * 0.4,
    },
  }),
  whileHover: (index: number) => ({
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
  whileTap: {
    scale: 0.98,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

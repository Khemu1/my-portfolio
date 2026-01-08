import { motion } from "framer-motion";

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: 0.1 * reverseIndex(index),
          }}
          className="h-full w-full bg-surface-dark relative"
        ></div>
      ))}
    </>
  );
};

// calculating reverse index for staggered delay
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index;
};

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

export default Stairs;

"use client";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function PageWrapper({ children }) {

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit" // This doesn't work (it's a Next.js problem, not a Framer Motion problem) https://github.com/framer/motion/issues/1850
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

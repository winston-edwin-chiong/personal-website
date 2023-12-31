"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import SpaceBackground from "./SpaceBackground";
import SpinningCube from "./SpinningCube";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function PageWrapper({ children }) {


  const backgrounds = {
    "/": <SpaceBackground />,
    "/cat": <SpinningCube />,
    "/song": <SpinningCube />
  }

  return (
    <>
    {backgrounds[usePathname()]}
    <AnimatePresence mode="wait" key={usePathname()}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        // exit="exit" // This doesn't work (it's a Next.js problem, not a Framer Motion problem) https://github.com/framer/motion/issues/1850
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="flex flex-grow" // kind of annoying, but this needs to be here so the footer is at the bottom of the page
      >
        {children}
      </motion.div>
    </AnimatePresence>
    </>
  );
}

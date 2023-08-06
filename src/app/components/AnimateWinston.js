"use client";
import { motion } from "framer-motion";

export default function AnimateWinston({ text }) {
  return (
    <>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.2 }}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
}

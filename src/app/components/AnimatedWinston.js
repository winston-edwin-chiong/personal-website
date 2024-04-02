"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]     
    }
  }
}


export default function AnimatedWinston() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const text = "Hi, I'm Winston!"
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  
  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 2,
      ease: "easeInOut",
      onComplete: () => (
        // Hide blinking cursor after 2 seconds
        setTimeout(() => {
          setCursorVisible(false);
        }, 2000)
      )
    });
    return controls.stop;
  });
  
  return (
    <span>
      <motion.span>{displayText}</motion.span>
      <CursorBlinker isVisible={cursorVisible} />
    </span>
  );
}

function CursorBlinker({ isVisible }) {
  return (
    <motion.div
      variants={cursorVariants}
      animate={isVisible ? "blinking" : ""}
      className={`inline-block h-10 sm:h-12 w-[2px] translate-y-1 bg-primary-content`}
    />
  );
}
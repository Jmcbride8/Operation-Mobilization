import React from "react";
import { motion } from "framer-motion";

export default function ReflowCycle({ children }) {
  return (
    <motion.div
      animate={{
        filter: ["blur(0px)", "blur(3px)", "blur(0px)"],
        opacity: [1, 0.35, 1],
      }}
      transition={{
        duration: 0.4,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
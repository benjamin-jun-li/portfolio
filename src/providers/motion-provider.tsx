"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

const MotionProvider = ({ children }: { children: ReactNode }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
        },
      }}
    >
      {children}
    </motion.main>
  );
};

export default MotionProvider;

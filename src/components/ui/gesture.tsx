import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Gesture = ({ className }: { className: string}) => (
  <motion.div
    className={cn(className)}
    whileHover={{ scale: 1.2, rotate: 90 }}
    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
  />
);
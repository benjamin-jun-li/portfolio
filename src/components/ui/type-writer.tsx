import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const sentenceVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

const Typewriter = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <motion.div
    key={text}
    variants={sentenceVariants}
    initial="hidden"
    animate="visible"
    className={cn("w-fit", className)}
  >
    {text
      .split("")
      .map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
  </motion.div>
);

export default Typewriter;

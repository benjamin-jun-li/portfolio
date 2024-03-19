"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
const MobileMenuBar = ({ className }: { className: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={cn("w-32 flex flex-col items-end", className)}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row w-fit items-center gap-x-2 tracking-wide"
      >
        MENU
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg fill="#eee" width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="flex flex-col items-end"
      >
        <motion.li variants={itemVariants}>
          <Link href="/projects" className="hover:text-cyan-900">
            projects
          </Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link href="posts" className="hover:text-cyan-900">
            posts
          </Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link href="/snippets" className="hover:text-cyan-900">
            code snippets
          </Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default MobileMenuBar;

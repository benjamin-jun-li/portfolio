"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { IoDiceOutline } from "react-icons/io5";

export const TextGenerateEffect = ({
  sentences,
  className,
}: {
  sentences: string[];
  className?: string;
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [scope, animate] = useAnimate();
  const [sentenceIdx, setSentenceIdx] = useState(0);
  const wordArray = sentences[sentenceIdx].split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current, sentenceIdx]);

  const iconOnClick = () => {
    setIsSpinning(true);
    setSentenceIdx(Math.floor(Math.random() * 3));
    setTimeout(() => {
      setIsSpinning(false);
    }, 1000);
  };

  return (
    <div
      className={cn(
        "font-bold mt-4 text-slate-200 text-2xl leading-snug tracking-wide w-full relative",
        className
      )}
    >
      <motion.div className="pr-6" ref={scope}>
        {wordArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-slate-200 opacity-0"
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
      <IoDiceOutline
        onClick={iconOnClick}
        className={cn(
          "w-8 h-8 absolute top-2 right-0 cursor-pointer",
          isSpinning ? "animate-spin-fast-then-slow" : null
        )}
      />
    </div>
  );
};

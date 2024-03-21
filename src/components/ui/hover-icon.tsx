"use client";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const HoverTechIcon = ({
  items,
  className,
}: {
  items: { [key: string]: string };
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ul className={cn("grid grid-cols-2 lg:grid-cols-3", className)}>
      {Object.keys(items).map((name, idx) => (
        <TooltipProvider>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <li
                key={idx}
                className="relative group p-2 w-[2rem] h-[2rem] md:h-[4rem] md:w-[4rem] 2xl:h-[6rem] 2xl:w-[6rem]"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-neutral-500 rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <div className="rounded-2xl w-full h-full text-lg p-2 bg-amber-100/10 border-2 border-indigo-950 group-hover:border-slate-700 relative z-20">
                  <div className="w-full h-full flex flex-col justify-center items-center ">
                    <Image
                      fill
                      src={items[name]}
                      alt={name}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </li>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="bg-slate-800 text-neutral-200 border-slate-800"
            >
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </ul>
  );
};

export default HoverTechIcon;
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { initialTabs as tabs } from "@/lib/data";
import { cn } from "@/lib/utils";

const DisplayBoard = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div className="col-span-2 bg-slate-800/40 h-full rounded-md">
      <nav>
        <ul className="grid grid-cols-3 text-xl">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={cn(
                "p-2 col-span-1 flex justify-center rounded-t-md cursor-pointer transition-colors duration-200",
                item === selectedTab
                  ? "bg-slate-800/90 border-b-2 border-teal-600"
                  : "hover:bg-slate-800"
              )}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab ? selectedTab.label : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full grid place-items-center"
        >
          {selectedTab ? selectedTab.icon : "😋"}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DisplayBoard;

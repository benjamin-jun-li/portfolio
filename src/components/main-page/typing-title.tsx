"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { memo } from "react";
import TypeWriter from "../ui/type-writer";

const TypingTitle = memo(() => {
  return (
    <>
      <TypeWriter text="Hey there, I'm Benjamin!" className="text-5xl font-bold tracking-wide"/>
      <div className="w-[60%] h-6 md:h-12 relative">
        {/* Gradients */}
        <div className="absolute inset-x-5 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-5 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,cyan)]"></div>
      </div>
    </>
  );
});

TypingTitle.displayName = "TypingTitle";

export default TypingTitle;

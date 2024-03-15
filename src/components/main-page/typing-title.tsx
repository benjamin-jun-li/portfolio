"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { SparklesCore } from "@/components/ui/sparkles";

const words = [
  {
    text: "Hey there,",
  },
  {
    text: "I'm",
  },
  {
    text: "Benjamin!",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const TypingTitle = () => {
  return (
    <>
      <TypewriterEffectSmooth words={words} />
      <div className="w-[40rem] h-12 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
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
};

export default TypingTitle;

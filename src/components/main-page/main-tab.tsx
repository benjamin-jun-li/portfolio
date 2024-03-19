"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

const DummyContent = () => (
  <Image
    src="/linear.webp"
    alt="dummy image"
    width="1000"
    height="1000"
    className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
  />
);

const tabs = [
  {
    title: "Languages",
    value: "Languages",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Programming Languages Tab</p>
      </div>
    ),
  },
  {
    title: "Frameworks",
    value: "Frameworks",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Frameworks tab</p>
      </div>
    ),
  },
  {
    title: "Tools",
    value: "Tools",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Tools tab</p>
      </div>
    ),
  },
];

const TabsDemo = () => {
  return (
    <div className="w-[60%] h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col items-start justify-start my-10">
      <h2 className="text-5xl tracking-wider font-semibold">Tech Stack</h2>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabsDemo;

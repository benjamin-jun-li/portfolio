import Meteors from "../ui/meteor";
import TechStackGrid from "./tech-stack-grid";
import { techMap } from "@/lib/data";

const TechStack = () => {
  return (
    <section className="w-full my-32 h-fit">
      <h2 className="text-5xl text-neutral-200 font-semibold my-8">
        Tech Stack
      </h2>
      <p className="text-3xl mb-2">
        These are the technical skills I learned from uni, at work or solely by
        interest 🎉
      </p>
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-sky-900/80 to-slate-800/80">
        <div className="grid grid-cols-5">
          {Object.keys(techMap).map((title, idx) => (
            <TechStackGrid key={`tech${idx}`} title={title} items={techMap[title]} />
          ))}
        </div>
        <Meteors number={20} />
      </div>
    </section>
  );
};

export default TechStack;

import Meteors from "../ui/meteor";

const TechStack = () => {
  return (
    <section className="w-full my-32 h-[20rem]">
      <h2 className="text-5xl text-neutral-200 font-semibold my-8">
        Tech Stack
      </h2>
      <p></p>
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-sky-950">
        <Meteors number={20} />
      </div>
    </section>
  );
};

export default TechStack;

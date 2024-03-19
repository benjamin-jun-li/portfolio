import { Tabs } from "../ui/tabs";

const tabStyle =
  "w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-900 to-sky-950";

const tabs = [
  {
    title: "Languages",
    value: "Languages",
    content: (
      <div className={tabStyle}>
        <p>Programming Languages Tab</p>
      </div>
    ),
  },
  {
    title: "Frameworks",
    value: "Frameworks",
    content: (
      <div className={tabStyle}>
        <p>Frameworks tab</p>
      </div>
    ),
  },
  {
    title: "Tools",
    value: "Tools",
    content: (
      <div className={tabStyle}>
        <p>Tools tab</p>
      </div>
    ),
  },
];

const TechTabs = () => {
  return (
    <div className="w-[60%] h-[20rem] [perspective:1000px] relative b flex flex-col items-start justify-start my-10">
      <h2 className="text-5xl tracking-wider font-semibold text-neutral-200">
        Tech Stack
      </h2>
      <p>
        These are the technical skills I learned in uni, at work or solely based
        on my passion
      </p>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TechTabs;

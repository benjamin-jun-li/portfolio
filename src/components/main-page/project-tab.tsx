import { Tabs } from "../ui/tabs";
import ProjectCard from "../projects/project-card";

const tabStyle =
  "w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-900 to-sky-950";

const tabs = [
  {
    title: "Draw Hero",
    value: "draw-hero",
    content: (
      <div className={tabStyle}>
        <ProjectCard text=""/>
      </div>
    ),
  },
  {
    title: "Tutor Trackr",
    value: "tutor-trackr",
    content: (
      <div className={tabStyle}>
        <ProjectCard text=""/>
      </div>
    ),
  },
  {
    title: "Tools",
    value: "Tools",
    content: (
      <div className={tabStyle}>
        <ProjectCard text=""/>
      </div>
    ),
  },
];

const ProjectTabs = () => {
  return (
    <div className="w-full h-[35rem] [perspective:1000px] relative b flex flex-col items-start justify-start my-10">
      <h2 className="text-5xl tracking-wider font-semibold text-neutral-200">
        Projects
      </h2>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default ProjectTabs;

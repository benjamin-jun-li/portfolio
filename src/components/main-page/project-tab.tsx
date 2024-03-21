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
        <ProjectCard
          title="Draw Hero"
          description="Team Collaborated Visual Tooling Platform"
          tech="TypeScript Next.js Tailwind CSS Convex"
          demo="https://draw-hero.vercel.app"
          source="https://github.com/benjamin-jun-li/draw-hero"
        />
      </div>
    ),
  },
  {
    title: "Tutor Trackr",
    value: "tutor-trackr",
    content: (
      <div className={tabStyle}>
        <ProjectCard
          title="Tutor Trackr"
          description="Tutor Management Platform"
          tech="TypeScript Next.js GraphQL Prisma MongoDB"
          source="https://github.com/benjamin-jun-li/tutor-trackr"
        />
      </div>
    ),
  },
  {
    title: "Big Brain",
    value: "big-brain",
    content: (
      <div className={tabStyle}>
        <ProjectCard title="Big Brain" description="A Kahoot-like quiz app made in COMP6080" tech="React.js Express.js" />
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

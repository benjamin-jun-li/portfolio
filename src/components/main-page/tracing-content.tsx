"use client";
import { TracingBeam } from "../ui/tracing-beam";
import ContactBoard from "./contact-board";
import ProjectTabs from "./project-tab";
import TechStack from "./tech-stack";
const TracingBeamContent = () => {
  return (
    <TracingBeam className="mt-10 w-[90%] xl:w-[70%]">
      <ProjectTabs />
      <TechStack />
      <ContactBoard />
    </TracingBeam>
  );
};

export default TracingBeamContent;

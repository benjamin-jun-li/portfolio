import Link from "next/link";
import DisplayBoard from "./display-board";
import { ImgInfo } from "@/lib/data";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  source?: string | null;
  demo?: string | null;
  info: ImgInfo[];
}

const ProjectCard = ({
  title,
  description,
  tech,
  source,
  demo,
  info,
}: ProjectCardProps) => {
  return (
    <div className="w-full h-full grid grid-cols-3 grid-rows-2">
      <div className="col-span-1 h-full w-full py-4 pr-6 flex flex-col justify-between">
        <section className="row-span-1">
          <h3>{title}</h3>
          <p className="text-lg my-8">
            {description}
            <br />
            Developed with {tech}
          </p>
        </section>
        <section className="row-span-1 w-full h-full flex flex-row justify-evenly text-2xl">
          {title.includes("More") ? (
            <Link href="/projects" className="hover:text-indigo-200">
              More Projects
            </Link>
          ) : (
            <ul className="w-full h-full flex flex-row justify-evenly">
              {demo && (
                <li>
                  <a target="_blank" href={demo}>
                    Demo
                  </a>
                </li>
              )}
              {source && (
                <li>
                  <a target="_blank" href={source}>
                    Source
                  </a>
                </li>
              )}
              {!demo && !source && (
                <li className="tracking-wide">Coming Soon!🥲</li>
              )}
            </ul>
          )}
        </section>
      </div>
      <DisplayBoard tabs={info} />
    </div>
  );
};

export default ProjectCard;

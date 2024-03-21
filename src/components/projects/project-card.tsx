import DisplayBoard from "./display-board";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  source?: string | null;
  demo?: string | null;
}

const ProjectCard = ({
  title,
  description,
  tech,
  source,
  demo,
}: ProjectCardProps) => {
  return (
    <div className="w-full h-full grid grid-cols-3">
      <article className="col-span-1 h-full w-full py-4 pr-6 flex flex-col justify-between">
        <section>
          <h3>{title}</h3>
          <p className="text-lg my-8">
            {description}
            <br />
            Developed with {tech}
          </p>
        </section>
        <section>
          <ul className="flex flex-row justify-evenly text-2xl">
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
        </section>
      </article>
      <DisplayBoard />
    </div>
  );
};

export default ProjectCard;

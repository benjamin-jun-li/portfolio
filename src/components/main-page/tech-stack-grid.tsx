import HoverTechIcon from "../ui/hover-icon";

const TechStackGrid = ({
  title,
  items,
}: {
  title: string;
  items: { [key: string]: string };
}) => {
  return (
    <section className="flex flex-col m-0 items-center">
      <h4 className="text-2xl">{title}</h4>
      <HoverTechIcon items={items} />
    </section>
  );
};

export default TechStackGrid;

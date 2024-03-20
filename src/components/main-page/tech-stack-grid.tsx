import { HoverEffect } from "../ui/card-hover-effect";

const TechStackGrid = ({ title, items }: { title: string, items: string[] }) => {
  return (
    <section className="flex flex-col m-0 items-center justify-center">
      <h4>{title}</h4>
      <HoverEffect items={items} />
    </section>
  );
};

export default TechStackGrid;

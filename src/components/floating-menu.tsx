import React, { memo } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { FaCode, FaProjectDiagram } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";
const FloatingMenu = memo(() => {
  const navItems = [
    {
      name: "Projects",
      link: "/projects",
      icon: <FaProjectDiagram />,
    },
    {
      name: "Posts",
      link: "/posts",
      icon: <MdOutlineEditNote />,
    },
    {
      name: "Code Snippets",
      link: "/snippets",
      icon: <FaCode />,
    },
  ];
  return (
    <aside>
      <FloatingNav navItems={navItems} />
    </aside>
  );
});

FloatingMenu.displayName = "FloatingMenu";

export default FloatingMenu;

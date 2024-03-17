"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { FaCode, FaProjectDiagram } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";
const FloatingMenu = () => {
  const navItems = [
    {
      name: "projects",
      link: "/projects",
      icon: <FaProjectDiagram />,
    },
    {
      name: "posts",
      link: "/posts",
      icon: <MdOutlineEditNote />,
    },
    {
      name: "code snippets",
      link: "/snippets",
      icon: <FaCode />,
    },
  ];
  return (
    <aside>
      <FloatingNav navItems={navItems} />
    </aside>
  );
};

export default FloatingMenu;

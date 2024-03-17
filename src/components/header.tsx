"use client";
import Link from "next/link";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { IoMenu } from "react-icons/io5";

const navbarLinkStyle =
  "px-2 py-1 text-lg font-semibold tracking-wide shadow-[0_6px_0_rgb(34,34,34)] hover:shadow-[0_4px_0px_rgb(34,34,34)] text-slate-200 bg-gradient-to-b from-cyan-700 to-cyan-900 ease-out hover:translate-y-0.5 transition-all rounded-md";

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between my-3 px-4 sm:px-6 md:px-16 lg:px-28 xl:px-60 2xl:px-72">
      <div className="flex items-center space-x-4">
        <Link className="flex items-center space-x-2" href="/">
          <Image
            src={"https://github.com/benjamin-jun-li.png"}
            alt="profile"
            width={45}
            height={45}
            className="rounded-md"
          />
          <span className="text-lg font-semibold tracking-tight">
            Benjamin Li
          </span>
        </Link>
      </div>
      <MobileNavMenu className="relative md:hidden" />
      <nav className="hidden md:flex items-center space-x-6 ">
        <a href="/projects" className={navbarLinkStyle}>
          projects
        </a>
        <a href="/posts" className={navbarLinkStyle}>
          posts
        </a>
        <a href="/snippets" className={navbarLinkStyle}>
          code snippets
        </a>
        <a
          target="_blank"
          className={navbarLinkStyle}
          href="https://drive.google.com/file/d/1Q-8epyxp0d-jNhaL2YjAS6q-sb_0NrUA/view?usp=drive_link"
        >
          resume/CV
        </a>
      </nav>
    </header>
  );
};

const MobileNavMenu = ({ className }: { className: string }) => {
  return (
    <NavigationMenu.Root className={className}>
      <NavigationMenu.List className="relative pt-2">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="flex flex-row justify-center items-center">
            <IoMenu />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute right-1 w-32 border-y-[2px] border-y-teal-800">
            <ul>
              <li className="hover:bg-slate-800 transition rounded-md p-2">
                <a href="/projects">projects</a>
              </li>
              <li className="hover:bg-slate-800 transition rounded-md p-2">
                <a href="/posts">posts</a>
              </li>
              <li className="hover:bg-slate-800 transition rounded-md p-2">
                <a href="/snippets">code snippets</a>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Header;

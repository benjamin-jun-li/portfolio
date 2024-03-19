"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import MobileMenuBar from "./mobile-menubar";

const navbarLinkStyle =
  "px-2 py-1 text-lg font-semibold tracking-wide text-slate-200 bg-gradient-to-b from-indigo-700 to-cyan-900 hover:scale-110 transition-transform duration-200 rounded-md";

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between items-center my-3 px-4 sm:px-6 md:px-16 lg:px-28 xl:px-60 2xl:px-72">
      <div className="flex items-center space-x-4">
        <Link className="flex items-center space-x-2" href="/">
          <motion.div
            animate={{
              rotate: [0, 30, 0, -30, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1,
              repeatType: "loop",
            }}
          >
            <Image
              src={"https://github.com/benjamin-jun-li.png"}
              alt="profile"
              width={45}
              height={45}
              className="rounded-md"
            />
          </motion.div>
          <span className="text-lg font-semibold tracking-tight">
            Benjamin Li
          </span>
        </Link>
      </div>
      <div className="relative md:hidden">
        <MobileMenuBar className="absolute -top-3 right-0 text-xl font-semibold" />
      </div>

      <nav className="hidden md:flex items-center space-x-6 ">
        <Link href="/projects" className={navbarLinkStyle}>
          projects
        </Link>
        <Link href="/posts" className={navbarLinkStyle}>
          posts
        </Link>
        <Link href="/snippets" className={navbarLinkStyle}>
          code snippets
        </Link>
        <Link
          target="_blank"
          className={navbarLinkStyle}
          href="https://drive.google.com/file/d/1Q-8epyxp0d-jNhaL2YjAS6q-sb_0NrUA/view?usp=drive_link"
        >
          resume/CV
        </Link>
      </nav>
    </header>
  );
};

export default Header;

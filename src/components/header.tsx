import Link from "next/link";
import Image from "next/image";

const navbarLinkStyle =
  "px-2 py-1 text-lg font-semibold tracking-wide shadow-[0_6px_0_rgb(34,34,34)] hover:shadow-[0_4px_0px_rgb(34,34,34)] text-slate-200 bg-gradient-to-b from-cyan-700 to-cyan-900 ease-out hover:translate-y-0.5 transition-all rounded-md";

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between my-3 px-4 sm:px-6 md:px-16 lg:px-28 xl:px-60 2xl:px-72">
      <div className="flex items-center space-x-4">
        <Link className="flex items-center space-x-2" href="#">
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
      <nav className="flex items-center space-x-6 ">
        <Link className={navbarLinkStyle} href="/projects">
          projects
        </Link>
        <Link className={navbarLinkStyle} href="/posts">
          posts
        </Link>
        <Link className={navbarLinkStyle} href="/snippets">
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

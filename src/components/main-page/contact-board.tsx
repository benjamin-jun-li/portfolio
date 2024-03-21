import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
const ContactBoard = () => {
  return (
    <section>
      <h2 className="text-5xl text-neutral-200 font-semibold my-8 flex">
        Get in touch <IoIosArrowForward />
      </h2>
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 rounded-2xl p-10 text-xl font-bold text-white bg-gradient-to-br from-slate-800/80 to-stone-800">
        <p className="text-3xl">
          Feel free to reach out if you wanna work with me or just have a chat✨
        </p>
        <div className="w-full h-full flex flex-row md:flex-col items-center justify-center gap-y-2">
          <a
            href="https://github.com/benjamin-jun-li"
            className="flex items-center gap-x-2 hover:text-indigo-300"
          >
            <FaGithub />
            benjamin-jun-li
          </a>
          <a
            href="mailto:benjaminli6@outlook.com"
            className="flex items-center gap-x-2 hover:text-indigo-300"
          >
            <MdAlternateEmail />
            benjaminli6@outlook.com
          </a>
          <a
            href="https://www.linkedin.com/in/jun-benjamin-li/"
            className="flex items-center gap-x-2 hover:text-indigo-300"
          >
            <FaLinkedin />
            Benjamin Li
          </a>
          <a
            href="https://discord.com/users/983185266028195902"
            className="flex items-center gap-x-2 hover:text-indigo-300"
          >
            <FaDiscord />
            benjaminleee
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactBoard;

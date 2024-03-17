import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-4 w-full h-fit flex flex-col justify-center items-center relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 bg-[#134F5C] w-4/5 rounded-md shadow-[0_0_5px_#fff,inset_0_0_10px_#fff,0_0_10px_#08f,0_0_15px_#08f,0_0_30px_#08f]"></div>
      <p className="my-6 text-lg">
        Made by Benjamin with <em className="animate-pulse">💫</em> on 🌏
      </p>
      <div className="w-fit grid grid-cols-2 gap-x-3">
        <ul className="col-span-1 space-y-2">
          <li>
            <Link href="#" className="w-full flex hover:underline">
              <IoHomeOutline className="w-6 h-6" />
              &nbsp;Home
            </Link>
          </li>
          <li>
            <a
              className="hover:underline w-full flex"
              href="mailto:benjaminli6@outlook.com"
            >
              <MdOutlineEmail className="w-6 h-6" />
              &nbsp;Email
            </a>
          </li>
        </ul>
        <ul className="col-span-1 space-y-2">
          <li>
            <a href="#" className="hover:underline w-full flex">
              <FaLinkedin className="w-6 h-6" />
              &nbsp;Linkedin
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline w-full flex">
              <FaGithub className="w-6 h-6" />
              &nbsp;Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4 w-full flex flex-col justify-center items-center relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 bg-[#134F5C] w-4/5 rounded-md"></div>
      <p className="my-6">Made with 💫 on 🌏</p>
      <div className="grid grid-cols-2">
        <ul className="col-span-1">
          <li>Home</li>
          <li>Email</li>
        </ul>
        <ul className="col-span-1">
          <li>Linkedin</li>
          <li>Github</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

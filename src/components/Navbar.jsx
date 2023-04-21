import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Vector.png";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-200">
      <div className="ml-2">
        <img src={Logo} alt="Logo img" width={40} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="text-xl inline hover:border-b-2 border-[#f152af]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-xl inline hover:border-b-2 border-[#f152af]">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-xl inline hover:border-b-2 border-[#f152af]">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="text-xl inline hover:border-b-2 border-[#f152af]">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="text-xl inline hover:border-b-2 border-[#f152af]">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* burger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* mob menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-2xl inline hover:border-b-2 border-[#f152af]">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl inline hover:border-b-2 border-[#f152af]">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-2xl inline hover:border-b-2 border-[#f152af]">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-2xl inline hover:border-b-2 border-[#f152af]">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-2xl inline hover:border-b-2 border-[#f152af]">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden fixed lg:flex flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://www.linkedin.com/in/denys-barabanov-9a79b913b"
              target="blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://github.com/umbrach"
              target="blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1a78dd]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://t.me/umbrach"
              target="blank"
            >
              Telegram <FaTelegram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9e8f19]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://drive.google.com/file/d/1i5BPnsPc48gSIsLR09bprZE9coj1qi1D/view?usp=share_link"
              target="blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

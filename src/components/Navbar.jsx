import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo_official.png";
import {
  AiFillHome,
  AiFillBook,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <nav
      className={`navbar bg-black flex h-64 w-full fixed-top items-center px-40`}
    >
      <Link to={"/"} className="text-[8rem] text-diveGreen ">
        Matheus
      </Link>

      <div className="nav-links flex justify-between items-center mt-0 gap-[20px]">
        <a
          className="text-[4rem] font-[260] bg-normalBlue p-2 text-diveGreen hover:underline hover:text-white"
          href="#main"
          title="Home"
        >
          Home
        </a>
        <a
          className="text-[4rem] font-[260] text-diveGreen hover:underline hover:text-white"
          href="#about"
          title="About"
        >
          About
        </a>
        <a
          className="text-[4rem] font-[260] text-diveGreen hover:underline hover:text-white"
          href="#technologies"
          title="Technologies"
        >
          Technologies
        </a>
        <a
          className="text-[4rem] font-[260] text-diveGreen hover:underline hover:text-white"
          href="#projects"
          title="Projects"
        >
          Projects
        </a>
        <a
          className="text-[4rem] font-[260] text-diveGreen hover:underline hover:text-white"
          href="#linkedin"
          title="Linkedin"
        >
          Linkedin
        </a>
        <a
          className="text-[4rem] font-[260] text-diveGreen hover:underline hover:text-white"
          href="#github"
          title="Github"
        >
          Github
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

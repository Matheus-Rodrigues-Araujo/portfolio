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
      className={`navbar flex bg-lightYellow h-64 w-full fixed-top items-center px-40`}
    >
      <Link to={"/"} className="text-[8rem]">
        Matheus
      </Link>

      <div className="nav-links flex justify-between items-center mt-0 gap-[20px]">
        <a
          className="text-[4rem] font-[260] bg-normalBlue text-black hover:underline"
          href="#main"
          title="Home"
        >
          Home
        </a>
        <a
          className="text-[4rem] font-[260] text-black hover:underline"
          href="#about"
          title="About"
        >
          About
        </a>
        <a
          className="text-[4rem] font-[260] text-black hover:underline"
          href="#technologies"
          title="Technologies"
        >
          Technologies
        </a>
        <a
          className="text-[4rem] font-[260] text-black hover:underline"
          href="#projects"
          title="Projects"
        >
          Projects
        </a>
        <a
          className="text-[4rem] font-[260] text-black hover:underline"
          href="#linkedin"
          title="Linkedin"
        >
          Linkedin
        </a>
        <a
          className="text-[4rem] font-[260] text-black hover:underline"
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

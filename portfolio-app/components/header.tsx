"use client";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useState } from "react";

export default function Header() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleSidebarVisibility = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <header>
      <nav className="fixed bg-light-dark font-orbitron h-[60px] z-10 flex items-center justify-between gap-12 my-auto w-full">
        <Link href="/" className="brand">
          Matheus R. Araujo.
        </Link>
        <ul className="hidden lg:flex gap-12 text-[4rem]">
          <Link className="item" href="#main">
            Home
          </Link>
          <Link className="item" href="#about">
            About
          </Link>
          <Link className="item" href="#projects">
            Projects
          </Link>
          <Link className="item" href="#contact">
            Contact
          </Link>
        </ul>

        <div onClick={handleSidebarVisibility} className="toggle cursor-pointer grid gap-3 w-40 lg:hidden">
          <div className="ml-auto w-full h-8 bg-white"></div>
          <div className="ml-auto w-10/12 h-8 bg-white"></div>
          <div className="ml-auto w-8/12 h-8 bg-white"></div>
        </div>
        {isSidebarActive && (
          <div className="sidebar bg-light-dark justify-around fixed top-0 right-0 h-screen z-1 p-20">
            <div className="flex flex-col justify-between h-full">
              <ul className="grid justify-end gap-16 text-[4rem] text-end">
                <div
                  onClick={handleSidebarVisibility}
                  className="close-toggle-btn cursor-pointer text-end"
                >
                  <span>X</span>
                </div>

                <Link className="item text-[7rem] hover:underline" href="#main">
                  Home
                </Link>
                <Link
                  className="item text-[7rem] hover:underline"
                  href="#about"
                >
                  About
                </Link>
                <Link
                  className="item text-[7rem] hover:underline"
                  href="#projects"
                >
                  Projects
                </Link>
                <Link
                  className="item text-[7rem] hover:underline"
                  href="#contact"
                >
                  Contact
                </Link>
              </ul>

              <div className="mt-10 sidebar-social-links flex justify-end mb-60 md:mb-0 gap-10">
                <Link
                  href="https://www.linkedin.com/in/matheus-rodrigues-araujo/"
                  target="_blank"
                  title="Linkedin"
                >
                  <FaLinkedin className="w-40 h-40" />
                </Link>
                <Link
                  href="https://github.com/Matheus-Rodrigues-Araujo"
                  target="_blank"
                  title="Github"
                >
                  <FaGithub className="w-40 h-40" />
                </Link>
                <Link href="#">
                  <RiInstagramFill
                    className="w-40 h-40"
                    title="Instagram"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

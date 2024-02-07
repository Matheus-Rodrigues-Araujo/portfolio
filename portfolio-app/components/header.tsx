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
      <nav className="font-orbitron h-[60px] flex items-center justify-between gap-12 my-auto w-full">
        <Link href="/" className="brand">
          Matheus R. Araujo.
        </Link>
        <ul className="hidden md:flex gap-12 text-[4rem]">
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

        <div onClick={handleSidebarVisibility} className="toggle cursor-pointer grid gap-2 w-40 md:hidden">
          <div className="w-full h-6 bg-light-green"></div>
          <div className="w-full h-6 bg-light-green"></div>
          <div className="w-full h-6 bg-light-green"></div>
        </div>
        {isSidebarActive && (
          <div className="sidebar justify-around fixed top-0 right-0 h-screen z-10 bg-dark p-20">
            <div className="flex flex-col justify-between h-full">
              <ul className="grid justify-end gap-16 text-[4rem] text-end">
                <div
                  onClick={handleSidebarVisibility}
                  className="close-toggle-btn cursor-pointer text-end text-light-green text-[8rem]"
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

              <div className="mt-10 social-links flex justify-end gap-10">
                <Link
                  href="https://www.linkedin.com/in/matheus-rodrigues-araujo/"
                  target="_blank"
                  title="Linkedin"
                >
                  <FaLinkedin className="w-40 h-40  text-light-green" />
                </Link>
                <Link
                  href="https://github.com/Matheus-Rodrigues-Araujo"
                  target="_blank"
                  title="Github"
                >
                  <FaGithub className="w-40 h-40  text-light-green" />
                </Link>
                <Link href="#">
                  <RiInstagramFill
                    className="w-40 h-40 text-light-green"
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

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
      <nav className="fixed navbar bg-dark font-orbitron h-[60px] z-10 flex items-center justify-between gap-12 my-auto w-full">
        <Link href="/" className="brand">
          &lt;Matheus<span>WebCoder</span>/&gt;
        </Link>
        <ul className="hidden lg:flex gap-20 text-[4rem]">
          <li className="item">
            <Link href="#main">Home</Link>
          </li>
          <li className="item">
            <Link href="#about">About</Link>
          </li>
          <li className="item">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="item">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        <div
          onClick={handleSidebarVisibility}
          className="toggle cursor-pointer grid gap-3 w-40 lg:hidden"
        >
          <div className="ml-auto w-full bg-white"></div>
          <div className="ml-auto w-10/12 bg-white"></div>
          <div className="ml-auto w-8/12 bg-white"></div>
        </div>
        {isSidebarActive && (
          <div className="sidebar lg:hidden bg-dark justify-around fixed top-0 right-0 h-screen z-1 p-20">
            <div className="flex flex-col justify-between h-full">
              <ul className="grid justify-end gap-16 text-[4rem] text-end">
                <div
                  onClick={handleSidebarVisibility}
                  className="close-toggle-btn cursor-pointer text-end"
                >
                  <span>X</span>
                </div>

                <li className="item">
                  <Link href="#main">Home</Link>
                </li>
                <li className="item">
                  <Link href="#about">About</Link>
                </li>
                <li className="item">
                  <Link href="#projects">Projects</Link>
                </li>
                <li className="item">
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>

              <div className="mt-10 sidebar-social-links flex justify-end mb-60 md:mb-0 gap-10">
                <Link
                  href="https://www.linkedin.com/in/matheus-rodrigues-araujo/"
                  target="_blank"
                  title="Linkedin"
                >
                  <FaLinkedin className="w-32 h-32 md:w-40 md:h-40 text-purple" />
                </Link>
                <Link
                  href="https://github.com/Matheus-Rodrigues-Araujo"
                  target="_blank"
                  title="Github"
                >
                  <FaGithub className="w-32 h-32 md:w-40 md:h-40 text-purple" />
                </Link>
                <Link
                  href="https://www.instagram.com/_matheus_rodrigues_araujo_/"
                  target="_blank"
                  title="Instagram"
                >
                  <RiInstagramFill className="w-32 h-32 md:w-40 md:h-40 text-purple" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

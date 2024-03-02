'use client';
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Sidebar({
  handleSidebarVisibility,
}: {
  handleSidebarVisibility: () => void;
}) {
  return (
    <div className="sidebar w-[320px] lg:hidden bg-dark justify-around fixed top-0 right-0 h-screen z-1 p-20">
      <div className="flex flex-col justify-between h-full">
        <ul className="grid justify-end gap-16 text-[4rem] text-end">
          <div
            onClick={handleSidebarVisibility}
            className="close-toggle-btn cursor-pointer text-end hover:transition 200 ease-in-out"
          >
            <span>X</span>
          </div>

          <li className="item hover:scale-110 hover:transition 200 ease-in-out">
            <Link href="#main">Home</Link>
          </li>
          <li className="item hover:scale-110 hover:transition 200 ease-in-out ">
            <Link href="#about">About</Link>
          </li>
          <li className="item hover:scale-110 hover:transition 200 ease-in-out ">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="item hover:scale-110 hover:transition 200 ease-in-out ">
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
  );
}
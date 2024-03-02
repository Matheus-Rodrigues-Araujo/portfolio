'use client'
import dynamic from "next/dynamic";
const DynamicLink = dynamic(() => import('next/link'))
import { useState, lazy, Suspense } from "react";

const Sidebar = lazy(() => import("./sidebar"));

export default function Header() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleSidebarVisibility = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <header style={{ fontFamily: "var(--font-orbitron)" }}>
      <nav className="fixed navbar bg-dark font-orbitron h-[60px] z-10 flex items-center justify-between gap-12 my-auto w-full">
        <DynamicLink
          href="/"
          className="brand text-white font-[700] text-[5rem] md:text-[5.5rem] lg:text-[7rem] hover:scale-110 hover:transition 200 ease-in-out"
          style={{ textShadow: "-2px 3px 0px var(--purple)" }}
        >
          &lt;Matheus<span className="text-pink">WebCoder</span>/&gt;
        </DynamicLink>
        <ul className="hidden lg:flex gap-20 text-[4rem]">
          <li
            className="item hover:scale-110 hover:transition 200 ease-in-out"
            style={{ textShadow: "-2px 3px 0px var(--purple)" }}
          >
            <DynamicLink href="#main">Home</DynamicLink>
          </li>
          <li
            className="item hover:scale-110 hover:transition 200 ease-in-out"
            style={{ textShadow: "-2px 3px 0px var(--purple)" }}
          >
            <DynamicLink href="#about">About</DynamicLink>
          </li>
          <li
            className="item hover:scale-110 hover:transition 200 ease-in-out"
            style={{ textShadow: "-2px 3px 0px var(--purple)" }}
          >
            <DynamicLink href="#projects">Projects</DynamicLink>
          </li>
          <li
            className="item hover:scale-110 hover:transition 200 ease-in-out"
            style={{ textShadow: "-2px 3px 0px var(--purple)" }}
          >
            <DynamicLink href="#contact">Contact</DynamicLink>
          </li>
        </ul>

        <div
          onClick={handleSidebarVisibility}
          className="toggle cursor-pointer grid gap-3 w-40 lg:hidden hover:transition 200 ease-in-out"
        >
          <div className="ml-auto w-full bg-white"></div>
          <div className="ml-auto w-10/12 bg-white"></div>
          <div className="ml-auto w-8/12 bg-white"></div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {isSidebarActive && (
            <Sidebar handleSidebarVisibility={handleSidebarVisibility} />
          )}
        </Suspense>
      </nav>
    </header>
  );
}

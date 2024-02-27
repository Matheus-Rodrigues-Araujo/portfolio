"use client";
import Link from "next/link";
import { useState, lazy, Suspense } from "react";
// import Sidebar from "./sidebar";
const Sidebar = lazy(() => import("./sidebar"));

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
          onClick={() => setIsSidebarActive(!isSidebarActive)}
          className="toggle cursor-pointer grid gap-3 w-40 lg:hidden"
        >
          <div className="ml-auto w-full bg-white" onClick={() => setIsSidebarActive(!isSidebarActive)}></div>
          <div className="ml-auto w-10/12 bg-white" onClick={() => setIsSidebarActive(!isSidebarActive)}></div>
          <div className="ml-auto w-8/12 bg-white" onClick={() => setIsSidebarActive(!isSidebarActive)}></div>
        </div>
        <Suspense>
          {isSidebarActive && <Sidebar handleSidebarVisibility={handleSidebarVisibility}/>}
        </Suspense>
      </nav>
    </header>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="font-orbitron flex items-center justify-between bg-light-dark z-10 fixed top-0 h-[50px] w-full">
      <Link
        href="/"
        className="brand font-bold text-[3.5rem] text-white transistion duration-300 ease-in-out"
      >
        Matheus R. Araujo.
      </Link>
      <ul className="nav-list">
        <Link className="item" href="#main" >
          Home
        </Link>
        <Link className="item" href="#about"  >
          About
        </Link>
        <Link className="item" href="#projects" >
          Projects
        </Link>
        <Link className="item" href="#contact" >
          Contact
        </Link>
      </ul>
    </nav>
  );
}

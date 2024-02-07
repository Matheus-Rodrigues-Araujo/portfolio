import Link from "next/link";

export default function Header() {
  return (
    <header >
      <nav className="font-orbitron  justify-between my-auto w-full">
        <Link href="/" className="brand">
          Matheus R. Araujo.
        </Link>
        <ul>
          <Link className=" " href="#main">
            Home
          </Link>
          <Link className="" href="#about">
            About
          </Link>
          <Link className="" href="#projects">
            Projects
          </Link>
          <Link className="" href="#contact">
            Contact
          </Link>
        </ul>

        <div className="toggle" >
          <span className="w-5 h-5 bg-light-green" ></span>
          <span className="w-5 h-5 bg-light-green"></span>
          <span className="w-5 h-5 bg-light-green"></span>
        </div>
      </nav>
    </header>
  );
}

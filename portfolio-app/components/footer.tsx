import Link from 'next/link';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="flex h-[100px] bg-light-green py-20 md:py-0">
      <div className="footer-container flex flex-col grow items-center justify-evenly ">
        <div className="flex justify-center" >
          <FaLinkedin className="icon" />
          <FaGithub className="icon" />
          <RiInstagramFill className="icon" />
        </div>
        <ul className="flex gap-10" >
          <Link className="item text-dark font-600 text-[4rem]" href="#main">
            Home
          </Link>
          <Link className="item text-dark font-600 text-[4rem]" href="#about">
            About
          </Link>
          <Link className="item text-dark font-600 text-[4rem]" href="#projects">
            Projects
          </Link>
          <Link className="item text-dark font-600 text-[4rem] " href="#contact">
            Contac
          </Link>
        </ul>

        <p className="font-raleway text-[4.2rem] font-normal text-dark" >© matheusrodriguesaraujo.dev 2024</p>
      </div>
    </footer>
  );
}

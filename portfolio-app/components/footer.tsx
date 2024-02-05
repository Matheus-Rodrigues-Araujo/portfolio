import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="flex h-[20svh] bg-light-green text-[3rem]" >
      <div className="footer-container flex flex-col grow items-center justify-evenly ">
        <div className="flex justify-center" >
          <FaLinkedin className="icon" />
          <FaGithub className="icon" />
          <RiInstagramFill className="icon" />
        </div>
        <ul className="flex gap-10" >
          <a className="item" href="#main">
            Home
          </a>
          <a className="item" href="#about">
            About
          </a>
          <a className="item" href="#projects">
            Projects
          </a>
          <a className="item" href="#contact">
            Contact
          </a>
        </ul>

        <p className="font-raleway font-400" >© matheusrodriguesaraujo.dev 2024</p>
      </div>
    </footer>
  );
}

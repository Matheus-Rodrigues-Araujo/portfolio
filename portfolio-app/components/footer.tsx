import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="h-[20svh]" >
      <div className="footer-container">
        <div>
          <FaLinkedin className="icon" />
          <FaGithub className="icon" />
          <RiInstagramFill className="icon" />
        </div>
        <ul>
          <a className="active item" href="#main">
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

        <p>© matheusrodriguesaraujo.dev 2024</p>
      </div>
    </footer>
  );
}

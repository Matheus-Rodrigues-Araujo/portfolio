import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import MouseAnimation from "../components/scrollMouse";
import Link from "next/link";

export default function Introduction() {
  return (
    <div className="section introduction">
      <div className="greetings">
        <h1 className="name" id="name">
          Matheus Rodrigues Araujo
        </h1>
        <h2 className="position" id="position">
          Front-End Developer
        </h2>
        <p className="phrase">
          Passionate about crafting visually stunning websites. Dedicated to
          turning ideas into reality through frontend development. Let's
          collaborate to transform concepts into incredible digital experiences.
          Join me in creating a unique digital universe.
        </p>

        <div className="contact-buttons">
          <button className="">Hire me</button>
          <button className="">Resume</button>
        </div>
      </div>

      <div>
        <div className="social-links">
          <Link
            href="https://www.linkedin.com/in/matheus-rodrigues-araujo/"
            target="_blank"
            title="Linkedin"
          >
            <FaLinkedin className="icon" />
          </Link>
          <Link
            href="https://github.com/Matheus-Rodrigues-Araujo"
            target="_blank"
            title="Github"
          >
            <FaGithub className="icon" />
          </Link>
          <Link href="#">
            <RiInstagramFill className="icon" title="Instagram" />
          </Link>
        </div>
      </div>

      <MouseAnimation />
    </div>
  );
}

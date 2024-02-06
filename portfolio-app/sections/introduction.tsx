import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import MouseAnimation from "../components/scrollMouse";
import Link from "next/link";

export default function Introduction() {
  return (
    <section className="section introduction">
      <div className="">
        <h1 className="font-orbitron text-[12rem] text-white mt-[50px]">
          Matheus Rodrigues Araujo <br/>
          <span className="position text-light-green" id="position">
          Front-End Developer</span>
        </h1>
        <p className="font-raleway phrase">
          Passionate about crafting visually stunning websites. Dedicated to
          turning ideas into reality through frontend development. Let's
          collaborate to transform concepts into incredible digital experiences.
          Join me in creating a unique digital universe.
        </p>

        <div className="contact-buttons flex gap-12 mt-10">
          <button className="text-[5rem] cursor-pointer border-0 p-8">Hire me</button>
          <button className="text-[5rem] cursor-pointer border-0 p-8">Resume</button>
        </div>
      </div>

      <div>
        <div className="social-links flex gap-10">
          <Link
            href="https://www.linkedin.com/in/matheus-rodrigues-araujo/"
            target="_blank"
            title="Linkedin"
          >
            <FaLinkedin className="w-32 h-32 p-2 text-light-green" />
          </Link>
          <Link
            href="https://github.com/Matheus-Rodrigues-Araujo"
            target="_blank"
            title="Github"
          >
            <FaGithub className="w-32 h-32 p-2 text-light-green" />
          </Link>
          <Link href="#">
            <RiInstagramFill className="w-32 h-32 p-2 text-light-green" title="Instagram" />
          </Link>
        </div>
      </div>

      <MouseAnimation />
    </section>
  );
}

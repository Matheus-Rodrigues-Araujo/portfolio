import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { DynamicLink } from "./dynamicLink";
export default function DynamicFooterLinks() {
  return (
    <>
      <div className="flex justify-center gap-5">
        <DynamicLink
          href="https://www.linkedin.com/in/matheus-rodrigues-araujo/"
          target="_blank"
          title="Linkedin"
        >
          <FaLinkedin className="icon p-0 hover:text-purple hover:bg-white hover:rounded-[5em]" />
        </DynamicLink>
        <DynamicLink
          href="https://github.com/Matheus-Rodrigues-Araujo"
          target="_blank"
          title="Github"
        >
          <FaGithub className="icon text-white hover:text-purple hover:bg-white hover:rounded-[5em]" />
        </DynamicLink>
        <DynamicLink
          href="https://www.instagram.com/_matheus_rodrigues_araujo_/"
          target="_blank"
          title="Instagram"
        >
          <RiInstagramFill className="icon hover:text-purple hover:bg-white hover:rounded-[5em]" />
        </DynamicLink>
      </div>
      <ul className="flex gap-10">
        <li>
          <DynamicLink
            className="item text-dark font-600 text-[4rem] hover:underline"
            href="#main"
          >
            Home
          </DynamicLink>
        </li>
        <li>
          <DynamicLink
            className="item text-dark font-600 text-[4rem] hover:underline"
            href="#about"
          >
            About
          </DynamicLink>
        </li>
        <li>
          <DynamicLink
            className="item text-dark font-600 text-[4rem] hover:underline"
            href="#projects"
          >
            Projects
          </DynamicLink>
        </li>
        <li>
          <DynamicLink
            className="item text-dark font-600 text-[4rem] hover:underline"
            href="#contact"
          >
            Contact
          </DynamicLink>
        </li>
      </ul>
    </>
  );
}

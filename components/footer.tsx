import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="flex h-[100px] bg-purple mt-40 py-20 md:py-0 md:mt-0">
      <div className="footer-container flex flex-col grow items-center justify-evenly ">
        <div className="flex justify-center gap-5">
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
          <Link
            href="https://www.instagram.com/_matheus_rodrigues_araujo_/"
            target="_blank"
            title="Instagram"
          >
            <RiInstagramFill className="icon" />
          </Link>
        </div>
        <ul className="flex gap-10">
          <li>
            <Link className="item text-dark font-600 text-[4rem]" href="#main">
              Home
            </Link>
          </li>
          <li>
            <Link className="item text-dark font-600 text-[4rem]" href="#about">
              About
            </Link>
          </li>
          <li>
            <Link
              className="item text-dark font-600 text-[4rem]"
              href="#projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="item text-dark font-600 text-[4rem] "
              href="#contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        <p className="text-[4rem] font-normal text-white">
          © matheuswebcoder.vercel.app 2024
        </p>
      </div>
    </footer>
  );
}

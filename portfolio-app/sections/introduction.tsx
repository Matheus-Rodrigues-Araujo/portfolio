import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import MouseAnimation from "../components/scrollMouse";
import Link from "next/link";
import Image from "next/image";
import profileImg from "../assets/purple-thumb.png";

export default function Introduction() {
  return (
    <section className="section w-full bg-light-dark justify-center items-start introduction flex flex-col-reverse xl:flex-row lg:items-center py-40 lg:py-0 ">
      <div className="flex flex-col">
        <h1 className="font-orbitron text-white text-[6rem] md:text-[10rem] lg:text-[12rem]">
          Matheus Rodrigues Araujo <br />
          <span className="position text-purple font-bold" id="position">
            Front-End Developer
          </span>
        </h1>
        <p className="font-raleway text-light-gray  text-[5rem] w-10/12">
          Passionate about crafting visually stunning websites. Dedicated to
          turning ideas into reality through frontend development. Let's
          collaborate to transform concepts into incredible digital experiences.
          Join me in creating a unique digital universe.
        </p>

        <div className="contact-buttons flex gap-12 mt-10">
          <button className="text-[6rem] text-white cursor-pointer border-0 p-8 md:text-[7rem]">
            Hire me
          </button>
          <button className="text-[6rem] text-white cursor-pointer border-0 p-8 md:text-[7rem]">
            Resume
          </button>
        </div>

        <div className="mt-10 social-links flex gap-10">
          <Link
            href="https://www.linkedin.com/in/matheus-rodrigues-araujo/"
            target="_blank"
            title="Linkedin"
          >
            <FaLinkedin className="w-40 h-40 text-purple" />
          </Link>
          <Link
            href="https://github.com/Matheus-Rodrigues-Araujo"
            target="_blank"
            title="Github"
          >
            <FaGithub className="w-40 h-40  text-purple" />
          </Link>
          <Link href="#">
            <RiInstagramFill
              className="w-40 h-40  text-purple"
              title="Instagram"
            />
          </Link>
        </div>

        <MouseAnimation />
      </div>

      <figure className="w-full flex justify-center xl:justify-end">
        <Image
          src={profileImg}
          alt="Thumb photo"
          className="rounded-full w-[50%] xl:w-auto bg-light-dark"
        />
      </figure>


    </section>
  );
}

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import MouseAnimation from "../components/scrollMouse";
import Link from "next/link";
import Image from "next/image";
import profileImg from "../assets/purple-thumb.png";

export default function Introduction() {
  return (
    <section className="md:mt-[60px] section w-full bg-light-dark justify-center items-start introduction flex flex-col-reverse xl:flex-row lg:items-center py-40 lg:py-0 ">
      <div className="flex flex-col">
        <h1 className="font-orbitron text-purple font-bold max-[400px]:text-[5rem] text-[6rem] md:text-[10rem] lg:text-[12rem]">
          Matheus Rodrigues Araujo <br />
          <span className="position text-white font-600" id="position">
            Front-End Developer
          </span>
        </h1>
        <p className="font-raleway text-light-gray text-[4.5rem]  md:text-[5rem] md:w-10/12">
          Hello! I'm Matheus Rodrigues Araujo, a skilled front-end developer
          with expertise in JavaScript, TypeScript, React, Next.js, and other
          modern web technologies. I have a passion for creating dynamic and
          user-friendly web experiences that delight users and meet clients'
          needs.
        </p>

        <div className="contact-buttons flex gap-14 mt-10">
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
            <FaLinkedin className="w-32 h-32 md:w-40 md:h-40 text-purple" />
          </Link>
          <Link
            href="https://github.com/Matheus-Rodrigues-Araujo"
            target="_blank"
            title="Github"
          >
            <FaGithub className="w-32 h-32 md:w-40 md:h-40  text-purple" />
          </Link>
          <Link href="#">
            <RiInstagramFill
              className="w-32 h-32 md:w-40 md:h-40  text-purple"
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

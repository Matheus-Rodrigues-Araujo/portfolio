"use server";
import "../styles/introduction.css";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const loadProfilImg = () => {
  return '/assets/images/purple-thumb.png'
}

export default async function Introduction() {
  return (
    <section
      id="main"
      className="md:mt-[60px] section w-full bg-dark justify-center items-start introduction flex flex-col-reverse xl:flex-row lg:items-center py-40 lg:py-0 "
    >
      <div className="flex flex-col">
        <h1 className="text-pink font-bold max-[400px]:text-[5rem] text-[6rem] md:text-[10rem] lg:text-[12rem]">
          Matheus Rodrigues Araujo <br />
          <span className="position text-white font-600" id="position">
            Front-End Developer
          </span>
        </h1>
        <p className="text-light-gray text-[4.5rem]  md:text-[5rem] md:w-10/12">
          Hello! I'm Matheus Rodrigues Araujo, a skilled front-end developer
          with expertise in JavaScript, TypeScript, React, Next.js, and other
          modern web technologies. I have a passion for creating dynamic and
          user-friendly web experiences that delight users and meet clients'
          needs.
        </p>

        <div className="contact-buttons flex gap-20 mt-10">
          <a
            href="mailto:matheusrodriguesaraujo13@gmail.com"
            className="text-[6rem] bg-purple text-white cursor-pointer border-0 p-8 hover:scale-110 transition 200 ease-in-out md:text-[7rem]"
          >
            Let's Talk
          </a>
          <a
            href="/resumes/en-us/Resume _ Matheus Rodrigues Araujo - Frontend Developer.pdf"
            download="Resume _ Matheus Rodrigues Araujo - Frontend Developer.pdf"
            className="flex items-center text-[6rem] text-purple cursor-pointer border-0 p-8 hover:scale-110 transition 200 ease-in-out md:text-[7rem]"
          >
            <FaFileDownload />
            Resume
          </a>
        </div>

        <div className="mt-10 social-links flex gap-10">
          <Link
            href="https://www.linkedin.com/in/matheus-rodrigues-araujo/"
            target="_blank"
            title="Linkedin"
          >
            <FaLinkedin className="w-32 h-32 hover:scale-110 transition 200 ease-in-out hover:text-white md:w-40 md:h-40 text-purple" />
          </Link>
          <Link
            href="https://github.com/Matheus-Rodrigues-Araujo"
            target="_blank"
            title="Github"
          >
            <FaGithub className="w-32 h-32 hover:scale-110 transition 200 ease-in-out hover:text-white md:w-40 md:h-40  text-purple" />
          </Link>
          <Link
            href="https://www.instagram.com/_matheus_rodrigues_araujo_/"
            target="_blank"
            title="Instagram"
          >
            <RiInstagramFill className="w-32 h-32 hover:scale-110 transition 200 ease-in-out hover:text-white md:w-40 md:h-40  text-purple" />
          </Link>
        </div>
      </div>

      <div className="relative w-full flex justify-center h-[25vh] lg:h-[50vh] xl:justify-end">
        <Image
          src={loadProfilImg()}
          alt="Thumb photo"
          priority
          objectFit="contain"
          fill
        />
      </div>
    </section>
  );
}

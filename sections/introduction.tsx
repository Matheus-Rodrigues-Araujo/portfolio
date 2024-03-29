"use server";
import "../styles/introduction.css";
import { FaFileDownload } from "react-icons/fa";
import DynamicIntroductionLinks from "../components/dynamicIntroductionLinks";
import DynamicPersonalPicture from "../components/dynamicPersonalPicture";

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
        <DynamicIntroductionLinks/>
      </div>

      <DynamicPersonalPicture />
    </section>
  );
}

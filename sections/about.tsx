"use server";
import path from "path";
import { technologies } from "../constants/technologies";
import dynamic from "next/dynamic";

export default async function About() {
  return (
    <section className="about  bg-dark py-40 md:py-0" id="about">
      <div className="about-content grid grid-cols-1">
        <h2 className="text-[10rem] md:text-[12rem] font-bold">About me</h2>

        <div className="wrapper flex flex-col h-full gap-20 mt-10 ">
          <div className="flex-1 py-20 border-b-2 border-purple md:border-b-0  lg:py-0 lg:px-5">
            <h3 className="text-[7rem] text-purple">Problem solver</h3>
            <p className="text-[4.5rem] lg:w-1/2 md:text-[5rem] text-light-gray">
              Hi, I'm Matheus Rodrigues Araujo, a{" "}
              <strong className="job">Front-End Developer</strong> from Ceará,
              Brazil. Currently in the 8th semester of Information Systems at
              IFCE. My expertise is developing websites and web applications
              that are responsive, attractive and performant.
            </p>

            <p className="text-[4.5rem] md:text-[5rem] lg:w-1/2 techs text-light-gray">
              I have experience with <strong>JavaScript</strong>,{" "}
              <strong>TypeScript</strong>, <strong>React</strong>,{" "}
              <strong> Next</strong>, <strong>CSS</strong>,{" "}
              <strong>SCSS</strong>, <strong>Tailwind</strong> and more.
            </p>
          </div>

          <div className="flex-1">
            <h3 className="text-[7rem] text-purple">Technologies</h3>
            <ul className="technologies-list lg:w-1/2">
              {technologies.map((item) => (
                <li className="tech-item" key={item.name} title={item.name}>
                  <p>{item.name}</p>
                  {item.symbol}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

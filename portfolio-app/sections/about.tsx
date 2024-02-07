import Image from "next/image";
import profileImg from "../assets/profile-thumb.png";
import { technologies } from "../constants/technologies";

export default function About() {
  return (
    <section className="about bg-dark py-40 md:py-0" id="about">
      <h2 className="font-orbitron text-[6rem]">About me</h2>
      <div className="about-content lg:grid grid-cols-2">
        <figure>
          <Image
            className="profile-img object-cover mx-auto max-w-[30%] lg:mx-0 lg:max-w-[70%]"
            src={profileImg}
            alt="My profile thumb"
          />
        </figure>

        <div className="grid gap-5 my-5">
          <div className="flex flex-col gap-5">
            <h3 className="text-[5rem] text-light-green">Problem Solver</h3>
            <p className="font-raleway text-[4.5rem] text-light-gray">
              Hi, I'm Matheus Rodrigues Araujo, a{" "}
              <span className="job">frontend developer</span> from Ceará,
              Brazil. Currently in the 8th semester of Information Systems at
              IFCE. Specialized in crafting responsive, attractive, and
              efficient websites and web applications.
            </p>
            <p className="font-raleway text-[4.5rem] text-light-gray">
              I am currently studying the 8th semester of the Information
              Systems bachelor's degree at IFCE. My expertise is developing
              websites and web applications that are responsive, attractive and
              performant.
            </p>

            <p className="font-raleway text-[4.5rem] techs text-light-gray">
              I have experience with <span>JavaScript</span>,{" "}
              <span>TypeScript</span>, <span>React</span>, <span> Next</span>,{" "}
              <span>CSS</span>, <span>SCSS</span>, <span>Tailwind</span> and
              more.
            </p>

            <h3 className="text-[5rem] text-light-green">Technologies</h3>
            <ul className="technologies-list">
              {technologies.map((item) => (
                <li key={item.name} title={item.name}>
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

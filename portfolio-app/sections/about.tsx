import Image from "next/image";
import profileImg from "../assets/profile-thumb.png";
import { technologies } from "../constants/technologies";

export default function About() {
  return (
    <section className="about bg-dark" id="about">
      <h3>About me</h3>
      <div className="about-content grid grid-cols-2">
        <figure>
          <Image
            className="profile-img max-w-[70%] object-cover"
            src={profileImg}
            alt="My profile thumb"
          />
        </figure>

        <div
          className="grid 
        gap-5
        // grid_rows-[1fr_1fr]
        "
        >
          <div className="flex flex-col gap-5">
            <h4>Problem Solver</h4>
            <p className="font-raleway phrase">
              Hi, I'm Matheus Rodrigues Araujo, a{" "}
              <span className="job">frontend developer</span> from Ceará,
              Brazil. Currently in the 8th semester of Information Systems at IFCE. Specialized in crafting responsive, attractive, and efficient websites and web applications.
            </p>
            <p className="font-raleway phrase">
              I am currently studying the 8th semester of the Information
              Systems bachelor's degree at IFCE. My expertise is developing
              websites and web applications that are responsive, attractive and
              performant.
            </p>

            <p className="font-raleway phrase techs">
              I have experience with <span>JavaScript</span>,{" "}
              <span>TypeScript</span>, <span>React</span>, <span> Next</span>,{" "}
              <span>CSS</span>, <span>SCSS</span>, <span>Tailwind</span> and
              more.
            </p>
          </div>

          <div className="about-text">
            <h4>Technologies</h4>

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

import Image from "next/image";
import profileImg from "../assets/profile-thumb.png";
import { technologies } from "../constants/technologies";

export default function About() {
  return (
    <section className="about bg-light-dark py-40 md:py-0" id="about"> 
      <div className="about-content grid grid-cols-1" >
          <h2 className="font-orbitron text-[10rem] md:text-[12rem]">About me</h2>
        {/* <div> */}
          <div className="wrapper flex flex-col h-full gap-20 mt-10 " >
            <div className="flex-1 py-20 border-b-2 border-light-green md:border-b-0  lg:py-0 lg:px-5" >
              <h3 className="font-orbitron text-[7rem] text-light-green">
                Problem solver
              </h3>
              <p className="font-raleway text-[4.5rem] lg:w-1/2 md:text-[5rem] text-light-gray">
                Hi, I'm Matheus Rodrigues Araujo, a{" "}
                <span className="job">frontend developer</span> from Ceará,
                Brazil. Currently in the 8th semester of Information Systems at
                IFCE. Specialized in crafting responsive, attractive, and
                efficient websites and web applications.
                I am currently studying the 8th semester of the Information
                Systems bachelor's degree at IFCE. My expertise is developing
                websites and web applications that are responsive, attractive
                and performant.
              </p>

              <p className="font-raleway text-[4.5rem] md:text-[5rem] lg:w-1/2 techs text-light-gray">
                I have experience with <span>JavaScript</span>,{" "}
                <span>TypeScript</span>, <span>React</span>, <span> Next</span>,{" "}
                <span>CSS</span>, <span>SCSS</span>, <span>Tailwind</span> and
                more.
              </p>
            </div>

            <div className="flex-1">
              <h3 className="font-orbitron text-[7rem] text-light-green">
                Technologies
              </h3>
              <ul className="technologies-list lg:w-1/2">
                {technologies.map((item) => (
                  <li key={item.name} title={item.name}>
                    {item.symbol}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        {/* </div> */}
      </div>
    </section>
  );
}

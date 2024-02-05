import Image from "next/image";
import profileImg from "../assets/profile-thumb.png";
import { technologies } from "../constants/technologies";

export default function About() {
  return (
    <section className="section about" id="about">
      <h3>About me</h3>
      <div className="about-content">
        <figure>
          <Image className="profile-img" src={profileImg} alt="My picture" />
        </figure>

        <div className="about-description">
          <div className="about-text">
            <h4>Problem Solver</h4>
            <p className="phrase">
              Hello, I'm Matheus Rodrigues Araujo, a
              <span className="job">dedicated web developer</span>
              from Ceará, Brazil. I'm deeply passionate about meticulously
              crafting visually stunning and highly functional websites that
              leave a lasting impression.
            </p>
            <p className="phrase">
              I am currently studying the 8th semester of the Information
              Systems bachelor's degree at IFCE. My expertise is developing
              websites and web applications that are responsive, attractive and
              performant.
            </p>

            <p className="phrase techs">
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

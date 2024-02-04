import Image from "next/image";
import profileImg from "../../assets/profile-thumb.png";
import coffeeSVG from "../../assets/coffee.svg";
import devicesPNG from "../../assets/devices.png";

import { FaLinkedin, FaGithub, FaNodeJs } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiJest,
  SiSass,
  SiExpress,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <a href="#main" className="brand">
          Matheus R. Araujo.
        </a>
        <ul>
          <a className="active item" href="#main">
            Home
          </a>
          <a className="item" href="#about">
            About
          </a>
          <a className="item" href="#projects">
            Projects
          </a>
          <a className="item" href="#contact">
            Contact
          </a>
          {/* <a
            className="item"
            target="_blank"
            href="https://www.linkedin.com/in/matheus-rodrigues-araujo"
          >
            Linkedin
          </a>
          <a
            className="item"
            target="_blank"
            href="https://github.com/Matheus-Rodrigues-Araujo/"
          >
            Github
          </a> */}
        </ul>
      </nav>

      <div className="introduction gridContainer" id="main">
        <div className="section">
          <div className="greetings">
            <h1 className="name" id="name">
              Matheus Rodrigues Araujo
            </h1>
            <h2 className="position" id="position">
              Front-End Developer
            </h2>
            <p className="phrase">
              Passionate about crafting visually stunning websites. Dedicated to
              turning ideas into reality through frontend development. Let's
              collaborate to transform concepts into incredible digital
              experiences. Join me in creating a unique digital universe.
            </p>

            <div className="contact-buttons">
              <button className="">Hire me</button>
              <button className="">Resume</button>
            </div>
          </div>

          <div className="grid items-center">
            <div className="social-links flex gap-5">
              <a
                href="https://www.linkedin.com/in/matheus-rodrigues-araujo/"
                target="_blank"
              >
                <FaLinkedin className="icon" />
              </a>
              <a
                href="https://github.com/Matheus-Rodrigues-Araujo"
                target="_blank"
              >
                <FaGithub className="icon" />
              </a>
              <a href="#contact">
                <RiInstagramFill className="icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="section about" id="about">
          <h3>About me</h3>
          <div className="about-content">
            <figure>
              <Image
                className="profile-img"
                src={profileImg}
                alt="My picture"
              />
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
                  websites and web applications that are responsive, attractive
                  and performant.
                </p>

                <p className="phrase techs">
                  I have experience with
                  <span>JavaScript</span>, <span>TypeScript</span>,
                  <span>React</span>, <span>Next</span>, <span>CSS</span>,
                  <span>SCSS</span>, <span>Tailwind</span> and more.
                </p>
              </div>

              <div className="about-text">
                <h4>Technologies</h4>

                <div className="technologies-container">
                  <SiHtml5 className="text-orange-500" />
                  <SiCss3 className="text-blue-500" />
                  <SiJavascript className="text-yellow-300" />
                  <SiTypescript className="text-blue-500" />
                  <FaNodeJs className="text-green-400" />
                  <SiExpress className="text-yellow-300" />
                  <SiJest className="text-red-700" />
                  <SiReact className="text-blue-500" />
                  <SiNextdotjs className="text-white" />
                  <SiTailwindcss className="text-indigo-600" />
                  <SiBootstrap className="text-indigo-400" />
                  <SiSass className="text-pink-600" />
                  <SiMysql className="text-blue-400" />
                  <SiMongodb className="text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section projects" id="projects">
          <h3>Projects / Work</h3>

          <div className="description-container">
            <div className="description">
              <p className="phrase">
                Since the beginning of my journey, I have built several projects
                that have elevated my skills as a developer.
              </p>

              <p className="phrase">
                Now it's your turn to learn about what I've developed throughout
                my career as a <span>Front-End Developer</span>.
              </p>

              <div className="projects-links">
                <a href="#">Explore</a>
                <a href="#">Github</a>
              </div>
            </div>

          <div className="wrapper" >
            <figure className="image-container">
              <Image
                src={devicesPNG}
                alt="Image of my App's behavior on mobile and desktop devices"
              />
            </figure>

            <em><i>"Curiosity is the key"</i></em>
            </div>
          </div>
        </div>
        <div className="section contact" id="contact">
          <h3>
            Let's grab a <br />
            coffee! :)
          </h3>

          <div className="contact-container">
            <div className="links">
              <div>
                <FaLinkedin className="icon" />
                <a href="https://www.linkedin.com/in/matheus-rodrigues-araujo">
                  Linkedin
                </a>
              </div>

              <div>
                <FaGithub className="icon" />
                <a href="https://github.com/Matheus-Rodrigues-Araujo/">
                  Github
                </a>
              </div>

              <div>
                <RiInstagramFill className="icon" />
                <a href="https://www.linkedin.com/in/matheus-rodrigues-araujo">
                  Instagram
                </a>
              </div>
            </div>

            <figure>
              <Image src={coffeeSVG} alt="Coffee image" />
            </figure>
          </div>
        </div>

        <footer>
          <div className="footer-container">
            <div>
              <FaLinkedin className="icon" />
              <FaGithub className="icon" />
              <RiInstagramFill className="icon" />
            </div>
            <ul>
              <a className="active item" href="#main">
                Home
              </a>
              <a className="item" href="#about">
                About
              </a>
              <a className="item" href="#projects">
                Projects
              </a>
              <a className="item" href="#contact">
                Contact
              </a>
            </ul>

            <p>© matheusrodriguesaraujo.dev 2024</p>
          </div>
        </footer>

        {/* <!-- <div className="scroll-helper">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> --> */}

        <div className="scroll-mouse">
          <div></div>
        </div>
      </div>
    </>
  );
}

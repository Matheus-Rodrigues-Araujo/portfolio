import Image from "next/image"
import profileImg from "../assets/profile-thumb.png"
import { FaNodeJs } from "react-icons/fa";
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

export default function About(){
    return (
        <section className="section about" id="about">
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
                  I have experience with <span>JavaScript</span>, <span>TypeScript</span>, <span>React</span>, <span> Next</span>, <span>CSS</span>, <span>SCSS</span>, <span>Tailwind</span> and more.
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
        </section>
    )
}
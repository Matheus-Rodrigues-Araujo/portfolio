import Image from "next/image";
import coffeeSVG from "../assets/coffee.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
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
            <a href="https://github.com/Matheus-Rodrigues-Araujo/">Github</a>
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
    </section>
  );
}

import Image from "next/image";
import coffeeSVG from "../assets/coffee.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Contact() {
  return (
    <section className="contact bg-dark" id="contact">
      <h3>
        Let's grab a <br />
        coffee! :)
      </h3>

      <div className="contact-container grid grid-cols-2">
        <div className="contact-links">
          <div className="inline-flex items-center gap-5" >
            <FaLinkedin className="icon max-w-full h-auto" />
            <a href="https://www.linkedin.com/in/matheus-rodrigues-araujo">
              Linkedin
            </a>
          </div>

          <div className="inline-flex items-center gap-5" >
            <FaGithub className="icon max-w-full h-auto" />
            <a href="https://github.com/Matheus-Rodrigues-Araujo/">Github</a>
          </div>

          <div className="inline-flex items-center gap-5" >
            <RiInstagramFill className="icon max-w-full h-auto" />
            <a href="https://www.linkedin.com/in/matheus-rodrigues-araujo">
              Instagram
            </a>
          </div>
        </div>

        <figure className="flex justify-end" >
          <Image src={coffeeSVG} alt="Coffee image" className="max-w-[60%] h-auto object-cover" />
        </figure>
      </div>
    </section>
  );
}

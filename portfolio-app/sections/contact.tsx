import Link from "next/link";
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

      <div className="contact-container grid grid-cols-[auto_1fr] gap-32">
        <div>
          <div className="font-orbitron contact-links grid gap-5">
            <Link
              href="https://www.linkedin.com/in/matheus-rodrigues-araujo"
              className="flex  items-center gap-5"
            >
              <FaLinkedin className="icon max-w-full h-auto" />
              Linkedin
            </Link>

            <Link
              href="https://github.com/Matheus-Rodrigues-Araujo/"
              className="flex items-center gap-5"
            >
              <FaGithub className="icon max-w-full h-auto" />
              Github
            </Link>

            <Link
              className="flex  items-center gap-5"
              href="https://www.linkedin.com/in/matheus-rodrigues-araujo"
            >
              <RiInstagramFill className="icon max-w-full h-auto" />
              Instagram
            </Link>
          </div>
        </div>
        <figure className="flex justify-end">
          <Image
            src={coffeeSVG}
            alt="Coffee image"
            className="max-w-[500px] h-auto object-cover"
          />
        </figure>
      </div>
    </section>
  );
}

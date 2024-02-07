import Link from "next/link";
import Image from "next/image";
import coffeeSVG from "../assets/coffee.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Contact() {
  return (
    <section className="h-svh contact bg-dark py-20 md:py-0" id="contact">
      <h2 className="font-orbitron text-[6rem]">
        Let's grab a <br />
        coffee! :)
      </h2>

      <div className="contact-container flex flex-col gap-32 lg:grid grid-cols-[auto_1fr]">
        <div>
          <div className="font-orbitron contact-links flex justify-center gap-5 lg:flex-col">
            <Link
              href="https://www.linkedin.com/in/matheus-rodrigues-araujo"
              className="flex flex-col items-center gap-5 lg:flex-row"
            >
              <FaLinkedin className="icon max-w-full h-auto" />
              Linkedin
            </Link>

            <Link
              href="https://github.com/Matheus-Rodrigues-Araujo/"
              className="flex flex-col items-center gap-5 lg:flex-row"
            >
              <FaGithub className="icon max-w-full h-auto" />
              Github
            </Link>

            <Link
              className="flex flex-col items-center gap-5 lg:flex-row"
              href="https://www.linkedin.com/in/matheus-rodrigues-araujo"
            >
              <RiInstagramFill className="icon max-w-full h-auto" />
              Instagram
            </Link>
          </div>
        </div>
        <figure className="flex justify-center md:justify-end">
          <Image
            src={coffeeSVG}
            alt="Coffee image"
            className="max-w-[50%] h-auto "
          />
        </figure>
      </div>
    </section>
  );
}

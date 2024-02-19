import Link from "next/link";
import Image from "next/image";
import dancingCoffee from "../assets/images/dancing-coffee.gif";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import ContactForm from "../forms/contactForm";

export default function Contact() {
  return (
    <section className="contact bg-dark py-20 md:py-0" id="contact">
      <h2 className="text-[10rem] md:text-[12rem] font-bold">Contact</h2>

      <div className="contact-container grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
        <div className="flex justify-between lg:flex-col">
          <div className="flex flex-col gap-5">
            <h3 className="text-[7rem] text-purple font-200 ">
              Let's grap a coffee!
            </h3>
            <p className="text-[4.5rem] md:text-[5rem] text-light-gray w-50">
              The time has come to transform your ideas into concrete actions!
            </p>

            <div className="flex gap-12 contact-links">
              <Link
                href="https://www.linkedin.com/in/matheus-rodrigues-araujo"
                title="Linkedin"
                className="flex flex-col items-center gap-5 lg:flex-row"
              >
                <FaLinkedin className="w-32 h-32 md:w-40 md:h-40  text-purple max-w-full " />
              </Link>

              <Link
                href="https://github.com/Matheus-Rodrigues-Araujo/"
                className="flex flex-col items-center gap-5 lg:flex-row"
                title="Github"
              >
                <FaGithub className="w-32 h-32 md:w-40 md:h-40  text-purple max-w-full " />
              </Link>
              <Link
                className="flex flex-col items-center gap-5 lg:flex-row"
                href="https://www.linkedin.com/in/matheus-rodrigues-araujo"
                title="Instagram"
              >
                <RiInstagramFill className="w-32 h-32 md:w-40 md:h-40  text-purplemax-w-full " />
              </Link>
            </div>
          </div>
          <Image
            src={dancingCoffee}
            alt="A coffee dancing"
            className="max-w-[50%] h-auto"
          />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
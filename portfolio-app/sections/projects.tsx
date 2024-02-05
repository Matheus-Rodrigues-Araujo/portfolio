import Image from "next/image";
import devicesPNG from "../assets/devices.png";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h3>Projects / Work</h3>

      <div className="description-container grid grid-cols-2">
        <div className="description flex flex-col gap-10 w-auto ">
          <p className="font-raleway phrase">
            Since the beginning of my journey, I have built several projects
            that have elevated my skills as a developer.
          </p>

          <p className="font-raleway phrase">
            Now it's your turn to learn about what I've developed throughout my
            career as a <span>Front-End Developer</span>.
          </p>

          <div className="projects-links w-1/2 gap-10 mt-20 grid grid-cols-2">
            <Link href="#" title="Explore" className="cursor-pointer">
              Explore
            </Link>
            <Link
              href="https://github.com/Matheus-Rodrigues-Araujo"
              target="_blank"
              title="Github"
            >
              Github
            </Link>
          </div>
        </div>

        <div className="wrapper">
          <figure className="image-container">
            <Image
              src={devicesPNG}
              alt="Image of my App's behavior on mobile and desktop devices"
            />
          </figure>

          <em>
            <i className="text-dark text-[5rem]">"Curiosity is the key"</i>
          </em>
        </div>
      </div>
    </section>
  );
}

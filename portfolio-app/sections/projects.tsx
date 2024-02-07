import Image from "next/image";
import devicesPNG from "../assets/devices.png";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="h-svh projects py-20 md:py-0" id="projects">
      <h2 className="font-orbitron text-[6rem]" >Projects / Work</h2>

      <div className="description-container mt-5 lg:grid grid-cols-2 lg:mt-0">
        <div className="description flex flex-col gap-10 w-auto ">
          <p className="font-raleway text-[4.5rem] text-light-gray">
            Since the beginning of my journey, I have built several projects
            that have elevated my skills as a developer.
          </p>

          <p className="font-raleway text-[4.5rem] text-light-gray">
            Now it's your turn to learn about what I've developed throughout my
            career as a <span>Front-End Developer</span>.
          </p>

          <div className="projects-links gap-10 mt-20 grid grid-cols-2 md:w-1/2">
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
          <figure className="flex justify-center lg:justify-end">
            <Image
              src={devicesPNG}
              alt="Image of my App's behavior on mobile and desktop devices"
              className="max-w-[70%] h-auto"
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

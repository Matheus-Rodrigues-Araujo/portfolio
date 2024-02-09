import Image from "next/image";
import devicesPNG from "../assets/devices.png";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="projects py-20 md:py-0" id="projects">
      <div className="description-container">
        <h2 className="font-orbitron text-[10rem] md:text-[12rem]">Projects / Work</h2>

        <div className="wrapper grid gap-10 lg:grid-cols-2 ">
          <div className="container-1 flex flex-col ">
            <p className="font-raleway text-[5rem] md:text-[6rem] text-justify text-light-gray">
              Since the beginning of my journey, I have built several projects
              that have elevated my skills as a developer. Now it's your turn to
              learn about what I've developed throughout my career as a{" "}
              <span className="text-light-green">Front-End Developer</span>.
            </p>

            <div className="projects-links flex gap-12 my-20">
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

          <div className="container-2 flex flex-col gap-5 items-center lg:items-end">
            <Image
              src={devicesPNG}
              alt="Image of my App's behavior on mobile and desktop devices"
              className="max-w-[70%] h-auto"
            />
            <em>
              <i className="text-dark text-[5rem]">"Curiosity is the key"</i>
            </em>
          </div>
        </div>
      </div>
    </section>
  );
}

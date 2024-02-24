import Image from "next/image";
import Link from "next/link";
import { ProjectInterface } from "../constants/projectsData";
import { useEffect } from "react";

interface ProjectInformationCardProps extends ProjectInterface {
  handleProjectVisibility: () => void;
}

export default function ProjectInformationCard({
  name,
  description,
  stack,
  image,
  links,
  handleProjectVisibility,
}: ProjectInformationCardProps) {
  return (
    <div className="fixed z-10 h-screen w-screen top-0 left-0 bg-[#000000cc]" >
      <div className="project-information-card">
        <div className="container">
          <div className="lg:w-6/12 h-50 relative mt-5 lg:mt-0">
            <Image
              className="object-cover h-full "
              src={image}
              alt={`Image of the ${name} project.`}
            />
          </div>
          <div className="lg:w-6/12 p-4 flex flex-col gap-10">
            <h4>{name}</h4>
            <p>{description}</p>
            <h5>Technologies</h5>
            <ul className="stack">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleProjectVisibility}
            className="text-white text-[5rem] font-bold absolute top-0 mr-20 right-10  hover:text-pink"
          >
            X
          </button>
        </div>
        <div className="project-links">
          {links.map((link) => (
            <Link
              key={link.name}
              className="flex gap-5 bg-purple rounded-md p-5 transition 200 ease-in-out hover:bg-pink"
              href={link.url}
              title={link.name}
              target="_blank"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

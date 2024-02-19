import Image from "next/image";
import Link from "next/link";
import { ProjectInterface } from "../constants/projectsData";
import { technologies } from "../constants/technologies";

export default function ProjectInformationCard({
  name,
  description,
  stack,
  image,
  links,
}: ProjectInterface) {
  return (
    <div className="project-information-card" >
      <div className="flex gap-20">
        <div className="w-6/12 h-50 relative">
          <Image
            className="object-cover h-full"
            src={image}
            alt={`Image of the ${name} project.`}
          />
        </div>
        <div className="w-6/12 p-4 flex flex-col gap-10">
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="stack">
            {stack.map((item) => (
              <p key={item}>
                - {item}
              </p>
            ))}
          </div>
        </div>

        <button className="text-white text-[5rem] font-bold absolute top-0 right-10">
          X
        </button>
      </div>
      <div className="project-links" >
        {links.map((link) => (
          <Link className="flex gap-5 bg-purple rounded-md p-5 transition 200 ease-in-out hover:bg-pink" href={link.url} title={link.name} target="_blank">
             {link.icon}{link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface InterfaceProjectCard {
  name: string;
  description: string;
  stack: string[];
  image: StaticImageData | "";
  links: {
    website: string;
    repository: string;
  };
}

export default function ProjectInformationCard({
  name,
  description,
  stack,
  image,
  links,
}: InterfaceProjectCard) {
  console.log(name)
  return (
    <div className="project-information-card flex bg-dark">
      <div className="grow">
        <Image
          className=""
          src={image}
          alt={`Image of the ${name} project.`}
        />
      </div>
      <div className="w-1/2">
        <h4 className="text-[5rem]" >{name}</h4>
        <p  className="text-[4rem] text-white">{description}</p>
        <ul className="stack">
          {stack.map((item) => (
            <li className="text-[4rem] text-white" key={item}>{item}</li>
          ))}
        </ul>
        <div>
          <Link href={links.website} className="text-[4rem] text-white" title="Website">
            Website
          </Link>
          <Link href={links.repository} className="text-[4rem] text-white" title="Github">
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}

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
  return (
    <div className="project-information-card">
      <div className="w-8/12 h-auto relative">
        <Image
          className="object-cover w-[80%] h-auto"
          src={image}
          alt={`Image of the ${name} project.`}
        />
      </div>
      <div className="w-8/12 p-4">
        <h4>{name}</h4>
        <p>{description}</p>
        <ul className="stack">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div>
          <Link href={links.website} title="Website">
            Website
          </Link>
          <Link href={links.repository} title="Github">
            Github
          </Link>
        </div>
      </div>

      <button className="text-white text-[5rem] font-bold absolute top-0 right-10" >
        X
      </button>
    </div>
  );
}
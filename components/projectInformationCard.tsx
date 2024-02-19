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
    <div className="bg-[#000000cc] fixed z-10 top-0 left-0 flex items-center justify-center h-screen min-w-screen">
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
    </div>
  );
}
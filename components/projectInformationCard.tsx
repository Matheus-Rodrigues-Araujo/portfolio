'use client';
import { ProjectInterface } from "../constants/projectsData";
import dynamic from "next/dynamic";
const DynamicLink = dynamic(() => import('next/link'))
const DynamicImage = dynamic(() => import('next/image'))

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
    <div className="fixed z-10 h-screen w-screen top-0 left-0 bg-[#000000cc]">
      <div className="project-information-card">
        <div className="hidden min-[700px]:flex justify-end">
          <button onClick={handleProjectVisibility} className="text-white text-[5rem] font-bold hover:text-pink">
            X
          </button>
        </div>
        <div className="container">
          <div className="lg:w-6/12 h-50 relative mt-5 lg:mt-0">
            <DynamicImage 
              className="object-cover h-full" 
              src={image} 
              alt={`Image of the ${name} project.`} 
              loading="lazy" 
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
        </div>
        <div className="project-links">
          {links.map((link) => (
            <DynamicLink
              key={link.name}
              className="flex gap-5 bg-purple rounded-md p-5 transition 200 ease-in-out hover:bg-pink"
              href={link.url}
              title={link.name}
              target="_blank"
            >
              {link.icon}
              {link.name}
            </DynamicLink>
          ))}
          <button onClick={handleProjectVisibility} className="bg-red-600 text-white py-5 transition 200 ease-in-out hover:bg-red-500 min-[700px]:hidden">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';
import { ProjectInterface } from "../constants/projectsData";
import { useState } from "react";
import Image from "next/image";
import ProjectInformationCard from "./projectInformationCard";

export default function ProjectCard({
  name,
  synopsis,
  description,
  image,
  stack,
  links
}: ProjectInterface) {
  const [projectInformationVisibility, setProjectInformationVisibility] = useState(false);

  return (
    <li
      key={name}
      className="project-project h-[300px]  cursor-pointer"
    >
        <Image
          src={image}
          className="w-full object-git h-full object-cover"
          alt={`Screenshot of the Social media app called ${name}`}
        />
        <div className="project-detail h-full w-full text-white text-[5rem">
          <h3 className="flex-1 text-white text-center font-bold">
            {name}
          </h3>
          <p className="text-white text-[4rem] text-center flex-1 font-400">
            {synopsis}
          </p>
          <button className="text-white bg-pink flex-1 p-3 text-[4.5rem] font-bold"
          onClick={() =>
            setProjectInformationVisibility(!projectInformationVisibility)
          }
          >
            EXPLORE
          </button>
          
        </div>

    
      {projectInformationVisibility ? (
        <ProjectInformationCard
          name={name}
          description={description}
          stack={stack}
          image={image}
          links={links}
        />
      ) : ''}
    </li>
  );
}
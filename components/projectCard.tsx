'use client';
import { ProjectInterface } from "../constants/projectsData";
import { useState } from "react";
import Image from "next/image";
import ProjectInformationCard from "./projectInformationCard";

export default function ProjectCard(project: ProjectInterface) {
  const [projectInformationVisibility, setProjectInformationVisibility] = useState(false);

  const handleProjectVisibility = () => {
    setProjectInformationVisibility(!projectInformationVisibility)
  }

  return (
    <li
      key={project.name}
      className="project-item h-[300px] relative cursor-pointer"
    >
        <Image
          src={project.image}
          className="w-full object-git h-full object-cover"
          alt={`Screenshot of the Social media app called ${project.name}`}
        />
        <div 
        onClick={handleProjectVisibility}
        className="project-detail h-full w-full text-white text-[5rem]">
          <h3 className="flex-1 text-white text-center font-bold">
            {project.name}
          </h3>
          <p className="text-white text-[4rem] text-center flex-1 font-400">
            {project.synopsis}
          </p>
          <button className="text-white bg-pink flex-1 p-3 text-[4.5rem] font-bold">
            EXPLORE
          </button>
        </div>

      {projectInformationVisibility && (
        <ProjectInformationCard
          name={project.name}
          synopsis={project.synopsis}
          description={project.description}
          stack={project.stack}
          image={project.image}
          links={project.links}
          handleProjectVisibility={handleProjectVisibility}
        />
      )}
    </li>
  );
}
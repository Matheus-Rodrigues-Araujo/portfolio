'use client'
import dynamic from "next/dynamic";
import { ProjectInterface } from "../constants/projectsData";
const ProjectCard = dynamic(() => import('./projectCard'))

export const ProjectCardList: React.FC<{ projectsData: ProjectInterface[] }> = ({ projectsData }) => {
    return (
      <ul className="projects-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-40">
        {projectsData.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    );
  };
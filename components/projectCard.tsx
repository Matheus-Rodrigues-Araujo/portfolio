'use client';
import Image from "next/image";
import { ProjectInterface } from "../constants/projectsData";
import { useState, lazy, Suspense } from "react";
const ProjectInformationCard = lazy(() => import("./projectInformationCard"));

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [projectInformationVisibility, setProjectInformationVisibility] = useState(false);

  const handleProjectVisibility = () => {
    const bodyStyle = document.body.style;
    setProjectInformationVisibility(!projectInformationVisibility);
    projectInformationVisibility ? (bodyStyle.overflow = "auto") : (bodyStyle.overflow = "hidden");
  };

  return (
    <>
      <li key={project.name} className="flex-1 project-item  relative cursor-pointer mx-auto ">
        <Image
          src={project.image}
          alt={`Screenshot of the Social media app called ${project.name}`}
          loading="lazy"
          width={370}
          style={{ height: "300px", objectFit: "cover", objectPosition: "top" }}
        />
        <div onClick={handleProjectVisibility} className="project-detail h-full w-full text-white text-[5rem]">
          <h3 className="flex-1 text-white text-center font-bold">{project.name}</h3>
          <p className="text-white text-[4rem] text-center flex-1 font-400">{project.synopsis}</p>
          <button className="text-white bg-pink flex-1 p-3 text-[4.5rem] font-bold">EXPLORE</button>
        </div>
      </li>
      <Suspense>
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
      </Suspense>
    </>
  );
}

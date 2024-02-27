"use client";
import { ProjectInterface } from "../constants/projectsData";
import { useState, lazy, Suspense } from "react";
import Image from "next/image";
const ProjectInformationCard = lazy(() => import("./projectInformationCard"));

export default function ProjectCard(project: ProjectInterface) {
  const [projectInformationVisibility, setProjectInformationVisibility] =
    useState(false);

  const handleProjectVisibility = () => {
    const bodyStyle = document.body.style;
    setProjectInformationVisibility(!projectInformationVisibility);
    projectInformationVisibility
      ? (bodyStyle.overflow = "auto")
      : (bodyStyle.overflow = "hidden");
  };

  return (
    <>
      <li
        key={project.name}
        className="flex-1 project-item  relative cursor-pointer mx-auto "
      >
        <Image
          src={project.image}
          alt={`Screenshot of the Social media app called ${project.name}`}
          priority={true}
          width={370}
          style={{
            height: "300px",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
        <div
          onClick={handleProjectVisibility}
          className="project-detail h-[300px] w-[370px] text-white text-[5rem]"
        >
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

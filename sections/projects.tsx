"use server";
import { projectsData } from "../constants/projectsData";
import ProjectCard from "../components/projectCard";
import { ProjectInterface } from "../constants/projectsData";

export default async function Projects() {
  return (
    <section className="relative bg-dark projects py-20 md:py-0 " id="projects">
      <div className="description-container">
        <h2 className="text-[10rem] md:text-[12rem] font-bold">Projects</h2>
        <div className="grid gap-40 mt-40">
          <ProjectCardList projectsData={projectsData} />
        </div>
      </div>
    </section>
  );
}

const ProjectCardList: React.FC<{ projectsData: ProjectInterface[] }> = ({ projectsData }) => {
  return (
    <ul className="projects-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-40">
      {projectsData.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </ul>
  );
};

"use server";
import { projectsData } from "../constants/projectsData";
import ProjectCard from "../components/projectCard";

export default async function Projects() {
  return (
    <section className="relative bg-dark projects py-20 md:py-0 " id="projects">
      <div className="description-container">
        <h2 className="text-[10rem] md:text-[12rem] font-bold">Projects</h2>
        <div className="grid gap-40 mt-40">
          <div className="filter">
            <button className=" font-light">See all</button>
            <button className=" font-light">JavaScript</button>
            <button className=" font-light">TypeScript</button>
            <button className=" font-light">Node.js</button>
            <button className=" font-light">React</button>
            <button className=" font-light">Next</button>
          </div>

          <ul className="projects-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-40">
            {
              projectsData.map(project => (
                <ProjectCard key={project.name}
                name={project.name} 
                synopsis={project.synopsis}
                description={project.description}
                stack={project.stack}
                image={project.image}
                links={project.links}
                />
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

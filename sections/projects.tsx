"use server";
import { projectsData } from "../constants/projectsData";
import { ProjectCardList } from "../components/projectCardList";

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

import Image from "next/image";
import { projectsList } from "../constants/projectsList";

export default function Projects() {
  return (
    <section className="bg-dark projects py-20 md:py-0 " id="projects">
      <div className="description-container">
        <h2 className="text-[10rem] md:text-[12rem] font-bold">
          Projects / Work
        </h2>
        <div className="grid gap-40 mt-40">
          <div className="filter">
          {/* <div className="filter grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-20"> */}
            <button className=" font-light">
              See all
            </button>
            <button className=" font-light">
              JavaScript
            </button>
            <button className=" font-light">
              TypeScript
            </button>
            <button className=" font-light">
              Node.js
            </button>
            <button className=" font-light">
              React
            </button>
            <button className=" font-light">
              Next
            </button>
          </div>

          <ul className="projects-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-40">
            {projectsList.map((item) => (
              <li key={item.name} className="project-item h-[300px] relative cursor-pointer">
                <Image
                  src={item.image}
                  className="w-full object-git h-full object-cover"
                  alt={`Screenshot of the Social media app called ${item.name}`}
                />
                <div className="project-detail h-full w-full text-white text-[5rem">
                  <h3 className="flex-1 text-white text-center font-bold">{item.name}</h3>
                  <p className="text-white text-[4rem] text-center flex-1 font-400">
                    {item.synopsis}
                  </p>
                  <button className="text-white bg-pink flex-1 p-3 text-[4.5rem] font-bold">
                    EXPLORE
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

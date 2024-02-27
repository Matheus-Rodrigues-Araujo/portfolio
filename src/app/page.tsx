'use server';
import About from "../../sections/about";
import Projects from "../../sections/projects";
import Contact from "../../sections/contact";
import Introduction from "../../sections/introduction";

export default async function Home() {
  return (
    <main className="gap-10 pt-20 md:pt-0 md:gap-60 lg:pt-0 grid grid-flow-row md:auto-rows-[1fr_1fr_1fr_1fr] min-[1700px]:auto-rows-[100vh_1fr_1fr]">
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

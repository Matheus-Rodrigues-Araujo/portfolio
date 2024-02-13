import About from "../../sections/about";
import Projects from "../../sections/projects";
import Contact from "../../sections/contact";
import Introduction from "../../sections/introduction";

export default function Home() {
  return (
    <main>
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

import Image from "next/image"
import devicesPNG from "../assets/devices.png"

export default function Projects(){
    return (
        <section className="section projects" id="projects">
        <h3>Projects / Work</h3>

        <div className="description-container">
          <div className="description">
            <p className="phrase">
              Since the beginning of my journey, I have built several projects
              that have elevated my skills as a developer.
            </p>

            <p className="phrase">
              Now it's your turn to learn about what I've developed throughout
              my career as a <span>Front-End Developer</span>.
            </p>

            <div className="projects-links">
              <a href="#">Explore</a>
              <a href="#">Github</a>
            </div>
          </div>

        <div className="wrapper" >
          <figure className="image-container">
            <Image
              src={devicesPNG}
              alt="Image of my App's behavior on mobile and desktop devices"
            />
          </figure>

          <em><i>"Curiosity is the key"</i></em>
          </div>
        </div>
      </section>
    )
}
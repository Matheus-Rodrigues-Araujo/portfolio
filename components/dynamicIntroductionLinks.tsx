import { FaLinkedin, FaGithub } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { DynamicLink } from "./dynamicLink"

export default function DynamicIntroductionLinks(){
    return (
        <div className="mt-10 social-links flex gap-10">
        <DynamicLink
          href="https://www.linkedin.com/in/matheus-rodrigues-araujo/"
          target="_blank"
          title="Linkedin"
        >
          <FaLinkedin className="w-32 h-32 hover:scale-110 transition 200 ease-in-out hover:text-white md:w-40 md:h-40 text-purple" />
        </DynamicLink>
        <DynamicLink
          href="https://github.com/Matheus-Rodrigues-Araujo"
          target="_blank"
          title="Github"
        >
          <FaGithub className="w-32 h-32 hover:scale-110 transition 200 ease-in-out hover:text-white md:w-40 md:h-40  text-purple" />
        </DynamicLink>
        <DynamicLink
          href="https://www.instagram.com/_matheus_rodrigues_araujo_/"
          target="_blank"
          title="Instagram"
        >
          <RiInstagramFill className="w-32 h-32 hover:scale-110 transition 200 ease-in-out hover:text-white md:w-40 md:h-40  text-purple" />
        </DynamicLink>
      </div>
    )
}
'use client';
import dynamic from "next/dynamic";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const DynamicLink = dynamic(() => import('next/link'))


export default function DynamicContactLinks(){
    return (
        <div className="flex gap-12 contact-links">
              <DynamicLink
                href="https://www.linkedin.com/in/matheus-rodrigues-araujo"
                title="Linkedin"
                className="flex flex-col items-center gap-5 lg:flex-row"
              >
                <FaLinkedin className="w-32 h-32 md:w-40 md:h-40  text-purple max-w-full " />
              </DynamicLink>

              <DynamicLink
                href="https://github.com/Matheus-Rodrigues-Araujo/"
                className="flex flex-col items-center gap-5 lg:flex-row"
                title="Github"
              >
                <FaGithub className="w-32 h-32 md:w-40 md:h-40  text-purple max-w-full " />
              </DynamicLink>
              <DynamicLink
                className="flex flex-col items-center gap-5 lg:flex-row"
                href="https://www.linkedin.com/in/matheus-rodrigues-araujo"
                title="Instagram"
              >
                <RiInstagramFill className="w-32 h-32 md:w-40 md:h-40  text-purplemax-w-full " />
              </DynamicLink>
            </div>
    )
}
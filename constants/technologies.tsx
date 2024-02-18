import { FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiJest,
  SiSass,
  SiExpress,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

export const technologies = [
    {
      name: "HTML",
      symbol: <SiHtml5 className="text-orange-500" />,
    },
    {
      name: "CSS",
      symbol: <SiCss3 className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      symbol: <SiJavascript className="text-yellow-300" />,
    },
    {
      name: "TypeScript",
      symbol: <SiTypescript className="text-blue-500" />,
    },
    {
      name: "Node.js",
      symbol: <FaNodeJs className="text-green-400" />,
    },
    {
      name: "Express",
      symbol: <SiExpress className="text-yellow-300" />,
    },
    {
      name: "Jest",
      symbol: <SiJest className="text-red-700" />,
    },
    {
      name: "React",
      symbol: <SiReact className="text-blue-500" />,
    },
    {
      name: "Next.js",
      symbol: <SiNextdotjs className="text-white" />,
    },
    {
      name: "TailwindCSS",
      symbol: <SiTailwindcss className="text-indigo-600" />,
    },
    {
      name: "Bootstrap",
      symbol: <SiBootstrap className="text-indigo-400" />,
    },
    {
      name: "SASS",
      symbol: <SiSass className="text-red-500" />,
    },
    {
      name: "MySQL",
      symbol: <SiMysql className="text-blue-400" />,
    },
    {
      name: "MongoDB",
      symbol: <SiMongodb className="text-green-600" />,
    },
  ];
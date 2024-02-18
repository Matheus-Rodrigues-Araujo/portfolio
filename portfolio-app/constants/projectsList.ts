interface ProjectsInterface {
  name: string;
  synopsis: string;
  description: string;
  stack: string[];
  image: StaticImageData | "";
  link: string;
  repository: string;
}

import { StaticImageData } from "next/image";
import feedImg from "../assets/images/projects/momentz/feed.jpg";
import gymImg from "../assets/images/projects/gym-landing-page/image.png";
import ecommerceImg from "../assets/images/projects/ecommerce/ecommerce.jpg";
import calendarImg from "../assets/images/projects/calendar-system/calendar-img.png";

export const projectsList: ProjectsInterface[] = [
  {
    name: "Momentz",
    synopsis:
      "Social media platform created for social interaction and sharing unforgettable moments.",
    description: "",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next",
      "Tailwind",
      "MongoDB",
      "S3",
    ],
    image: feedImg,
    link: "",
    repository: "",
  },
  {
    name: "Ecommerce App",
    synopsis:
      "Application that simulates an intuitive and realistic shopping journey.",
    description: "",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Next",
      "Styled Components",
    ],
    image: ecommerceImg,
    link: "",
    repository: "",
  },
  {
    name: "Calendar System",
    synopsis: "App with the aim of assisting and managing user appointments.",
    description: "",
    stack: ["HTML", "CSS", "JavaScript", "SQL", "Next", "Tailwind"],
    image: calendarImg,
    link: "",
    repository: "",
  },
  {
    name: "Gym landing page",
    synopsis: "Customized landing page for a gym platform.",
    description: "",
    stack: ["HTML", "CSS", "JavaScript"],
    image: gymImg,
    link: "",
    repository: "",
  },
];

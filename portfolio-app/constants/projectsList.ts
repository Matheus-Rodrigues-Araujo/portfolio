interface ProjectsInterface {
  name: string;
  description: string;
  stack: string[];
  image: StaticImageData | "";
  link: string;
  repository: string;
}

import { StaticImageData } from 'next/image';
import feedImg from '../images/momentz/feed.jpg';
import gymImg from '../images/gym-landing-page/image.png';
import ecommerceImg from '../images/ecommerce/ecommerce.jpg';
import calendarImg from '../images/calendar-system/calendar-img.png';

export const projectsList: ProjectsInterface[] = [
  {
    name: "Momentz",
    description: 'Social media platform created for social interaction and sharing unforgettable moments.',
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
    description: 'Application that simulates an intuitive and realistic shopping journey',
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
    description: 'App with the aim of assisting and managing user appointments',
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Next",
      "Tailwind",
    ],
    image: calendarImg,
    link: "",
    repository: "",
  },
  {
    name: "Gym landing page",
    description: 'Customized landing page for a gym platform',
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: gymImg,
    link: "",
    repository: "",
  },
];

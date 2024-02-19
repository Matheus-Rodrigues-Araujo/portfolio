export interface ProjectInterface {
  name: string;
  synopsis: string;
  description: string;
  stack: string[];
  image: StaticImageData | "";
  links: {
    website: string;
    repository: string;
  };
}

import { StaticImageData } from "next/image";
import feedImg from "../assets/images/projects/momentz/feed.jpg";
import gymImg from "../assets/images/projects/gym-landing-page/image.png";
import ecommerceImg from "../assets/images/projects/ecommerce/ecommerce.jpg";
import calendarImg from "../assets/images/projects/calendar-system/calendar-img.png";

export const projectsData: ProjectInterface[] = [
  {
    name: "Momentz",
    synopsis:
      "Social media platform created for social interaction and sharing unforgettable moments.",
    description: `Welcome to Momentz, a vibrant social media platform meticulously crafted with Next.js, React, TypeScript, MongoDB, and more.
       Immerse yourself in a digital realm designed for meaningful social interactions and the seamless exchange of unforgettable moments.
       Whether it's sharing cherished memories, connecting with loved ones, or discovering new perspectives, Momentz provides the perfect canvas
       for fostering genuine connections and preserving life's most precious experiences.`,
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
    links: {
      website: "https://momentz-ten.vercel.app/",
      repository: "https://github.com/Matheus-Rodrigues-Araujo/Momentz",
    },
  },
  {
    name: "Ecommerce App",
    synopsis:
      "Application that simulates an intuitive and realistic shopping journey.",
    description: `E-commerce application powered by Next.js, React, and TypeScript,
                   offering users a simulated yet immersive shopping journey. Step into a virtual marketplace designed to provide
                   an intuitive and lifelike experience, where browsing, selecting, and purchasing products feels just like the real
                   thing. Whether you're exploring the latest trends or making thoughtful purchases, our platform ensures a seamless
                   and enjoyable shopping experience from start to finish.`,
    stack: ["JavaScript", "TypeScript", "Next", "React", "Styled Components"],
    image: ecommerceImg,
    links: {
      website: "https://mks-ecommerce-red.vercel.app/",
      repository: "https://github.com/Matheus-Rodrigues-Araujo/ecommerce-app",
    },
  },
  {
    name: "Calendar System",
    synopsis: "App with the aim of assisting and managing user appointments.",
    description: "",
    stack: ["HTML", "CSS", "JavaScript", "SQL", "Node.js", "Express"],
    image: calendarImg,
    links: {
      website: "",
      repository:
        "https://github.com/Matheus-Rodrigues-Araujo/Sistema-web-calendario",
    },
  },
  {
    name: "Gym landing page",
    synopsis: "Customized landing page for a gym platform.",
    description: "",
    stack: ["HTML", "CSS", "JavaScript"],
    image: gymImg,
    links: {
      website: "https://academiabruta.vercel.app/",
      repository: "https://github.com/Matheus-Rodrigues-Araujo/Training-Gym",
    },
  },
];

export type LinksType = {
  name: string;
  url: string;
  icon: React.ReactElement;
};

export interface ProjectInterface {
  name: string;
  synopsis: string;
  description: string;
  stack: string[];
  image: StaticImageData | "";
  links: LinksType[];
}

import { StaticImageData } from "next/image";
import feedImg from "../assets/images/projects/momentz/feed.jpg";
import gymImg from "../assets/images/projects/gym-landing-page/image.png";
import ecommerceImg from "../assets/images/projects/ecommerce/ecommerce.jpg";
import calendarImg from "../assets/images/projects/calendar-system/calendar-img.png";
import { FaGithub, FaGlobe } from "react-icons/fa";

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
    links: [
      {
        name: "Website",
        url: "https://momentz-ten.vercel.app/",
        icon: <FaGlobe />,
      },
      {
        name: "Github",
        url: "https://github.com/Matheus-Rodrigues-Araujo/Momentz",
        icon: <FaGithub />,
      },
    ],
  },
  {
    name: "Ecommerce App",
    synopsis:
      "Application that simulates an intuitive and realistic shopping journey.",
    description: `E-commerce application powered by Next.js, React, and TypeScript,
                   offering users a simulated yet immersive shopping journey. Step into a virtual marketplace designed to provide
                   an intuitive and lifelike experience, where browsing, selecting, and purchasing products feels just like the real
                   thing. This software ensures a seamless and enjoyable shopping experience from start to finish.`,
    stack: ["JavaScript", "TypeScript", "Next", "React", "Styled Components"],
    image: ecommerceImg,
    links: [
      {
        name: "Website",
        url: "https://mks-ecommerce-red.vercel.app/",
        icon: <FaGlobe />,
      },
      {
        name: "Github",
        url: "https://github.com/Matheus-Rodrigues-Araujo/ecommerce-app",
        icon: <FaGithub />,
      },
    ],
  },
  {
    name: "Calendar System",
    synopsis: "App with the aim of assisting and managing user appointments.",
    description: `Revolutionize your daily scheduling with our cutting-edge appointment management app! Engineered to simplify the complexities of scheduling, our intuitive interface and advanced features make organizing appointments effortless. Take control of your day with ease - seamlessly schedule, track, and manage appointments like never before. Don't let scheduling chaos dictate your productivity.
    `,
    stack: ["HTML", "CSS", "JavaScript", "SQL", "Node.js", "Express"],
    image: calendarImg,
    links: [
      {
        name: "Website",
        url: "https://github.com/Matheus-Rodrigues-Araujo/Sistema-web-calendario",
        icon: <FaGlobe />,
      },
      {
        name: "Github",
        url: "https://github.com/Matheus-Rodrigues-Araujo/ecommerce-app",
        icon: <FaGithub />,
      },
    ],
  },
  {
    name: "Gym landing page",
    synopsis: "Customized landing page for a gym platform.",
    description: `Introducing a landing page designed for gym platforms. Every detail is optimized
                  for a visually stunning experience. From the intricacy of the design to the
                  captivating content, it's designed to leave a lasting impression and drive engagement.
                  The project has adaptive responsiveness for both mobile and desktop devices.`,
    stack: ["HTML", "CSS", "JavaScript"],
    image: gymImg,
    links: [
      {
        name: "Website",
        url: "https://academiabruta.vercel.app/",
        icon: <FaGlobe />,
      },
      {
        name: "Github",
        url: "https://github.com/Matheus-Rodrigues-Araujo/Training-Gym",
        icon: <FaGithub />,
      },
    ],
  },
];
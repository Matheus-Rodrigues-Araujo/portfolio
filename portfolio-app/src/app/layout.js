import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import "../../styles/header.css";
import "../../styles/footer.css";

import "../../styles/introduction.css";
import "../../styles/about.css";
import "../../styles/projects.css";
import "../../styles/contact.css";

import Header from "../../components/header";
import Footer from "../../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  authors: [{ name: "MatheusCode" }],
  title: "Portfolio | Matheus - Front-End Developer",
  description:
    "Welcome to my portfolio! I'm Matheus, a skilled front-end developer proficient in JavaScript, TypeScript, React, Next.js, and more. Explore my projects.",
  keywords:
    "Front-End Developer, Desenvolvedor Front-End, Frontend, Matheus, Portfolio, Portfólio, JavaScript, React, TypeScript, Next.js, Tailwind, SQL, NoSQL, MongoDB, MySQL, Node.js, Express.js, Bootstrap, Jest, Web Development",
  icon: "/logo.svg",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta property="authors" content={metadata.authors[0].name} />
        <link rel="icon" href={metadata.icon} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.icon} />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="preload"
          as="style"
        />
        <meta name="google-site-verification" content="CE75ZtNUKfK_9RU8YiJMi_X0ZXxe73-Tpw3GliUmEEI" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="gap-10 pt-20 md:pt-0 md:gap-60 lg:pt-0 grid grid-flow-row md:auto-rows-[1fr_1fr_1fr_1fr] ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

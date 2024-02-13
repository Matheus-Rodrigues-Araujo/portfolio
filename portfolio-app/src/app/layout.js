import { Inter } from "next/font/google";
import "./globals.css";
// import Head from "next/head";
// import logo from "./logo.svg"

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
  authors: [{ name: "Matheus Rodrigues Araujo" }],
  title: "Matheus Rodrigues Araujo | Front-end Developer & JavaScript Expert",
  description:
    "Welcome to my portfolio! I'm Matheus Rodrigues Araujo, a skilled front-end developer proficient in JavaScript, TypeScript, React, Next.js, and more. Explore my projects.",
  keywords:
    "Front-End Developer, JavaScript, React, TypeScript, Next.js, Tailwind, SQL, NoSQL, MongoDB, MySQL, Node.js, Express.js, Bootstrap, Jest, Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta charset="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <link rel="icon" href="/logo.svg" />
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
      </head>
      <body className={inter.className}>
        <Header />
        <main className="gap-10 md:gap-60 lg:pt-0 grid grid-flow-row md:auto-rows-[1fr_1fr_1fr_1fr] ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

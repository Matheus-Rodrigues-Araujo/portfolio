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
  ogImage: "favicon.ico",
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
        <meta property="og:image" content={metadata.ogImage} />
        <link rel="icon" href="/favicon.ico" />
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
        <div
          className="gap-40 md:gap-60 lg:pt-0 grid grid-flow-row md:auto-rows-[auto_1fr_1fr_1fr_1fr_auto]"
          id="main"
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

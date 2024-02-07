import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

import "../../styles/header.css";
import "../../styles/footer.css";

import "../../styles/introduction.css";
import "../../styles/about.css";
import "../../styles/projects.css";
import "../../styles/contact.css";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus R. Araujo",
  description: "Frontend Developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="bg-light-dark ">
        <Navbar />

        <div className="grid-flow-row auto-rows-[100svh]" id="main">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}

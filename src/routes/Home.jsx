import "../index.css";
import "./../styles/App.scss";
import { useState, useEffect } from "react";
import draw from "../assets/images/draw.jpg";
import cartoon from "../assets/images/cartoon.jpg";
import logo from "../assets/images/logo_official.png";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import { Main } from "../sections/Main";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define o breakpoint para "md" como 768 pixels
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <main className="mt-64">
      <Main />

      <About />

      <Projects />

      <Contact />
      <Footer />
    </main>
  );
};

export default Home;

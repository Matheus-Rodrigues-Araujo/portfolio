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
    <div className="main gridContainer">
      <div className="section">
        <div className="greetings">
          <h1 className="name">Matheus Rodrigues Araujo</h1>
          <h2 className="">Front-End Developer<span>|</span></h2>
          <p className="phrase">
            I have a profound passion for meticulously crafting visually
            stunning and highly functional websites that leave a lasting
            impression. My dedication to bringing ideas to life through design
            and coding is what drives my constant pursuit of excellence in
            frontend development. Let's work together to transform concepts into
            incredible digital experiences.
          </p>

          <div className="contact-buttons">
            <button className="">Hire me</button>
            <button className="">Let's talk</button>
          </div>
        </div>

        <div >
          <div className="social-links flex gap-5">
            <a
              href="https://www.linkedin.com/in/matheus-rodrigues-araujo/"
              target="_blank"
            >
              <AiFillMail className="icon" height={20} width={20} />
            </a>
            
            <a
              href="https://github.com/Matheus-Rodrigues-Araujo"
              target="_blank"
            >
              <AiFillMail className="icon" height={20} width={20} />
            </a>

            <a href="https://github.com/Matheus-Rodrigues-Araujo" >
              <AiFillMail className="icon" height={20} width={20} />
            </a>
          </div>
        </div>

      </div>

      <div className="section">DIV 2</div>
      <div className="section">DIV 3</div>
      <div className="section">DIV 4</div>
      <div className="section">DIV 5</div>
      <div className="section">DIV 6</div>

      <div className="scroll-helper">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="scroll-mouse">
        <div></div>
      </div>

    </div>
  );
};

export default Home;

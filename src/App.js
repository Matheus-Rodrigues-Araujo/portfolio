import './styles/App.scss';
import './styles/Navbar.scss';
import './styles/Projects.scss';
import './styles/Techs.scss';
import './index.css'
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar  />
      {/* <Outlet/> */}
      <div class="main gridContainer">
      <div class="section">
        <div class="greetings">
          <h1 class="name">Matheus Rodrigues Araujo</h1>
          <h2 class="">Front-End Developer<span>|</span></h2>
          <p class="phrase">
            I have a profound passion for meticulously crafting visually
            stunning and highly functional websites that leave a lasting
            impression. My dedication to bringing ideas to life through design
            and coding is what drives my constant pursuit of excellence in
            frontend development. Let's work together to transform concepts into
            incredible digital experiences.
          </p>

          <div class="contact-buttons">
            <button class="">Hire me</button>
            <button class="">Let's talk</button>
          </div>
        </div>

        <div class="grid items-center">
          <div class="social-links flex gap-5">
            <a
              href="https://www.linkedin.com/in/matheus-rodrigues-araujo/"
              target="_blank"
            >
              <img class="icon" src="/linkedin.png" alt="Linkedin" />
            </a>
            <a
              href="https://github.com/Matheus-Rodrigues-Araujo"
              target="_blank"
            >
              <img class="icon" src="/github.png" alt="Github" />
            </a>
            <a href="#contact">
              <img class="icon" src="/gmail.png" alt="Email" />
            </a>
          </div>
        </div>

      </div>

      <div class="section">DIV 2</div>
      <div class="section">DIV 3</div>
      <div class="section">DIV 4</div>
      <div class="section">DIV 5</div>
      <div class="section">DIV 6</div>

      <div class="scroll-helper">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="scroll-mouse">
        <div></div>
      </div>

    </div>
      {/* <Footer/> */}

    </>

  );
}

export default App;



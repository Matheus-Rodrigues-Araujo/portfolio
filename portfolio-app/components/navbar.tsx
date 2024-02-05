export default function Navbar(){
    return (
        <nav className="navbar">
        <a href="#main" className="brand">
          Matheus R. Araujo.
        </a>
        <ul>
          <a className="active item" href="#main">
            Home
          </a>
          <a className="item" href="#about">
            About
          </a>
          <a className="item" href="#projects">
            Projects
          </a>
          <a className="item" href="#contact">
            Contact
          </a>
          {/* <a
            className="item"
            target="_blank"
            href="https://www.linkedin.com/in/matheus-rodrigues-araujo"
          >
            Linkedin
          </a>
          <a
            className="item"
            target="_blank"
            href="https://github.com/Matheus-Rodrigues-Araujo/"
          >
            Github
          </a> */}
        </ul>
      </nav>
    )
}
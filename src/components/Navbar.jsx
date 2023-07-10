import { Link } from 'react-router-dom'
import logo from '../assets/images/logo_official.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark fixed-top " aria-label="First navbar example" 
        style={{backgroundColor: "black", opacity: .9}}     
        >
            <div className="container-fluid mx-5">
                <Link className="navbar-brand" to="/">
                 <img src={logo} alt="Logo" srcset="" className="brand" />
                </Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                
                <div className="navbar-collapse collapse " id="navbarsExample01">
                <ul className="navbar-nav me-auto mb-2">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About me</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/graduation">Graduation</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/career">Career</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                
                </div>
            </div>
            </nav>
    )
}

export default Navbar
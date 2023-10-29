import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo_official.png'
import { AiFillHome, AiFillBook, AiFillPhone, AiFillMail } from 'react-icons/ai'
import { BsBriefcaseFill } from 'react-icons/bs'

const Navbar = () => {
    return (
        <nav className="navbar bg-white fixed-top sm:flex-row items-center h-auto w-screen p-3  md:h-screen w-72 pt-36"
        >
            <Link to={'/'} className='active'>
                <img src={logo} className='logo' alt=""  />
            </Link>
            <div className='
            nav-links flex justify-between items-center mt-0 gap-32
            
            md:grid gap-64 justify-center text-center mt-60 uppercase'
             >
                <a href="#main" title='Home' >
                    <AiFillHome/>
                </a> 
                <a href="#about" title="About">
                    <AiFillBook/>
                </a>
                <a href="#projects" title="Projects" >
                    <BsBriefcaseFill/>
                </a>
                <a href="#contact" title="Contact" >
                    <AiFillMail/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
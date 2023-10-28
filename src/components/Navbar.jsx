import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo_official.png'
import { AiFillHome, AiFillBook, AiFillPhone, AiFillMail } from 'react-icons/ai'
import { BsBriefcaseFill } from 'react-icons/bs'

const Navbar = () => {
    return (
        <nav className="navbar fixed-top md: h-screen flex flex-column w-72 pt-36 items-center justify-start" 
        >
            <Link to={'/'} className='active'>
                <img src={logo} className='logo'  alt="" />
            </Link>
            <div className='nav-links grid gap-64 justify-center text-center mt-60 uppercase' >
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
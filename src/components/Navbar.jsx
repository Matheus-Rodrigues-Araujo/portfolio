import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo_official.png'
import { AiFillHome, AiFillBook, AiFillPhone, AiFillMail } from 'react-icons/ai'
import { BsBriefcaseFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Define o breakpoint para "md" como 768 pixels
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav 
        className={
            `navbar bg-white ${isMobile ?
                 'flex h-auto fixed-top flex-row items-center px-[40px]' :
                 'flex fixed-top flex-column w-[80px] gap-32 py-20 justify-start h-screen'}`}
        >
            <Link to={'/'} className='active'> <img src={logo} className='logo' alt="logo"/></Link>
            
            <div className={`nav-links ${isMobile ? 'flex justify-between items-center mt-0 gap-[20px]':'grid gap-32 justify-center'}`}>
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
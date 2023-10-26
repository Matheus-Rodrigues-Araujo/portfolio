import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo_official.png'
import { AiFillHome, AiFillBook, AiFillPhone } from 'react-icons/ai'
import { BsBriefcaseFill } from 'react-icons/bs'

const Navbar = () => {
    return (
        <nav className="navbar fixed-top h-screen flex flex-column w-72 pt-36 items-center justify-start" 
        >
            <Link to={'/'} className='active'>
                <img src={logo} height={50} width={50}  alt="" />
            </Link>
            <div className='nav-links grid gap-64 justify-center text-center mt-60 uppercase' >
                <Link to="/" title='H
                ome' >
                    <AiFillHome/>
                </Link> 
                <Link to="/" title="About">
                    <AiFillBook/>
                </Link>
                <Link to="/" title="Projects" >
                    <BsBriefcaseFill/>
                </Link>
                <Link to="/" title="Contact" >
                    <AiFillPhone/>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
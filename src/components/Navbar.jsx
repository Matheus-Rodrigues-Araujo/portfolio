import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo_official.png'
import { AiFillHome, AiFillBook, AiFillPhone } from 'react-icons/ai'
import { BsBriefcaseFill } from 'react-icons/bs'

const Navbar = () => {
    return (
        <nav className="navbar fixed-top grid-cols-2 h-screen flex flex-column w-72 items-center justify-start" style={{backgroundColor: '#FB3137'}} >
            <Link to={'/'} className='active mt-10'>
                <img src={logo} height={50} width={50}  alt="" />
            </Link>
            <div className='nav-links grid gap-32 justify-center text-center mt-60 uppercase' >
                <Link to="/" >
                    <AiFillHome/>
                </Link> 
                <Link to="/" >
                    <AiFillBook/>
                </Link>
                <Link to="/">
                    <BsBriefcaseFill/>
                </Link>
                <Link to="/">
                    <AiFillPhone/>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo_official.png'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center navbar fixed-top w-100 px-64  ">
            <Link to={'/'} className='active'>
                <img src={logo} height={50} width={50}  alt="" />
            </Link>
            <div className='flex gap-32 justify-center uppercase' >
                <Link to="/" >Home</Link> 
                <Link to="/" >About</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
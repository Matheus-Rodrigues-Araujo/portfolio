import { Link } from 'react-router-dom'
import logo from '../assets/images/logo_official.png'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
export default function Footer(){
    return (
        <footer className='relative grid gap-10 p-20 w-100'>
            <div className='container-1 p-4 flex justify-start items-center' >
              <div className='flex items-center justify-between w-100' >
                <div className='md:w-50' >
                  <Link to="/">
                    <img src={logo} alt="Logo" className='logo' />
                  </Link>
                </div>
                <a href="#projects"  className='underline text-[2.5rem] md:text-[3rem]' >My Projects</a>
              </div>
            </div>

            <div className='container-2 flex justify-between items-center' >
              <p className='text-[2.5rem] md:text-[3rem]' >© Matheus.dev 2023</p>
              <div className='flex gap-5' >
              <a href="https://www.linkedin.com/in/matheus-rodrigues-araujo/" target='_blank'  >
                <AiFillLinkedin/>
              </a>

              <a href="https://www.linkedin.com/in/matheus-rodrigues-araujo/" target='_blank'  >
                <AiFillGithub/>
              </a>

              <a href="https://www.linkedin.com/in/matheus-rodrigues-araujo/" target='_blank'  >
                <AiFillMail/>
              </a>
              </div>
            </div>
        
        </footer>
    )
}
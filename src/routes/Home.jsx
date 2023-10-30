import '../index.css'
import './../styles/App.scss'
import { useState, useEffect } from 'react'
import draw from '../assets/images/draw.jpg'
import cartoon from '../assets/images/cartoon.jpg'
import logo from '../assets/images/logo_official.png'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'

const Home = () =>{
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
      <main className={`${isMobile ? 'sm:top-0 mt-[35px] ml-[0px]' :'pt-[0px] mt-0 ml-40'}`} >

        <section id='main' className={`main-section ${isMobile ? 'top-0 pt-40 h-auto': 'grid gap-5 pt-0'}`} >
          {/* BRAND + NAME */}
          <div className='flex items-center p-20 md:px-64' >
            <img className='logo-name' src={logo} alt="logo"   />
            <p className='text-white font-bold sm:p-0 text-[9rem] md:text-[11rem]'>atheus.<span style={{color:'#FB3137'}} >dev</span></p>
          </div>

          {/* Greetings */}
          <div className={`${
            isMobile ? 
            'px-20 grid grid-cols-1 grid-rows-2 gap-0 mt-14': 
            'relative px-64 gap-32 flex flex-column py-20 justify-start h-100'
            }`} >
              <div className={`${!isMobile && 'flex flex-column gap-12'}`} >
                <h1 className={`${ 
                  isMobile ? 
                  'text-[6rem] font-bold text-left w-100': 
                  'text-[10rem] font-bold text-left mt-10'
                  }`} style={{color: '#FB3137'}} >Front-end Developer.</h1>
                <p className={`${ 
                  isMobile ? 
                  'text-white font-[700] text-left text-[3rem]' : 
                  'text-white font-[700]  text-left text-[4rem] w-50 py-5'}`} >
                    I'm deeply passionate about meticulously crafting visually stunning and highly functional websites that leave a lasting impression.
                </p>
              </div>

              
              
              <div className={`comments ${isMobile ? 'flex gap-5 bottom-20 self-center ': 'mt-12'}`} >
                <p className='text-[2.5rem] font-light md:text-[3.5rem] w-50' >"Solid problem-solving and code debugging skills to create effective and efficient solutions."</p>
              </div>

              {/* Links */}
              <div className={`${
                isMobile ? 
                'links flex justify-start gap-5 py-5 w-100 ml-0' :
                'links flex self-end my-10 gap-5'}`}
              >
                <a href="https://www.linkedin.com/in/matheus-rodrigues-araujo/" target='_blank'  >
                  <AiFillLinkedin className='w-[50px] h-[45px]' />
                </a>
                <a href="https://github.com/Matheus-Rodrigues-Araujo" target='_blank' >
                  <AiFillGithub className='w-[50px] h-[45px]' />
                </a>
                <a href="#">
                  <AiFillMail className='w-[50px] h-[45px]  ' />
                </a>
              </div>
          </div>
        </section>

        <About/>

        <Projects/>
        
        <Contact/>
        <Footer/>
      </main>
    )
}

export default Home

import '../index.css'
import './../styles/App.scss'
import { useState, useEffect } from 'react'
import draw from '../assets/images/draw.jpg'
import cartoon from '../assets/images/cartoon.jpg'
import logo from '../assets/images/logo_official.png'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import Footer from '../components/Footer'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'

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
      <main className='sm:top-0 h-screen mt-[35px]  ml-[0px] md:pt-[0px] mt-0 ml-40' >

        <section id='main' className={`main-section ${isMobile ? 'top-0 pt-40': 'h-screen pt-0'}`} >
          {/* BRAND + NAME */}
          <div className='flex items-center px-20 md:px-64' >
            <img className='logo-name' src={logo} alt="logo"   />
            <p className='text-white font-bold sm:p-0 text-[9rem] md:text-[11rem]'>atheus.<span style={{color:'#FB3137'}} >dev</span></p>
          </div>

          {/* Greetings */}
          <div className={`${
            isMobile ? 
            'px-20 grid grid-cols-1 grid-rows-2 gap-0 mt-14': 
            'px-64 grid grid-cols-2 grid-rows-2 gap-0'
            }`} >
              <div>
                <h1 className={`${ 
                  isMobile ? 
                  'text-[6rem] font-bold text-left w-100': 
                  'text-[8rem] font-bold text-left '
                  }`} style={{color: '#FB3137'}} >Front-end Developer.</h1>
                <p className={`${ 
                  isMobile ? 
                  'text-white font-bold font-light text-left text-[2rem]' : 
                  'text-white font-bold font-light text-left text-[3.5rem]'}`} >
                    I'm deeply passionate about meticulously crafting visually stunning and highly functional websites that leave a lasting impression.
                </p>
              </div>

              {/* Greetings image */}
              <div className={`${isMobile ? 'hidden' :'absolute right-80 top-60 rounded-full'}`} >
                <img src={draw} className="" alt="Personal drawn"/>
              </div> 
              
              <div className={`comments ${isMobile ? 'flex gap-5 bottom-20 self-center w-75': 'absolute bottom-20 left-60 w-50'}`} >
                <p className='text-[2.5rem] font-light md:text-[3.5rem]' >Solid problem-solving and code debugging skills to create effective and efficient solutions.</p>
              </div>

              {/* Links */}
              <div className={`${
                isMobile ? 
                'links flex justify-start gap-5 py-5 w-100 ml-0' :
                'absolute bottom-20 right-[80px] links flex justify-center '}`}
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
          {/* Image for mobile devices */}
          <div className='w-100 bg-red-500 p-5 w-screen md:hidden' >
          <img src={draw} className="h-[30%] w-[30%] rounded-md mx-auto bg-white p-5 rounded-[4em] md:h-[220px] w-[220px]" alt="Personal drawn"/>
          </div> 
        </section>

        {/*About section  */}
        <About/>
        
        {/* Projects section */}
        <Projects/>

        {/* Contact section */}
        <Contact/>

        <Footer/>
        
      </main>
    )
}

export default Home

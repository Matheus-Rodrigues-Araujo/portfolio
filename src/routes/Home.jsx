import '../index.css'
import './../styles/App.scss'
import draw from '../assets/images/draw.jpg'
import cartoon from '../assets/images/cartoon.jpg'
import logo from '../assets/images/logo_official.png'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Home = () =>{
    return (
      <main className='md:top-0 h-screen mt-40' >

        <section id='main' className="relative main-section h-auto pt-5  md:p-20" >
          
          <div className='flex items-center px-20 md:px-64' >
            <img className='logo-name' src={logo} alt="logo"   />
            <p className='text-white font-bold sm:p-0 text-[9rem] md:text-[11rem]'>atheus.<span style={{color:'#FB3137'}} >dev</span></p>
          </div>

          <div className='px-20 grid grid-cols-1 grid-rows-2 gap-0 mt-14 md:px-64 ' >
                <div>
                  <h1 className='text-[6rem] font-bold text-left w-100 md:text-[10rem] '  style={{color: '#FB3137'}} >Front-end Developer.</h1>
                  <p className='text-white font-bold font-light text-left text-[3rem]  md:text-[5rem] ' >I'm deeply passionate about meticulously crafting visually stunning and highly functional websites that leave a lasting impression.</p>
                </div>

                <div className='sm: hidden personal-img flex justify-center items-center rounded-full bg-white font-bold' >
                  <img src={draw} className="h-[80px] w-[80px]  md:h-[220px] w-[220px]" alt="Personal drawn"/>
                </div> 

              <div className='hidden md:personal-img flex justify-center items-center rounded-full bg-white font-bold' >
                  <img src={draw} className="h-[80px] w-[80px]  md:h-[220px] w-[220px]" alt="Personal drawn"/>
              </div>
              
              <div className='comments flex gap-5 bottom-20 self-center w-75' >
                <p className='text-[2.5rem] font-light md:text-[3.5rem]' >Solid problem-solving and code debugging skills to create effective and efficient solutions.</p>
              </div>

              <div className='links flex justify-start gap-5 py-5 w-100 ml-0   ' >
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

              {/* <div className='w-100 bg-white w-screen ' >
                  <img src={draw} className="h-auto w-[40%] rounded-md mx-auto bg-white p-5 md:h-[220px] w-[220px]" alt="Personal drawn"/>
              </div>  */}
          </div>
          <div className='w-100 bg-red-500 p-5 w-screen ' >
                  <img src={draw} className="h-auto w-[40%] rounded-md mx-auto bg-white p-5 rounded-[4em] md:h-[220px] w-[220px]" alt="Personal drawn"/>
              </div> 
        </section>

        {/*About section  */}
        <section id='about' className='relative about-section p-20' >
          <div className='grid grid-cols-1 pt-0 md:px-64 pt-14 '>
            <div>
              <h1 className='text-[6rem] font-bold text-left py-2 font-bold md:text-[8rem]'  style={{color: '#FB3137'}} >Hello,</h1>
            
              <div className='grid grid-rows-5 gap-3 md:gap-12 ' >
                
                <p className='text-[2.5rem] md:text-[3rem]' >
                i'm Matheus, a passionate front-end developer rooted in Brazil. Currently, I'm pursuing a Bachelor's degree in Information Systems, and my journey in the world of programming began with an unwavering quest to merge creativity and technology. 
                </p>
                
                <p className='text-[2.5rem] md:text-[3rem]' >
                Over the years, I've honed my skills to create engaging and functional interfaces that go beyond mere aesthetics. I believe that user experience is the essence of any successful project, which is why I'm constantly exploring new techniques and trends to deliver innovative solutions. 
                </p>
                
                <p className='text-[2.5rem] md:text-[3rem]' >
                My background in Information Systems not only provides me with a solid foundation in computer theory but also gives me a holistic view of systems, allowing me to understand not only the visual layer but also the underlying infrastructure that brings each project to life.
                </p>

                <p className='text-[2.5rem] md:text-[3rem]' >
                In addition to my dedication to code, I'm an enthusiastic collaborator and an effective communicator. I value teamwork and am always ready to contribute ideas and solutions, striving for excellence in every detail. 
                </p>

                <p className='text-[2.5rem] md:text-[3rem]'>
                  Here in Brazil, I find inspiration in our rich culture and diversity, driving me to create digital experiences that resonate with our local and global audience. Each project is an opportunity to explore new horizons and provide solutions that positively impact people's lives.
                </p>

                <p className='text-[2.5rem] md:text-[3rem]'>I'm excited to continue my journey as a front-end developer, always seeking challenges that allow me to grow and evolve. If you're looking for a dedicated professional who is passionate about creating exceptional digital experiences, I'm ready to embark on this journey with you.</p>
                <p className='text-[2.5rem] md:text-[3rem]'>Let's create something amazing together!</p>
              </div>
            </div>
            
          </div>
        </section>
        
        {/* Projects section */}
        <section id='projects' className='relative flex items-center justify-center projects-section my-20 h-[50%] p-20 md:p-20' >
          <div className='project-content flex flex-column justify-center bg-white font-bold w-100 py-32 md:px-64 w-50'>
              <div className='p-5 '>
                <h1 className='text-[5rem] font-bold text-center py-2 font-bold md:text-[8rem]'>I build awesome stuff</h1>
                <p className='text-[3rem] text-center w-75 mx-auto md:text-[4rem]'>Web apps, landing pages and fullstack apps.</p>
              </div>

              <div className='btn-container mt-10 w-50 p-5 mx-auto flex justify-center md:' >
                <button className='uppercase  text-[2rem] md:text-[3rem]' >
                  See my projects
                </button>
              </div>
            </div>
        </section>

        {/* Contact section */}
        <section id='contact' className='contact-section relative flex items-center justify-center my-20 h-[50%] p-20 md:p-20 h-screen' >
          {/* <div className='contact-form flex flex-column justify-start py-20  h-auto md:w-auto '> */}

            {/* <h1 className='text-[6rem] font-bold text-center py-2 md:text-[8rem]' >Contact me</h1> */}
            
            <form action="" className='contact-form flex w-100 flex-column mx-auto p-20'>
            <h1 className='text-[6rem] font-bold text-center py-2 md:text-[8rem]' >Contact me</h1>

              <label htmlFor="" className="text-[2.5rem] text-white md:text-[3rem] ">
                Name
              </label>
              <input type="text" placeholder='Name' className='text-[2.5rem] md:text-[3rem]' />

              <label htmlFor="" className="text-[2.5rem] text-white md:text-[3rem]">
                Email
              </label>
              <input type="Email" placeholder='Email' className='text-[2.5rem] md:text-[3rem]' />

              <label htmlFor="" className="text-[2.5rem] text-white md:text-[3rem]">
                Message
              </label>
              <textarea cols={10} rows={4} className='text-[2.5rem] md:text-[3rem]' placeholder='Write your message' ></textarea>

              <div className='btn-container mt-16 w-50 p-5 mx-auto flex justify-center' >
                <button className='uppercase text-[2rem] md:text-[3rem]' >
                  Send message
                </button>
              </div>              

            </form>  
          {/* </div> */}
        </section>

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
        
      </main>
    )
}

export default Home

import '../index.css'
import './../styles/App.scss'
import draw from '../assets/images/draw.jpg'
import cartoon from '../assets/images/cartoon.jpg'
import logo from '../assets/images/logo_official.png'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'

const Home = () =>{
    return (
      <main className='top-0 ml-[108px] h-screen ' >

        <section className="relative main-section h-100 p-20" >
          <div className='flex items-center justify-start px-64' >
            <img src={logo} width={75} height={75} alt="logo" />
            <p className='text-white font-bold p-0 text-[11rem]'>atheus.<span style={{color:'#FB3137'}} >dev</span></p>
          </div>

          <div className='grid grid-cols-2 grid-rows-2  gap-40 px-64 pt-14' >
              <div>
                <h1 className='text-[10rem] font-bold text-left'  style={{width:'50%', color: '#FB3137',
              }} >Front-end Developer.</h1>
                <p className='text-white font-bold text-[5rem] font-light text-left' >I'm deeply passionate about meticulously crafting visually stunning and highly functional websites that leave a lasting impression.</p>
              </div>

              <div className='personal-img flex justify-center items-center rounded-full bg-white font-bold' >
                  <img src={draw} className='' height={220} width={220} alt="Personal drawn"/>
              </div>
              
              
              <div className='comments  flex gap-5 bottom-20 self-center w-75' >
                <p className='text-[3.5rem] font-light text-left' >Solid problem-solving and code debugging skills to create effective and efficient solutions.</p>
              </div>

              <div className='links flex gap-5  self-start' >
                <a href="#" >
                  Linkedin
                </a>
                <a href="#">
                  Github
                </a>
                <a href="#">
                  Contact
                </a>
              </div>
        
          </div>
          

        </section>

        {/*About section  */}
        <section className='relative about-section h-100 p-20' >
          <div className='grid grid-cols-2 gap-40 px-64 pt-14 '>
            <div>
              <h1 className='text-[8rem] font-bold text-left py-2 font-bold'  style={{color: '#FB3137'}} >Hello,</h1>
            
              <div className='grid grid-rows-3 gap-12 ' >
                <p className='text-[3rem] ' >
                i'm Matheus, a passionate front-end developer rooted in Brazil. Currently, I'm pursuing a Bachelor's degree in Information Systems, and my journey in the world of programming began with an unwavering quest to merge creativity and technology. 
                </p>
                
                <p className='text-[3rem]' >
                Over the years, I've honed my skills to create engaging and functional interfaces that go beyond mere aesthetics. I believe that user experience is the essence of any successful project, which is why I'm constantly exploring new techniques and trends to deliver innovative solutions. 
                </p>
                
                <p className='text-[3rem]' >
                My background in Information Systems not only provides me with a solid foundation in computer theory but also gives me a holistic view of systems, allowing me to understand not only the visual layer but also the underlying infrastructure that brings each project to life.
                </p>

                <p className='text-[3rem]' >
                In addition to my dedication to code, I'm an enthusiastic collaborator and an effective communicator. I value teamwork and am always ready to contribute ideas and solutions, striving for excellence in every detail. 
                </p>

                <p className='text-[3rem]'>
                  Here in Brazil, I find inspiration in our rich culture and diversity, driving me to create digital experiences that resonate with our local and global audience. Each project is an opportunity to explore new horizons and provide solutions that positively impact people's lives.
                </p>

                <p className='text-[3rem]'>I'm excited to continue my journey as a front-end developer, always seeking challenges that allow me to grow and evolve. If you're looking for a dedicated professional who is passionate about creating exceptional digital experiences, I'm ready to embark on this journey with you.</p>
                <p className='text-[3rem]'>Let's create something amazing together!</p>
              </div>
            </div>
            {/* <div>
            <img src={cartoon} className='' height={220} width={220} alt="Personal drawn"/>

            </div> */}
          </div>
        </section>
        
        {/* Projects section */}
        <section className='relative flex items-center justify-center projects-section h-100 p-20' >
          <div className='flex flex-column justify-center gap-36 px-64 h-75 w-50 bg-white font-bold'>
            {/* <div className='h-100' > */}
              <div className='p-5 '>
                <h1 className='text-[8rem] font-bold text-center py-2 font-bold'>I build awesome stuff</h1>
                <p className='text-[4rem] text-center w-75 mx-auto'>Web apps, landing pages and fullstack apps.</p>
              </div>

              <div className='btn-container mt-10 w-50 p-5 mx-auto flex justify-center' >
                <button className='uppercase' >
                  See my projects
                </button>
              </div>
            </div>
        </section>

        {/* Contact section */}
        <section className='contact-section relative flex items-center justify-center  h-100 p-20' >
          <div className='contact-form flex flex-column justify-start p-32 h-auto w-50'>

            <h1 className='text-[8rem] font-bold text-center py-2' >Contact me</h1>
            
            <form action="" className='flex flex-column p-10'>
              <label htmlFor="" className="text-[3rem] text-white ">
                Name
              </label>
              <input type="text" placeholder='Name' />

              <label htmlFor="" className="text-[3rem] text-white">
                Email
              </label>
              <input type="Email" placeholder='Email' />

              <label htmlFor="" className="text-[3rem] text-white">
                Message
              </label>
              <textarea cols={10} rows={10} placeholder='Write your message' ></textarea>

              <div className='btn-container mt-16 w-50 p-5 mx-auto flex justify-center' >
                <button className='uppercase' >
                  Send message
                </button>
              </div>              

            </form>  
          </div>
        </section>
        
      </main>
    )
}

export default Home
//style="background-color: rgb(17, 9, 39);background-image: linear-gradient(45deg, black, transparent);" 
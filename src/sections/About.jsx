import { useState, useEffect } from "react";

export default function About(){

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
    return(
        <section id='about' className='relative about-section p-20 py-20 h-auto' >
          <div className={`${isMobile ? 'grid grid-cols-1 pt-0' : 'h-100 px-64 pt-14'}`}>
            <div >
              <h1 className='text-[6rem] font-bold text-left py-2 font-bold md:text-[8rem]'  style={{color: '#FB3137'}} >Hello,</h1>
            
              <div className='grid grid-rows-5 gap-16 ' >
                
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
    )
}
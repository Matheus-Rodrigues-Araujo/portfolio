import {useState, useEffect} from 'react'

export default function Projects(){
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
        <section id='projects' className={`projects-section my-20 p-20 ${
          isMobile ? 
          'relative flex items-center justify-center' :
          'h-screen flex items-center justify-center'}`
          }>
          
          <div className={`project-content bg-white ${
            isMobile ? 
            'project-content flex flex-column justify-center font-bold  p-32':
             'w-50 h-50 flex flex-column justify-center items-center'}`}>
              <div className='py-20 '>
                <h1 className='text-[5rem] font-bold text-center py-2 font-bold md:text-[8rem]'>I build awesome stuff</h1>
                <p className='text-[3rem] text-center w-75 mx-auto md:text-[4rem]'>Web apps, landing pages and fullstack apps.</p>
              </div>

              <div className='btn-container mt-20 w-50 p-5 mx-auto flex justify-center md:' >
                <button className='uppercase  text-[2rem] md:text-[3rem]' >
                  See my projects
                </button>
              </div>
            </div>
        </section>
    )
}
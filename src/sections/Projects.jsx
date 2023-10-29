export default function Projects(){
    return(
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
    )
}
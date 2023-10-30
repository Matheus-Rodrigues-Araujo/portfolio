import { useState, useEffect } from "react";

export default function Contact(){
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
        <section id='contact' className={`contact-section relative flex ${isMobile ? 'items-center justify-center py-20 p-20' : 'h-screen p-20  items-center'}`} >
        {/* <div className='contact-form flex flex-column justify-start py-20  h-auto md:w-auto '> */}

          {/* <h1 className='text-[6rem] font-bold text-center py-2 md:text-[8rem]' >Contact me</h1> */}
          
          <form className={`${isMobile ? 'contact-form flex w-100 flex-column mx-auto p-20' : 'contact-form flex w-50 h-50 flex-column mx-auto p-20'}`}>
            <h1 className='text-[6rem] font-bold text-center py-2 md:text-[8rem] ' >Contact me</h1>

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
    )
}
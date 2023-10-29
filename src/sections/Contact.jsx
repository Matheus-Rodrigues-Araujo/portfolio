export default function Contact(){
    return (
        <section id='contact' className='contact-section relative flex items-center justify-center my-20  p-20 md:p-20 ' >
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
    )
}
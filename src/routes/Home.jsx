import '../index.css'
import './../styles/App.scss'
import draw from '../assets/images/draw.jpg'
import logo from '../assets/images/logo_official.png'

const Home = () =>{
    return (
      <main className='top-0 ml-[108px] h-screen ' >

        <section className="h-100 p-20" style={{backgroundColor: '#110927'}}  >
          <div className='flex items-center justify-start px-64' >
            <img src={logo} width={75} height={75} alt="logo" />
            <p className='text-white p-0 text-[11rem]'>atheus.<span style={{color:'#FB3137'}} >dev</span></p>
          </div>

          <div className='grid grid-cols-2 grid-rows-2  gap-40 px-64 pt-14' >
              <div>
                <h1 className='text-[10rem] font-bold text-left'  style={{width:'50%', color: '#FB3137'}} >Front-end Developer.</h1>
                <p className='text-white text-[5rem] font-light text-left' >I'm deeply passionate about meticulously crafting visually stunning and highly functional websites that leave a lasting impression.</p>
              </div>

              <div className='personal-img flex justify-center items-center rounded-full bg-white' >
                  <img src={draw} className='' height={220} width={220} alt="Personal drawn"/>
              </div>
              
              
              <div className='comments  flex gap-5 bottom-20 self-center w-75' >
                <p className='text-[3.5rem] font-light text-left' >Solid problem-solving and code debugging skills to create effective and efficient solutions.</p>
              </div>

              <div className='comments flex gap-5 bottom-20  self-center' >
                <p className='text-[3.5rem] font-light text-left' >I like to design and build beautiful websites</p>
              </div>
        
          </div>

        </section>

        <section className='bg-yellow-500 h-screen' >
          <div></div>
        </section>
        
      </main>
    )
}

export default Home
import '../index.css'
import './../styles/App.scss'
import draw from '../assets/images/draw.jpg'

const Home = () =>{
    return (
      <main className='' >

        <section className="h-screen" >
          <div className='grid grid-cols-2 h-100 ' >
            <div className='relative flex items-start justify-start flex-column justify-start px-72' style={{backgroundColor: '#110927', width: '50vw'}} >
              <h1 className='text-[10rem] font-bold mt-80 pt-40 text-left'  style={{width:'50%', color: '#FB3137'}} >Front-end Developer.</h1>
              <p className='text-white text-[4rem] font-light text-left' >"I'm deeply passionate about meticulously crafting visually stunning and highly functional websites that leave a lasting impression."</p>
            
              <div className='comments absolute flex gap-5 bottom-20 left-0 px-64' >
                <p className='text-[3.5rem] font-light text-left' >I like to design and build beautiful websites</p>
                <p className='text-[3.5rem] font-light text-left' >I like to design and build beautiful websites</p>
              </div>
            </div>

            <div className='flex justify-end pt-20 px-64' style={{backgroundColor: '#FB3137', width: '50vw'}}>
              <div className=' personal-img flex justify-center items-center mt-80  rounded-full bg-white' >
                <img src={draw} className='' height={250} width={250} alt="Personal drawn"/>
            </div>
            </div>
          </div>

        </section>
        <section className="grid grid-cols-2 bg-white h-screen" > 
                <div className=''></div>
                <div className=''></div>
        </section>
      </main>
    )
}

export default Home
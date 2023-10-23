import '../index.css'
import draw from '../assets/images/draw.jpg'

const Home = () =>{
    return (
      <main className='' >

        <section className="relative flex justify-center items-start  bg-red-500 h-screen " >
          <div className='z-0 absolute grid grid-cols-2 h-100' >
            <div className='' style={{backgroundColor: '#110927', width: '50vw'}} >
              <h1 style={{color: '#FB3137'}} >Front-end Developer.</h1>
            </div>
            <div style={{backgroundColor: '#FB3137', width: '50vw'}} ></div>
          </div>

          <div className='absolute personal-img flex justify-center items-center mt-60  rounded-full bg-white' >
              <img src={draw} className='' height={200} width={200} alt="Personal drawn"/>
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
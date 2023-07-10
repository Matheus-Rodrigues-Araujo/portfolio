import { Link } from "react-router-dom"

const Home = () =>{
    return (
        // <div className="container">
            <div className="main container"> 
                <h1  >Hey, I'm <span  >Matheus</span></h1>
                <h2 >A front-end developer that designs and build beautiful websites.</h2>

                <div className="d-flex justify-content-center m-4 gap-5 position-relative" >
                    <Link to="/aboutme" className="explore-link position-absolute " >See more about me</Link>
                </div>
            </div>
        

        //  </div>
    )
}

export default Home
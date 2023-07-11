import { Link } from "react-router-dom"

const Home = () =>{
    return (
            <div className="main container"> 
                <div className="d-grid p-5" >
                    <h1  >Hey, I'm <span  >Matheus</span></h1>
                    <h2 >A front-end developer that designs and build beautiful websites.</h2>

                    <div className="d-flex justify-content-center m-4 gap-5 position-relative" >
                        <Link to="/about" className="explore-link" >See more about me</Link>
                    </div>
                </div>
            </div>
    )
}

export default Home
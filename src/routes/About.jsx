import { Link } from "react-router-dom"
const About = () =>{
    return (

        <div className="main about container" >
            <div className="d-grid p-5" >  
                <h1>About me</h1>
                <p>My name is Matheus, I'm a front-end developer based in Crato, CE, Brazil. I've built several apps with my skills, which you can see on the <Link to={'/projects'} style={{color: "var(--green)"}} >projects</Link> page. I love creating challenging and interesting projects that have attractive and intuitive interfaces.</p>
            </div>
        </div>
    )   
}

export default About

{/* <div className="main container"> 
                <h1  >Hey, I'm <span  >Matheus</span></h1>
                <h2 >A front-end developer that designs and build beautiful websites.</h2>

                <div className="d-flex justify-content-center m-4 gap-5 position-relative" >
                    <Link to="/aboutme" className="explore-link" >See more about me</Link>
                </div>
            </div> */}
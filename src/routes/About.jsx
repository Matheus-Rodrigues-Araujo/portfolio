import { Link } from "react-router-dom"

const About = () =>{
    return (

        <div className="main about container" >
            <div className="d-grid p-5" >  
                <h1>About me</h1>
                <p>My name is Matheus, I'm a front-end developer based in Crato, CE, Brazil. I've built several apps with my skills, which you can see on the <Link to={'/projects'} style={{color: "var(--blue)"}} >projects</Link> page. I love creating challenging and interesting projects that have attractive and intuitive interfaces.</p>
            </div>
        </div>
    )   
}

export default About
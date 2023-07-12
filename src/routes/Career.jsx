const Career = () =>{
    return (

      
        <div className="main career container">
          <div className="d-grid p-5">
            <h1 >My <span style={{color:"var(--green)"}} >Career</span></h1>
            <p >I've been working as a front-end programmer, using React and Angular, for 6 months. In it, I create new features, fix bugs and improve the ergonomics and usability of the system with UX and UI knowledge.</p>
            <p className="text-center" ><span style={{color: "var(--green)"}} >01/01/2023</span> - <span style={{color: "var(--green)"}} >Now</span></p>
            
            <div className="d-flex justify-content-start align-items-center  border-top rounded-0 py-2" >
              <a target="_blank" href="https://www.linkedin.com/in/matheus-rodrigues-araujo"  className="explore-link m-0 p-0 mb-3 me-2 mb-md-0  text-decoration-none">Check out my Linkedin</a>
            </div>
            
        </div>
      </div>
    )
}

export default Career
import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-3.png'


const Projects = () =>{
    return (
        // <div class="album py-5 ">
    <div class="main project container">

      <div class="project-content row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center gap-5">
       

        <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="card shadow-sm">
            <img src={project2} class="bd-placeholder-img card-img-top object-fit-cover img-responsive" width="50%" height="225" style={{backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}/>
            <div class="card-body">
              <div class="d-grid">
                <div class="btn-group d-grid border-top">
                    <small class="text-body-secondary fs-1 text-center">Soccer Platform</small>
                    <div className='project-links d-flex mx-auto' >
                        <button type="button" class="btn btn-sm   website">
                            <a className='text-decoration-none' target='_blank' href='https://soccer-website.vercel.app/' >Website</a>
                        </button>
                        <button type="button" class="btn btn-sm   github">
                            <a className='text-decoration-none' target='_blank' href='https://github.com/Matheus-Rodrigues-Araujo/soccer-website' >Github</a>
                        </button>
                        <button type="button" class="btn btn-sm   techs">
                            <a className='text-decoration-none' target='_blank' href='#' >Techs</a>
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="card shadow-sm">
          <img src={project3} class="bd-placeholder-img card-img-top object-fit-cover img-responsive"  width="50%" height="225" />
            
          <div class="card-body">
              <div class="d-grid">
                <div class="btn-group d-grid border-top">
                    <small class="text-body-secondary fs-1 text-center">Gym Landing page</small>
                    <div className='project-links d-flex mx-auto' >
                        <button type="button" class="btn btn-sm   website ">
                            <a className='text-decoration-none' target='_blank' href='https://training-gym-ldjt.vercel.app/' >Website</a>
                        </button>
                        <button type="button" class="btn btn-sm   github">
                            <a className='text-decoration-none' target='_blank' href='https://github.com/Matheus-Rodrigues-Araujo/Training-Gym' >Github</a>
                        </button>
                        <button type="button" class="btn btn-sm   techs">
                            <a className='text-decoration-none' target='_blank' href='#' >Techs</a>
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  </div>
    )
}

export default Projects
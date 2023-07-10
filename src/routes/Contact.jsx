import { Link } from "react-router-dom"

const Contact = () =>{
    return (
        <div className="container p-5" style={{minHeight: '80vh', marginTop: '100px'}} >
        <section className="section-preview bg-white p-3 mx-5-md rounded-4 w-100">
          <section className="mb-4 text-dark mx-5-md">
              <h2 className="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
              
              <div className="row mx-4 m-4">
                  
                  <div className="col-md-12 mb-md-0 mb-5">
                      <form id="contact-form" name="contact-form" action="mail.php" method="POST">
    
                          
                          <div className="row justify-content-center">
    
                              
                              <div className="col-md-4">
                                  <div className="md-form mb-0">
                                      <input type="text" id="name" name="name" placeholder="Name" className="form-control m-2" />
                                  </div>
                              </div>
                              
    
                              
                              <div className="col-md-4">
                                  <div className="md-form mb-0">
                                      <input type="text" id="email" placeholder="Email" name="email" className="form-control m-2" />
                                  </div>
                              </div>
                              
    
                          </div>
                          
    
                          
                          <div className="row justify-content-center">
                              <div className="col-md-8">
                                  <div className="md-form mb-0">
                                      <input type="text" id="subject" placeholder="Subject" name="subject"  className="form-control m-2" />
                                  </div>
                              </div>
                          </div>
                          
    
                          
                          <div className="row justify-content-center">
    
                              
                              <div className="col-md-8">
    
                                  <div className="md-form">
                                      <textarea type="text" id="message" name="message" placeholder="Your message" rows="5" className="form-control md-textarea m-2"></textarea>
                                  </div>
    
                              </div>
                          </div>
                          
    
                      </form>
    
                      <div className="text-center text-md-left">
                          <Link className="btn fs-5" to="/" style={{backgroundColor: 'var(--green)', color: 'white'}}>Send</Link>
                      </div>
                      <div id="status"></div>
                  </div>
                  
              </div>
    
          </section>
    
        </section>
      </div>
    )
}

export default Contact
const Contact = () =>{
    return (
        <div class="container p-5" style="min-height: 80vh; margin-top: 100px;" >
        <section class="section-preview bg-white p-3 mx-5-md rounded-4 w-100">
          <section class="mb-4 text-dark mx-5-md">
              <h2 class="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
              
              <div class="row mx-4 m-4">
                  
                  <div class="col-md-12 mb-md-0 mb-5">
                      <form id="contact-form" name="contact-form" action="mail.php" method="POST">
    
                          
                          <div class="row justify-content-center">
    
                              
                              <div class="col-md-4">
                                  <div class="md-form mb-0">
                                      <input type="text" id="name" name="name" placeholder="Name" class="form-control m-2" />
                                  </div>
                              </div>
                              
    
                              
                              <div class="col-md-4">
                                  <div class="md-form mb-0">
                                      <input type="text" id="email" placeholder="Email" name="email" class="form-control m-2" />
                                  </div>
                              </div>
                              
    
                          </div>
                          
    
                          
                          <div class="row justify-content-center">
                              <div class="col-md-8">
                                  <div class="md-form mb-0">
                                      <input type="text" id="subject" placeholder="Subject" name="subject"  class="form-control m-2" />
                                  </div>
                              </div>
                          </div>
                          
    
                          
                          <div class="row justify-content-center">
    
                              
                              <div class="col-md-8">
    
                                  <div class="md-form">
                                      <textarea type="text" id="message" name="message" placeholder="Your message" rows="5" class="form-control md-textarea m-2"></textarea>
                                  </div>
    
                              </div>
                          </div>
                          
    
                      </form>
    
                      <div class="text-center text-md-left">
                          <a class="btn fs-5"  style="background-color: var(--green); color: white;">Send</a>
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
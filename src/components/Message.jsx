const Message = () => {
    return (
        <div className="message-container bg-white"  >
            <div className="message-data d-flex justify-content-between">
                <p className="text-dark my-auto" >
                    @User123
                </p>               
                <div className="btn-container" >
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#message" aria-expanded="false" aria-controls="message">
                        open
                    </button>  
                        <button  className="btn btn-danger radius-0"
                        // onClick={()=> deleteMessage(index)} 
                        >Delete
                    </button>
                </div>
                
            
            </div>


            {/* Email content */}
            <div class=" collapse" id="message">
                <div class="card card-body fs-5 p-0 border">
                    <div className="message-content container align-items-center " >
                        <div className="row " >
                            <div className="col-6 user-data" >
                                <p><strong>User</strong></p>
                            </div>
                            <div className="col-6 " >
                             <p><strong>Email</strong></p>

                            </div>
                        </div>
                        <div className="row border-top" >
                            <div className="col" >
                                <p className="subject"><strong>Subject:</strong> Message subject</p>
                            </div>
                        </div>
                        <div className="row border-top" >
                            <div className="col-auto " >
                                <p className="subject"><strong>Message:</strong> Message will be here!</p>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Message
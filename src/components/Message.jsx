const Message = ({message, index, deleteItem}) => {

    return (
        <div className="message-container bg-white my-3"  >
            <div className="message-data d-flex justify-content-between">
                <p className="text-dark my-auto" >
                    @{message.name}
                </p>               
                <div className="btn-container " >
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#message${index}`} aria-expanded="false" aria-controls={`message${index}`}>
                        open
                    </button>

                    <button 
                    className="btn btn-danger mx-2"
                    onClick={deleteItem}>
                        Delete
                    </button>
                </div>
            </div>

            <div class="collapse" id={`message${index}`}>
                <div class="card card-body fs-5 p-0 border">
                    <div className="message-content container align-items-center " >
                        <div className="row " >
                            <div className="col-6 user-data" >
                                <p><strong>Name</strong>{message.name}</p>
                            </div>
                            <div className="col-6 " >
                             <p><strong>Email</strong>{message.email}</p>

                            </div>
                        </div>
                        <div className="row border-top" >
                            <div className="col" >
                                <p className="subject"><strong>Subject:</strong>{message.subject}</p>
                            </div>
                        </div>
                        <div className="row border-top" >
                            <div className="col-auto " >
                                <p className="message-text"><strong>Message:</strong>{message.message}</p>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Message
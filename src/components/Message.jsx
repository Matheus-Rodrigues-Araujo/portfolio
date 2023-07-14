import { useState } from "react"

const Message = ({message, index, deleteItem}) => {
    const [open, setOpen] = useState(true)

    return (
        <div className="message-container bg-white my-3"  >
            <div className="
                message-data d-flex  
                flex-column align-items-center 
                flex-md-row  justify-content-md-between p-md-3"
            >
                <p className="text-dark my-auto  text-md-auto border-none-md p-5" >
                    @{message.name.split(' ')[0]}
                </p>               
                <div className="btn-container my-2" >
                    <button 
                    class="btn btn-primary" type="button"
                    data-bs-toggle="collapse" data-bs-target={`#message${index}`}
                    aria-expanded="false" aria-controls={`message${index}`}
                    onClick={() => {
                        open ? setOpen(false) : setOpen(true)
                    }} >
                        {open ? 'Open' : 'Close'}
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
                            <div className="col-md-6 user-data" >
                                <p><strong>Name: </strong>{message.name}</p>
                            </div>
                            <div className="col-md-6 user-email" >
                                 <p><strong>Email: </strong>{message.email}</p>

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
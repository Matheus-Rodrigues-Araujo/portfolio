import { useState, useEffect } from "react";
import Message from "../components/Message";

const Inbox = () => {
    const [dados, setDados] = useState([])
    const mensagens = JSON.parse(localStorage.getItem('mensagens'))

    const deleteMessage = (index) =>{
        mensagens.splice(index,1)
        localStorage.setItem('mensagens', JSON.stringify(mensagens))
        setDados(mensagens)
    }

    const deleteAllMessages = () =>{
        // mensagens.splice(index,1)
        localStorage.setItem('mensagens', JSON.stringify([]))
        setDados(mensagens)
    }

    useEffect(()=>{
        mensagens && setDados(mensagens);   
    }, [])

    return (
        <div className="main inbox container" style={{marginBlock: '100px'}}> 
        <div className="inbox-container d-grid p-5" >
            <h1>Inbox</h1>

            <div className="messages-list d-flex justify-content-center gap-5 position-relative" >
            <ul className="gap-1 list-inline" >
                {/* {dados && dados.map( (item, index) => (
                    <li className="p-5 my-1 bg-white list-item " key={index} >
                        <p className="text-dark" ><strong>Name:</strong> {item.name} <br/></p>
                        <p className="text-dark"><strong>Subject:</strong> {item.subject}<br/></p>
                        <p className="text-dark" ><strong>Message:</strong> {item.message}<br/></p>
                        <button onClick={()=> deleteMessage(index)} >Delete</button>
                    </li>
                ))} */}
            
                <Message/>
              

                <button className="btn btn-danger fs-3" onClick={() => deleteAllMessages()} >Delete all messages</button>
            </ul>
            </div>
        </div>
    </div>
    )
}

export default Inbox
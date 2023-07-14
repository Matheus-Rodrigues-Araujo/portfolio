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
        setDados([])
    }

   

    useEffect(()=>{
        mensagens && setDados(mensagens);   
    }, [])

    return (
        <div className="main inbox container" style={{marginBlock: '100px'}}> 
        <div className="inbox-container d-grid p-5" >
            <h1>Inbox</h1>

            <div className="d-flex justify-content-center gap-5 position-relative" >
                <ul className="messages-list gap-1 list-inline" >
                    {dados && dados.map( (item, index) => (
                        
                        <Message message={item} index={index} deleteItem={()=> deleteMessage(index)} />
                    ))}

                    {dados.length >=1 ? 
                        <button className="btn btn-danger fs-3" onClick={deleteAllMessages} >Delete all messages</button>
                    :
                        <p>Inbox is empty</p>
                    }
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Inbox
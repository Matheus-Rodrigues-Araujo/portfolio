import { useState, useEffect } from "react";



const Inbox = () => {
    const [dados, setDados] = useState([])

    const checkMessages = () =>{
        const mensagens = localStorage.getItem('mensagens');
        if (mensagens) {
        setDados(JSON.parse(mensagens));
        }
    }

    useEffect(()=>{
        checkMessages()
    }, [])

    return (
        <div className="main inbox container" > 
        <div className="inbox-container d-grid p-5" >
            <h1>Inbox</h1>

            <div className="messages-list d-flex justify-content-center gap-5 position-relative" >
            <ul className="d-grid gap-3">
            {dados.map((item, index) => (
            <li className="text-dark bg-white" p-5 key={index}>
                <strong>Nome:</strong> {item.name}, <strong>Assunto:</strong> {item.subject}, <strong>Email:</strong> {item.message}
                <button >Delete</button>
            </li>
            ))}
      </ul>
            </div>
        </div>
    </div>
    )
}

export default Inbox
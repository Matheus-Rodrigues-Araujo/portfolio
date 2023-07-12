import { useRef, useState } from "react";

const Contact = () =>{

    const [dados, setDados] = useState([]);
    const [username, setUsername] = useState('');
    const [userEmail, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const ref = useRef()

    const resetFields = (ev) =>{
        ev.preventDefault();
        setUsername('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Captura os valores do formulário
        const name = event.target.name.value;
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;
        
        const novoDado = { name, email, subject, message };
        
        const dadosSalvos = localStorage.getItem('mensagens');
        
        if (dadosSalvos) {
        const dadosExistente = JSON.parse(dadosSalvos);
        const dadosAtualizados = [...dadosExistente, novoDado];
        localStorage.setItem('mensagens', JSON.stringify(dadosAtualizados));
        setDados(dadosAtualizados);
        } else {
        const dadosIniciais = [novoDado];
        localStorage.setItem('mensagens', JSON.stringify(dadosIniciais));
        setDados(dadosIniciais);
        }
        alert('Mensagem enviada!')
        event.target.reset();
    };

    return (
        <section className="main contact section-preview p-3 mx-5-md rounded-4 w-50 mx-auto">

            <section className="d-grid text-white mx-5-md">
                <h1 className="h1-responsive font-weight-bold text-center my-4">Contact me</h1>
                <div className="row mx-4 m-4">
                    <div className="col-md-12 mb-md-0 mb-5">
                        <form id={"form"} ref={ref} onSubmit={handleSubmit} onReset={resetFields} >
                            <div className="row justify-content-center">
                                <div className="col-md-4">
                                    <div className="md-form mb-0">
                                        <input value={username} onChange={e=> setUsername(e.target.value)} type="text"  name="name" placeholder="Name" className="form-control m-2" required/>
                                    </div>
                                </div>
    
                                <div className="col-md-4">
                                    <div className="md-form mb-0">
                                        <input value={userEmail} onChange={e=> setEmail(e.target.value) } type="email" required placeholder="Email" name="email" className="form-control m-2"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="md-form mb-0">
                                        <input value={subject} onChange={e=> setSubject(e.target.value) } type="text" required placeholder="Subject" name="subject"  className="form-control m-2"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="md-form">
                                        <textarea type="text" value={message} onChange={e => setMessage(e.target.value)} required name="message" placeholder="Your message" rows="5" className="form-control md-textarea m-2"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center gap-3">
                                 <button className="explore-link text-center my-3" >Send</button>
                                 <div className="explore-link reset text-center my-3" onClick={resetFields}>Reset</div>
                            </div>
                            
    
                        </form>
    
                        <div id="status"></div>
                    </div>
                    
                </div>
    
            </section>
    
        </section>
    // </div>
    )
}

export default Contact
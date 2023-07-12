import { useState } from "react";
import { Link } from "react-router-dom"

const Contact = () =>{

    const [dados, setDados] = useState([]);
  
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
                        <form onSubmit={handleSubmit} >
                            <div className="row justify-content-center">
                                <div className="col-md-4">
                                    <div className="md-form mb-0">
                                        <input type="text"  name="name" placeholder="Name" className="form-control m-2" required/>
                                    </div>
                                </div>
    
                                <div className="col-md-4">
                                    <div className="md-form mb-0">
                                        <input type="email" required placeholder="Email" name="email" className="form-control m-2"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="md-form mb-0">
                                        <input type="text" required placeholder="Subject" name="subject"  className="form-control m-2"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="md-form">
                                        <textarea type="text" required name="message" placeholder="Your message" rows="5" className="form-control md-textarea m-2"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                 <button className="explore-link text-center text-md-left my-2" >Send</button>
                            </div>
                            
    
                        </form>
    
                        {/* <div className="explore-link submit-btn text-center text-md-left my-2">
                            <a>Send</a>
                            
                        </div> */}
                        
                        <div id="status"></div>
                    </div>
                    
                </div>
    
            </section>
    
        </section>
    // </div>
    )
}

export default Contact
import "../Modal/modal.css";

export function Modal( {onClose= () => {}} ){

    return(
        <section className="modal">
            <div className="form">
                <label className="lb">Nome</ label>
                <input type="text" id="name" name="name" required></input>
                <label className="lb">Telefone(DDD)</ label>
                <input type="tel" id="tel" name="telefone" required></input>
                <label className="lb">E-mail</ label>
                <input type="email" id="email" name="email" required></input>
            
                <p className="checkbox-text"><input type="checkbox" className="checkbox" required></input>Aceito receber noticias e conteúdos do site LGBT+.org por e-mail</p>
                <p className="checkbox-text"><input type="checkbox" className="checkbox" required></input>Aceito receber mensagens e notificações do site LGBT+.org em meu telefone celular</p>
                <div className="btn-zone">
                    <button className="btn-send">Cadastrar</button>
                    <button onClick={onClose}>Fechar</button>
                </div>
            
            </div>
        </section>

        
        
    )
}
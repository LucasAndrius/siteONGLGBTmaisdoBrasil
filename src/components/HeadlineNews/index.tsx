import { Link } from "react-router-dom";
import { Container } from "./styles";

export function HeadlineNews() {
  return (
  <Container>
      <Link to="noticia/id" className="headline-notice">
        <img 
          src="https://image.freepik.com/fotos-gratis/mulher-fazendo-uma-videochamada-em-um-laptop_53876-95835.jpg" 
          alt="Grupo de pessoas em reunião"
        />
        <h1>A Revolução 4.0 e seus Impactos
           na Indústria de Softwares</h1>
      </Link>
      <div className="headline-others">
        <Link to="noticia/id" className="headline-card">
          <img 
            src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80" 
            alt=""
          />
          <p>
            Senado prevê um gasto de 34,2 bi de com novo auxílio neste semestre
          </p>
        </Link>
        <Link to="noticia/id" className="headline-card">
          <img 
            src="https://images.unsplash.com/photo-1561057160-ce83b1bd72f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
            alt=""
          />
          <p>
            Seminário discute o efeito da pandemia em pessoas LGBTQI+
          </p>
        </Link>
        <Link to="noticia/id" className="headline-card">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=633&q=80" 
            alt=""
          />
          <p>
            Restrições e cuidados para quem vai viajar durante a pandemia
          </p>
        </Link>
      </div>
  </Container>
  );
}
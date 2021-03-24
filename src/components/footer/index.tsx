import { Footer,LinkReset,Nav } from "./styles";

import React from "react";



import linkedin from '../../assets/linkedin-logo.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';
import spotify from '../../assets/spotify.svg';




export function FooterArea() {
  return (
  <Footer>
    <footer>
        <span>Nossas Redes Sociais:</span>
        <div>
            <LinkReset 
                href="https://www.linkedin.com/company/onglgbtmais/" 
                target="_blank">
                    <img src={linkedin} alt="linkedin"/>
            </LinkReset>
            <LinkReset 
                href="https://www.facebook.com/onglgbtmais" 
                target="_blank">
                    <img src={facebook} alt="facebook"/>
            </LinkReset>
            <LinkReset 
                href="https://www.instagram.com/onglgbtmais/" 
                target="_blank">
                    <img src={instagram} alt="instagram"/>
            </LinkReset>
            <LinkReset 
                href="https://www.youtube.com/channel/UC6bd87f83-pg_yTR3krbCPg" 
                target="_blank">
                    <img src={youtube} alt="youtube"/>
            </LinkReset>
            <LinkReset 
                target="_blank">
                    <img className="disabled"  src={spotify} alt="spotify"/>
                    <br/>
                    <span className="message" >em breve nosso Spotify</span>
            </LinkReset>
        </div>
    </footer>
    <Nav>
            <nav>
                <ul>
                    <li>
                        <a href="/sobre"  className="link">Sobre nós</a>
                    </li>
                    <li>
                        <a href="/doar" className="link">Doar</a>
                    </li>
                    <li>
                        <a href="/voluntarie"  className="link">Seja um voluntárie</a>
                    </li>
                    <li>
                        <a  href="/contato"  className="link">Fale Conosco</a>
                    </li>
                    <li>
                        <a href="/aniversario"  className="link">Aniversáro Solidário</a>
                    </li>
                    <li>
                        <a href="/cadastro" className="link">Cadastra-se</a>
                    </li>
                </ul>
            </nav>
       
    </Nav>
    
  </Footer>
  );
}

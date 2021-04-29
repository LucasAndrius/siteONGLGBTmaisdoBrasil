import linkedin from "../../assets/linkedin-logo.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import spotify from "../../assets/spotify.svg";

import { Footer, LinkReset, Nav } from "./styles";

interface FooterProps {
  pageName: string;
}

export function FooterArea(props: FooterProps) {
  return (
    <Footer className={props.pageName}>
      <footer>
        <span>Nossas Redes Sociais:</span>
        <div>
          <LinkReset
            href="https://www.linkedin.com/company/onglgbtmais/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" />
          </LinkReset>
          <LinkReset
            href="https://www.facebook.com/onglgbtmais"
            target="_blank"
          >
            <img src={facebook} alt="facebook" />
          </LinkReset>
          <LinkReset
            href="https://www.instagram.com/onglgbtmais/"
            target="_blank"
          >
            <img src={instagram} alt="instagram" />
          </LinkReset>
          <LinkReset
            href="https://www.youtube.com/channel/UC6bd87f83-pg_yTR3krbCPg"
            target="_blank"
          >
            <img src={youtube} alt="youtube" />
          </LinkReset>
          <LinkReset target="_blank">
            <button disabled>
              <img src={spotify} alt="spotify" />
            </button>
            <br />
            <span className="message">Em breve nosso Spotify</span>
          </LinkReset>
        </div>
        <Nav>
          <nav>
            <ul>
              <li>
                <a className="red" href="/sobre">
                  Sobre nós
                </a>
              </li>
              <li>
                <a className="orange" href="/doar">
                  Doar
                </a>
              </li>
              <li>
                <a className="yellow" href="/voluntarie">
                  Seja um voluntárie
                </a>
              </li>
              <li>
                <a className="green" href="/contato">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a className="blue" href="/aniversario">
                  Aniversário Solidário
                </a>
              </li>
              <li>
                <a className="purple" href="/cadastro">
                  Cadastra-se
                </a>
              </li>
            </ul>
          </nav>
        </Nav>
      </footer>
    </Footer>
  );
}

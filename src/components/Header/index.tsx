import { useEffect } from "react";

import logoMain from "../../assets/icone-preto.svg";
import logoAgenda from "../../assets/icone-agenda.png";
import logoMarketplace from "../../assets/icone-marketplace.png";
import logoPodcast from "../../assets/icone-podcast.png";
import logoRadio from "../../assets/icone-radio.png";
import logoTv from "../../assets/icone-tv.png";

import { Container, Content, Menu } from "./styles";

interface HeaderProps {
  pageName: string;
}

export function Header(props: HeaderProps) {
  useEffect(() => {
    const link = document.getElementById(`${props.pageName}`);
    link?.classList.add(`${props.pageName}`);
  }, [props.pageName]);

  return (
    <Container>
      <Content>
        <img
          src={
            props.pageName === "noticias"
              ? logoMain
              : props.pageName === "agenda"
              ? logoAgenda
              : props.pageName === "marketplace"
              ? logoMarketplace
              : props.pageName === "podcast"
              ? logoPodcast
              : props.pageName === "radio"
              ? logoRadio
              : logoTv
          }
          alt="Ong LGBT+"
        />

        <a className="title" href="/">
          ONG LGBT+
        </a>

        <Menu>
          <ul>
            <li>
              <a id="noticias" href="/">
                Notícias
              </a>
            </li>
            <li>
              <a id="agenda" href="/agenda">
                Agenda
              </a>
            </li>
            <li>
              <a id="tv" href="/tv">
                TV
              </a>
            </li>
            <li>
              <a id="podcast" href="/podcast">
                Podcast
              </a>
            </li>
            <li>
              <a id="radio" href="/radio">
                Rádio
              </a>
            </li>
            <li>
              <a id="marketplace" href="/marketplace">
                Marketplace
              </a>
            </li>
          </ul>
        </Menu>
      </Content>
    </Container>
  );
}

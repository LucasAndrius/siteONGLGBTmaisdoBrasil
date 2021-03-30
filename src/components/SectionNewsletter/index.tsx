import radio from "../../assets/logo-radio.svg";
import podcast from "../../assets/logo-podcast.svg";
import tv from "../../assets/logo-tv.svg";
import mktplace from "../../assets/logo-marketplace.svg";

import { Container, Label, Link, Logos } from "./styles";

export function SectionNewsletter() {
  return (
    <Container>
      <Logos>
        <a href="/radio" target="_blank">
          <img src={radio} alt="LGBT Rádio" />
        </a>
        <a href="/podcast" target="_blank">
          <img src={podcast} alt="LGBT Podcast" />
        </a>
        <a href="/tv" target="_blank">
          <img src={tv} alt="LGBT Tv" />
        </a>
        <a href="/marketplace" target="_blank">
          <img src={mktplace} alt="LGBT MktPlace" />
        </a>
      </Logos>
      <Label>Deseja recebar mais notícias sobre a comunidade LGBT+ ?</Label>
      <Link>Assine a nossa newsletter</Link>
    </Container>
  );
}

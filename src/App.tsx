import { BrowserRouter as Switch, Route } from "react-router-dom";
import {FooterArea } from "./components/footer";

import { Agenda } from "./pages/Agenda";

import { Aniversario } from "./pages/Aniversario";
import { Cadastro } from "./pages/Cadastro";
import { Contato } from "./pages/Contato";
import { Doar } from "./pages/Doar";
import { Home } from "./pages/Home";
import { Marketplace } from "./pages/Marketplace";
import { Noticias } from "./pages/Noticias";
import { Podcast } from "./pages/Podcast";
import { Radio } from "./pages/Radio";
import { Sobre } from "./pages/Sobre";
import { Tv } from "./pages/Tv";
import { Voluntarie } from "./pages/Voluntarie";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Noticias} exact />
        <Route path="/agenda" component={Agenda} />
        <Route path="/tv" component={Tv} />
        <Route path="/podcast" component={Podcast} />
        <Route path="/radio" component={Radio} />
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/doar" component={Doar} />
        <Route path="/voluntarie" component={Voluntarie} />
        <Route path="/contato" component={Contato} />
        <Route path="/aniversario" component={Aniversario} />
        <Route path="/cadastro" component={Cadastro} />
      </Switch>
      <GlobalStyle />
      <FooterArea/>
    </>
  );
}

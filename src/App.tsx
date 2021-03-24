import { BrowserRouter as Switch, Route } from "react-router-dom";

import { Agenda } from "./pages/Agenda";
import { Home } from "./pages/Home";
import { Marketplace } from "./pages/Marketplace";
import { Podcast } from "./pages/Podcast";
import { Radio } from "./pages/Radio";
import { Tv } from "./pages/Tv";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/agenda" component={Agenda} />
        <Route path="/tv" component={Tv} />
        <Route path="/podcast" component={Podcast} />
        <Route path="/radio" component={Radio} />
        <Route path="/marketplace" component={Marketplace} />
      </Switch>
      <GlobalStyle />
    </>
  );
}

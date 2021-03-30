import { Container } from "./styles";

import adsense from "../../assets/adsense-banner.jpg";

export function AdsenseBanner() {
  return(
    <Container>
      <img src={adsense} alt=""/>
    </Container>
  );
}
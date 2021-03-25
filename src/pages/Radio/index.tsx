import { BannerNewsletter } from "../../components/BannerNewsletter";
import { FooterArea } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Pages } from "../../components/Pages";

import { Container } from "./styles";

export function Radio() {
  return (
    <Container>
      <Header pageName="radio" />
      <BannerNewsletter pageName="radio" />
      <Pages pageName="radio"/>
      <FooterArea pageName="radio" />
    </Container>
  );
}

import { Header } from "../../components/Header";
import { BannerNewsletter } from "../../components/BannerNewsletter";
import { FooterArea } from "../../components/Footer";

import { Container } from "./styles";
import { Pages } from "../../components/Pages";

export function Marketplace() {
  return (
    <Container>
      <Header pageName="marketplace" />
      <BannerNewsletter pageName="marketplace" />
      <Pages pageName="marketplace"/>
      <FooterArea pageName="marketplace" />
    </Container>
  );
}

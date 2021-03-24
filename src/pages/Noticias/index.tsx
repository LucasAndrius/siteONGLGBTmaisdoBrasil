import { Header } from "../../components/Header";
import { BannerNewsletter } from "../../components/BannerNewsletter";
import { FooterArea } from "../../components/Footer";

import { Container } from "./styles";

export function Noticias() {
  return (
    <Container>
      <Header pageName="noticias" />
      <BannerNewsletter pageName="noticias" />
      <FooterArea />
    </Container>
  );
}

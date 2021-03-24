import { Header } from "../../components/Header";
import { BannerNewsletter } from "../../components/BannerNewsletter";
import { FooterArea } from "../../components/Footer";

import { Container } from "./styles";


export function Agenda() {
  return (
    <Container>
      <Header pageName="agenda" />
      <BannerNewsletter pageName="agenda" />
      <FooterArea pageName="agenda" />
    </Container>
  );
}

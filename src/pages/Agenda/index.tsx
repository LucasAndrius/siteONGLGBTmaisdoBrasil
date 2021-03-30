import { Header } from "../../components/Header";
import { BannerNewsletter } from "../../components/BannerNewsletter";


import { Container } from "./styles";
import { FooterArea } from "../../components/Footer";


export function Agenda() {
  return (
    <Container>
      <Header pageName="agenda" />
      <BannerNewsletter pageName="agenda" />
      <FooterArea pageName="agenda" />
    </Container>
  );
}

import { Header } from "../../components/Header";
import { BannerNewsletter } from "../../components/BannerNewsletter";

import { Container } from "./styles";

import constructionImg from "../../assets/construcao.png";
import { FooterArea } from "../../components/Footer";

export function Agenda() {
  return (
    <Container>
      <Header pageName="agenda" />
      <BannerNewsletter pageName="agenda" />
      <img
        src={constructionImg}
        alt="Página em construção"
        className="construction"
      />
      <h2>Página em Construção</h2>
      <FooterArea pageName="agenda" />
    </Container>
  );
}

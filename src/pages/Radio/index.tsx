import { BannerNewsletter } from "../../components/BannerNewsletter";
import { Header } from "../../components/Header";
import constructionImg from "../../assets/construcao.png";
import { Container } from "./styles";
import { FooterArea } from "../../components/Footer";

export function Radio() {
  return (
    <Container>
      <Header pageName="radio" />
      <BannerNewsletter pageName="radio" />
      <img
        src={constructionImg}
        alt="Página em construção"
        className="construction"
      />
      <h2>Página em Construção</h2>
      <FooterArea pageName="radio" />
    </Container>
  );
}

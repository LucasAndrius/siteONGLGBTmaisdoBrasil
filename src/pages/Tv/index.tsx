import { BannerNewsletter } from "../../components/BannerNewsletter";
import { Header } from "../../components/Header";
import constructionImg from "../../assets/construcao.png";
import { Container } from "./styles";
import { FooterArea } from "../../components/Footer";

export function Tv() {
  return (
    <Container>
      <Header pageName="tv" />
      <BannerNewsletter pageName="tv" />
      <img
        src={constructionImg}
        alt="Página em construção"
        className="construction"
      />
      <h2>Página em Construção</h2>
      <FooterArea pageName="tv" />
    </Container>
  );
}

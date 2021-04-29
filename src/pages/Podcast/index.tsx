import { BannerNewsletter } from "../../components/BannerNewsletter";
import { Header } from "../../components/Header";
import constructionImg from "../../assets/construcao.png";
import { Container } from "./styles";
import { FooterArea } from "../../components/Footer";

export function Podcast() {
  return (
    <Container>
      <Header pageName="podcast" />
      <BannerNewsletter pageName="podcast" />
      <img
        src={constructionImg}
        alt="Página em construção"
        className="construction"
      />
      <h2>Página em Construção</h2>
      <FooterArea pageName="podcast" />
    </Container>
  );
}

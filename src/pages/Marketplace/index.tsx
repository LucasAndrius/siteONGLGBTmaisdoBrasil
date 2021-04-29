import { Header } from "../../components/Header";
import { BannerNewsletter } from "../../components/BannerNewsletter";
import constructionImg from "../../assets/construcao.png";
import { Container } from "./styles";
import { FooterArea } from "../../components/Footer";

export function Marketplace() {
  return (
    <Container>
      <Header pageName="marketplace" />
      <BannerNewsletter pageName="marketplace" />
      <img
        src={constructionImg}
        alt="Página em construção"
        className="construction"
      />
      <h2>Página em Construção</h2>
      <FooterArea pageName="marketplace" />
    </Container>
  );
}

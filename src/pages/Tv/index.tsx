import { BannerNewsletter } from "../../components/BannerNewsletter";
import { FooterArea } from "../../components/Footer";
import { Header } from "../../components/Header";

import { Container } from "./styles";

export function Tv() {
  return (
    <Container>
      <Header pageName="tv" />
      <BannerNewsletter pageName="tv" />
      <FooterArea />
    </Container>
  );
}

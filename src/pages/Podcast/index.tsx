import { BannerNewsletter } from "../../components/BannerNewsletter";
import { Header } from "../../components/Header";

import { Container } from "./styles";

export function Podcast() {
  return (
    <Container>
      <Header pageName="podcast" />
      <BannerNewsletter pageName="podcast" />
    </Container>
  );
}

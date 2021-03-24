import { BannerNewsletter } from "../../components/BannerNewsletter";
import { Header } from "../../components/Header";

import { Container } from "./styles";

export function Tv() {
  return (
    <Container>
      <Header pageName="tv" />
      <BannerNewsletter pageName="tv" />
    </Container>
  );
}

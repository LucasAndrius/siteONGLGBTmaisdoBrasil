import { Header } from "../../components/Header";
import { BannerNewsletter } from "../../components/BannerNewsletter";


import { Container } from "./styles";

export function Marketplace() {
  return (
    <Container>
      <Header pageName="marketplace" />
      <BannerNewsletter pageName="marketplace" />
    </Container>
  );
}

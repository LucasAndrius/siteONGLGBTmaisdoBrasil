import { Header } from "../../components/Header";
import { BannerNewsletter } from "../../components/BannerNewsletter";
import { HeadlineNews } from "../../components/HeadlineNews";
import { AdsenseBanner } from "../../components/AdsenseBanner";
import { CarouselNews } from "../../components/CarouselNews";
import { NewsBox } from "../../components/NewsBox";
import { SectionNewsletter } from "../../components/SectionNewsletter";
import { FooterArea } from "../../components/Footer";

import { Container } from "./styles";

export function Noticias() {
  return (
    <Container>
      <Header pageName="noticias" />
      <BannerNewsletter pageName="noticias" />
      <HeadlineNews />
      <AdsenseBanner />
      <CarouselNews />
      <NewsBox pageName="noticias" />
      <SectionNewsletter />
      <FooterArea pageName="noticias" />
    </Container>
  );
}

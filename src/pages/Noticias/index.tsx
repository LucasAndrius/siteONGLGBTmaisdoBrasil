import { Header } from "../../components/Header";
import { BannerNewsletter } from "../../components/BannerNewsletter";
import { FooterArea } from "../../components/Footer";

import { Container } from "./styles";
import { HeadlineNews } from "../../components/HeadlineNews";
import { AdsenseBanner } from "../../components/AdsenseBanner";
import { CarouselNews } from "../../components/CarouselNews";
import { NewsBox } from "../../components/NewsBox";
import { SectionNewsletter } from "../../components/SectionNewsletter";

export function Noticias() {
  return (
    <Container>
      <Header pageName="noticias" />
      <BannerNewsletter pageName="noticias" />
      <HeadlineNews />
      <AdsenseBanner />
      <CarouselNews />
      <NewsBox />
      <SectionNewsletter />
      <FooterArea pageName="noticias" />
    </Container>
  );
}

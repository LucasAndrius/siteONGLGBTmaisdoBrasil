import { Container } from "./styles";

interface BannerProps {
  pageName: string;
}

export function BannerNewsletter(props: BannerProps) {
  return (
    <Container className={props.pageName}>
      <a href="/">Assine a newsletter da Ong LGBT+ do Brasil</a>
    </Container>
  );
}

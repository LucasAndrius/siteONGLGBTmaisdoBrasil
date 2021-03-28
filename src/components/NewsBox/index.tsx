import { Container } from "./styles";

interface NewsBoxProps {
  pageName: string;
}

export function NewsBox(props: NewsBoxProps) {
  return (
    <Container className={props.pageName}>
      <article>
        <a href="/noticias/noticia-1">
          <img
            src="https://image.freepik.com/fotos-gratis/pagamentos-moveis-pagamentos-de-varredura-movel-pagamentos-face-a-face_1359-1151.jpg"
            alt="maquininha-caixa"
          />
        </a>
        <header>
          <a href="/noticias/noticia-1">Economia</a>
          <p>
            Pink money: população LGBTQI+ é responsável por movimentar cerca de
            420 bilhões de reais na economia.
          </p>
        </header>
      </article>
      <article>
        <a href="/noticias/noticia-2">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
            alt="img"
          />
        </a>
        <header>
          <a href="/noticias/noticia-2">Diversão</a>
          <p>
            Estréia esta semana no Netflix o seriado “Quem pode com ela” que
            conta as aventuras de Clara, uma arquiteta trans em NY.
          </p>
        </header>
      </article>
      <article>
        <a href="/noticias/noticia-3">
          <img
            src="https://image.freepik.com/fotos-gratis/menina-da-asia-jovem-usando-mascara-medica-com-vestido-com-roupas-casuais-e-olhando-para-a-camera-isolada-sobre-fundo-azul-auto-isolamento-distanciamento-social-quarentena-para-prevencao-do-virus-corona_7861-2698.jpg"
            alt="img"
          />
        </a>
        <header>
          <a href="/noticias/noticia-3">Crise de Saúde</a>
          <p>
            Casos de Covid- 19 crescem em vários municípos de SP, e Dória amplia
            restrições da quarentena para diversas cidades.
          </p>
        </header>
      </article>

      <article>
        <a href="/noticias/noticia-4">
          <img
            src="https://image.freepik.com/fotos-gratis/homem-barbudo-bonito-estilo-hipster-vestindo-camisa-jeans-e-bone-segurando-smartphone-com-bicicleta-no-nascer-do-sol-da-manha-a-beira-mar-bebendo-cafe-viajante-saudavel-estilo-de-vida-ativo_285396-5419.jpg"
            alt="img"
          />
        </a>
        <header>
          <a href="/noticias/noticia-4">Gasolina</a>
          <p>
            Aumento do preço da gasolina em mais de 4,6% incentiva o uso de
            transportes alternativos pela cidade.
          </p>
        </header>
      </article>
    </Container>
  );
}

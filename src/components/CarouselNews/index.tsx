import imgMoca from "../../assets/fake-news/moca-feliz.png";
import imgMuseu from "../../assets/fake-news/museu.png";
import imgTempo from "../../assets/fake-news/tempopng.png";
import imgOnibus from "../../assets/fake-news/onibus.png";

import { Component } from "react";

import Slider from "react-slick";
import Arrow from "../../assets/arrow-right.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container, Carousel, Controller } from "./styles";

interface CarouselProps {
  className: string;
  centerMode: boolean;
  useCSS: boolean;
  centerPadding: string;
  arrows: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  swipeToSlide: boolean;
  speed: number;
  responsive: [
    {
      breakpoint: number;
      settings: {
        arrows: boolean;
        centerMode: boolean;
        centerPadding: string;
        slidesToShow: number;
      };
    }
  ];
}

export class CarouselNews extends Component {
  slider: any;
  constructor(props: CarouselProps) {
    super(props);
    this.next = this.next.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      useCSS: true,
      centerPadding: "3.75rem",
      infinite: true,
      slidesToShow: 3.4,
      slidesToScroll: 8,
      swipeToSlide: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerPadding: "40px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Container>
        <Controller>
          <h2>Destaques da Semana</h2>
          <button
            type="button"
            onClick={() => {
              this.slider.slickNext();
            }}
          >
            <img src={Arrow} alt="Carousel controler" />
          </button>
        </Controller>
        <Carousel>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <a href="/">
              <figure key={1}>
                <img
                  src={imgMoca}
                  alt="Mulher negra de cabelos presos sorridente fazendo sinal 
                de positivo com o polegar após passar nos exames retrato 
                de mulher negra feliz em tshirt cinza se divertindo no 
                escritorio enquanto seus colegas estão trabalhando no projeto"
                />
                <figcaption>Crédito Facilitado pelo Governo Federal</figcaption>
              </figure>
            </a>
            <a href="/">
              <figure key={2}>
                <img
                  src={imgMuseu}
                  alt="Imagem da fachada de um museu que possui paredes 
                amarelas um vasto gramado verde à frente com uma fonte que 
                possui uma estátua de um gavião atacando uma cobra"
                />
                <figcaption>Melhores Museus com Entrada Franca</figcaption>
              </figure>
            </a>
            <a href="/">
              <figure key={3}>
                <img src={imgTempo} alt="" />
                <figcaption>
                  Veja a Previsão do Tempo para a sua cidade
                </figcaption>
              </figure>
            </a>
            <a href="/">
              <figure key={4}>
                <img src={imgOnibus} alt="" />
                <figcaption>Passagem de Ônibus tem Reajustes</figcaption>
              </figure>
            </a>
          </Slider>
        </Carousel>
      </Container>
    );
  }
}

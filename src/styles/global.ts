import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #FFF;
    --home-dark: #E5CB00;
    --home-main: #FFE732;
    --home-light: #FFF399;
    --agenda-dark: #9E0B59;
    --agenda-main: #F01E8E;
    --agenda-light: #F67EBE;
    --tv-dark: #CC0200;
    --tv-main: #FF3331;
    --tv-light: #FF6766;
    --loja-dark: #E57700;
    --loja-main: #FF9F37;
    --loja-light: #FFC280;
    --podcast-dark: #5C3069;
    --podcast-main: #8E4AA2;
    --podcast-light: #B884C7;
    --radio-dark: #002161;
    --radio-main: #003394;
    --radio-light: #0058FF;
    --marketplace-dark: #00662A;
    --marketplace-main: #009A40;
    --marketplace-light: #00CC55;
    --gray-20: #EEEEEE;
    --gray-40: #BDBDBD;
    --gray-50: #9E9E9E;
    --gray-60: #757575;
    --gray-80: #424242;
    --sucess: #93FF6D;
    --error: #940909;
    --info: #11709E;
    --newsletter-action: #7573FF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    overflow-x: hidden;
    
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--background);
    color: var(--gray-80);
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-weight: 900;
    font-size: 3.5rem;
  }

  h2 {
    font-weight: 600;
    font-size: 3rem;
  }

  h3 {
    font-weight: 700;
    font-size: 2.5rem;
  }

  h4 {
    font-weight: 600;
    font-size: 2rem;
  }

  a {
    text-decoration: none;
    color: var(--gray-80);
  }

  button { 
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;

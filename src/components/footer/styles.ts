import styled from "styled-components";

export const Footer = styled.footer`
  height: 14.12rem;

  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;

  &.noticias {
    background-color: var(--home-light);
  }

  &.agenda {
    background-color: var(--agenda-light);
  }

  &.tv {
    background-color: var(--tv-light);
  }

  &.podcast {
    background-color: var(--podcast-light);
  }

  &.radio {
    background-color: var(--radio-light);
  }

  &.marketplace {
    background-color: var(--marketplace-light);
  }

  footer {
    height: 100%;

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    img {
      width: 5.5rem;
      height: 5.5rem;
      padding: 0 1.15rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(1.2);
      }
    }
  }
`;

export const Nav = styled.nav`
  height: 5.38rem;
  background: #fff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;

    ul {
      display: flex;

      li {
        list-style: none;
        padding: 0 2.37rem;
        transition: color 0.2s;
        a {
          &.red {
            &:hover {
              color: var(--tv-main);
            }
          }
          &.orange {
            &:hover {
              color: var(--loja-main);
            }
          }
          &.yellow {
            &:hover {
              color: var(--home-main);
            }
          }
          &.green {
            &:hover {
              color: var(--marketplace-main);
            }
          }
          &.blue {
            &:hover {
              color: var(--radio-main);
            }
          }
          &.purple {
            &:hover {
              color: var(--podcast-main);
            }
          }
        }
      }
    }
  }
`;

export const LinkReset = styled.a`
  text-decoration: none;

  button {
    background: none;
    border: none;
  }

  .message {
    font-size: 1.2rem;
    color: #7573ff;
    font-weight: 600;
  }
`;

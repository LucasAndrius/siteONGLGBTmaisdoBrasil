import styled from "styled-components";

export const Container = styled.header`
  z-index: 100;
  height: 5.94rem;
`;

export const Content = styled.div`
  display: flex;
  max-width: 1226px;
  height: 100%;
  margin: 0 auto;
  align-items: center;

  img {
    width: 6.25rem;
  }

  a.title {
    max-width: 7.94rem;
    font-size: 1.25rem;
    line-height: 24px;
    font-weight: 800;
  }

  @media (max-width: 1024px) {
    a.title {
      width: 9rem;
      font-size: 1.1rem;
    }
  }
`;

export const Menu = styled.nav`
  width: 48rem;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      list-style: none;
      a {
        font-weight: 600;
        font-size: 1.25rem;

        &.noticias {
          color: var(--home-main);
        }

        &.agenda {
          color: var(--agenda-main);
        }

        &.tv {
          color: var(--tv-main);
        }

        &.podcast {
          color: var(--podcast-main);
        }

        &.radio {
          color: var(--radio-main);
        }

        &.marketplace {
          color: var(--marketplace-main);
        }
      }
    }
  }
`;

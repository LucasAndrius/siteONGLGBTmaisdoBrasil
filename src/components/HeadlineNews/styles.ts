import styled from "styled-components";

export const Container = styled.main`
  padding-top: 4rem;
  padding-bottom: 8rem;

  max-width: 1140px;
  margin: auto;

  .headline-notice {
    display: flex;
    justify-content: center;

    img {
      width: 41.34rem;
      height: 23.12rem;
      border-radius: 0.625rem;
      border: 2px solid var(--home-main);
      margin-right: 0.625rem;

      &:hover {
        filter: brightness(0.8);
      }
    }
    h1 {
      height: 23.12rem;
      width: 33.68rem;

      font-size: 3.5rem;
      font-weight: 900;
      line-height: 4.25rem;
      color: var(--gray-60);

      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 0.625rem;

      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  .headline-others {
    display: flex;

    padding-top: 1.25rem;

    .headline-card {
      width: 33.33%;
      height: 14.93rem;

      margin: 0 1rem;

      img {
        height: 100%;
        border-radius: 0.625rem;
        border: 2px solid var(--home-main);

        &:hover {
          filter: brightness(0.8);
        }
      }

      p {
        font-weight: 600;
        font-size: 1.5rem;
        color: #727272;
        transition: filter 0.2s;
        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
